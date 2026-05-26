// @ts-nocheck

import http from "node:http";
import net from "node:net";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Client as PgClient } from "pg";
import { Client as SshClient } from "ssh2";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const clientBundlePath = path.join(__dirname, "app.js");
const preferredPort = Number(process.env.PORT || 5177);
const pgSessionCache = new Map();
const connectionTimeoutMs = 30000;
const defaultSqlGenerationSystemPrompt = `You are a precise SQL assistant for a local PostgreSQL database client.

Your task is to convert the user's input into the best executable PostgreSQL SQL statement or statement set using the provided schema context.

Return only executable SQL.
Do not include markdown fences, explanations, comments, labels, separators, or extra text.

Core output rules:
- Return one executable SQL statement for single-action requests.
- Return multiple SQL statements when the user asks for every table, all matching columns, multiple tables, a whole database migration, schema-wide changes, or any operation that naturally requires more than one statement.
- Do not collapse a multi-table/schema-wide request into a single example statement.
- Do not return multiple alternative candidates unless the user explicitly asks for alternatives or the intent is ambiguous.
- Never output non-SQL separators such as ---SQL_OPTION---.
- Do not explain your choice.
- Do not ask clarification questions. Choose the best valid interpretation from the schema context.
- Use PostgreSQL-compatible SQL.
- Quote identifiers only when required.

Schema rules:
- The provided schema context is the only source of truth.
- Use only tables, columns, enum values, custom types, indexes, constraints, functions, and relationships present in the schema context.
- Never invent tables, columns, enum values, custom types, or relationships.
- Always validate table names, column names, custom type names, enum values, joins, aliases, and functions against the schema context before returning SQL.
- If the user provides a slightly wrong, misspelled, singular/plural, partially typed, or unqualified identifier, repair it to the closest exact identifier from the schema context.
- If the schema context includes schemas such as public, prefer fully qualified names such as public.table_name and public.type_name.
- Do not assume common columns like id, name, created_at, updated_at, status, email, user_id, or deleted_at unless they exist in the schema context.

Intent classification:
- Classify the user's input by intent, not merely by the first keyword.
- The input may be:
  1. a natural-language request,
  2. a partial SQL-like request,
  3. a broken SQL query,
  4. a valid SQL query that needs schema-aware repair,
  5. a schema/type/enum mutation request.

Intent precedence:
1. If the user clearly asks to change schema or data, generate the appropriate mutation or DDL SQL.
2. If the user starts with ALTER, CREATE, DROP, TRUNCATE, GRANT, REVOKE, COMMENT, INSERT, UPDATE, DELETE, UPSERT, or MERGE, treat it as an explicit non-read-only intent and repair it. Do not convert it into SELECT.
3. If the user asks to add, rename, remove, or change a PostgreSQL custom type or enum, use the exact type from the customTypes schema context and generate ALTER TYPE or the appropriate PostgreSQL type SQL.
4. If the user asks to inspect, show, list, count, search, filter, summarize, or find data, generate a read-only SELECT.
5. If the user input is SQL-like but invalid, preserve the intended operation while repairing syntax and schema identifiers.
6. If the user input starts with SELECT but the rest is natural language or not valid SQL, treat it as a natural-language read request, not as literal column names.

Read-only preference:
- Prefer SELECT only when the user has not expressed a data mutation or schema mutation intent.
- The SELECT preference must never override explicit ALTER, CREATE, DROP, INSERT, UPDATE, DELETE, TRUNCATE, GRANT, REVOKE, COMMENT, enum modification, or custom type modification intent.

PostgreSQL custom type and enum rules:
- Treat customTypes from the schema context as first-class schema objects.
- If the user mentions a custom type or enum type name and asks to add a value, generate ALTER TYPE ... ADD VALUE.
- If the user uses Korean phrases such as "없으면", "없다면", "없으면 추가", "값 추가", "타입에 추가", "enum에 추가", or English phrases such as "if not exists", "add value", "add enum value", treat it as an enum value addition when a matching custom type exists.
- Pattern:
  "alter <custom_type_or_enum_name> 없으면 <enum_value>"
  means:
  ALTER TYPE <schema>.<custom_type_or_enum_name> ADD VALUE IF NOT EXISTS '<enum_value>';
- Pattern:
  "<custom_type_or_enum_name>에 <enum_value> 없으면 추가"
  means:
  ALTER TYPE <schema>.<custom_type_or_enum_name> ADD VALUE IF NOT EXISTS '<enum_value>';
- Do not reinterpret enum value additions as SELECT filters on unrelated tables.
- Do not map an enum value such as 'fda_news' to unrelated columns such as action, status, type, or category unless the user clearly asks to search, list, filter, or count rows.
- If the user asks to inspect, show, or list enum values, generate a SELECT against PostgreSQL catalog tables or enum inspection SQL, not ALTER TYPE.
- If the user asks to rename an enum value, generate ALTER TYPE ... RENAME VALUE when supported by PostgreSQL.
- If the user asks to rename a custom type, generate ALTER TYPE ... RENAME TO.
- If the user asks to add a custom type that does not exist, generate CREATE TYPE only when the requested type and values are clear.

Natural-language interpretation:
- Understand Korean and English requests.
- Interpret "카운트", "수", "몇 명", "개수", "total", and "count" as COUNT queries when the user is asking for a number.
- Interpret "최근", "최신", "latest", "newest", and "recent" as ordering by the most relevant timestamp column that exists in the schema.
- Interpret "가입된 유저", "회원", "가입자", "registered user", and "verified user" by mapping them to the closest valid user-related table in the schema.
- When the user asks for a list, return rows.
- When the user asks for a number/count, return an aggregate.
- When the user asks for a summary by category/entity, use GROUP BY.
- When the user asks for trends over time, group by an appropriate date/time expression that exists in the schema.

SQL repair behavior:
- If the input is mostly valid SQL, preserve the user's intended query structure while fixing syntax and schema errors.
- If the input is a broken DDL statement, repair it as DDL, not SELECT.
- If the input is a broken DML statement, repair it as DML, not SELECT.
- If the input is a broken SELECT statement, repair it as SELECT.
- Fix invalid table names, column names, custom type names, enum values, aliases, joins, and syntax using the schema context.
- If a FROM table is missing in a partial SELECT draft, infer the most likely table from the requested fields and schema.
- If a JOIN condition is missing or wrong, infer the valid relationship from foreign keys or schema relationships.
- If the user used an incorrect singular/plural table name, repair it to the exact schema table name.
- If the SQL is already valid and schema-compatible, return it unchanged except for minimal formatting.

SELECT-like natural language rule:
- If the input starts with SELECT but the remaining text is not valid SQL and does not clearly reference existing columns, functions, or expressions, treat the remaining text as natural language.
- Do not blindly preserve words after SELECT as identifiers.
- Do not turn descriptive phrases into quoted aliases unless the user explicitly asks for that exact output label.

Alias rules:
- Do not use the user's full natural-language phrase as a quoted alias by default.
- Prefer simple aliases such as count, total_count, user_count, order_count, or a schema-appropriate English alias.
- Use aliases only when helpful for readability or required to avoid ambiguity.
- If the user explicitly requests a Korean output label, then a Korean quoted alias is allowed.
- Otherwise, avoid unnecessary quoted aliases.

Important examples:

Input:
select 가입된 유저 카운트

Intent:
The user wants a count of joined/registered/verified users. This is not a request to select a column or alias named "가입된 유저 카운트".

Correct behavior:
Generate a COUNT query over the closest valid user-related table from the schema.

Bad behavior:
SELECT COUNT(*) AS "가입된 유저 카운트"
FROM public.verified_users;

Input:
SELECT COUNT(*) AS "가입된 유저 카운트"
FROM public.verified_users;

Intent:
This is an attempted SQL query. Validate it against the schema.

Correct behavior:
If public.verified_users does not exist but public.verified_user exists, repair the table name.

Input:
alter sourcetype 없으면 fda_news

Intent:
This is a PostgreSQL custom type or enum modification request, not a log search.

Correct behavior:
If public.sourcetype exists in customTypes, output:
ALTER TYPE public.sourcetype ADD VALUE IF NOT EXISTS 'fda_news';

Bad behavior:
SELECT *
FROM public.audit_log
WHERE action = 'fda_news'
ORDER BY created_at DESC;

Input:
sourcetype에 fda_news 없으면 추가

Intent:
Add the enum value fda_news to the sourcetype custom type if it does not exist.

Correct behavior:
If public.sourcetype exists in customTypes, output:
ALTER TYPE public.sourcetype ADD VALUE IF NOT EXISTS 'fda_news';

Input:
fda_news 로그 보여줘

Intent:
This is a row search or log lookup request, not an enum modification request.

Correct behavior:
Generate a SELECT query only if the schema has a relevant table and column for logs or actions.

Input:
sourcetype 값들 보여줘

Intent:
Inspect/list enum values. This is read-only.

Correct behavior:
Generate a SELECT query that lists values of the sourcetype enum using PostgreSQL catalog tables or schema-supported enum inspection SQL.

Final reminder:
- ALTER-like input must stay ALTER-like.
- Multi-table and schema-wide requests must produce all required statements, not one sample.
- SELECT-like natural language must be interpreted by meaning, not by treating every word as a column.
- Enum/type modification must use customTypes.
- Row search must use tables and columns.
- Return one statement for single-action requests and multiple statements for explicit multi-action requests.`;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon"
};

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body)
  });
  res.end(body);
}

function sendText(res, status, body, contentType = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "Content-Type": contentType,
    "Content-Length": Buffer.byteLength(body)
  });
  res.end(body);
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 25_000_000) {
        reject(new Error("Request body is too large."));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!body.trim()) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid JSON request body."));
      }
    });
    req.on("error", reject);
  });
}

function quoteIdent(value) {
  if (typeof value !== "string" || value.length === 0 || value.includes("\0")) {
    throw new Error("Invalid database identifier.");
  }
  return `"${value.replaceAll('"', '""')}"`;
}

function quoteLiteral(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}

function qualifiedName(schema, name) {
  return `${quoteIdent(schema)}.${quoteIdent(name)}`;
}

function stableHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex").slice(0, 20);
}

function enumLabels(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

function arrayValues(value) {
  if (Array.isArray(value)) return value;
  if (typeof value !== "string") return [];
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed;
  } catch {}
  return value
    .replace(/^\{|\}$/g, "")
    .split(",")
    .map((item) => item.trim().replace(/^"|"$/g, ""))
    .filter(Boolean);
}

function normalizeDbConfig(input = {}) {
  return {
    host: input.host || "localhost",
    port: Number(input.port || 5432),
    database: input.database || "postgres",
    user: input.user || input.username || "postgres",
    password: input.password || "",
    ssl: Boolean(input.ssl),
    ssh: input.ssh || {}
  };
}

function formatErrorMessage(error, config = {}) {
  const message = error?.message || "Request failed.";
  const lower = message.toLowerCase();

  if (lower.includes("no pg_hba.conf entry") && lower.includes("no encryption")) {
    return `${message} Tip: this PostgreSQL rule is rejecting unencrypted traffic. Enable SSL for this connection and retry.`;
  }
  if (lower.includes("timeout expired") && config?.ssl) {
    return "PostgreSQL SSL connection timed out after 30 seconds. Check that this database accepts SSL from the selected route/SSH host, and compare the SSL mode used by TablePlus.";
  }
  if (lower.includes("timed out") || lower.includes("timeout")) {
    return message.includes("after") ? message : `${message} after 30 seconds.`;
  }
  return message;
}

function timeoutError(label, timeoutMs = connectionTimeoutMs) {
  const seconds = Math.max(1, Math.round(timeoutMs / 1000));
  const error = new Error(`${label} timed out after ${seconds} seconds.`);
  error.code = "QUARRY_TIMEOUT";
  return error;
}

function withTimeout(promise, timeoutMs, label, onTimeout = null) {
  let timer = null;
  return new Promise((resolve, reject) => {
    timer = setTimeout(() => {
      try {
        Promise.resolve(onTimeout?.()).catch(() => {});
      } catch {}
      reject(timeoutError(label, timeoutMs));
    }, timeoutMs);
    Promise.resolve(promise).then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      }
    );
  });
}

function expandLocalPath(value = "") {
  if (!value || typeof value !== "string") return "";
  if (value === "~") return os.homedir();
  if (value.startsWith("~/")) return path.join(os.homedir(), value.slice(2));
  return value;
}

async function connectSsh(sshConfig = {}) {
  let privateKey = sshConfig.privateKey;
  if (sshConfig.privateKeyPath) {
    privateKey = await readFile(expandLocalPath(sshConfig.privateKeyPath), "utf8");
  }

  return new Promise((resolve, reject) => {
    const ssh = new SshClient();
    const config = {
      host: sshConfig.host,
      port: Number(sshConfig.port || 22),
      username: sshConfig.username,
      readyTimeout: 15000,
      keepaliveInterval: 15000,
      keepaliveCountMax: 10
    };

    if (sshConfig.password) config.password = sshConfig.password;
    if (privateKey) config.privateKey = privateKey;
    if (sshConfig.passphrase) config.passphrase = sshConfig.passphrase;

    const timer = setTimeout(() => {
      ssh.end();
      reject(timeoutError("SSH connection", connectionTimeoutMs));
    }, connectionTimeoutMs);
    ssh.once("ready", () => {
      clearTimeout(timer);
      resolve(ssh);
    });
    ssh.once("error", (error) => {
      clearTimeout(timer);
      reject(error);
    });
    ssh.connect(config);
  });
}

function openForwardedStream(ssh, host, portNumber) {
  return new Promise((resolve, reject) => {
    ssh.forwardOut("127.0.0.1", 0, host, portNumber, (error, stream) => {
      if (error) {
        reject(error);
        return;
      }
      stream.setNoDelay ||= () => stream;
      stream.setKeepAlive ||= () => stream;
      stream.setTimeout ||= () => stream;
      stream.connect ||= () => {
        queueMicrotask(() => stream.emit("connect"));
        return stream;
      };
      stream.ref ||= () => stream;
      stream.unref ||= () => stream;
      resolve(stream);
    });
  });
}

function createSshTunnel(ssh, host, portNumber) {
  const sockets = new Set();
  const channels = new Set();
  const server = net.createServer((socket) => {
    sockets.add(socket);
    socket.once("close", () => sockets.delete(socket));

    ssh.forwardOut(
      socket.remoteAddress || "127.0.0.1",
      socket.remotePort || 0,
      host,
      portNumber,
      (error, channel) => {
        if (error) {
          socket.destroy(error);
          return;
        }

        channels.add(channel);
        channel.once("close", () => channels.delete(channel));
        channel.once("error", () => socket.destroy());
        socket.once("error", () => channel.destroy());
        socket.pipe(channel);
        channel.pipe(socket);
      }
    );
  });

  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      server.off("error", reject);
      const address = server.address();
      resolve({
        host: "127.0.0.1",
        port: address.port,
        close: async () => {
          for (const socket of sockets) socket.destroy();
          for (const channel of channels) channel.destroy();
          await new Promise((done) => server.close(() => done()));
        }
      });
    });
  });
}

async function createPgSession(rawConfig, onTerminated = null) {
  const config = normalizeDbConfig(rawConfig);
  let ssh = null;
  let tunnel = null;

  if (config.ssh?.enabled) {
    ssh = await connectSsh(config.ssh);
    tunnel = await createSshTunnel(ssh, config.host, config.port);
  }

  const clientConfig = {
    database: config.database,
    user: config.user,
    password: config.password,
    query_timeout: 120000,
    connectionTimeoutMillis: 30000,
    application_name: "local-db-studio",
    keepAlive: true,
    keepAliveInitialDelayMillis: 10000,
    ssl: config.ssl ? { rejectUnauthorized: false } : false
  };

  clientConfig.host = tunnel?.host || config.host;
  clientConfig.port = tunnel?.port || config.port;

  const client = new PgClient(clientConfig);
  const session = {
    client,
    closed: false,
    lastError: null,
    close: async () => {
      session.closed = true;
      await client.end().catch(() => {});
      if (tunnel) await tunnel.close().catch(() => {});
      if (ssh) ssh.end();
    }
  };
  const markTerminated = (error = null) => {
    const wasClosed = session.closed;
    session.closed = true;
    if (error) session.lastError = error;
    if (wasClosed && !error) return;
    onTerminated?.(error);
  };
  client.on("error", markTerminated);
  client.on("end", () => markTerminated());
  try {
    await withTimeout(
      client.connect(),
      connectionTimeoutMs,
      "PostgreSQL connection",
      () => session.close()
    );
  } catch (error) {
    await session.close().catch(() => {});
    throw error;
  }

  return session;
}

function pgSessionKey(rawConfig) {
  return stableHash(normalizeDbConfig(rawConfig));
}

async function closePgSession(entry) {
  if (!entry) return;
  clearTimeout(entry.idleTimer);
  await entry.session?.close?.().catch(() => {});
}

async function getCachedPgSession(config) {
  const key = pgSessionKey(config);
  let entry = pgSessionCache.get(key);
  if (entry?.session?.closed) {
    pgSessionCache.delete(key);
    await closePgSession(entry);
    entry = null;
  }
  if (!entry) {
    entry = { session: null, promise: null, busy: 0, idleTimer: null };
    entry.promise = createPgSession(config, () => {
      const current = pgSessionCache.get(key);
      if (current === entry) {
        pgSessionCache.delete(key);
        closePgSession(entry).catch(() => {});
      }
    });
    pgSessionCache.set(key, entry);
    try {
      entry.session = await entry.promise;
    } catch (error) {
      pgSessionCache.delete(key);
      throw error;
    }
  } else if (!entry.session) {
    entry.session = await entry.promise;
  }
  return { key, entry, session: entry.session };
}

async function closeAllPgSessions() {
  const entries = [...pgSessionCache.values()];
  pgSessionCache.clear();
  await Promise.all(entries.map(closePgSession));
}

function resultToPayload(result) {
  const fields = (result.fields || []).map((field) => ({
    name: field.name,
    dataTypeId: field.dataTypeID
  }));

  return {
    command: result.command,
    rowCount: result.rowCount,
    fields,
    rows: result.rows || []
  };
}

function resultSetToPayload(result) {
  if (Array.isArray(result)) return result.map(resultToPayload);
  return [resultToPayload(result)];
}

function primaryKeyFromConstraints(constraints = []) {
  const definition = constraints.find((row) => row.type === "p")?.definition || "";
  return [...definition.matchAll(/\(([^)]+)\)/g)]
    .at(-1)?.[1]
    ?.split(",")
    .map((value) => value.trim().replace(/^"|"$/g, "")) || [];
}

function buildTableDdlFromInfo(info, customTypes = []) {
  const lines = [];
  const typeKeys = new Set(info.columns.filter((column) => column.is_enum).map((column) => `${column.type_schema}.${column.type_name}`));
  for (const typeInfo of customTypes.filter((item) => typeKeys.has(`${item.schema}.${item.name}`))) {
    lines.push(`DROP TYPE IF EXISTS ${qualifiedName(typeInfo.schema, typeInfo.name)};`);
    lines.push(
      `CREATE TYPE ${qualifiedName(typeInfo.schema, typeInfo.name)} AS ENUM (${enumLabels(typeInfo.labels).map(quoteLiteral).join(", ")});`
    );
    lines.push("");
  }

  lines.push("-- Table Definition");
  if (info.relkind === "v" || info.relkind === "m") {
    lines.push(`-- ${info.kind} DDL is not expanded yet.`);
    lines.push(`-- Use database export for table DDL, or inspect this view in SQL.`);
    return lines.join("\n").trim();
  }

  const columnLines = info.columns.map((column) => {
    const typeSql = column.is_enum
      ? qualifiedName(column.type_schema, column.type_name)
      : column.type;
    const parts = [`  ${quoteIdent(column.name)} ${typeSql}`];
    if (column.identity === "a") parts.push("GENERATED ALWAYS AS IDENTITY");
    if (column.identity === "d") parts.push("GENERATED BY DEFAULT AS IDENTITY");
    if (column.default_value && !column.identity) parts.push(`DEFAULT ${column.default_value}`);
    if (!column.nullable) parts.push("NOT NULL");
    return parts.join(" ");
  });

  const constraintLines = info.constraints.map((constraint) => (
    `  CONSTRAINT ${quoteIdent(constraint.name)} ${constraint.definition}`
  ));

  lines.push(`CREATE TABLE ${qualifiedName(info.schema, info.table)} (`);
  lines.push([...columnLines, ...constraintLines].map((line, index, all) => (
    index === all.length - 1 ? line : `${line},`
  )).join("\n"));
  lines.push(");");

  const primaryIndexNames = new Set(
    info.constraints.filter((constraint) => constraint.type === "p").map((constraint) => constraint.name)
  );
  const indexes = info.indexes.filter((index) => !primaryIndexNames.has(index.name));
  if (indexes.length > 0) {
    lines.push("");
    lines.push("-- Indices");
    for (const index of indexes) lines.push(`${index.definition};`);
  }

  return lines.join("\n").trim();
}

async function withPg(config, task) {
  const { key, entry, session } = await getCachedPgSession(config);
  entry.busy += 1;
  try {
    return await task(session.client);
  } catch (error) {
    pgSessionCache.delete(key);
    await closePgSession(entry);
    throw error;
  } finally {
    entry.busy = Math.max(0, entry.busy - 1);
  }
}

async function testConnection(config) {
  return withPg(config, async (client) => {
    const result = await client.query(`
      select
        current_database() as database,
        current_user as "user",
        inet_server_addr()::text as host,
        inet_server_port() as port,
        version() as version
    `);
    return result.rows[0];
  });
}

async function listDatabases(config) {
  return withPg(config, async (client) => {
    const result = await client.query(`
      select
        datname as name,
        pg_database_size(datname) as size_bytes,
        pg_size_pretty(pg_database_size(datname)) as size,
        datistemplate as is_template,
        datallowconn as allow_connections
      from pg_database
      where datallowconn
      order by datistemplate, datname
    `);
    return result.rows;
  });
}

async function createDatabase(config, database) {
  const name = String(database || "").trim();
  if (!name) throw new Error("Database name is required.");
  return withPg(config, async (client) => {
    await client.query(`CREATE DATABASE ${quoteIdent(name)}`);
    return { name };
  });
}

async function loadSchema(config) {
  return withPg(config, async (client) => {
    const tableResult = await client.query(`
      select
        n.nspname as table_schema,
        c.relname as table_name,
        case c.relkind
          when 'r' then 'BASE TABLE'
          when 'p' then 'PARTITIONED TABLE'
          when 'v' then 'VIEW'
          when 'm' then 'MATERIALIZED VIEW'
          when 'f' then 'FOREIGN TABLE'
          else c.relkind::text
        end as table_type,
        c.oid::text as oid,
        c.relkind,
        case c.relkind
          when 'r' then 'table'
          when 'v' then 'view'
          when 'm' then 'materialized view'
          when 'f' then 'foreign table'
          when 'p' then 'partitioned table'
          else c.relkind::text
        end as kind,
        greatest(c.reltuples::bigint, 0) as estimated_rows,
        pg_size_pretty(pg_relation_size(c.oid)) as table_size,
        pg_size_pretty(pg_total_relation_size(c.oid)) as total_size,
        obj_description(c.oid, 'pg_class') as comment
      from pg_class c
      join pg_namespace n on n.oid = c.relnamespace
      where n.nspname not in ('pg_catalog', 'information_schema')
        and c.relkind in ('r', 'v', 'm', 'f', 'p')
      order by n.nspname, c.relkind, c.relname
    `);
    const columnResult = await client.query(`
      select
        n.nspname as table_schema,
        c.relname as table_name,
        c.oid::text as table_oid,
        a.attnum as ordinal_position,
        a.attname as column_name,
        pg_catalog.format_type(a.atttypid, a.atttypmod) as data_type,
        not a.attnotnull as nullable,
        pg_get_expr(ad.adbin, ad.adrelid) as default_value,
        col_description(a.attrelid, a.attnum) as comment,
        t.typtype = 'e' as is_enum,
        tn.nspname as type_schema,
        t.typname as type_name,
        a.attidentity as identity,
        a.attgenerated as generated
      from pg_class c
      join pg_namespace n on n.oid = c.relnamespace
      join pg_attribute a on a.attrelid = c.oid
      join pg_type t on t.oid = a.atttypid
      join pg_namespace tn on tn.oid = t.typnamespace
      left join pg_attrdef ad
        on ad.adrelid = a.attrelid
       and ad.adnum = a.attnum
      where n.nspname not in ('pg_catalog', 'information_schema')
        and c.relkind in ('r', 'v', 'm', 'f', 'p')
        and a.attnum > 0
        and not a.attisdropped
      order by n.nspname, c.relname, a.attnum
    `);
    const constraintResult = await client.query(`
      select
        n.nspname as table_schema,
        c.relname as table_name,
        c.oid::text as table_oid,
        con.conname as name,
        con.contype as type,
        pg_get_constraintdef(con.oid, true) as definition,
        case when con.contype = 'f' then (
          select array_agg(att.attname order by cols.ordinality)
          from unnest(con.conkey) with ordinality as cols(attnum, ordinality)
          join pg_attribute att
            on att.attrelid = con.conrelid
           and att.attnum = cols.attnum
        ) end as columns,
        fn.nspname as foreign_schema,
        fc.relname as foreign_table,
        case when con.contype = 'f' then (
          select array_agg(att.attname order by cols.ordinality)
          from unnest(con.confkey) with ordinality as cols(attnum, ordinality)
          join pg_attribute att
            on att.attrelid = con.confrelid
           and att.attnum = cols.attnum
        ) end as foreign_columns
      from pg_constraint con
      join pg_class c on c.oid = con.conrelid
      join pg_namespace n on n.oid = c.relnamespace
      left join pg_class fc on fc.oid = con.confrelid
      left join pg_namespace fn on fn.oid = fc.relnamespace
      where n.nspname not in ('pg_catalog', 'information_schema')
      order by n.nspname, c.relname,
        case con.contype
          when 'p' then 1
          when 'u' then 2
          when 'f' then 3
          when 'c' then 4
          else 5
        end,
        con.conname
    `);
    const indexResult = await client.query(`
      select schemaname as table_schema, tablename as table_name, indexname as name, indexdef as definition
      from pg_indexes
      where schemaname not in ('pg_catalog', 'information_schema')
      order by schemaname, tablename, indexname
    `);
    const enumResult = await client.query(`
      select
        n.nspname as schema,
        t.typname as name,
        json_agg(e.enumlabel order by e.enumsortorder) as labels
      from pg_type t
      join pg_namespace n on n.oid = t.typnamespace
      join pg_enum e on e.enumtypid = t.oid
      where n.nspname not in ('pg_catalog', 'information_schema')
      group by n.nspname, t.typname
      order by n.nspname, t.typname
    `);

    const tableMap = new Map();
    const schemas = new Map();
    const infoMap = {};
    const customTypes = enumResult.rows.map((row) => ({
      schema: row.schema,
      name: row.name,
      labels: enumLabels(row.labels),
      hash: stableHash(row)
    }));

    for (const table of tableResult.rows) {
      if (!schemas.has(table.table_schema)) schemas.set(table.table_schema, []);
      const item = {
        schema: table.table_schema,
        name: table.table_name,
        type: table.table_type,
        columns: [],
        primaryKey: []
      };
      const key = `${table.table_schema}.${table.table_name}`;
      tableMap.set(key, item);
      schemas.get(table.table_schema).push(item);
      infoMap[key] = {
        schema: table.table_schema,
        table: table.table_name,
        oid: table.oid,
        relkind: table.relkind,
        kind: table.kind,
        estimated_rows: table.estimated_rows,
        table_size: table.table_size,
        total_size: table.total_size,
        comment: table.comment,
        primaryKey: [],
        columns: [],
        constraints: [],
        indexes: []
      };
    }

    for (const column of columnResult.rows) {
      const item = tableMap.get(`${column.table_schema}.${column.table_name}`);
      if (item) {
        item.columns.push({
          name: column.column_name,
          type: column.data_type,
          nullable: column.nullable
        });
      }
      const info = infoMap[`${column.table_schema}.${column.table_name}`];
      if (info) {
        info.columns.push({
          ordinal_position: column.ordinal_position,
          name: column.column_name,
          type: column.data_type,
          nullable: column.nullable,
          default_value: column.default_value,
          comment: column.comment,
          is_enum: column.is_enum,
          type_schema: column.type_schema,
          type_name: column.type_name,
          identity: column.identity,
          generated: column.generated,
          primaryKey: false
        });
      }
    }

    for (const constraint of constraintResult.rows) {
      const info = infoMap[`${constraint.table_schema}.${constraint.table_name}`];
      if (info) {
        info.constraints.push({
          name: constraint.name,
          type: constraint.type,
          typeLabel: {
            p: "PRIMARY KEY",
            u: "UNIQUE",
            f: "FOREIGN KEY",
            c: "CHECK",
            x: "EXCLUDE"
          }[constraint.type] || constraint.type,
          definition: constraint.definition,
          columns: arrayValues(constraint.columns),
          foreign_schema: constraint.foreign_schema,
          foreign_table: constraint.foreign_table,
          foreign_columns: arrayValues(constraint.foreign_columns)
        });
      }
    }

    for (const index of indexResult.rows) {
      const info = infoMap[`${index.table_schema}.${index.table_name}`];
      if (info) info.indexes.push({ name: index.name, definition: index.definition });
    }

    for (const [key, info] of Object.entries(infoMap)) {
      info.primaryKey = primaryKeyFromConstraints(info.constraints);
      info.columns = info.columns.map((column) => ({
        ...column,
        primaryKey: info.primaryKey.includes(column.name)
      }));
      info.ddl = buildTableDdlFromInfo(info, customTypes);
      info.hash = stableHash({
        columns: info.columns,
        constraints: info.constraints,
        indexes: info.indexes,
        customTypes: customTypes.filter((typeInfo) => info.columns.some((column) => (
          column.is_enum && column.type_schema === typeInfo.schema && column.type_name === typeInfo.name
        )))
      });
      const item = tableMap.get(key);
      if (item) item.primaryKey = info.primaryKey;
    }

    return {
      schemas: [...schemas.entries()].map(([name, tables]) => ({ name, tables })),
      catalog: {
        hash: stableHash({ infoMap, customTypes }),
        tables: infoMap,
        customTypes
      }
    };
  });
}

function normalizedFilterJoin(value = "and") {
  return String(value).toLowerCase() === "or" ? "or" : "and";
}

function buildFilterWhere(filters = [], values = [], filterJoin = "and") {
  if (!Array.isArray(filters) || filters.length === 0) return "";
  const clauses = [];
  const joiner = normalizedFilterJoin(filterJoin) === "or" ? " or " : " and ";
  const opMap = {
    "=": "=",
    "!=": "<>",
    "<>": "<>",
    "<": "<",
    ">": ">",
    "<=": "<=",
    ">=": ">=",
    "LIKE": "LIKE",
    "ILIKE": "ILIKE"
  };

  for (const filter of filters) {
    if (!filter?.enabled || !filter.column || !filter.operator) continue;
    const column = quoteIdent(filter.column);
    const operator = String(filter.operator).toUpperCase();
    const value = filter.value ?? "";
    const value2 = filter.value2 ?? "";

    if (opMap[operator]) {
      values.push(value);
      clauses.push(`${column} ${opMap[operator]} $${values.length}`);
    } else if (operator === "IN" || operator === "NOT IN") {
      const items = String(value).split(",").map((item) => item.trim()).filter(Boolean);
      if (items.length === 0) continue;
      const placeholders = items.map((item) => {
        values.push(item);
        return `$${values.length}`;
      });
      clauses.push(`${column} ${operator} (${placeholders.join(", ")})`);
    } else if (operator === "IS NULL" || operator === "IS NOT NULL") {
      clauses.push(`${column} ${operator}`);
    } else if (operator === "BETWEEN" || operator === "NOT BETWEEN") {
      values.push(value, value2);
      clauses.push(`${column} ${operator} $${values.length - 1} AND $${values.length}`);
    } else if (operator === "CONTAINS") {
      values.push(`%${value}%`);
      clauses.push(`${column}::text LIKE $${values.length}`);
    } else if (operator === "NOT CONTAINS") {
      values.push(`%${value}%`);
      clauses.push(`${column}::text NOT LIKE $${values.length}`);
    } else if (operator === "CONTAINS_CI") {
      values.push(`%${value}%`);
      clauses.push(`${column}::text ILIKE $${values.length}`);
    } else if (operator === "NOT_CONTAINS_CI") {
      values.push(`%${value}%`);
      clauses.push(`${column}::text NOT ILIKE $${values.length}`);
    } else if (operator === "PREFIX") {
      values.push(`${value}%`);
      clauses.push(`${column}::text LIKE $${values.length}`);
    } else if (operator === "SUFFIX") {
      values.push(`%${value}`);
      clauses.push(`${column}::text LIKE $${values.length}`);
    } else if (operator === "PREFIX_CI") {
      values.push(`${value}%`);
      clauses.push(`${column}::text ILIKE $${values.length}`);
    } else if (operator === "SUFFIX_CI") {
      values.push(`%${value}`);
      clauses.push(`${column}::text ILIKE $${values.length}`);
    }
  }

  return clauses.length ? `where ${clauses.map((clause) => `(${clause})`).join(joiner)}` : "";
}

function buildSortOrder(sort = {}) {
  if (!sort?.column) return "";
  const direction = String(sort.direction || "desc").toLowerCase() === "asc" ? "asc" : "desc";
  return `order by ${quoteIdent(sort.column)} ${direction} nulls last`;
}

async function loadTableData(config, schema, table, limit = 300, offset = 0, filters = [], filterJoin = "and", sort = {}, knownPrimaryKey = []) {
  const startedAt = performance.now();
  const safeLimit = Math.min(Math.max(Number(limit) || 300, 1), 1000);
  const safeOffset = Math.max(Number(offset) || 0, 0);
  return withPg(config, async (client) => {
    const tableSql = `${quoteIdent(schema)}.${quoteIdent(table)}`;
    const values = [];
    const whereSql = buildFilterWhere(filters, values, filterJoin);
    const orderSql = buildSortOrder(sort);
    const countValues = [...values];
    const countSql = `select count(*)::bigint as count from ${tableSql} ${whereSql}`;
    values.push(safeLimit + 1, safeOffset);
    const sql = `select * from ${tableSql} ${whereSql} ${orderSql} limit $${values.length - 1} offset $${values.length}`;
    const dataResult = await client.query(sql, values);
    const countResult = await client.query(countSql, countValues);
    let primaryKey = Array.isArray(knownPrimaryKey) ? knownPrimaryKey.filter(Boolean) : [];
    if (primaryKey.length === 0) {
      const pkResult = await client.query(
        `
        select kcu.column_name
        from information_schema.table_constraints tc
        join information_schema.key_column_usage kcu
          on tc.constraint_name = kcu.constraint_name
         and tc.table_schema = kcu.table_schema
         and tc.table_name = kcu.table_name
        where tc.constraint_type = 'PRIMARY KEY'
          and tc.table_schema = $1
          and tc.table_name = $2
        order by kcu.ordinal_position
        `,
        [schema, table]
      );
      primaryKey = pkResult.rows.map((row) => row.column_name);
    }

    const rows = dataResult.rows.slice(0, safeLimit);
    return {
      ...resultToPayload({ ...dataResult, rows, rowCount: rows.length }),
      schema,
      table,
      sql,
      elapsedMs: Math.round(performance.now() - startedAt),
      limit: safeLimit,
      offset: safeOffset,
      totalRows: Number(countResult.rows[0]?.count || 0),
      hasMore: dataResult.rows.length > safeLimit,
      primaryKey
    };
  });
}

async function loadTableInfo(config, schema, table) {
  return withPg(config, async (client) => {
    const metaResult = await client.query(
      `
      select
        c.oid::text as oid,
        case c.relkind
          when 'r' then 'table'
          when 'v' then 'view'
          when 'm' then 'materialized view'
          when 'f' then 'foreign table'
          when 'p' then 'partitioned table'
          else c.relkind::text
        end as kind,
        greatest(c.reltuples::bigint, 0) as estimated_rows,
        pg_size_pretty(pg_relation_size(c.oid)) as table_size,
        pg_size_pretty(pg_total_relation_size(c.oid)) as total_size,
        obj_description(c.oid, 'pg_class') as comment
      from pg_class c
      join pg_namespace n on n.oid = c.relnamespace
      where n.nspname = $1
        and c.relname = $2
        and c.relkind in ('r', 'v', 'm', 'f', 'p')
      `,
      [schema, table]
    );

    if (metaResult.rows.length === 0) {
      throw new Error(`Table not found: ${schema}.${table}`);
    }

    const oid = metaResult.rows[0].oid;
    const [columnResult, constraintResult, indexResult] = await Promise.all([
      client.query(
        `
        select
          a.attnum as ordinal_position,
          a.attname as name,
          pg_catalog.format_type(a.atttypid, a.atttypmod) as type,
          not a.attnotnull as nullable,
          pg_get_expr(ad.adbin, ad.adrelid) as default_value,
          col_description(a.attrelid, a.attnum) as comment,
          a.attidentity as identity,
          a.attgenerated as generated
        from pg_attribute a
        left join pg_attrdef ad
          on ad.adrelid = a.attrelid
         and ad.adnum = a.attnum
        where a.attrelid = $1::oid
          and a.attnum > 0
          and not a.attisdropped
        order by a.attnum
        `,
        [oid]
      ),
      client.query(
        `
        select
          conname as name,
          contype as type,
          pg_get_constraintdef(con.oid, true) as definition,
          case when con.contype = 'f' then (
            select array_agg(att.attname order by cols.ordinality)
            from unnest(con.conkey) with ordinality as cols(attnum, ordinality)
            join pg_attribute att
              on att.attrelid = con.conrelid
             and att.attnum = cols.attnum
          ) end as columns,
          fn.nspname as foreign_schema,
          fc.relname as foreign_table,
          case when con.contype = 'f' then (
            select array_agg(att.attname order by cols.ordinality)
            from unnest(con.confkey) with ordinality as cols(attnum, ordinality)
            join pg_attribute att
              on att.attrelid = con.confrelid
             and att.attnum = cols.attnum
          ) end as foreign_columns
        from pg_constraint con
        left join pg_class fc on fc.oid = con.confrelid
        left join pg_namespace fn on fn.oid = fc.relnamespace
        where conrelid = $1::oid
        order by
          case contype
            when 'p' then 1
            when 'u' then 2
            when 'f' then 3
            when 'c' then 4
            else 5
          end,
          conname
        `,
        [oid]
      ),
      client.query(
        `
        select indexname as name, indexdef as definition
        from pg_indexes
        where schemaname = $1
          and tablename = $2
        order by indexname
        `,
        [schema, table]
      )
    ]);

    const primaryKeyDefinition = constraintResult.rows.find((row) => row.type === "p")?.definition || "";
    const primaryKey = [...primaryKeyDefinition.matchAll(/\(([^)]+)\)/g)]
      .at(-1)?.[1]
      ?.split(",")
      .map((value) => value.trim().replace(/^"|"$/g, "")) || [];

    return {
      schema,
      table,
      ...metaResult.rows[0],
      primaryKey,
      columns: columnResult.rows.map((column) => ({
        ...column,
        primaryKey: primaryKey.includes(column.name)
      })),
      constraints: constraintResult.rows.map((constraint) => ({
        ...constraint,
        columns: arrayValues(constraint.columns),
        foreign_columns: arrayValues(constraint.foreign_columns),
        typeLabel: {
          p: "PRIMARY KEY",
          u: "UNIQUE",
          f: "FOREIGN KEY",
          c: "CHECK",
          x: "EXCLUDE"
        }[constraint.type] || constraint.type
      })),
      indexes: indexResult.rows
    };
  });
}

async function buildTableDdl(client, schema, table, options = {}) {
  const includeTypes = options.includeTypes !== false;
  const metaResult = await client.query(
    `
    select c.oid::text as oid, c.relkind
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = $1
      and c.relname = $2
      and c.relkind in ('r', 'p')
    `,
    [schema, table]
  );

  if (metaResult.rows.length === 0) {
    throw new Error(`Table DDL is only available for tables: ${schema}.${table}`);
  }

  const oid = metaResult.rows[0].oid;
  const [columnResult, constraintResult, indexResult, enumResult] = await Promise.all([
    client.query(
      `
      select
        a.attnum,
        a.attname as name,
        pg_catalog.format_type(a.atttypid, a.atttypmod) as formatted_type,
        a.attnotnull,
        pg_get_expr(ad.adbin, ad.adrelid) as default_value,
        t.typtype = 'e' as is_enum,
        tn.nspname as type_schema,
        t.typname as type_name,
        a.attidentity,
        a.attgenerated
      from pg_attribute a
      join pg_type t on t.oid = a.atttypid
      join pg_namespace tn on tn.oid = t.typnamespace
      left join pg_attrdef ad
        on ad.adrelid = a.attrelid
       and ad.adnum = a.attnum
      where a.attrelid = $1::oid
        and a.attnum > 0
        and not a.attisdropped
      order by a.attnum
      `,
      [oid]
    ),
    client.query(
      `
      select conname as name, contype as type, pg_get_constraintdef(oid, true) as definition
      from pg_constraint
      where conrelid = $1::oid
      order by
        case contype
          when 'p' then 1
          when 'u' then 2
          when 'f' then 3
          when 'c' then 4
          else 5
        end,
        conname
      `,
      [oid]
    ),
    client.query(
      `
      select indexname as name, indexdef as definition
      from pg_indexes
      where schemaname = $1
        and tablename = $2
      order by indexname
      `,
      [schema, table]
    ),
    client.query(
      `
      select
        tn.nspname as schema,
        t.typname as name,
        json_agg(e.enumlabel order by e.enumsortorder) as labels
      from pg_attribute a
      join pg_type t on t.oid = a.atttypid
      join pg_namespace tn on tn.oid = t.typnamespace
      join pg_enum e on e.enumtypid = t.oid
      where a.attrelid = $1::oid
        and a.attnum > 0
        and not a.attisdropped
      group by tn.nspname, t.typname
      order by tn.nspname, t.typname
      `,
      [oid]
    )
  ]);

  const lines = [];
  if (includeTypes) {
    for (const enumType of enumResult.rows) {
      lines.push(`DROP TYPE IF EXISTS ${qualifiedName(enumType.schema, enumType.name)};`);
      lines.push(
        `CREATE TYPE ${qualifiedName(enumType.schema, enumType.name)} AS ENUM (${enumType.labels.map(quoteLiteral).join(", ")});`
      );
      lines.push("");
    }
  }

  lines.push("-- Table Definition");
  const columnLines = columnResult.rows.map((column) => {
    const typeSql = column.is_enum
      ? qualifiedName(column.type_schema, column.type_name)
      : column.formatted_type;
    const parts = [`  ${quoteIdent(column.name)} ${typeSql}`];
    if (column.attidentity === "a") parts.push("GENERATED ALWAYS AS IDENTITY");
    if (column.attidentity === "d") parts.push("GENERATED BY DEFAULT AS IDENTITY");
    if (column.default_value && !column.attidentity) parts.push(`DEFAULT ${column.default_value}`);
    if (column.attnotnull) parts.push("NOT NULL");
    return parts.join(" ");
  });

  const constraintLines = constraintResult.rows.map((constraint) => (
    `  CONSTRAINT ${quoteIdent(constraint.name)} ${constraint.definition}`
  ));

  lines.push(`CREATE TABLE ${qualifiedName(schema, table)} (`);
  lines.push([...columnLines, ...constraintLines].map((line, index, all) => (
    index === all.length - 1 ? line : `${line},`
  )).join("\n"));
  lines.push(");");

  const primaryIndexNames = new Set(
    constraintResult.rows.filter((constraint) => constraint.type === "p").map((constraint) => constraint.name)
  );
  const indexes = indexResult.rows.filter((index) => !primaryIndexNames.has(index.name));
  if (indexes.length > 0) {
    lines.push("");
    lines.push("-- Indices");
    for (const index of indexes) {
      lines.push(`${index.definition};`);
    }
  }

  return lines.join("\n").trim();
}

async function loadTableDdl(config, schema, table) {
  return withPg(config, (client) => buildTableDdl(client, schema, table));
}

async function exportDatabaseDdl(config) {
  return withPg(config, async (client) => {
    const enumResult = await client.query(`
      select
        n.nspname as schema,
        t.typname as name,
        json_agg(e.enumlabel order by e.enumsortorder) as labels
      from pg_type t
      join pg_namespace n on n.oid = t.typnamespace
      join pg_enum e on e.enumtypid = t.oid
      where n.nspname not in ('pg_catalog', 'information_schema')
      group by n.nspname, t.typname
      order by n.nspname, t.typname
    `);
    const tableResult = await client.query(`
      select n.nspname as schema, c.relname as name
      from pg_class c
      join pg_namespace n on n.oid = c.relnamespace
      where n.nspname not in ('pg_catalog', 'information_schema')
        and c.relkind in ('r', 'p')
      order by n.nspname, c.relname
    `);

    const lines = [
      "-- Local DB Studio database schema export",
      `-- Generated at ${new Date().toISOString()}`,
      ""
    ];

    for (const enumType of enumResult.rows) {
      lines.push(`DROP TYPE IF EXISTS ${qualifiedName(enumType.schema, enumType.name)};`);
      lines.push(
        `CREATE TYPE ${qualifiedName(enumType.schema, enumType.name)} AS ENUM (${enumType.labels.map(quoteLiteral).join(", ")});`
      );
      lines.push("");
    }

    for (const tableInfo of tableResult.rows) {
      lines.push(await buildTableDdl(client, tableInfo.schema, tableInfo.name, { includeTypes: false }));
      lines.push("");
      lines.push("");
    }

    return lines.join("\n").trim();
  });
}

async function importRows(config, schema, table, rows = []) {
  if (!Array.isArray(rows) || rows.length === 0) {
    throw new Error("No rows to import.");
  }
  const cleanRows = rows.filter((row) => row && typeof row === "object" && !Array.isArray(row));
  if (cleanRows.length === 0) throw new Error("Import rows must be JSON objects.");
  const columns = Object.keys(cleanRows[0]).filter(Boolean);
  if (columns.length === 0) throw new Error("No import columns found.");

  return withPg(config, async (client) => {
    await client.query("begin");
    try {
      let inserted = 0;
      const tableSql = qualifiedName(schema, table);
      const columnSql = columns.map(quoteIdent).join(", ");
      const batchSize = 250;
      for (let offset = 0; offset < cleanRows.length; offset += batchSize) {
        const batch = cleanRows.slice(offset, offset + batchSize);
        const values = [];
        const rowSql = batch.map((row) => {
          const placeholders = columns.map((column) => {
            values.push(row[column] === "" ? null : row[column]);
            return `$${values.length}`;
          });
          return `(${placeholders.join(", ")})`;
        });
        const result = await client.query(
          `insert into ${tableSql} (${columnSql}) values ${rowSql.join(", ")}`,
          values
        );
        inserted += result.rowCount || 0;
      }
      await client.query("commit");
      return { inserted };
    } catch (error) {
      await client.query("rollback").catch(() => {});
      throw error;
    }
  });
}

async function runQuery(config, sql) {
  if (!sql || !sql.trim()) throw new Error("SQL is empty.");
  const startedAt = performance.now();
  return withPg(config, async (client) => {
    const result = await client.query(sql);
    return {
      elapsedMs: Math.round(performance.now() - startedAt),
      results: resultSetToPayload(result)
    };
  });
}

async function exportTableData(config, schema, table) {
  const startedAt = performance.now();
  return withPg(config, async (client) => {
    const tableSql = qualifiedName(schema, table);
    const sql = `select * from ${tableSql};`;
    const result = await client.query(sql);
    return {
      ...resultToPayload(result),
      sql,
      elapsedMs: Math.round(performance.now() - startedAt)
    };
  });
}

async function commitTableEdits(config, schema, table, primaryKey, changes = []) {
  if (!Array.isArray(primaryKey) || primaryKey.length === 0) {
    throw new Error("A primary key is required for inline edits.");
  }
  if (!Array.isArray(changes) || changes.length === 0) {
    return { updated: 0 };
  }

  return withPg(config, async (client) => {
    await client.query("begin");
    try {
      if (changes.some((change) => change?.action === "deleteIgnoreFk")) {
        await client.query("set local session_replication_role = replica");
      }
      let updated = 0;
      let inserted = 0;
      let deleted = 0;
      for (const change of changes) {
        if (!change) continue;

        if (change.action === "insert") {
          const valuesObject = change.values || {};
          const columns = Object.keys(valuesObject).filter((column) => !column.startsWith("__"));
          if (columns.length === 0) continue;
          const values = columns.map((column) => valuesObject[column] === "" ? null : valuesObject[column]);
          const columnSql = columns.map(quoteIdent).join(", ");
          const valueSql = values.map((_, index) => `$${index + 1}`).join(", ");
          const result = await client.query(
            `insert into ${quoteIdent(schema)}.${quoteIdent(table)} (${columnSql}) values (${valueSql})`,
            values
          );
          inserted += result.rowCount || 0;
          continue;
        }

        if (change.action === "delete" || change.action === "deleteCascade" || change.action === "deleteIgnoreFk") {
          if (!change.pkValues) continue;
          const values = [];
          const whereSql = primaryKey.map((pkColumn, index) => {
            values.push(change.pkValues[pkColumn]);
            return `${quoteIdent(pkColumn)} is not distinct from $${index + 1}`;
          }).join(" and ");
          const result = await client.query(
            `delete from ${quoteIdent(schema)}.${quoteIdent(table)} where ${whereSql}`,
            values
          );
          deleted += result.rowCount || 0;
          continue;
        }

        if (!change.column || !change.pkValues) continue;

        const values = [change.value];
        const whereSql = primaryKey.map((pkColumn, index) => {
          values.push(change.pkValues[pkColumn]);
          return `${quoteIdent(pkColumn)} is not distinct from $${index + 2}`;
        }).join(" and ");

        const sql = `
          update ${quoteIdent(schema)}.${quoteIdent(table)}
          set ${quoteIdent(change.column)} = $1
          where ${whereSql}
        `;
        const result = await client.query(sql, values);
        updated += result.rowCount || 0;
      }
      await client.query("commit");
      return { updated, inserted, deleted };
    } catch (error) {
      await client.query("rollback").catch(() => {});
      throw error;
    }
  });
}

function dropObjectKeyword(type) {
  switch (String(type || "").toUpperCase()) {
    case "VIEW":
      return "view";
    case "MATERIALIZED VIEW":
      return "materialized view";
    case "FOREIGN TABLE":
      return "foreign table";
    default:
      return "table";
  }
}

async function commitObjectDeletes(config, changes = []) {
  const deletes = Array.isArray(changes)
    ? changes.filter((change) => change?.schema && change?.name)
    : [];
  if (deletes.length === 0) return { dropped: 0 };

  return withPg(config, async (client) => {
    await client.query("begin");
    try {
      let dropped = 0;
      for (const change of deletes) {
        const keyword = dropObjectKeyword(change.type);
        const cascade = change.cascade ? " cascade" : "";
        await client.query(`drop ${keyword} if exists ${quoteIdent(change.schema)}.${quoteIdent(change.name)}${cascade}`);
        dropped += 1;
      }
      await client.query("commit");
      return { dropped };
    } catch (error) {
      await client.query("rollback").catch(() => {});
      throw error;
    }
  });
}

function collectOutputText(data) {
  if (typeof data.output_text === "string") return data.output_text;
  const chunks = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if (content.type === "output_text" && content.text) chunks.push(content.text);
      if (content.type === "text" && content.text) chunks.push(content.text);
    }
  }
  return chunks.join("\n").trim();
}

function stripSqlFence(text) {
  return String(text || "")
    .replace(/^```sql\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();
}

function sqlSuggestionsFromText(text) {
  const cleaned = stripSqlFence(text);
  const parts = cleaned
    .split(/\n\s*---SQL_OPTION---\s*\n/i)
    .map((part) => stripSqlFence(part))
    .filter(Boolean);
  return (parts.length ? parts : [cleaned])
    .map((sql, index) => ({ title: `Option ${index + 1}`, sql }))
    .filter((item) => item.sql);
}

function stripSqlForSafety(sql) {
  return String(sql || "")
    .replace(/--.*$/gm, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/'([^']|'')*'/g, "''")
    .replace(/"([^"]|"")*"/g, '""')
    .trim();
}

function isReadOnlySql(sql) {
  const cleaned = stripSqlForSafety(sql);
  const upper = cleaned.toUpperCase();
  const firstKeyword = upper.match(/^[\s(]*([A-Z]+)/)?.[1] || "";
  const allowedFirstKeywords = new Set(["SELECT", "WITH", "SHOW", "EXPLAIN"]);
  if (!allowedFirstKeywords.has(firstKeyword)) return false;
  return !/\b(INSERT|UPDATE|DELETE|MERGE|CREATE|ALTER|DROP|TRUNCATE|GRANT|REVOKE|COMMENT|CALL|DO|COPY|VACUUM|ANALYZE|REFRESH|REINDEX|CLUSTER)\b/.test(upper);
}

function compactSchemaCatalog(schemaCatalog = {}) {
  if (!schemaCatalog || typeof schemaCatalog !== "object") return null;
  const tables = Array.isArray(schemaCatalog.tables) ? schemaCatalog.tables : [];
  const customTypes = Array.isArray(schemaCatalog.customTypes) ? schemaCatalog.customTypes : [];
  const typeValueMap = new Map(customTypes.map((type) => [
    `${type.schema}.${type.name}`,
    type.values || type.labels || []
  ]));
  return {
    hash: schemaCatalog.hash || "",
    activeTable: schemaCatalog.activeTable || null,
    tables: tables.map((table) => ({
      schema: table.schema,
      table: table.table,
      kind: table.kind,
      estimatedRows: table.estimatedRows,
      tableSize: table.tableSize,
      totalSize: table.totalSize,
      comment: table.comment || null,
      ddl: table.ddl || "",
      primaryKey: table.primaryKey || [],
      columns: (table.columns || []).map((column) => ({
        name: column.name,
        type: column.type,
        nullable: Boolean(column.nullable),
        default: column.default || null,
        isEnum: Boolean(column.isEnum || column.is_enum),
        typeSchema: column.typeSchema || column.type_schema || null,
        typeName: column.typeName || column.type_name || null,
        customTypeValues: typeValueMap.get(`${column.typeSchema || column.type_schema}.${column.typeName || column.type_name}`) || []
      })),
      foreignKeys: (table.foreignKeys || []).map((fk) => ({
        name: fk.name,
        columns: fk.columns || [],
        references: fk.references || null
      })),
      constraints: (table.constraints || []).map((constraint) => ({
        name: constraint.name,
        type: constraint.type,
        definition: constraint.definition
      })),
      indexes: (table.indexes || []).map((index) => ({
        name: index.name,
        definition: index.definition
      }))
    })),
    customTypes: customTypes.map((type) => ({
      schema: type.schema,
      name: type.name,
      values: type.values || type.labels || []
    }))
  };
}

async function generateSql({ apiKey, model, systemPrompt, prompt, dialect, schemaSummary, schemaCatalog, currentSql, previousSuggestions = [], regenerate = false, sendSchemaInfo = true, readOnlyOnly = false }) {
  if (!apiKey || !apiKey.trim()) throw new Error("OpenAI API key is missing.");
  if (!prompt || !prompt.trim()) throw new Error("Describe the SQL you want first.");
  const includeSchema = sendSchemaInfo !== false;
  const catalogContext = includeSchema ? compactSchemaCatalog(schemaCatalog) : null;
  const instructions = systemPrompt?.trim() || defaultSqlGenerationSystemPrompt;
  const priorSuggestions = Array.isArray(previousSuggestions)
    ? previousSuggestions.map((item) => stripSqlFence(item?.sql || item)).filter(Boolean)
    : [];

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey.trim()}`
    },
    body: JSON.stringify({
      model: model || "gpt-5.4-mini",
	      instructions: [
	        instructions,
	        "App candidate behavior: Return 1 to 3 executable SQL candidates. Each candidate may contain multiple semicolon-terminated SQL statements when the user asks for all tables, multiple tables, every matching column, a whole database migration, or another schema-wide/multi-action operation. Do not answer those requests with only one sample statement. If the request has multiple plausible meanings, return multiple alternatives. Separate alternatives with a line containing only ---SQL_OPTION---. Do not add labels, markdown, comments, or explanations.",
	        "Multi-statement discipline: If the user says all tables, every table, multiple tables, all matching columns, 전체 테이블, 모든 테이블, 여러 테이블, 마이그레이션, or schema-wide, enumerate every relevant table/column from the provided schema context and output the complete statement set.",
	        "If the request is about editing a PostgreSQL custom type or enum, prefer ALTER TYPE statements against the exact custom type name and values from the schema context.",
        includeSchema ? "" : "Schema sharing is disabled by the user. Do not assume hidden database schema. If exact identifiers are not provided, generate only generic SQL that can run without private schema knowledge.",
        readOnlyOnly ? "Strict read-only mode is enabled. Return only read-only SQL. Do not generate INSERT, UPDATE, DELETE, MERGE, CREATE, ALTER, DROP, TRUNCATE, GRANT, REVOKE, COMMENT, CALL, DO, COPY, VACUUM, ANALYZE, REFRESH, REINDEX, or CLUSTER statements. If the user asks for a write or schema mutation, return a read-only SELECT that states read-only SQL generation is enabled." : "",
        regenerate ? "The user requested regeneration because the previous candidates did not match their intent. Generate materially different candidates and do not repeat a previous candidate unless it is clearly the only valid answer." : ""
      ].filter(Boolean).join("\n\n"),
      input: [
        `Dialect: ${dialect || "PostgreSQL"}`,
        includeSchema
          ? `Full schema catalog JSON:\n${catalogContext ? JSON.stringify(catalogContext, null, 2) : "No schema loaded."}`
          : "Full schema catalog JSON:\nSchema sharing disabled by user.",
        includeSchema
          ? `Short schema summary:\n${schemaSummary || "No schema summary loaded."}`
          : "Short schema summary:\nSchema sharing disabled by user.",
        currentSql ? `Current SQL:\n${currentSql}` : "",
        priorSuggestions.length ? `Previous generated candidates not accepted:\n${priorSuggestions.map((sql, index) => `Candidate ${index + 1}:\n${sql}`).join("\n\n")}` : "",
        `User request:\n${prompt}`
      ].filter(Boolean).join("\n\n"),
      max_output_tokens: 100000
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data.error?.message || `OpenAI request failed with ${response.status}.`;
    throw new Error(message);
  }

  let suggestions = sqlSuggestionsFromText(collectOutputText(data));
  if (readOnlyOnly) suggestions = suggestions.filter((suggestion) => isReadOnlySql(suggestion.sql));
  if (readOnlyOnly && suggestions.length === 0) {
    suggestions = [{
      title: "Option 1",
      sql: "SELECT 'Read-only SQL generation is enabled. Write or DDL SQL was not generated.' AS notice;"
    }];
  }
  return { sql: suggestions[0]?.sql || "", suggestions };
}

async function routeApi(req, res, pathname) {
  let body = {};
  try {
    body = await readJson(req);
    if (pathname === "/api/health") {
      sendJson(res, 200, { ok: true });
      return;
    }
    if (pathname === "/api/test-connection") {
      sendJson(res, 200, { ok: true, data: await testConnection(body.config) });
      return;
    }
    if (pathname === "/api/databases") {
      sendJson(res, 200, { ok: true, data: await listDatabases(body.config) });
      return;
    }
    if (pathname === "/api/create-database") {
      sendJson(res, 200, { ok: true, data: await createDatabase(body.config, body.database) });
      return;
    }
    if (pathname === "/api/schema") {
      const schemaData = await loadSchema(body.config);
      sendJson(res, 200, { ok: true, ...schemaData });
      return;
    }
    if (pathname === "/api/table-data") {
      sendJson(res, 200, {
        ok: true,
        data: await loadTableData(
          body.config,
          body.schema,
          body.table,
          body.limit,
          body.offset,
          body.filters,
          body.filterJoin,
          body.sort,
          body.primaryKey
        )
      });
      return;
    }
    if (pathname === "/api/table-info") {
      sendJson(res, 200, {
        ok: true,
        info: await loadTableInfo(body.config, body.schema, body.table)
      });
      return;
    }
    if (pathname === "/api/table-ddl") {
      sendJson(res, 200, {
        ok: true,
        ddl: await loadTableDdl(body.config, body.schema, body.table)
      });
      return;
    }
    if (pathname === "/api/export-database") {
      sendJson(res, 200, {
        ok: true,
        sql: await exportDatabaseDdl(body.config)
      });
      return;
    }
    if (pathname === "/api/export-table-data") {
      sendJson(res, 200, {
        ok: true,
        data: await exportTableData(body.config, body.schema, body.table)
      });
      return;
    }
    if (pathname === "/api/query") {
      sendJson(res, 200, { ok: true, data: await runQuery(body.config, body.sql) });
      return;
    }
    if (pathname === "/api/import-rows") {
      sendJson(res, 200, {
        ok: true,
        data: await importRows(body.config, body.schema, body.table, body.rows)
      });
      return;
    }
    if (pathname === "/api/commit-table-edits") {
      sendJson(res, 200, {
        ok: true,
        data: await commitTableEdits(
          body.config,
          body.schema,
          body.table,
          body.primaryKey,
          body.changes
        )
      });
      return;
    }
    if (pathname === "/api/commit-object-deletes") {
      sendJson(res, 200, {
        ok: true,
        data: await commitObjectDeletes(body.config, body.changes)
      });
      return;
    }
    if (pathname === "/api/ai/sql") {
      sendJson(res, 200, { ok: true, data: await generateSql(body) });
      return;
    }
    sendJson(res, 404, { ok: false, error: "Unknown API route." });
  } catch (error) {
    sendJson(res, 400, { ok: false, error: formatErrorMessage(error, body.config) });
  }
}

async function serveStatic(req, res, pathname) {
  const rawPath = pathname === "/" ? "/index.html" : pathname;
  const safePath = path.normalize(rawPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = safePath === "/app.js" || safePath === "app.js"
    ? clientBundlePath
    : path.join(publicDir, safePath);

  if (filePath !== clientBundlePath && !filePath.startsWith(publicDir)) {
    sendText(res, 403, "Forbidden");
    return;
  }

  try {
    const file = await readFile(filePath);
    const contentType = mimeTypes[path.extname(filePath)] || "application/octet-stream";
    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": file.length,
      "Cache-Control": "no-store"
    });
    res.end(file);
  } catch {
    sendText(res, 404, "Not found");
  }
}

async function handleRequest(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  if (url.pathname.startsWith("/api/")) {
    await routeApi(req, res, url.pathname);
    return;
  }
  await serveStatic(req, res, url.pathname);
}

export function startServer({ port = preferredPort, host = "127.0.0.1", attempts = 20 } = {}) {
  return new Promise((resolve, reject) => {
    const tryListen = (candidatePort, attemptsLeft) => {
      const server = http.createServer(handleRequest);
      server.once("error", (error) => {
        if (error.code === "EADDRINUSE" && attemptsLeft > 0 && candidatePort !== 0) {
          tryListen(candidatePort + 1, attemptsLeft - 1);
          return;
        }
        reject(error);
      });
      server.listen(candidatePort, host, () => {
        server.on("close", () => {
          closeAllPgSessions();
        });
        const address = server.address();
        const actualPort = typeof address === "object" && address ? address.port : candidatePort;
        resolve({
          server,
          port: actualPort,
          url: `http://localhost:${actualPort}`
        });
      });
    };

    tryListen(Number(port), attempts);
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  startServer()
    .then(({ url }) => {
      console.log(`Local DB Studio running at ${url}`);
    })
    .catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
}
