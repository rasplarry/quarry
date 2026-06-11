// @ts-nocheck

const storageKeys = {
  connections: "local-db-studio:connections",
  settings: "local-db-studio:settings",
  history: "local-db-studio:history",
  favorites: "local-db-studio:favorites",
  favoriteFolders: "local-db-studio:favorite-folders",
  tableFilters: "local-db-studio:table-filters"
};

const icons = {
  database: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"></path><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"></path></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>',
  settings: '<svg viewBox="0 0 24 24"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1A2 2 0 1 1 4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.6 1h.2a2 2 0 1 1 0 4H21a1.7 1.7 0 0 0-1.6 1z"></path></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>',
  minus: '<svg viewBox="0 0 24 24"><path d="M5 12h14"></path></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m16 16 4 4"></path></svg>',
  refresh: '<svg viewBox="0 0 24 24"><path d="M20 6v5h-5"></path><path d="M4 18v-5h5"></path><path d="M19 11a7 7 0 0 0-12-4l-3 3"></path><path d="M5 13a7 7 0 0 0 12 4l3-3"></path></svg>',
  filter: '<svg viewBox="0 0 24 24"><path d="M4 5h16"></path><path d="M7 12h10"></path><path d="M10 19h4"></path></svg>',
  wand: '<svg viewBox="0 0 24 24"><path d="m15 4 5 5"></path><path d="M14 5 3 16l5 5L19 10"></path><path d="M4 4h.01"></path><path d="M9 2h.01"></path><path d="M20 16h.01"></path><path d="M22 21h.01"></path></svg>',
  align: '<svg viewBox="0 0 24 24"><path d="M4 6h16"></path><path d="M4 12h11"></path><path d="M4 18h14"></path></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="m7 4 12 8-12 8z"></path></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"></path></svg>',
  save: '<svg viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><path d="M17 21v-8H7v8"></path><path d="M7 3v5h8"></path></svg>',
  trash: '<svg viewBox="0 0 24 24"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="M19 6l-1 14H6L5 6"></path></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>',
  download: '<svg viewBox="0 0 24 24"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>',
  upload: '<svg viewBox="0 0 24 24"><path d="M12 21V9"></path><path d="m7 14 5-5 5 5"></path><path d="M5 3h14"></path></svg>',
  copy: '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
  folder: '<svg viewBox="0 0 24 24"><path d="M3 6h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>',
  moreHorizontal: '<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="19" cy="12" r="1.5"></circle></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg>',
  chevronRight: '<svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>',
  chevronDown: '<svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>',
  terminal: '<svg viewBox="0 0 24 24"><path d="m4 17 6-6-6-6"></path><path d="M12 19h8"></path></svg>',
  plug: '<svg viewBox="0 0 24 24"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M6 8h12v4a6 6 0 0 1-12 0V8z"></path></svg>',
  table: '<svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"></path><path d="M4 10h16"></path><path d="M10 5v14"></path></svg>',
  info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 11v5"></path><path d="M12 8h.01"></path></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2L12 17.2 6.3 20.2 7.4 14 2.9 9.6l6.3-.9L12 3z"></path></svg>'
};

const tagValues = ["Local", "Testing", "Development", "QA", "Staging", "Production"];
const tagColorPresets = {
  Local: "#69736c",
  Testing: "#2b78b8",
  Development: "#0f8f8c",
  QA: "#7d57c2",
  Staging: "#c98210",
  Production: "#d2463f"
};
const defaultSettings = {
  openAiKey: "",
  openAiModel: "gpt-5.4-mini",
  sqlGenerationSystemPrompt: null,
  aiSendSchemaInfo: true,
  aiReadOnlyOnly: false,
  rememberSecrets: true,
  tagColors: {}
};
const sqlAutocompleteKeywords = [
  "SELECT", "FROM", "WHERE", "JOIN", "LEFT JOIN", "INNER JOIN", "ORDER BY", "GROUP BY", "HAVING",
  "LIMIT", "OFFSET", "INSERT", "UPDATE", "DELETE", "RETURNING", "COUNT", "SUM", "AVG", "MIN", "MAX",
  "AND", "OR", "NOT", "NULL", "IS NULL", "IS NOT NULL", "IN", "NOT IN", "LIKE", "ILIKE", "BETWEEN",
  "CREATE", "ALTER", "DROP", "TYPE", "TABLE", "INDEX", "CONSTRAINT", "PRIMARY KEY", "FOREIGN KEY"
];
const pageSize = 300;
const filterOperators = [
  ["=", "="],
  ["!=", "!="],
  ["<>", "<>"],
  ["<", "<"],
  [">", ">"],
  ["<=", "<="],
  [">=", ">="],
  ["IN", "IN"],
  ["NOT IN", "NOT IN"],
  ["IS NULL", "IS NULL"],
  ["IS NOT NULL", "IS NOT NULL"],
  ["BETWEEN", "BETWEEN"],
  ["NOT BETWEEN", "NOT BETWEEN"],
  ["LIKE", "LIKE"],
  ["ILIKE", "ILIKE"],
  ["Contains", "CONTAINS"],
  ["Not contains", "NOT CONTAINS"],
  ["Contains - Case insensitive", "CONTAINS_CI"],
  ["Not contains - Case insensitive", "NOT_CONTAINS_CI"],
  ["Has prefix", "PREFIX"],
  ["Has suffix", "SUFFIX"],
  ["Has prefix - Case insensitive", "PREFIX_CI"],
  ["Has suffix - Case insensitive", "SUFFIX_CI"]
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

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

function defaultSqlTab(sql = "select now();", title = "SQL 1") {
  return {
    id: uid(),
    title,
    sql,
    resultSets: [],
    activeResultIndex: 0,
    resultView: "data",
    messages: [],
    generationReview: null
  };
}

const state = {
  connections: load(storageKeys.connections, []),
  settings: {
    ...defaultSettings,
    sqlGenerationSystemPrompt: defaultSqlGenerationSystemPrompt,
    ...load(storageKeys.settings, {})
  },
  history: load(storageKeys.history, []),
  favorites: load(storageKeys.favorites, []),
  favoriteFolders: load(storageKeys.favoriteFolders, {}),
  tableFilters: load(storageKeys.tableFilters, {}),
  sqlTabs: [
    defaultSqlTab()
  ],
  sqlTabSequence: 1,
  activeSqlTabId: null,
  activeConnectionId: null,
  activeConnectionTabId: null,
  connectionTabs: [],
  schemas: [],
  catalog: load("local-db-studio:catalog:last", { hash: "", tables: {}, customTypes: [] }),
  selectedSchema: null,
  selectedTableKey: null,
  currentTable: null,
  currentTableInfo: null,
  currentOffset: 0,
  selectedRowIndex: null,
  filters: [],
  filterJoin: "and",
  selectedRows: new Set(),
  selectedResultRows: new Set(),
  dataSelectionAnchorKey: null,
  resultSelectionAnchorIndex: null,
  activeGridSource: null,
  dragSelection: null,
  tableTabs: [],
  activeTableTabId: null,
  sortLoading: null,
  dataRefreshLoading: null,
  rowInspectorTimer: null,
  openConnectionMenuId: null,
  connectionMenuPosition: null,
  connectionSelectionMode: false,
  selectedConnectionIds: new Set(),
  queryMessages: [],
  draggedConnectionId: null,
  databaseDialog: { items: [], selected: "", loading: false },
  openFavoriteMenuId: null,
  favoriteMenuPosition: null,
  openSqlTabMenuId: null,
  sqlTabMenuPosition: null,
  renamingSqlTabId: null,
  renamingFavoriteId: null,
  schemaCreateMenuPosition: null,
  selectedObjectKeys: new Set(),
  selectedTypeKeys: new Set(),
  schemaSelectionKind: "table",
  schemaObjectSelectionAnchorKey: null,
  schemaTypeSelectionAnchorKey: null,
  pendingObjectDeletes: [],
  deleteOptionsTarget: null,
  structureColumns: {},
  schemaDragMoved: false,
  connectionLoadToken: null,
  resultSets: [],
  activeResultIndex: 0,
  pendingEdits: []
};

const connectionTimeoutMs = 30000;
let connectionPasswordResolver = null;
let encryptedConnectionImportPayload = null;

function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function uid() {
  return crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());
}

function normalizeTag(tag) {
  const value = String(tag || "").trim();
  if (!value) return "Development";
  return tagValues.find((preset) => preset.toLowerCase() === value.toLowerCase()) || value;
}

function tagClass(tag) {
  const normalized = normalizeTag(tag);
  const preset = tagValues.find((value) => value.toLowerCase() === normalized.toLowerCase());
  return preset ? `tag-${preset.toLowerCase()}` : "tag-custom";
}

function tagPreset(tag) {
  const normalized = normalizeTag(tag);
  return tagValues.find((value) => value.toLowerCase() === normalized.toLowerCase()) || null;
}

function tagKey(tag) {
  return normalizeTag(tag).toLowerCase();
}

function normalizeHexColor(color) {
  const value = String(color || "").trim();
  return /^#[0-9a-f]{6}$/i.test(value) ? value.toLowerCase() : "";
}

function storedTagRecord(tag) {
  const record = state?.settings?.tagColors?.[tagKey(tag)];
  if (!record) return null;
  if (typeof record === "string") {
    const color = normalizeHexColor(record);
    return color ? { tag: normalizeTag(tag), color } : null;
  }
  const color = normalizeHexColor(record.color);
  if (!color) return null;
  return {
    tag: normalizeTag(record.tag || tag),
    color
  };
}

function storedTagColor(tag) {
  return storedTagRecord(tag)?.color || "";
}

function connectionTagColor(tag) {
  const key = tagKey(tag);
  const connection = state?.connections?.find((item) => tagKey(item.tag) === key && normalizeHexColor(item.tagColor));
  return normalizeHexColor(connection?.tagColor);
}

function tagColor(tag, color) {
  return storedTagColor(tag) || normalizeHexColor(color) || connectionTagColor(tag) || tagColorPresets[tagPreset(tag)] || "#0f8f8c";
}

function rememberTagColor(tag, color) {
  const normalized = normalizeTag(tag);
  const nextColor = normalizeHexColor(color) || tagColor(normalized);
  state.settings.tagColors = state.settings.tagColors || {};
  state.settings.tagColors[tagKey(normalized)] = { tag: normalized, color: nextColor };
  saveSettingsState();
  return nextColor;
}

function syncConnectionTagColors(tag, color) {
  const key = tagKey(tag);
  const nextColor = normalizeHexColor(color) || tagColor(tag);
  for (const connection of state.connections) {
    if (tagKey(connection.tag) === key) {
      connection.tag = normalizeTag(connection.tag);
      connection.tagColor = nextColor;
    }
  }
}

function applySharedTagColor(connection) {
  const tag = normalizeTag(connection.tag);
  const color = rememberTagColor(tag, connection.tagColor);
  connection.tag = tag;
  connection.tagColor = color;
  syncConnectionTagColors(tag, color);
  return connection;
}

function knownTagLabels() {
  const labels = new Map(tagValues.map((tag) => [tag.toLowerCase(), tag]));
  for (const connection of state.connections) {
    const tag = normalizeTag(connection.tag);
    labels.set(tag.toLowerCase(), tag);
  }
  for (const [key, record] of Object.entries(state.settings.tagColors || {})) {
    const tag = normalizeTag(typeof record === "string" ? key : record?.tag || key);
    if (tag) labels.set(tag.toLowerCase(), tag);
  }
  return [...labels.values()].sort((a, b) => {
    const presetA = tagValues.findIndex((tag) => tag.toLowerCase() === a.toLowerCase());
    const presetB = tagValues.findIndex((tag) => tag.toLowerCase() === b.toLowerCase());
    if (presetA >= 0 || presetB >= 0) return (presetA < 0 ? 999 : presetA) - (presetB < 0 ? 999 : presetB);
    return a.localeCompare(b);
  });
}

function renderTagDatalist() {
  const datalist = $("#tagPresets");
  if (!datalist) return;
  datalist.replaceChildren(...knownTagLabels().map((tag) => {
    const option = document.createElement("option");
    option.value = tag;
    return option;
  }));
}

function applyStoredTagColorToForm() {
  const rawTag = $("#connTag")?.value.trim();
  if (!rawTag) return;
  const tag = normalizeTag(rawTag);
  const nextColor = storedTagColor(tag) || connectionTagColor(tag) || tagColorPresets[tagPreset(tag)];
  if (nextColor) $("#connTagColor").value = nextColor;
}

function hexToRgb(hex) {
  const normalized = String(hex || "").replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(normalized)) return { r: 15, g: 143, b: 140 };
  const value = Number.parseInt(normalized, 16);
  return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 };
}

function readableColor(hex) {
  const { r, g, b } = hexToRgb(hex);
  return ((r * 299 + g * 587 + b * 114) / 1000) > 150 ? "#17201b" : "#ffffff";
}

function rgbaFromHex(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function applyTagStyle(node, tag, color) {
  if (!node) return;
  const nextColor = tagColor(tag, color);
  const tagClassPattern = /^tag-(local|testing|development|qa|staging|production|custom)$/;
  node.className = node.className
    .split(/\s+/)
    .filter((className) => className && !tagClassPattern.test(className))
    .join(" ");
  node.classList.add(tagClass(tag));
  node.style.backgroundColor = rgbaFromHex(nextColor, 0.16);
  node.style.borderColor = rgbaFromHex(nextColor, 0.48);
  node.style.color = readableColor(nextColor) === "#ffffff" ? nextColor : readableColor(nextColor);
}

function installIcons() {
  $$("[data-icon]").forEach((node) => {
    const name = node.dataset.icon;
    node.innerHTML = icons[name] || "";
  });
}

function activeConnection() {
  return state.connections.find((connection) => connection.id === state.activeConnectionId) || null;
}

function activeConnectionTab() {
  return state.connectionTabs.find((tab) => tab.id === state.activeConnectionTabId) || null;
}

function connectionTabTitle(tab) {
  return state.connections.find((connection) => connection.id === tab.connectionId)?.name || tab.title || "Connection";
}

function connectionForTab(tab) {
  return state.connections.find((connection) => connection.id === tab.connectionId) || null;
}

function saveActiveConnectionTabState() {
  const tab = activeConnectionTab();
  if (!tab) return;
  saveActiveSqlTab();
  tab.sqlTabs = state.sqlTabs;
  tab.activeSqlTabId = state.activeSqlTabId;
  tab.sqlTabSequence = state.sqlTabSequence;
  tab.schemas = state.schemas;
  tab.catalog = state.catalog;
  tab.selectedSchema = state.selectedSchema;
  tab.selectedTableKey = state.selectedTableKey;
  tab.currentTable = state.currentTable;
  tab.currentTableInfo = state.currentTableInfo;
  tab.currentOffset = state.currentOffset;
  tab.selectedRowIndex = state.selectedRowIndex;
  tab.filters = cloneFilters(state.filters);
  tab.filterJoin = state.filterJoin;
  tab.tableTabs = state.tableTabs;
  tab.activeTableTabId = state.activeTableTabId;
  tab.pendingEdits = state.pendingEdits;
  tab.pendingObjectDeletes = state.pendingObjectDeletes;
  tab.resultSets = state.resultSets;
  tab.activeResultIndex = state.activeResultIndex;
  tab.queryMessages = state.queryMessages;
}

function clearConnectionWorkspace() {
  state.connectionLoadToken = null;
  state.activeConnectionId = null;
  state.activeConnectionTabId = null;
  state.schemas = [];
  state.catalog = { hash: "", tables: {}, customTypes: [] };
  state.selectedSchema = null;
  state.selectedTableKey = null;
  state.currentTable = null;
  state.currentTableInfo = null;
  state.currentOffset = 0;
  state.selectedRowIndex = null;
  state.selectedRows = new Set();
  state.dataSelectionAnchorKey = null;
  state.activeGridSource = null;
  state.filters = [];
  state.filterJoin = "and";
  state.tableTabs = [];
  state.activeTableTabId = null;
	  state.pendingEdits = [];
	  state.pendingObjectDeletes = [];
	  state.selectedObjectKeys = new Set();
	  state.selectedTypeKeys = new Set();
	  state.schemaSelectionKind = "table";
  state.schemaObjectSelectionAnchorKey = null;
  state.schemaTypeSelectionAnchorKey = null;
	  state.resultSets = [];
  state.activeResultIndex = 0;
  state.selectedResultRows = new Set();
  state.resultSelectionAnchorIndex = null;
  state.activeGridSource = null;
  state.queryMessages = [];
  state.sqlTabs = [defaultSqlTab()];
  state.sqlTabSequence = 1;
  state.activeSqlTabId = state.sqlTabs[0].id;
  $("#connectionState").textContent = "No connection";
  $("#editorConnectionLabel").textContent = "Disconnected";
  $("#sqlEditor").value = state.sqlTabs[0].sql;
  $("#gridSearch").value = "";
  $("#dataGrid").innerHTML = "";
  $("#tableTitle").textContent = "No table selected";
  $("#tableSubtitle").textContent = "";
  $("#pageInfo").textContent = "Rows 0-0";
  $("#dataElapsed").textContent = "No query";
  setDataRefreshLoading(false);
  updateActiveDatabaseLabel();
  renderSchemaSelect();
  renderSqlTabs();
  renderSqlAutocompleteGhost();
  syncActiveSqlResultState();
  renderSqlGenerationReview();
  updateFavoriteSqlButton();
  renderRowInspector(null);
  syncFilterBarVisibility();
}

function getOrCreateConnectionTab(connectionId) {
  let tab = state.connectionTabs.find((item) => item.connectionId === connectionId);
  const connection = state.connections.find((item) => item.id === connectionId);
  if (!tab) {
    tab = {
      id: connectionId,
      connectionId,
      title: connection?.name || "Connection",
      status: "Connecting...",
      schemas: [],
      catalog: load(catalogKey(connection), { hash: "", tables: {}, customTypes: [] }),
      selectedSchema: null,
      selectedTableKey: null,
      currentTable: null,
      currentTableInfo: null,
      currentOffset: 0,
      selectedRowIndex: null,
      filters: [],
      filterJoin: "and",
      tableTabs: [],
      activeTableTabId: null,
      pendingEdits: [],
      pendingObjectDeletes: [],
      resultSets: [],
      activeResultIndex: 0,
      queryMessages: [],
      sqlTabs: [defaultSqlTab()],
      activeSqlTabId: null,
      sqlTabSequence: 1
    };
    tab.activeSqlTabId = tab.sqlTabs[0].id;
    state.connectionTabs.push(tab);
  }
  return tab;
}

function restoreConnectionTab(tab) {
  const connection = state.connections.find((item) => item.id === tab.connectionId);
  state.activeConnectionTabId = tab.id;
  state.activeConnectionId = tab.connectionId;
  state.schemas = tab.schemas || [];
  state.catalog = tab.catalog || load(catalogKey(connection), { hash: "", tables: {}, customTypes: [] });
  state.selectedSchema = tab.selectedSchema || null;
  state.selectedTableKey = tab.selectedTableKey || null;
  state.currentTable = tab.currentTable || null;
  state.currentTableInfo = tab.currentTableInfo || null;
  state.currentOffset = tab.currentOffset || 0;
  state.selectedRowIndex = tab.selectedRowIndex ?? null;
  restoreDataSelectionFromSelectedIndex(state.currentTable);
  state.filters = cloneFilters(tab.filters || []);
  state.filterJoin = normalizedFilterJoin(tab.filterJoin);
  state.tableTabs = tab.tableTabs || [];
  state.activeTableTabId = tab.activeTableTabId || null;
	  state.pendingEdits = tab.pendingEdits || [];
	  state.pendingObjectDeletes = tab.pendingObjectDeletes || [];
	  state.selectedObjectKeys = new Set();
	  state.selectedTypeKeys = new Set();
	  state.schemaSelectionKind = "table";
  state.schemaObjectSelectionAnchorKey = null;
  state.schemaTypeSelectionAnchorKey = null;
	  state.resultSets = tab.resultSets || [];
  state.activeResultIndex = tab.activeResultIndex || 0;
  state.selectedResultRows = new Set();
  state.resultSelectionAnchorIndex = null;
  state.activeGridSource = null;
  state.queryMessages = tab.queryMessages || [];
  syncTableInfoCacheFromCatalog();
  state.sqlTabs = tab.sqlTabs?.length ? tab.sqlTabs : [defaultSqlTab()];
  state.activeSqlTabId = tab.activeSqlTabId || state.sqlTabs[0]?.id || null;
  state.sqlTabSequence = tab.sqlTabSequence || 1;
  if (!state.sqlTabs.find((sqlTab) => sqlTab.id === state.activeSqlTabId)) {
    state.activeSqlTabId = state.sqlTabs[0]?.id || null;
  }
  const activeTab = activeSqlTab();
  $("#sqlEditor").value = activeTab?.sql || "";
  $("#connectionState").textContent = tab.status || connection?.name || "Connected";
  $("#editorConnectionLabel").textContent = connection?.name || "Disconnected";
  $("#gridSearch").value = activeTableTab()?.gridSearch || "";
  renderConnectionTabs();
  renderConnections();
  renderSqlTabs();
  syncActiveSqlResultState(activeTab);
  renderSqlGenerationReview();
  updateFavoriteSqlButton();
  renderSchema();
  renderDataTabs();
  renderResults();
  if (state.currentTable?.fields?.length) {
    renderDataGrid(state.currentTable, true);
    renderStructure(state.currentTableInfo);
    showDataMode();
  } else {
    $("#dataGrid").innerHTML = "";
    renderStructure();
    showSqlMode();
  }
}

function closeConnectionTab(tabId) {
  const index = state.connectionTabs.findIndex((tab) => tab.id === tabId);
  if (index < 0) return;
  state.connectionTabs.splice(index, 1);
  if (state.activeConnectionTabId === tabId) {
    const next = state.connectionTabs[Math.max(0, index - 1)] || state.connectionTabs[0] || null;
    if (next) restoreConnectionTab(next);
    else {
      clearConnectionWorkspace();
      renderConnectionTabs();
      renderConnections();
      renderSchema();
      renderDataTabs();
      renderResults();
      showSqlMode();
    }
    return;
  }
  renderConnectionTabs();
}

function renderConnectionTabs() {
  const bar = $("#connectionTabBar");
  if (!bar) return;
  bar.innerHTML = "";
  if (state.connectionTabs.length === 0) {
    const empty = document.createElement("span");
    empty.className = "connection-tab-empty";
    empty.textContent = "No open connections";
    bar.append(empty);
    return;
  }
  for (const tab of state.connectionTabs) {
    const connection = connectionForTab(tab);
    const tag = normalizeTag(connection?.tag);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `connection-tab ${tab.id === state.activeConnectionTabId ? "active" : ""}`;
    button.title = `${tag} - ${connectionTabTitle(tab)}`;
    const tagNode = document.createElement("span");
    tagNode.className = `connection-tab-tag tag-badge ${tagClass(tag)}`;
    tagNode.textContent = tag;
    applyTagStyle(tagNode, tag, connection?.tagColor);
    const title = document.createElement("span");
    title.className = "connection-tab-title";
    title.textContent = connectionTabTitle(tab);
    const close = document.createElement("span");
    close.className = "connection-tab-close";
    close.textContent = "x";
    close.addEventListener("click", (event) => {
      event.stopPropagation();
      closeConnectionTab(tab.id);
    });
    button.append(tagNode, title, close);
    button.addEventListener("click", () => {
      saveActiveConnectionTabState();
      restoreConnectionTab(tab);
    });
    bar.append(button);
  }
}

function ensureSqlTabShape(tab) {
  if (!tab) return null;
  if (!Array.isArray(tab.resultSets)) tab.resultSets = [];
  if (!Number.isInteger(tab.activeResultIndex)) tab.activeResultIndex = 0;
  if (tab.activeResultIndex >= tab.resultSets.length) tab.activeResultIndex = 0;
  if (!["data", "message", "chart"].includes(tab.resultView)) tab.resultView = "data";
  if (!Array.isArray(tab.messages)) tab.messages = [];
  if (tab.generationReview === undefined) tab.generationReview = null;
  return tab;
}

function activeSqlTab() {
  return ensureSqlTabShape(state.sqlTabs.find((tab) => tab.id === state.activeSqlTabId) || null);
}

function syncActiveSqlResultState(tab = activeSqlTab()) {
  const shaped = ensureSqlTabShape(tab);
  state.resultSets = shaped?.resultSets || [];
  state.activeResultIndex = shaped?.activeResultIndex || 0;
}

function saveActiveSqlTab() {
  const tab = activeSqlTab();
  if (!tab) return;
  tab.sql = $("#sqlEditor")?.value || "";
}

function syncSqlTabsToActiveConnectionTab() {
  const tab = activeConnectionTab();
  if (!tab) return;
  tab.sqlTabs = state.sqlTabs;
  tab.activeSqlTabId = state.activeSqlTabId;
  tab.sqlTabSequence = state.sqlTabSequence;
}

function syncSqlTabSequence() {
  const maxNumber = state.sqlTabs.reduce((max, tab) => {
    const match = String(tab.title || "").match(/^SQL\s+(\d+)$/i);
    return match ? Math.max(max, Number(match[1])) : max;
  }, 0);
  state.sqlTabSequence = Math.max(state.sqlTabSequence || 0, maxNumber, 1);
}

function nextSqlTabTitle() {
  syncSqlTabSequence();
  state.sqlTabSequence += 1;
  return `SQL ${state.sqlTabSequence}`;
}

function createSqlTab(sql = "", title = null) {
  saveActiveSqlTab();
  const tab = {
    id: uid(),
    title: title || nextSqlTabTitle(),
    sql,
    resultSets: [],
    activeResultIndex: 0,
    resultView: "data",
    messages: [],
    generationReview: null
  };
  state.sqlTabs.push(tab);
  state.activeSqlTabId = tab.id;
  state.selectedResultRows = new Set();
  state.resultSelectionAnchorIndex = null;
  state.activeGridSource = "result";
  syncSqlTabsToActiveConnectionTab();
  $("#sqlEditor").value = sql;
  renderSqlAutocompleteGhost();
  syncActiveSqlResultState(tab);
  renderSqlTabs();
  renderResults();
  renderSqlGenerationReview();
  updateFavoriteSqlButton();
  showSqlMode();
  return tab;
}

function activateSqlTab(id) {
  saveActiveSqlTab();
  const tab = state.sqlTabs.find((item) => item.id === id);
  if (!tab) return;
  state.activeSqlTabId = id;
  state.selectedResultRows = new Set();
  state.resultSelectionAnchorIndex = null;
  state.activeGridSource = "result";
  syncSqlTabsToActiveConnectionTab();
  $("#sqlEditor").value = tab.sql || "";
  renderSqlAutocompleteGhost();
  syncActiveSqlResultState(tab);
  renderSqlTabs();
  renderResults();
  renderSqlGenerationReview();
  updateFavoriteSqlButton();
  showSqlMode();
}

function closeSqlTab(id) {
  closeSqlTabMenu();
  if (state.sqlTabs.length <= 1) {
    const only = state.sqlTabs[0];
    only.sql = "";
    only.resultSets = [];
    only.activeResultIndex = 0;
    only.resultView = "data";
    only.messages = [];
    only.generationReview = null;
    state.selectedResultRows = new Set();
    state.resultSelectionAnchorIndex = null;
    state.activeGridSource = "result";
    syncSqlTabsToActiveConnectionTab();
    $("#sqlEditor").value = "";
    renderSqlAutocompleteGhost();
    syncActiveSqlResultState(only);
    renderSqlTabs();
    renderResults();
    renderSqlGenerationReview();
    updateFavoriteSqlButton();
    return;
  }
  const index = state.sqlTabs.findIndex((tab) => tab.id === id);
  if (index < 0) return;
  state.sqlTabs.splice(index, 1);
  if (state.activeSqlTabId === id) {
    const next = state.sqlTabs[Math.max(0, index - 1)] || state.sqlTabs[0];
    state.activeSqlTabId = next.id;
    state.selectedResultRows = new Set();
    state.resultSelectionAnchorIndex = null;
    state.activeGridSource = "result";
    syncSqlTabsToActiveConnectionTab();
    $("#sqlEditor").value = next.sql || "";
    renderSqlAutocompleteGhost();
    syncActiveSqlResultState(next);
  }
  renderSqlTabs();
  renderResults();
  renderSqlGenerationReview();
  updateFavoriteSqlButton();
  syncSqlTabsToActiveConnectionTab();
}

function workspaceMode() {
  if (!$("#structurePane")?.hidden) return "structure";
  if (!$("#dataPane")?.hidden) return "data";
  return "sql";
}

function sqlTabHasContent(tab) {
  return Boolean(
    (tab?.sql || "").trim()
    || tab?.resultSets?.length
    || tab?.messages?.length
    || tab?.generationReview
  );
}

function canCloseSqlTab(tab = activeSqlTab()) {
  return Boolean(tab && (state.sqlTabs.length > 1 || sqlTabHasContent(tab)));
}

function requestWindowClose() {
  if (window.desktopApi?.closeWindow) {
    window.desktopApi.closeWindow();
  } else {
    setReady("No more tabs to close");
  }
}

function closeFocusedTabOrWindow() {
  closeSqlTabMenu();
  closeFavoriteMenu();
  closeSchemaCreateMenu();
  closeGridContextMenu();

  const mode = workspaceMode();
  if (mode === "sql" && canCloseSqlTab()) {
    closeSqlTab(state.activeSqlTabId);
    return true;
  }
  if ((mode === "data" || mode === "structure") && state.activeTableTabId) {
    closeTableTab(state.activeTableTabId);
    return true;
  }
  if (state.activeConnectionTabId && state.connectionTabs.length > 0) {
    closeConnectionTab(state.activeConnectionTabId);
    return true;
  }
  if (canCloseSqlTab()) {
    closeSqlTab(state.activeSqlTabId);
    return true;
  }
  if (state.activeTableTabId) {
    closeTableTab(state.activeTableTabId);
    return true;
  }
  requestWindowClose();
  return false;
}

function createFocusedTab() {
  createSqlTab("");
}

function renderSqlTabs() {
  const bar = $("#sqlTabBar");
  if (!bar) return;
  if (!state.activeSqlTabId) state.activeSqlTabId = state.sqlTabs[0]?.id || null;
  const renameFocusId = state.renamingSqlTabId;
  bar.innerHTML = "";
  for (const tab of state.sqlTabs) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `sql-tab ${tab.id === state.activeSqlTabId ? "active" : ""}`;
    const title = document.createElement("span");
    if (state.renamingSqlTabId === tab.id) {
      const input = document.createElement("input");
      input.className = "inline-rename-input";
      input.value = tab.title || "";
      const finish = (commit = true) => {
        if (commit && input.value.trim()) tab.title = input.value.trim();
        state.renamingSqlTabId = null;
        syncSqlTabsToActiveConnectionTab();
        renderSqlTabs();
      };
      input.addEventListener("click", (event) => event.stopPropagation());
      input.addEventListener("mousedown", (event) => event.stopPropagation());
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          finish(true);
        }
        if (event.key === "Escape") {
          event.preventDefault();
          finish(false);
        }
      });
      input.addEventListener("blur", () => finish(true));
      title.append(input);
    } else {
      title.textContent = tab.title;
    }
    const close = document.createElement("span");
    close.className = "sql-tab-close";
    close.textContent = "x";
    close.addEventListener("click", (event) => {
      event.stopPropagation();
      closeSqlTab(tab.id);
    });
    button.append(title, close);
    button.addEventListener("click", () => activateSqlTab(tab.id));
    button.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      openSqlTabMenu(tab.id, event);
    });
    bar.append(button);
  }
  const add = document.createElement("button");
  add.type = "button";
  add.className = "sql-tab-add";
  add.textContent = "+";
  add.title = "New SQL tab";
  add.addEventListener("click", () => createSqlTab(""));
  bar.append(add);
  if (renameFocusId) {
    requestAnimationFrame(() => {
      const input = $("#sqlTabBar .inline-rename-input");
      input?.focus();
      input?.select();
    });
  }
}

function renameSqlTab(id) {
  const tab = state.sqlTabs.find((item) => item.id === id);
  if (!tab) return;
  state.renamingSqlTabId = id;
  renderSqlTabs();
}

function favoriteSqlTab(id) {
  const tab = state.sqlTabs.find((item) => item.id === id);
  if (!tab) return;
  if (state.activeSqlTabId === id) saveActiveSqlTab();
  const sql = normalizeSqlText(tab.sql);
  if (!sql) {
    showToast("No SQL to favorite.", "error");
    return;
  }
  toggleFavorite(sql, tab.title || "SQL favorite", favoriteConnectionMeta());
  renderSqlTabs();
  renderHistory();
}

function openSqlTabMenu(id, event) {
  state.openSqlTabMenuId = id;
  state.sqlTabMenuPosition = {
    top: Math.min(event.clientY, window.innerHeight - 124),
    left: Math.min(Math.max(8, event.clientX), window.innerWidth - 178)
  };
  renderSqlTabMenu();
}

function closeSqlTabMenu() {
  state.openSqlTabMenuId = null;
  renderSqlTabMenu();
}

function renderSqlTabMenu() {
  const menu = $("#sqlTabMenu");
  if (!menu) return;
  const tab = state.sqlTabs.find((item) => item.id === state.openSqlTabMenuId);
  menu.hidden = !tab;
  if (!tab) return;
  const isFavorite = Boolean(favoriteForSql(tab.sql || ""));
  menu.style.top = `${state.sqlTabMenuPosition?.top || 0}px`;
  menu.style.left = `${state.sqlTabMenuPosition?.left || 0}px`;
  menu.dataset.tabId = tab.id;
  menu.querySelector('[data-action="favorite"]').textContent = isFavorite ? "Remove Favorite" : "Add Favorite";
}

function catalogKey(connection = activeConnection()) {
  const id = connection?.id || "last";
  const database = connection?.database || "default";
  return `local-db-studio:catalog:${id}:${database}`;
}

function loadCatalog(connection = activeConnection()) {
  state.catalog = load(catalogKey(connection), { hash: "", tables: {}, customTypes: [] });
}

function saveCatalog(connection = activeConnection()) {
  save(catalogKey(connection), state.catalog);
  save("local-db-studio:catalog:last", state.catalog);
}

function catalogTableInfo(schema, table) {
  return state.catalog?.tables?.[tableKey(schema, table)] || null;
}

function syncTableInfoCacheFromCatalog() {
  for (const tab of state.tableTabs || []) {
    const freshInfo = catalogTableInfo(tab.schema, tab.table);
    tab.tableInfo = freshInfo || null;
    if (freshInfo && tab.result) {
      tab.result.primaryKey = freshInfo.primaryKey || tab.result.primaryKey || [];
    }
  }

  if (state.currentTable) {
    const freshInfo = catalogTableInfo(state.currentTable.schema, state.currentTable.table);
    if (freshInfo) {
      state.currentTableInfo = freshInfo;
      state.currentTable.primaryKey = freshInfo.primaryKey || state.currentTable.primaryKey || [];
    } else {
      state.currentTableInfo = null;
    }
  }

  $("#tableInfoButton").disabled = !state.currentTableInfo;
  $("#structureInfoButton").disabled = !state.currentTableInfo;

  const connectionTab = activeConnectionTab();
  if (connectionTab) {
    connectionTab.catalog = state.catalog;
    connectionTab.currentTableInfo = state.currentTableInfo;
    connectionTab.tableTabs = state.tableTabs;
  }

  if ($("#tableInfoDialog")?.open && state.currentTableInfo) {
    renderTableInfoDialog(state.currentTableInfo);
  }
}

function resetActiveDatabaseWorkspace() {
  const connection = activeConnection();
  state.schemas = [];
  state.catalog = load(catalogKey(connection), { hash: "", tables: {}, customTypes: [] });
  state.selectedSchema = null;
  state.selectedTableKey = null;
  state.currentTable = null;
  state.currentTableInfo = null;
  state.currentOffset = 0;
  state.selectedRowIndex = null;
  state.selectedRows = new Set();
  state.dataSelectionAnchorKey = null;
  state.activeGridSource = null;
  state.filters = [];
  state.filterJoin = "and";
  state.tableTabs = [];
  state.activeTableTabId = null;
  state.pendingEdits = [];
  state.pendingObjectDeletes = [];
  state.selectedObjectKeys = new Set();
  state.selectedTypeKeys = new Set();
  state.schemaSelectionKind = "table";
  state.schemaObjectSelectionAnchorKey = null;
  state.schemaTypeSelectionAnchorKey = null;
  state.resultSets = [];
  state.activeResultIndex = 0;
  state.selectedResultRows = new Set();
  state.resultSelectionAnchorIndex = null;
  state.activeGridSource = null;
  state.queryMessages = [];
  const tab = activeConnectionTab();
  if (tab) {
    tab.schemas = [];
    tab.catalog = state.catalog;
    tab.selectedSchema = null;
    tab.selectedTableKey = null;
    tab.currentTable = null;
    tab.currentTableInfo = null;
    tab.currentOffset = 0;
    tab.selectedRowIndex = null;
    tab.filters = [];
    tab.filterJoin = "and";
    tab.tableTabs = [];
    tab.activeTableTabId = null;
    tab.pendingEdits = [];
    tab.pendingObjectDeletes = [];
    tab.resultSets = [];
    tab.activeResultIndex = 0;
    state.selectedResultRows = new Set();
    state.resultSelectionAnchorIndex = null;
    state.activeGridSource = null;
    tab.queryMessages = [];
  }
  renderSchema();
  renderDataTabs();
  renderDataGrid(null);
  renderStructure();
  renderResults();
  syncFilterBarVisibility();
  showSqlMode();
}

function updateActiveDatabaseLabel() {
  const label = $("#activeDatabaseLabel");
  if (!label) return;
  const connection = activeConnection();
  label.textContent = connection?.database || "Database";
  label.title = connection ? `Open database: ${connection.database}` : "Open database";
}

function findSchemaTable(schemaName, tableName) {
  return state.schemas
    .find((schema) => schema.name === schemaName)
    ?.tables.find((table) => table.name === tableName) || null;
}

function connectionConfig(connection = activeConnection()) {
  if (!connection) return null;
  return {
    host: connection.host,
    port: Number(connection.port || 5432),
    database: connection.database,
    user: connection.user,
    password: connection.password || "",
    ssl: Boolean(connection.ssl),
    ssh: {
      enabled: Boolean(connection.ssh?.enabled),
      host: connection.ssh?.host || "",
      port: Number(connection.ssh?.port || 22),
      username: connection.ssh?.username || "",
      password: connection.ssh?.password || "",
      privateKeyPath: connection.ssh?.privateKeyPath || "",
      privateKey: connection.ssh?.privateKey || "",
      passphrase: connection.ssh?.passphrase || ""
    }
  };
}

function timeoutSeconds(ms) {
  return Math.max(1, Math.round(Number(ms || 0) / 1000));
}

function connectionTimeoutMessage(connection = activeConnection()) {
  const label = connection?.name ? ` for ${connection.name}` : "";
  return `Connection timed out${label} after ${timeoutSeconds(connectionTimeoutMs)} seconds. Check SSH, SSL, host, port, database, and credentials.`;
}

function remainingDeadlineMs(deadline, fallback = connectionTimeoutMs) {
  if (!deadline) return fallback;
  return Math.max(1, deadline - Date.now());
}

async function api(path, payload = {}, options = {}) {
  const timeoutMs = Number(options.timeoutMs || 0);
  const controller = timeoutMs > 0 ? new AbortController() : null;
  const timeoutMessage = options.timeoutMessage || `Request timed out after ${timeoutSeconds(timeoutMs)} seconds.`;
  let timer = null;

  if (controller) {
    timer = setTimeout(() => controller.abort(), timeoutMs);
  }

  try {
    const response = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller?.signal
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.ok === false) {
      throw new Error(data.error || `Request failed with ${response.status}`);
    }
    return data;
  } catch (error) {
    if (error?.name === "AbortError") {
      throw new Error(timeoutMessage);
    }
    throw error;
  } finally {
    if (timer) clearTimeout(timer);
  }
}

function showToast(message, type = "ok", options = {}) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.toggle("error", type === "error");
  toast.classList.add("visible");
  if (type === "error" && options.log !== false) {
    appendQueryMessage({
      status: "error",
      source: "Message",
      sql: "",
      error: message,
      rowCount: null,
      elapsedMs: null
    }, { global: true, targetSqlTab: null });
  }
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("visible"), 2800);
}

function safeFileName(value) {
  return String(value || "export").replace(/[^a-z0-9_.-]+/gi, "_").replace(/^_+|_+$/g, "") || "export";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatDuration(ms) {
  if (!Number.isFinite(Number(ms))) return "No query";
  return `${Math.round(Number(ms)).toLocaleString()} ms`;
}

function formatRowNumber(value) {
  const numberValue = Number(value);
  if (!Number.isFinite(numberValue)) return String(value ?? 0);
  return Math.max(0, numberValue).toLocaleString();
}

function formatLogTime(value) {
  const date = new Date(value || Date.now());
  return date.toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function appendQueryMessage(entry, options = {}) {
  const item = {
    id: uid(),
    createdAt: Date.now(),
    status: entry.status || "ok",
    source: entry.source || "SQL",
    sql: entry.sql || "",
    elapsedMs: entry.elapsedMs ?? null,
    rowCount: entry.rowCount ?? null,
    error: entry.error || "",
    connection: activeConnection()?.name || "Disconnected"
  };
  state.queryMessages = [...state.queryMessages, item].slice(-200);
  if (!$(".results-pane")?.hidden && activeSqlTab()?.resultView === "message") renderResults();
  saveActiveConnectionTabState();
  return item;
}

function downloadText(filename, textValue, mimeType) {
  const blob = new Blob([textValue], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.slice(index, index + chunkSize));
  }
  return btoa(binary);
}

function base64ToBytes(value) {
  const binary = atob(String(value || ""));
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

async function deriveQuarryEncryptionKey(password, salt) {
  const passwordKey = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 250000,
      hash: "SHA-256"
    },
    passwordKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

async function encryptQuarryPayload(payload, password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveQuarryEncryptionKey(password, salt);
  const plaintext = new TextEncoder().encode(JSON.stringify(payload));
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext);
  return {
    type: "quarry.connections.encrypted",
    version: 1,
    crypto: {
      algorithm: "AES-GCM",
      kdf: "PBKDF2-SHA-256",
      iterations: 250000,
      salt: bytesToBase64(salt),
      iv: bytesToBase64(iv)
    },
    ciphertext: bytesToBase64(new Uint8Array(encrypted))
  };
}

async function decryptQuarryPayload(payload, password) {
  const cryptoInfo = payload?.crypto || {};
  if (cryptoInfo.algorithm !== "AES-GCM" || cryptoInfo.kdf !== "PBKDF2-SHA-256") {
    throw new Error("Unsupported .quarry encryption.");
  }
  const salt = base64ToBytes(cryptoInfo.salt);
  const iv = base64ToBytes(cryptoInfo.iv);
  const ciphertext = base64ToBytes(payload.ciphertext);
  const key = await deriveQuarryEncryptionKey(password, salt);
  try {
    const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
    return JSON.parse(new TextDecoder().decode(decrypted));
  } catch {
    throw new Error("Could not decrypt .quarry file. Check the password.");
  }
}

async function writeClipboard(textValue) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(textValue);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = textValue;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

async function withButtonLoading(button, task) {
  if (!button) return task();
  const html = button.innerHTML;
  const disabled = button.disabled;
  button.disabled = true;
  button.classList.add("loading");
  button.innerHTML = '<span class="spinner mini"></span><span>Loading...</span>';
  try {
    return await task();
  } finally {
    button.innerHTML = html;
    button.disabled = disabled;
    button.classList.remove("loading");
    installIcons();
  }
}

function activeResult() {
  const tab = activeSqlTab();
  return tab?.resultSets?.[tab.activeResultIndex || 0] || null;
}

function sqlGenerationSystemPrompt() {
  return state.settings.sqlGenerationSystemPrompt?.trim() || defaultSqlGenerationSystemPrompt;
}

function aiSendSchemaInfo() {
  return state.settings.aiSendSchemaInfo !== false;
}

function aiReadOnlyOnly() {
  return state.settings.aiReadOnlyOnly === true;
}

function saveSettingsState() {
  save(storageKeys.settings, state.settings);
}

function normalizeSqlText(sql) {
  return String(sql || "").trim();
}

function favoriteKey(sql) {
  return normalizeSqlText(sql).replace(/\s+/g, " ").toLowerCase();
}

function favoriteConnectionMeta(connection = activeConnection()) {
  if (!connection) {
    return {
      connectionId: null,
      connectionName: "No connection",
      database: "",
      tag: "Local",
      tagColor: tagColor("Local")
    };
  }
  return {
    connectionId: connection.id,
    connectionName: connection.name,
    database: connection.database || "",
    tag: normalizeTag(connection.tag),
    tagColor: tagColor(connection.tag, connection.tagColor)
  };
}

function favoriteScopeKey(meta = favoriteConnectionMeta()) {
  return meta.connectionId || "__no_connection__";
}

function scopedFavoriteKey(sql, connectionId = activeConnection()?.id || null) {
  const key = favoriteKey(sql);
  return key ? `${connectionId || "__no_connection__"}:${key}` : "";
}

function favoriteForSql(sql, connectionId = activeConnection()?.id || null) {
  const key = scopedFavoriteKey(sql, connectionId);
  if (!key) return null;
  return state.favorites.find((item) => scopedFavoriteKey(item.sql, item.connectionId || null) === key) || null;
}

function saveFavorites() {
  save(storageKeys.favorites, state.favorites);
  renderFavorites();
  updateFavoriteSqlButton();
}

function addFavorite(sql, title = "", meta = favoriteConnectionMeta()) {
  const trimmed = normalizeSqlText(sql);
  if (!trimmed) {
    showToast("No SQL to favorite.", "error");
    return null;
  }
  const existing = favoriteForSql(trimmed, meta.connectionId || null);
  if (existing) {
    existing.updatedAt = Date.now();
    existing.title = title || existing.title;
    Object.assign(existing, meta);
    saveFavorites();
    return existing;
  }
  const favorite = {
    id: uid(),
    title: title || trimmed.replace(/\s+/g, " ").slice(0, 80),
    sql: trimmed,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    ...meta
  };
  state.favorites.unshift(favorite);
  saveFavorites();
  showToast("Added to favorites.");
  return favorite;
}

function removeFavorite(id) {
  const before = state.favorites.length;
  state.favorites = state.favorites.filter((item) => item.id !== id);
  if (state.favorites.length !== before) {
    saveFavorites();
    showToast("Removed favorite.");
  }
}

function renameFavorite(id) {
  const favorite = state.favorites.find((item) => item.id === id);
  if (!favorite) return;
  state.renamingFavoriteId = id;
  renderFavorites();
}

function toggleFavorite(sql, title = "", meta = favoriteConnectionMeta()) {
  const existing = favoriteForSql(sql, meta.connectionId || null);
  if (existing) {
    removeFavorite(existing.id);
    return null;
  }
  return addFavorite(sql, title, meta);
}

function currentSqlForFavorite() {
  return normalizeSqlText(activeSqlTab()?.sql || $("#sqlEditor")?.value || "");
}

function csvEscape(value) {
  if (value === null || value === undefined) return "";
  const textValue = typeof value === "object" ? JSON.stringify(value) : String(value);
  if (/[",\n\r]/.test(textValue)) return `"${textValue.replaceAll('"', '""')}"`;
  return textValue;
}

function rowsToCsv(fields, rows) {
  const names = fields.map((field) => field.name);
  return [
    names.map(csvEscape).join(","),
    ...rows.map((row) => names.map((name) => csvEscape(row[name])).join(","))
  ].join("\n");
}

function parseCsv(textValue) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let index = 0; index < textValue.length; index += 1) {
    const char = textValue[index];
    const next = textValue[index + 1];
    if (inQuotes) {
      if (char === '"' && next === '"') {
        cell += '"';
        index += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        cell += char;
      }
      continue;
    }
    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (char !== "\r") {
      cell += char;
    }
  }
  row.push(cell);
  rows.push(row);

  const nonEmptyRows = rows.filter((csvRow) => csvRow.some((value) => value.trim() !== ""));
  if (nonEmptyRows.length < 2) return [];
  const headers = nonEmptyRows[0].map((value) => value.trim()).filter(Boolean);
  return nonEmptyRows.slice(1).map((csvRow) => Object.fromEntries(
    headers.map((header, index) => [header, csvRow[index] ?? ""])
  ));
}

function parseJsonRows(textValue) {
  const parsed = JSON.parse(textValue);
  if (Array.isArray(parsed)) return parsed;
  if (Array.isArray(parsed.rows)) return parsed.rows;
  throw new Error("JSON import expects an array of objects or an object with a rows array.");
}

function fullValue(value) {
  if (value === null || value === undefined) return "NULL";
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "object") return JSON.stringify(value, null, 2);
  return String(value);
}

function cellValue(value) {
  if (value === null || value === undefined) return "NULL";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function editValue(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "object") return JSON.stringify(value, null, 2);
  return String(value);
}

function tableKey(schema, table) {
  return `${schema}.${table}`;
}

function typeKey(schema, name) {
  return `type:${schema}.${name}`;
}

function allSchemaTables() {
  return state.schemas.flatMap((schema) => schema.tables || []);
}

function tableByObjectKey(key) {
  return allSchemaTables().find((table) => tableKey(table.schema, table.name) === key) || null;
}

function pendingObjectDeleteForKey(key) {
  return state.pendingObjectDeletes.find((change) => change.objectKey === key) || null;
}

function schemaTreeSearch() {
  return $("#objectSearch")?.value?.trim?.().toLowerCase() || "";
}

function visibleSchemaTables() {
  const search = schemaTreeSearch();
  return state.schemas
    .filter((schema) => schema.name === state.selectedSchema)
    .flatMap((schema) => (schema.tables || []).filter((table) => (
      `${schema.name}.${table.name}`.toLowerCase().includes(search)
    )));
}

function visibleCustomTypes() {
  const search = schemaTreeSearch();
  return (state.catalog?.customTypes || []).filter((typeInfo) => (
    typeInfo.schema === state.selectedSchema
    && `${typeInfo.schema}.${typeInfo.name} ${typeInfo.labels?.join(" ") || ""}`.toLowerCase().includes(search)
  ));
}

function selectionModeFromEvent(event) {
  if (event.shiftKey && (event.metaKey || event.ctrlKey)) return "range-add";
  if (event.shiftKey) return "range";
  if (event.metaKey || event.ctrlKey) return "toggle";
  return "single";
}

function orderedRange(values, anchorValue, targetValue) {
  const targetIndex = values.indexOf(targetValue);
  if (targetIndex < 0) return [];
  const anchorIndex = values.indexOf(anchorValue);
  if (anchorIndex < 0) return [targetValue];
  const start = Math.min(anchorIndex, targetIndex);
  const end = Math.max(anchorIndex, targetIndex);
  return values.slice(start, end + 1);
}

function nextKeySelection(currentSelection, orderedKeys, anchorKey, targetKey, mode) {
  if (mode === "single") return new Set([targetKey]);
  if (mode === "toggle") {
    const next = new Set(currentSelection);
    if (next.has(targetKey)) next.delete(targetKey);
    else next.add(targetKey);
    return next;
  }
  if (mode === "range" || mode === "range-add") {
    const range = orderedRange(orderedKeys, anchorKey, targetKey);
    if (mode === "range-add") return new Set([...currentSelection, ...range]);
    return new Set(range);
  }
  return new Set([...currentSelection, targetKey]);
}

function nextSelectionAnchor(currentAnchor, orderedKeys, targetKey, mode) {
  if ((mode === "range" || mode === "range-add" || mode === "add") && orderedKeys.includes(currentAnchor)) {
    return currentAnchor;
  }
  return targetKey;
}

function activeObjectSelection() {
  const keys = state.selectedObjectKeys.size
    ? [...state.selectedObjectKeys]
    : state.selectedTableKey
      ? [state.selectedTableKey]
      : [];
  return keys.map((key) => {
    const table = tableByObjectKey(key);
    return table ? { key, table } : null;
  }).filter(Boolean);
}

function updateSchemaSelectionClasses() {
  $$("#schemaTree .schema-row[data-object-key]").forEach((row) => {
    row.classList.toggle("selected-object", state.selectedObjectKeys.has(row.dataset.objectKey));
  });
  $$("#schemaTree .schema-row[data-type-key]").forEach((row) => {
    row.classList.toggle("selected-object", state.selectedTypeKeys.has(row.dataset.typeKey));
  });
}

function customTypeLabels(schema, name) {
  return (state.catalog?.customTypes || []).find((typeInfo) => (
    typeInfo.schema === schema && typeInfo.name === name
  ))?.labels || [];
}

function enumOptionsForColumn(columnName) {
  const column = state.currentTableInfo?.columns?.find((item) => item.name === columnName);
  if (!column?.is_enum) return [];
  return customTypeLabels(column.type_schema, column.type_name);
}

function recordCellEdit({ row, rowIndex, rowKey, pkValues, column, value }) {
  row[column] = value;
  const insertChange = state.pendingEdits.find((change) => change.action === "insert" && change.rowKey === rowKey);
  if (insertChange) {
    insertChange.values[column] = value;
  } else {
    state.pendingEdits.push({ action: "update", rowIndex, rowKey, pkValues, column, value });
  }
  const tab = activeTableTab();
  if (tab) tab.pendingEdits = [...state.pendingEdits];
  updateApplySelectedState();
  $("#commitButton").disabled = false;
}

function dataRowKey(row, rowIndex, result = state.currentTable) {
  if (row?.__rowKey) return row.__rowKey;
  const primaryKey = result?.primaryKey || [];
  if (primaryKey.length > 0) {
    const pkValues = {};
    for (const pk of primaryKey) pkValues[pk] = row?.[pk];
    return JSON.stringify(pkValues);
  }
  row.__rowKey = `row-${rowIndex}-${uid()}`;
  return row.__rowKey;
}

function restoreDataSelectionFromSelectedIndex(result = state.currentTable) {
  state.selectedRows = new Set();
  state.dataSelectionAnchorKey = null;
  if (state.selectedRowIndex === null || !result?.rows?.[state.selectedRowIndex]) return;
  const row = result.rows[state.selectedRowIndex];
  const rowKey = dataRowKey(row, state.selectedRowIndex, result);
  state.selectedRows = new Set([rowKey]);
  state.dataSelectionAnchorKey = rowKey;
}

function rowPkValues(row, result = state.currentTable) {
  const pkValues = {};
  for (const pk of result?.primaryKey || []) pkValues[pk] = row?.[pk];
  return pkValues;
}

function foreignKeyForColumn(columnName) {
  return state.currentTableInfo?.constraints?.find((constraint) => (
    constraint.type === "f" && Array.isArray(constraint.columns) && constraint.columns.includes(columnName)
  )) || null;
}

function renderCellValue(cell, field, row, displayValue) {
  const fk = foreignKeyForColumn(field.name);
  if (!fk || row[field.name] === null || row[field.name] === undefined) {
    cell.textContent = displayValue;
    return;
  }

  const wrapper = document.createElement("span");
  wrapper.className = "fk-cell";
  const value = document.createElement("span");
  value.textContent = displayValue;
  const jump = document.createElement("button");
  jump.type = "button";
  jump.className = "fk-jump";
  jump.title = `Open ${fk.foreign_schema}.${fk.foreign_table}`;
  jump.textContent = ">";
  jump.contentEditable = "false";
  jump.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openForeignKeyTab(fk, row);
  });
  wrapper.append(value, jump);
  cell.replaceChildren(wrapper);
}

function openEnumCellEditor(cell, field, row, rowIndex, rowKey, pkValues) {
  const labels = enumOptionsForColumn(field.name);
  if (labels.length === 0 || cell.querySelector("select")) return;
  const current = row[field.name] ?? "";
  const select = document.createElement("select");
  select.className = "cell-select-editor";
  const options = labels.includes(current) || current === "" ? labels : [current, ...labels];
  select.innerHTML = [
    current === "" ? '<option value=""></option>' : "",
    ...options.map((label) => `<option value="${escapeHtml(label)}">${escapeHtml(label)}</option>`)
  ].join("");
  select.value = current;
  cell.replaceChildren(select);
  select.focus();
  select.addEventListener("click", (event) => event.stopPropagation());
  select.addEventListener("change", () => {
    const nextValue = select.value;
    cell.classList.add("changed");
    recordCellEdit({ row, rowIndex, rowKey, pkValues, column: field.name, value: nextValue });
    cell.replaceChildren();
    renderCellValue(cell, field, row, cellValue(nextValue));
  });
  select.addEventListener("blur", () => {
    if (cell.contains(select)) {
      cell.replaceChildren();
      renderCellValue(cell, field, row, cellValue(row[field.name]));
    }
  });
}

function openTextCellInputEditor(cell, field, row, rowIndex, rowKey, pkValues) {
  if (cell.querySelector("input")) return;
  clearPendingRowInspector();
  const beforeValue = editValue(row[field.name]);
  const input = document.createElement("input");
  input.className = "cell-text-editor";
  input.value = beforeValue === "NULL" ? "" : beforeValue;
  cell.replaceChildren(input);
  input.focus();
  input.select();

  const finish = (commit = true) => {
    if (!cell.contains(input)) return;
    const nextValue = input.value;
    cell.replaceChildren();
    if (commit && nextValue !== beforeValue) {
      cell.classList.add("changed");
      recordCellEdit({
        row,
        rowIndex,
        rowKey,
        pkValues,
        column: field.name,
        value: nextValue
      });
      renderCellValue(cell, field, row, cellValue(nextValue));
    } else {
      renderCellValue(cell, field, row, cellValue(row[field.name]));
    }
    showRowInspector(row, rowIndex, cell);
  };

  input.addEventListener("mousedown", (event) => event.stopPropagation());
  input.addEventListener("click", (event) => event.stopPropagation());
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      finish(true);
    }
    if (event.key === "Escape") {
      event.preventDefault();
      finish(false);
    }
  });
  input.addEventListener("blur", () => finish(true));
}

async function openForeignKeyTab(fk, row) {
  if (!fk.foreign_schema || !fk.foreign_table || !Array.isArray(fk.foreign_columns)) return;
  const filters = fk.columns.map((column, index) => ({
    enabled: true,
    column: fk.foreign_columns[index],
    operator: "=",
    value: row[column] === null || row[column] === undefined ? "" : String(row[column]),
    value2: ""
  })).filter((filter) => filter.column && filter.value !== "");
  if (filters.length === 0) {
    showToast("Foreign key value is empty.", "error");
    return;
  }
  const tab = getOrCreateTableTab(fk.foreign_schema, fk.foreign_table);
  tab.filters = filters;
  tab.filterJoin = "and";
  tab.filtersApplied = true;
  tab.filterBarOpen = true;
  tab.gridSearch = "";
  state.filters = cloneFilters(filters);
  state.filterJoin = "and";
  persistTableFilterState(fk.foreign_schema, fk.foreign_table, tab.filters, tab.filterJoin);
  addHistoryEntry("fk", `Follow FK to ${fk.foreign_schema}.${fk.foreign_table}`);
  toggleFilterBar(true);
  await openTable(fk.foreign_schema, fk.foreign_table, 0, { force: true });
}

function cloneFilters(filters = []) {
  return filters.map((filter) => ({ ...filter }));
}

function normalizedFilterJoin(value) {
  return String(value || "").toLowerCase() === "or" ? "or" : "and";
}

function tableFilterStorageKey(schema, table, connection = activeConnection()) {
  if (!connection || !schema || !table) return "";
  return JSON.stringify([connection.id, connection.database || "", schema, table]);
}

function savedTableFilterState(schema, table) {
  const key = tableFilterStorageKey(schema, table);
  const saved = key ? state.tableFilters[key] : null;
  return {
    filters: cloneFilters(saved?.filters || []),
    filterJoin: normalizedFilterJoin(saved?.filterJoin)
  };
}

function persistTableFilterState(schema, table, filters = state.filters, filterJoin = state.filterJoin) {
  const key = tableFilterStorageKey(schema, table);
  if (!key) return;
  const nextFilters = cloneFilters(filters).filter((filter) => (
    filter.column || filter.value || filter.value2
  ));
  if (nextFilters.length === 0) {
    delete state.tableFilters[key];
  } else {
    state.tableFilters[key] = {
      filters: nextFilters,
      filterJoin: normalizedFilterJoin(filterJoin)
    };
  }
  save(storageKeys.tableFilters, state.tableFilters);
}

function filtersAppliedForTab(tab = activeTableTab()) {
  return Boolean(tab?.filtersApplied);
}

function activeQueryFiltersForTab(tab = activeTableTab()) {
  return filtersAppliedForTab(tab) ? cloneFilters(tab?.filters || []) : [];
}

function activeQueryFilterJoinForTab(tab = activeTableTab()) {
  return filtersAppliedForTab(tab) ? normalizedFilterJoin(tab?.filterJoin || state.filterJoin) : "and";
}

function activeTableTab() {
  return state.tableTabs.find((tab) => tab.id === state.activeTableTabId) || null;
}

function getOrCreateTableTab(schema, table) {
  const id = tableKey(schema, table);
  let tab = state.tableTabs.find((item) => item.id === id);
  if (!tab) {
    const savedFilters = savedTableFilterState(schema, table);
    tab = {
      id,
      schema,
      table,
      title: `${schema}.${table}`,
      result: null,
      tableInfo: state.catalog?.tables?.[id] || null,
      filters: savedFilters.filters,
      filterJoin: savedFilters.filterJoin,
      filtersApplied: false,
      filterBarOpen: false,
      sort: null,
      gridSearch: "",
      selectedRowIndex: null,
      pendingEdits: []
    };
    state.tableTabs.push(tab);
  }
  return tab;
}

function saveActiveTabState() {
  const tab = activeTableTab();
  if (!tab) return;
  tab.result = state.currentTable;
  tab.tableInfo = state.currentTableInfo;
  tab.filters = cloneFilters(state.filters);
  tab.filterJoin = normalizedFilterJoin(state.filterJoin);
  tab.filterBarOpen = !$("#filterBar")?.hidden && state.filters.length > 0;
  tab.sort = state.currentTable?.sort || tab.sort || null;
  tab.gridSearch = $("#gridSearch")?.value || "";
  tab.selectedRowIndex = state.selectedRowIndex;
  tab.pendingEdits = [...state.pendingEdits];
  persistTableFilterState(tab.schema, tab.table, tab.filters, tab.filterJoin);
}

function quoteIdentJs(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function quoteLiteralJs(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}

function qualifiedJs(schema, name) {
  return `${quoteIdentJs(schema)}.${quoteIdentJs(name)}`;
}

function filterValueListSql(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map(quoteLiteralJs)
    .join(", ");
}

function filterToSql(filter) {
  if (!filter?.enabled || !filter.column || !filter.operator) return "";
  const column = quoteIdentJs(filter.column);
  const value = filter.value ?? "";
  const value2 = filter.value2 ?? "";
  switch (filter.operator) {
    case "IN":
    case "NOT IN":
      return `${column} ${filter.operator} (${filterValueListSql(value) || "NULL"})`;
    case "IS NULL":
    case "IS NOT NULL":
      return `${column} ${filter.operator}`;
    case "BETWEEN":
    case "NOT BETWEEN":
      return `${column} ${filter.operator} ${quoteLiteralJs(value)} AND ${quoteLiteralJs(value2)}`;
    case "CONTAINS":
      return `${column}::text LIKE ${quoteLiteralJs(`%${value}%`)}`;
    case "NOT CONTAINS":
      return `${column}::text NOT LIKE ${quoteLiteralJs(`%${value}%`)}`;
    case "CONTAINS_CI":
      return `${column}::text ILIKE ${quoteLiteralJs(`%${value}%`)}`;
    case "NOT_CONTAINS_CI":
      return `${column}::text NOT ILIKE ${quoteLiteralJs(`%${value}%`)}`;
    case "PREFIX":
      return `${column}::text LIKE ${quoteLiteralJs(`${value}%`)}`;
    case "SUFFIX":
      return `${column}::text LIKE ${quoteLiteralJs(`%${value}`)}`;
    case "PREFIX_CI":
      return `${column}::text ILIKE ${quoteLiteralJs(`${value}%`)}`;
    case "SUFFIX_CI":
      return `${column}::text ILIKE ${quoteLiteralJs(`%${value}`)}`;
    default:
      return `${column} ${filter.operator || "="} ${quoteLiteralJs(value)}`;
  }
}

function tableQueryPreview(schema, table, offset, tab = activeTableTab()) {
  const joinMode = activeQueryFilterJoinForTab(tab);
  const joiner = joinMode === "or" ? " OR " : " AND ";
  const where = activeQueryFiltersForTab(tab)
    .map(filterToSql)
    .filter(Boolean)
    .map((clause) => `(${clause})`)
    .join(joiner);
  const sort = tab?.sort?.column
    ? ` ORDER BY ${quoteIdentJs(tab.sort.column)} ${String(tab.sort.direction).toUpperCase()} NULLS LAST`
    : "";
  return `SELECT * FROM ${qualifiedJs(schema, table)}${where ? ` WHERE ${where}` : ""}${sort} LIMIT ${pageSize} OFFSET ${Math.max(Number(offset) || 0, 0)};`;
}

function setRowInspectorVisible(visible) {
  const dataMain = $(".data-main");
  const inspector = $("#rowInspector");
  const resizer = $("#inspectorResizer");
  dataMain?.classList.toggle("has-row-inspector", Boolean(visible));
  if (inspector) inspector.hidden = !visible;
  if (resizer) resizer.hidden = !visible;
}

function clearPendingRowInspector() {
  if (!state.rowInspectorTimer) return;
  clearTimeout(state.rowInspectorTimer);
  state.rowInspectorTimer = null;
}

function revealGridCell(cell) {
  if (!cell) return;
  const scroller = cell.closest(".table-scroll-inner");
  if (!scroller) return;

  const adjust = () => {
    if (!cell.isConnected || !scroller.isConnected) return;
    const cellRect = cell.getBoundingClientRect();
    const scrollRect = scroller.getBoundingClientRect();
    const padding = 24;
    const visibleLeft = scrollRect.left + padding;
    const visibleRight = scrollRect.right - padding;
    const visibleTop = scrollRect.top + padding;
    const visibleBottom = scrollRect.bottom - padding;

    if (cellRect.right > visibleRight) {
      scroller.scrollLeft += Math.ceil(cellRect.right - visibleRight);
    } else if (cellRect.left < visibleLeft) {
      scroller.scrollLeft -= Math.ceil(visibleLeft - cellRect.left);
    }

    if (cellRect.bottom > visibleBottom) {
      scroller.scrollTop += Math.ceil(cellRect.bottom - visibleBottom);
    } else if (cellRect.top < visibleTop) {
      scroller.scrollTop -= Math.ceil(visibleTop - cellRect.top);
    }
  };

  requestAnimationFrame(() => requestAnimationFrame(adjust));
}

function showRowInspector(row, rowIndex, anchorCell = null, options = {}) {
  clearPendingRowInspector();
  const open = () => {
    state.rowInspectorTimer = null;
    renderRowInspector(row, rowIndex);
    revealGridCell(anchorCell);
  };
  if (options.defer) {
    state.rowInspectorTimer = setTimeout(open, 170);
    return;
  }
  open();
}

function closeRowInspector() {
  clearPendingRowInspector();
  state.selectedRowIndex = null;
  state.selectedRows = new Set();
  state.dataSelectionAnchorKey = null;
  const tab = activeTableTab();
  if (tab) tab.selectedRowIndex = null;
  $$("#dataGrid tr.selected-row").forEach((item) => item.classList.remove("selected-row"));
  renderRowInspector(null);
  updateApplySelectedState();
}

function setGridLoading(schema, table) {
  $("#tableTitle").textContent = `${schema}.${table}`;
  $("#tableSubtitle").textContent = "Loading rows...";
  const tbody = document.createElement("tbody");
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.className = "grid-loading-cell";
  cell.colSpan = 4;
  appendLoadingState(cell, "Loading rows...");
  row.append(cell);
  tbody.append(row);
  $("#dataGrid").replaceChildren(tbody);
  $("#rowInspectorMeta").textContent = "Loading";
  appendLoadingState($("#rowInspectorBody"), "Loading row data...");
  setRowInspectorVisible(false);
  $("#pageInfo").textContent = "Loading...";
  $("#prevPageButton").disabled = true;
  $("#nextPageButton").disabled = true;
}

function updateDataRefreshButton() {
  $$(".refresh-data-action").forEach((refreshButton) => {
    const active = Boolean(state.dataRefreshLoading);
    refreshButton.disabled = !state.currentTable || active;
    refreshButton.classList.toggle("loading", active);
  });
}

function setDataRefreshLoading(active) {
  state.dataRefreshLoading = active ? state.activeTableTabId : null;
  updateDataRefreshButton();
}

function renderDataTabs() {
  const bar = $("#dataTabBar");
  bar.innerHTML = "";
  if (state.tableTabs.length === 0) {
    const empty = document.createElement("span");
    empty.className = "data-tab-empty";
    empty.textContent = "No table tabs";
    bar.append(empty);
    return;
  }

  for (const tab of state.tableTabs) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `data-tab ${tab.id === state.activeTableTabId ? "active" : ""}`;
    const title = document.createElement("span");
    title.textContent = tab.title;
    const close = document.createElement("span");
    close.className = "data-tab-close";
    close.textContent = "x";
    close.title = "Close tab";
    close.addEventListener("click", (event) => {
      event.stopPropagation();
      closeTableTab(tab.id);
    });
    button.append(title, close);
    button.addEventListener("click", () => activateTableTab(tab.id));
    bar.append(button);
  }
}

function closeTableTab(id) {
  const index = state.tableTabs.findIndex((tab) => tab.id === id);
  if (index < 0) return;
  state.tableTabs.splice(index, 1);
  if (state.activeTableTabId === id) {
    const next = state.tableTabs[Math.max(0, index - 1)] || state.tableTabs[0] || null;
    if (next) {
      activateTableTab(next.id);
    } else {
      state.activeTableTabId = null;
      state.currentTable = null;
      state.currentTableInfo = null;
      state.pendingEdits = [];
      state.filters = [];
      state.filterJoin = "and";
      syncFilterBarVisibility();
      $("#dataGrid").innerHTML = "";
      $("#tableTitle").textContent = "No table selected";
      $("#tableSubtitle").textContent = "";
      $("#pageInfo").textContent = "Rows 0-0";
      $("#gridSearch").value = "";
      $("#dataElapsed").textContent = "No query";
      setDataRefreshLoading(false);
      renderRowInspector(null);
      renderDataTabs();
      updateApplySelectedState();
      saveActiveConnectionTabState();
    }
    return;
  }
  renderDataTabs();
  saveActiveConnectionTabState();
}

function activateTableTab(id) {
  const tab = state.tableTabs.find((item) => item.id === id);
  if (!tab) return;
  state.activeTableTabId = id;
  state.selectedSchema = tab.schema;
  state.selectedTableKey = id;
  state.currentTable = tab.result;
  state.currentTableInfo = tab.tableInfo;
  state.currentOffset = tab.result?.offset || 0;
  state.selectedRowIndex = tab.selectedRowIndex ?? null;
  restoreDataSelectionFromSelectedIndex(state.currentTable);
  state.filters = cloneFilters(tab.filters);
  state.filterJoin = normalizedFilterJoin(tab.filterJoin);
  state.pendingEdits = [...(tab.pendingEdits || [])];
  $("#gridSearch").value = tab.gridSearch || "";
  $("#tableInfoButton").disabled = !state.currentTableInfo;
  $("#structureInfoButton").disabled = !state.currentTableInfo;
  updateDataRefreshButton();
  renderSchema();
  renderDataTabs();
  showDataMode();
  renderDataGrid(state.currentTable, true);
  renderStructure(state.currentTableInfo);
  syncFilterBarVisibility();
  updateApplySelectedState();
  saveActiveConnectionTabState();
}

function appendLoadingState(node, message, compact = false) {
  node.replaceChildren();
  const wrapper = document.createElement(node.tagName === "SPAN" ? "span" : "div");
  wrapper.className = `loading-state ${compact ? "compact" : ""}`.trim();
  const spinner = document.createElement("span");
  spinner.className = "spinner";
  const label = document.createElement("span");
  label.textContent = message;
  wrapper.append(spinner, label);
  node.append(wrapper);
}

function setSchemaLoading(message = "Loading tables...") {
  appendLoadingState($("#schemaTree"), message, true);
}

function setSchemaError(message = "Connection failed.") {
  const tree = $("#schemaTree");
  tree.replaceChildren();
  const wrapper = document.createElement("div");
  wrapper.className = "empty-state error";
  wrapper.textContent = message;
  tree.append(wrapper);
}

function setBusy(message) {
  appendLoadingState($("#editorStatus"), message || "Working", true);
}

function setReady(message = "Ready") {
  $("#editorStatus").textContent = message;
}

function setConnectionTestButton(label = "Test", status = "") {
  const button = $("#testConnectionButton");
  if (!button) return;
  button.classList.toggle("test-success", status === "success");
  button.classList.toggle("test-error", status === "error");
  button.innerHTML = `<span data-icon="plug"></span>${label}`;
  installIcons();
}

function updateConnectionExportButton() {
  const button = $("#exportConnectionsButton");
  if (!button) return;
  const selectedCount = state.selectedConnectionIds.size;
  const label = selectedCount > 0
    ? `Export ${selectedCount} selected connection${selectedCount === 1 ? "" : "s"}`
    : "Export connections";
  button.title = label;
  button.setAttribute("aria-label", label);
  button.classList.toggle("active", selectedCount > 0);
}

function closeConnectionMenu({ render = false } = {}) {
  if (!state.openConnectionMenuId) return;
  state.openConnectionMenuId = null;
  state.connectionMenuPosition = null;
  $$(".connection-item .connection-menu").forEach((menu) => {
    menu.hidden = true;
  });
  if (render) renderConnections();
}

function toggleConnectionSelection(connectionId, selected) {
  state.connectionSelectionMode = true;
  if (selected === false) state.selectedConnectionIds.delete(connectionId);
  else state.selectedConnectionIds.add(connectionId);
  if (state.selectedConnectionIds.size === 0) state.connectionSelectionMode = false;
  updateConnectionExportButton();
  renderConnections();
}

function selectedExportConnections() {
  if (state.selectedConnectionIds.size === 0) return [...state.connections];
  const selected = new Set(state.selectedConnectionIds);
  return state.connections.filter((connection) => selected.has(connection.id));
}

function renderConnections() {
  const list = $("#connectionList");
  const search = $("#connectionSearch").value.trim().toLowerCase();
  const connections = state.connections.filter((connection) => {
    return [connection.name, connection.host, connection.database, connection.user, normalizeTag(connection.tag)]
      .join(" ")
      .toLowerCase()
      .includes(search);
  });

  if (connections.length === 0) {
    list.innerHTML = '<div class="empty-state">No saved connections.</div>';
    updateConnectionExportButton();
    return;
  }

  list.innerHTML = "";
  for (const connection of connections) {
    const selectedForExport = state.selectedConnectionIds.has(connection.id);
    const button = document.createElement("div");
    button.className = [
      "connection-item",
      connection.id === state.activeConnectionId ? "active" : "",
      state.connectionSelectionMode ? "selecting" : "",
      selectedForExport ? "selected-for-export" : ""
    ].filter(Boolean).join(" ");
    button.role = "button";
    button.tabIndex = 0;
    button.draggable = !state.connectionSelectionMode;
    button.dataset.connectionId = connection.id;
    button.innerHTML = `
      <span class="connection-select-slot">
        <input class="connection-select-checkbox" type="checkbox" aria-label="Select ${escapeHtml(connection.name)} for export" />
      </span>
      <span data-icon="database"></span>
      <span class="grow">
        <span class="connection-name-row">
          <strong class="connection-name"></strong>
          <span class="connection-tag"></span>
        </span>
        <span class="connection-subtitle"></span>
      </span>
      <span class="connection-actions">
        <button class="icon-button connection-menu-button" title="Connection actions" aria-label="Connection actions">
          <span data-icon="moreHorizontal"></span>
        </button>
        <span class="connection-menu" hidden>
          <button type="button" data-action="settings">
            <span data-icon="settings"></span>
            Settings
          </button>
          <button type="button" data-action="select">
            <span data-icon="check"></span>
            Select
          </button>
          <button type="button" data-action="duplicate">
            <span data-icon="copy"></span>
            Duplicate
          </button>
          <button type="button" data-action="export">
            <span data-icon="download"></span>
            Export
          </button>
          <button type="button" data-action="delete">
            <span data-icon="trash"></span>
            Delete
          </button>
        </span>
      </span>
    `;
    const tag = normalizeTag(connection.tag);
    button.querySelector(".connection-name").textContent = connection.name;
    const tagNode = button.querySelector(".connection-tag");
    tagNode.textContent = tag;
    applyTagStyle(tagNode, tag, connection.tagColor);
    button.querySelector(".connection-subtitle").textContent = `${connection.user}@${connection.host}/${connection.database}`;
    const checkbox = button.querySelector(".connection-select-checkbox");
    checkbox.checked = selectedForExport;
    checkbox.hidden = !state.connectionSelectionMode;
    checkbox.disabled = !state.connectionSelectionMode;
    checkbox.addEventListener("click", (event) => event.stopPropagation());
    checkbox.addEventListener("change", () => toggleConnectionSelection(connection.id, checkbox.checked));
    button.addEventListener("click", () => {
      if (state.connectionSelectionMode) {
        toggleConnectionSelection(connection.id, !state.selectedConnectionIds.has(connection.id));
        return;
      }
      connect(connection.id);
    });
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (state.connectionSelectionMode) toggleConnectionSelection(connection.id, !state.selectedConnectionIds.has(connection.id));
        else connect(connection.id);
      }
    });
    button.addEventListener("dragstart", (event) => {
      if (state.connectionSelectionMode || event.target.closest(".connection-actions")) {
        event.preventDefault();
        return;
      }
      state.draggedConnectionId = connection.id;
      button.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", connection.id);
    });
    button.addEventListener("dragover", (event) => {
      if (!state.draggedConnectionId || state.draggedConnectionId === connection.id) return;
      event.preventDefault();
      button.classList.add("drag-over");
      event.dataTransfer.dropEffect = "move";
    });
    button.addEventListener("dragleave", () => {
      button.classList.remove("drag-over");
    });
    button.addEventListener("drop", (event) => {
      event.preventDefault();
      button.classList.remove("drag-over");
      reorderConnection(state.draggedConnectionId || event.dataTransfer.getData("text/plain"), connection.id);
    });
    button.addEventListener("dragend", () => {
      state.draggedConnectionId = null;
      $$(".connection-item").forEach((item) => item.classList.remove("dragging", "drag-over"));
    });
    const menu = button.querySelector(".connection-menu");
    menu.hidden = state.openConnectionMenuId !== connection.id;
    if (!menu.hidden && state.connectionMenuPosition) {
      menu.style.top = `${state.connectionMenuPosition.top}px`;
      menu.style.left = `${state.connectionMenuPosition.left}px`;
    }
    button.querySelector(".connection-menu-button").addEventListener("click", (event) => {
      event.stopPropagation();
      const rect = event.currentTarget.getBoundingClientRect();
      const shouldOpen = state.openConnectionMenuId !== connection.id;
      state.connectionMenuPosition = {
        top: rect.bottom + 6,
        left: Math.min(Math.max(8, rect.right - 150), window.innerWidth - 158)
      };
      state.openConnectionMenuId = shouldOpen ? connection.id : null;
      renderConnections();
    });
    button.querySelector(".connection-menu").addEventListener("click", (event) => {
      event.stopPropagation();
      const action = event.target.closest("button")?.dataset.action;
      closeConnectionMenu();
      if (action === "settings") openConnectionDialog(connection);
      if (action === "select") toggleConnectionSelection(connection.id, true);
      if (action === "duplicate") duplicateConnection(connection);
      if (action === "export") exportSingleConnection(connection);
      if (action === "delete") deleteConnection(connection);
    });
    list.append(button);
  }
  installIcons();
  updateConnectionExportButton();
}

function reorderConnection(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) return;
  const from = state.connections.findIndex((connection) => connection.id === sourceId);
  const to = state.connections.findIndex((connection) => connection.id === targetId);
  if (from < 0 || to < 0) return;
  const [moved] = state.connections.splice(from, 1);
  state.connections.splice(to, 0, moved);
  save(storageKeys.connections, state.connections);
  state.draggedConnectionId = null;
  renderConnections();
}

function renderSchema() {
  const tree = $("#schemaTree");
  const search = schemaTreeSearch();
  updateActiveDatabaseLabel();
  renderSchemaSelect();
  if (!activeConnection()) {
    tree.innerHTML = '<div class="empty-state">Connect to browse objects.</div>';
    return;
  }
  if (state.schemas.length === 0) {
    tree.innerHTML = '<div class="empty-state">No schema loaded.</div>';
    return;
  }

  if (!state.selectedSchema || !state.schemas.some((schema) => schema.name === state.selectedSchema)) {
    state.selectedSchema = state.schemas[0]?.name || null;
  }
  tree.innerHTML = "";
  const visibleSchemas = state.schemas.filter((schema) => schema.name === state.selectedSchema);
  for (const schema of visibleSchemas) {
    const tables = schema.tables.filter((table) => {
      return `${schema.name}.${table.name}`.toLowerCase().includes(search);
    });

    const group = document.createElement("div");
    group.className = "schema-group";
    const schemaButton = document.createElement("button");
    schemaButton.type = "button";
    schemaButton.className = `schema-name ${state.selectedSchema === schema.name ? "active" : ""}`;
    schemaButton.textContent = schema.name;
    schemaButton.addEventListener("click", () => {
      state.selectedSchema = schema.name;
      renderSchema();
    });
    group.append(schemaButton);

    if (tables.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state compact-empty";
      empty.textContent = search ? "No matching tables." : "No tables in this schema.";
      group.append(empty);
    }
    for (const table of tables) {
      const key = tableKey(table.schema, table.name);
      const pendingDelete = pendingObjectDeleteForKey(key);
      const row = document.createElement("button");
      row.className = [
        "schema-row",
        state.selectedTableKey === key ? "active" : "",
        state.selectedObjectKeys.has(key) ? "selected-object" : "",
        pendingDelete ? "pending-delete-object" : ""
      ].filter(Boolean).join(" ");
      row.type = "button";
      row.dataset.objectKey = key;
      row.innerHTML = `
        <span data-icon="table"></span>
        <span class="grow"></span>
        <span class="badge"></span>
      `;
      row.querySelector(".grow").textContent = table.name;
      row.querySelector(".badge").textContent = pendingDelete
        ? (pendingDelete.cascade ? "drop cascade" : "drop")
        : table.type === "VIEW"
          ? "view"
          : `${table.columns.length}`;
      const selectObject = (mode = "single") => {
        const orderedKeys = visibleSchemaTables().map((item) => tableKey(item.schema, item.name));
        state.schemaSelectionKind = "table";
        state.selectedTypeKeys = new Set();
        state.schemaObjectSelectionAnchorKey = nextSelectionAnchor(
          state.schemaObjectSelectionAnchorKey,
          orderedKeys,
          key,
          mode
        );
        state.selectedObjectKeys = nextKeySelection(
          state.selectedObjectKeys,
          orderedKeys,
          state.schemaObjectSelectionAnchorKey,
          key,
          mode
        );
        updateSchemaSelectionClasses();
      };
      row.addEventListener("mousedown", (event) => {
        if (event.button !== 0) return;
        state.schemaDragMoved = false;
        const mode = selectionModeFromEvent(event);
        selectObject(mode);
        state.dragSelection = mode.startsWith("range") ? null : { source: "schema", mode: "add" };
      });
      row.addEventListener("mouseenter", () => {
        if (state.dragSelection?.source !== "schema") return;
        state.schemaDragMoved = true;
        if (!state.selectedObjectKeys.has(key)) selectObject("add");
      });
      row.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || state.schemaDragMoved) return;
        openTable(table.schema, table.name, 0);
      });
      row.addEventListener("dblclick", () => openTable(table.schema, table.name, 0, { force: true }));
      row.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        if (!state.selectedObjectKeys.has(key)) {
          state.schemaSelectionKind = "table";
          state.selectedTypeKeys = new Set();
          state.selectedObjectKeys = new Set([key]);
          state.schemaObjectSelectionAnchorKey = key;
          renderSchema();
        }
        openObjectContextMenu(event);
      });
      group.append(row);
    }
    tree.append(group);
  }
  renderCustomTypes(tree, search);
  installIcons();
}

function renderSchemaSelect() {
  const select = $("#schemaSelect");
  if (!select) return;
  const current = state.selectedSchema;
  select.innerHTML = "";
  if (!activeConnection() || state.schemas.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No schema";
    select.append(option);
    select.disabled = true;
    return;
  }
  select.disabled = false;
  for (const schema of state.schemas) {
    const option = document.createElement("option");
    option.value = schema.name;
    option.textContent = schema.name;
    select.append(option);
  }
  if (current && state.schemas.some((schema) => schema.name === current)) {
    select.value = current;
  } else {
    select.value = state.schemas[0]?.name || "";
  }
}

function renderCustomTypes(tree, search) {
  const types = (state.catalog?.customTypes || []).filter((typeInfo) => {
    return typeInfo.schema === state.selectedSchema
      && `${typeInfo.schema}.${typeInfo.name} ${typeInfo.labels?.join(" ") || ""}`.toLowerCase().includes(search);
  });
  if (types.length === 0) return;

  const details = document.createElement("details");
  details.className = "type-tree";
  details.open = true;
  const summary = document.createElement("summary");
  summary.textContent = `Custom Types (${types.length})`;
  summary.tabIndex = 0;
  summary.addEventListener("mousedown", () => {
    state.schemaSelectionKind = "type";
  });
  summary.addEventListener("focus", () => {
    state.schemaSelectionKind = "type";
  });
  details.append(summary);

  for (const typeInfo of types) {
    const key = typeKey(typeInfo.schema, typeInfo.name);
    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      "schema-row",
      "type-row",
      state.selectedTypeKeys.has(key) ? "selected-object" : ""
    ].filter(Boolean).join(" ");
    button.dataset.typeKey = key;
    button.innerHTML = `
      <span data-icon="filter"></span>
      <span class="grow"></span>
      <span class="badge"></span>
    `;
    button.querySelector(".grow").textContent = `${typeInfo.schema}.${typeInfo.name}`;
    button.querySelector(".badge").textContent = `${typeInfo.labels?.length || 0}`;
    const selectType = (mode = "single") => {
      const orderedKeys = visibleCustomTypes().map((item) => typeKey(item.schema, item.name));
      state.schemaSelectionKind = "type";
      state.selectedObjectKeys = new Set();
      state.schemaTypeSelectionAnchorKey = nextSelectionAnchor(
        state.schemaTypeSelectionAnchorKey,
        orderedKeys,
        key,
        mode
      );
      state.selectedTypeKeys = nextKeySelection(
        state.selectedTypeKeys,
        orderedKeys,
        state.schemaTypeSelectionAnchorKey,
        key,
        mode
      );
      updateSchemaSelectionClasses();
    };
    button.addEventListener("mousedown", (event) => {
      if (event.button !== 0) return;
      state.schemaDragMoved = false;
      const mode = selectionModeFromEvent(event);
      selectType(mode);
      state.dragSelection = mode.startsWith("range") ? null : { source: "schema-types", mode: "add" };
    });
    button.addEventListener("mouseenter", () => {
      if (state.dragSelection?.source !== "schema-types") return;
      state.schemaDragMoved = true;
      if (!state.selectedTypeKeys.has(key)) selectType("add");
    });
    button.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || state.schemaDragMoved) return;
    });
    button.addEventListener("dblclick", () => openTypeEditor(typeInfo));
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        openTypeEditor(typeInfo);
      }
    });
    details.append(button);
  }
  tree.append(details);
}

function renderHistory() {
  $("#historyCount").textContent = `${state.history.length} statement${state.history.length === 1 ? "" : "s"}`;
  const list = $("#historyList");
  if (state.history.length === 0) {
    list.innerHTML = '<div class="empty-state">No query history.</div>';
    return;
  }
  list.innerHTML = "";
  for (const item of state.history) {
    const isDirectSql = !item.type && Boolean(item.sql);
    const row = document.createElement("div");
    row.className = "history-item";
    row.innerHTML = `
      <span data-icon="clock"></span>
      <span class="grow">
        <strong></strong>
        <span></span>
      </span>
      <span class="history-actions"></span>
    `;
    const label = isDirectSql ? item.sql : item.label || item.sql || "";
    row.querySelector("strong").textContent = label.replace(/\s+/g, " ").slice(0, 92);
    row.querySelector(".grow span").textContent = `${item.connection || "Unknown"} - ${new Date(item.createdAt).toLocaleString()}`;
    const actions = row.querySelector(".history-actions");
    if (isDirectSql) {
      const favoriteButton = document.createElement("button");
      favoriteButton.type = "button";
      favoriteButton.className = `icon-button mini-icon ${favoriteForSql(item.sql || "", item.connectionId || null) ? "active" : ""}`;
      favoriteButton.title = "Toggle favorite";
      favoriteButton.innerHTML = '<span data-icon="star"></span>';
      favoriteButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleFavorite(item.sql, label.replace(/\s+/g, " ").slice(0, 80), {
          connectionId: item.connectionId || null,
          connectionName: item.connection || "No connection",
          database: item.database || "",
          tag: normalizeTag(item.tag),
          tagColor: tagColor(item.tag, item.tagColor)
        });
        renderHistory();
        renderFavorites();
      });
      actions.append(favoriteButton);
    }
    row.addEventListener("click", () => {
      if (isDirectSql) createSqlTab(item.sql);
      setView("connections");
      showSqlMode();
    });
    list.append(row);
  }
  installIcons();
}

function updateFavoriteSqlButton() {
  const button = $("#favoriteSqlButton");
  if (!button) return;
  const sql = currentSqlForFavorite();
  const active = Boolean(favoriteForSql(sql));
  button.classList.toggle("active", active);
  button.title = active ? "Remove current SQL from favorites" : "Favorite current SQL";
  button.setAttribute("aria-pressed", String(active));
}

function renderFavorites() {
  const count = state.favorites.length;
  $("#favoriteCount").textContent = `${count} quer${count === 1 ? "y" : "ies"}`;
  const list = $("#favoriteList");
  if (!list) return;
  const search = ($("#favoriteSearch")?.value || "").trim().toLowerCase();
  const items = state.favorites.filter((item) => {
    return `${item.title || ""} ${item.sql || ""} ${item.connectionName || ""} ${item.database || ""}`.toLowerCase().includes(search);
  });
  if (items.length === 0) {
    list.innerHTML = '<div class="empty-state">No favorite queries yet.</div>';
    return;
  }
  list.innerHTML = "";
  const groups = new Map();
  for (const item of items) {
    const meta = {
      connectionId: item.connectionId || null,
      connectionName: item.connectionName || item.connection || "No connection",
      database: item.database || "",
      tag: normalizeTag(item.tag),
      tagColor: tagColor(item.tag, item.tagColor)
    };
    const key = favoriteScopeKey(meta);
    if (!groups.has(key)) groups.set(key, { key, meta, items: [] });
    groups.get(key).items.push(item);
  }
  for (const group of groups.values()) {
    const collapsed = search ? false : state.favoriteFolders[group.key] !== false;
    const folder = document.createElement("div");
    folder.className = "favorite-folder";
    const header = document.createElement("button");
    header.type = "button";
    header.className = "favorite-folder-header";
    const tagNode = document.createElement("span");
    tagNode.className = `tag-badge ${tagClass(group.meta.tag)}`;
    tagNode.textContent = group.meta.tag;
    applyTagStyle(tagNode, group.meta.tag, group.meta.tagColor);
    header.innerHTML = `
      <span data-icon="${collapsed ? "chevronRight" : "chevronDown"}"></span>
      <span class="grow">
        <strong></strong>
        <span></span>
      </span>
      <span class="favorite-folder-count">${group.items.length}</span>
    `;
    header.querySelector("strong").textContent = group.meta.connectionName;
    header.querySelector(".grow span").textContent = group.meta.database || "No database";
    header.insertBefore(tagNode, header.querySelector(".grow"));
    header.addEventListener("click", () => {
      state.favoriteFolders[group.key] = !collapsed;
      save(storageKeys.favoriteFolders, state.favoriteFolders);
      renderFavorites();
    });
    folder.append(header);
    const groupBody = document.createElement("div");
    groupBody.className = "favorite-folder-body";
    groupBody.hidden = collapsed;
    folder.append(groupBody);
    for (const item of group.items) renderFavoriteItem(groupBody, item);
    list.append(folder);
  }
  installIcons();
  if (state.renamingFavoriteId) {
    requestAnimationFrame(() => {
      const input = $("#favoriteList .inline-rename-input");
      input?.focus();
      input?.select();
    });
  }
}

function renderFavoriteItem(parent, item) {
    const row = document.createElement("div");
    row.className = "favorite-item";
    row.innerHTML = `
      <span data-icon="star"></span>
      <span class="grow">
        <strong></strong>
        <span></span>
      </span>
      <button class="icon-button mini-icon favorite-menu-button" type="button" aria-label="Favorite actions">
        <span data-icon="moreHorizontal"></span>
      </button>
    `;
    const titleNode = row.querySelector("strong");
    if (state.renamingFavoriteId === item.id) {
      const input = document.createElement("input");
      input.className = "inline-rename-input";
      input.value = item.title || item.sql.replace(/\s+/g, " ").slice(0, 80);
      const finish = (commit = true) => {
        if (commit && input.value.trim()) {
          item.title = input.value.trim();
          item.updatedAt = Date.now();
          save(storageKeys.favorites, state.favorites);
        }
        state.renamingFavoriteId = null;
        renderFavorites();
      };
      input.addEventListener("click", (event) => event.stopPropagation());
      input.addEventListener("mousedown", (event) => event.stopPropagation());
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          finish(true);
        }
        if (event.key === "Escape") {
          event.preventDefault();
          finish(false);
        }
      });
      input.addEventListener("blur", () => finish(true));
      titleNode.append(input);
    } else {
      titleNode.textContent = item.title || item.sql.replace(/\s+/g, " ").slice(0, 80);
    }
    row.querySelector(".grow span").textContent = item.sql.replace(/\s+/g, " ").slice(0, 120);
    row.addEventListener("click", async () => {
      if (state.renamingFavoriteId === item.id) return;
      await openFavoriteSql(item);
    });
    row.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      openFavoriteMenu(item.id, { getBoundingClientRect: () => ({
        left: event.clientX,
        right: event.clientX,
        top: event.clientY,
        bottom: event.clientY
      }) });
    });
    row.querySelector(".favorite-menu-button").addEventListener("click", (event) => {
      event.stopPropagation();
      openFavoriteMenu(item.id, event.currentTarget);
    });
    parent.append(row);
}

async function openFavoriteSql(item) {
  if (item.connectionId && state.activeConnectionId !== item.connectionId) {
    const connection = state.connections.find((candidate) => candidate.id === item.connectionId);
    if (connection) await connect(connection.id);
    else showToast("Favorite connection is missing. Opening SQL without switching.", "error");
  }
  createSqlTab(item.sql, item.title || null);
  setView("connections");
  showSqlMode();
}

function openFavoriteMenu(id, anchor) {
  const rect = anchor.getBoundingClientRect();
  const menuHeight = 122;
  state.openFavoriteMenuId = state.openFavoriteMenuId === id ? null : id;
  state.favoriteMenuPosition = {
    top: Math.min(rect.bottom + 6, window.innerHeight - menuHeight - 8),
    left: Math.min(Math.max(8, rect.right - 150), window.innerWidth - 158)
  };
  renderFavoriteMenu();
}

function closeFavoriteMenu() {
  state.openFavoriteMenuId = null;
  renderFavoriteMenu();
}

function renderFavoriteMenu() {
  const menu = $("#favoriteMenu");
  if (!menu) return;
  const favorite = state.favorites.find((item) => item.id === state.openFavoriteMenuId);
  menu.hidden = !favorite;
  if (!favorite) return;
  menu.style.top = `${state.favoriteMenuPosition?.top || 0}px`;
  menu.style.left = `${state.favoriteMenuPosition?.left || 0}px`;
  menu.dataset.favoriteId = favorite.id;
}

function pushHistory(sql) {
  const trimmed = sql.trim();
  if (!trimmed) return;
  const connection = activeConnection();
  state.history = [
    {
      id: uid(),
      sql: trimmed,
      connection: connection?.name || "Disconnected",
      connectionId: connection?.id || null,
      database: connection?.database || "",
      tag: normalizeTag(connection?.tag),
      tagColor: tagColor(connection?.tag, connection?.tagColor),
      createdAt: Date.now()
    },
    ...state.history.filter((item) => item.sql !== trimmed)
  ].slice(0, 100);
  save(storageKeys.history, state.history);
  renderHistory();
}

function addHistoryEntry(type, label, meta = {}) {
  const connection = activeConnection();
  state.history = [
    {
      id: uid(),
      type,
      label,
      connection: connection?.name || "Disconnected",
      connectionId: connection?.id || null,
      database: connection?.database || "",
      tag: normalizeTag(connection?.tag),
      tagColor: tagColor(connection?.tag, connection?.tagColor),
      createdAt: Date.now(),
      ...meta
    },
    ...state.history.filter((item) => item.label !== label || item.type !== type)
  ].slice(0, 100);
  save(storageKeys.history, state.history);
  renderHistory();
}

function setView(name) {
  $$(".rail-button").forEach((button) => button.classList.toggle("active", button.dataset.view === name));
  $$(".sidebar-section").forEach((panel) => panel.classList.remove("active"));
  $(`#${name}Panel`)?.classList.add("active");
}

function setWorkspaceMode(mode) {
  const workspace = $(".workspace");
  if (workspace) workspace.dataset.mode = mode;
  const hasResultsPane = mode === "sql" || mode === "data";
  $("#workspaceResizer").hidden = !hasResultsPane;
  $(".results-pane").hidden = !hasResultsPane;
}

function showSqlMode() {
  setWorkspaceMode("sql");
  state.activeGridSource = "result";
  $("#sqlModeButton").classList.add("active");
  $("#dataModeButton").classList.remove("active");
  $("#structureModeButton").classList.remove("active");
  $("#editorPane").hidden = false;
  $("#dataPane").hidden = true;
  $("#structurePane").hidden = true;
  $("#workspaceTitle").textContent = "Query Editor";
}

function showDataMode() {
  setWorkspaceMode("data");
  state.activeGridSource = "data";
  $("#sqlModeButton").classList.remove("active");
  $("#dataModeButton").classList.add("active");
  $("#structureModeButton").classList.remove("active");
  $("#editorPane").hidden = true;
  $("#dataPane").hidden = false;
  $("#structurePane").hidden = true;
  $("#workspaceTitle").textContent = state.currentTable
    ? `${state.currentTable.schema}.${state.currentTable.table}`
    : "Data Viewer";
  updateDataRefreshButton();
}

function showStructureMode() {
  setWorkspaceMode("structure");
  $("#sqlModeButton").classList.remove("active");
  $("#dataModeButton").classList.remove("active");
  $("#structureModeButton").classList.add("active");
  $("#editorPane").hidden = true;
  $("#dataPane").hidden = true;
  $("#structurePane").hidden = false;
  $("#workspaceTitle").textContent = state.currentTable
    ? `${state.currentTable.schema}.${state.currentTable.table} Structure`
    : "Structure";
  updateDataRefreshButton();
}

function closeSqlGenerationMenu() {
  const menu = $("#sqlGenerationMenu");
  if (menu) menu.hidden = true;
}

function renderSqlGenerationMenu() {
  const schemaButton = $("#toggleAiSchemaInfoButton");
  const readOnlyButton = $("#toggleAiReadOnlyButton");
  schemaButton?.setAttribute("aria-checked", String(aiSendSchemaInfo()));
  readOnlyButton?.setAttribute("aria-checked", String(aiReadOnlyOnly()));
}

function setSqlGenerationPreference(key, value) {
  state.settings = { ...state.settings, [key]: value };
  saveSettingsState();
  hydrateSettings();
  renderSqlGenerationMenu();
  showToast(key === "aiSendSchemaInfo"
    ? `Schema info ${value ? "will be sent to AI." : "will not be sent to AI."}`
    : `Read-only SQL generation ${value ? "enabled." : "disabled."}`);
}

function openSqlGenerationMenu(event) {
  event.preventDefault();
  const menu = $("#sqlGenerationMenu");
  if (!menu) return;
  renderSqlGenerationMenu();
  const width = 220;
  const left = Math.min(event.clientX, window.innerWidth - width - 8);
  const top = Math.min(event.clientY, window.innerHeight - 48);
  menu.style.left = `${Math.max(8, left)}px`;
  menu.style.top = `${Math.max(8, top)}px`;
  menu.hidden = false;
}

function openSqlGenerationSettings() {
  closeSqlGenerationMenu();
  setView("settings");
  const promptInput = $("#sqlGenerationSystemPrompt");
  promptInput?.scrollIntoView({ block: "center", behavior: "smooth" });
  promptInput?.focus();
}

function openConnectionDialog(connection = null) {
  renderTagDatalist();
  $("#connectionDialogTitle").textContent = connection ? "Edit connection" : "New connection";
  $("#connectionForm").dataset.id = connection?.id || "";
  $("#connName").value = connection?.name || "";
  $("#connTag").value = normalizeTag(connection?.tag);
  $("#connTagColor").value = tagColor(connection?.tag, connection?.tagColor);
  $("#connType").value = connection?.type || "postgres";
  $("#connHost").value = connection?.host || "localhost";
  $("#connPort").value = connection?.port || 5432;
  $("#connDatabase").value = connection?.database || "postgres";
  $("#connUser").value = connection?.user || "postgres";
  $("#connPassword").value = connection?.password || "";
  $("#connSsl").checked = Boolean(connection?.ssl);
  $("#connUrl").value = "";
  $("#sshEnabled").checked = Boolean(connection?.ssh?.enabled);
  $("#sshHost").value = connection?.ssh?.host || "";
  $("#sshPort").value = connection?.ssh?.port || 22;
  $("#sshUser").value = connection?.ssh?.username || "";
  $("#sshPassword").value = connection?.ssh?.password || "";
  $("#sshPrivateKeyPath").value = connection?.ssh?.privateKeyPath || "";
  $("#sshPrivateKey").value = connection?.ssh?.privateKey || "";
  $("#sshPassphrase").value = connection?.ssh?.passphrase || "";
  $("#connectionFormStatus").textContent = "";
  setConnectionTestButton();
  $("#connectionDialog").showModal();
}

function readConnectionForm() {
  const rememberSecrets = $("#rememberSecrets").checked;
  return {
    id: $("#connectionForm").dataset.id || uid(),
    name: $("#connName").value.trim(),
    tag: normalizeTag($("#connTag").value),
    tagColor: $("#connTagColor").value || tagColor($("#connTag").value),
    type: $("#connType").value,
    host: $("#connHost").value.trim(),
    port: Number($("#connPort").value || 5432),
    database: $("#connDatabase").value.trim(),
    user: $("#connUser").value.trim(),
    password: rememberSecrets ? $("#connPassword").value : "",
    ssl: $("#connSsl").checked,
    ssh: {
      enabled: $("#sshEnabled").checked,
      host: $("#sshHost").value.trim(),
      port: Number($("#sshPort").value || 22),
      username: $("#sshUser").value.trim(),
      password: rememberSecrets ? $("#sshPassword").value : "",
      privateKeyPath: $("#sshPrivateKeyPath").value.trim(),
      privateKey: rememberSecrets ? $("#sshPrivateKey").value : "",
      passphrase: rememberSecrets ? $("#sshPassphrase").value : ""
    }
  };
}

function upsertConnection(connection) {
  applySharedTagColor(connection);
  const index = state.connections.findIndex((item) => item.id === connection.id);
  if (index >= 0) state.connections.splice(index, 1, connection);
  else state.connections.unshift(connection);
  const openTab = state.connectionTabs.find((tab) => tab.connectionId === connection.id);
  if (openTab) {
    openTab.title = connection.name;
  }
  save(storageKeys.connections, state.connections);
  renderTagDatalist();
  renderConnections();
  renderConnectionTabs();
}

function duplicateConnection(connection) {
  const copy = typeof structuredClone === "function"
    ? structuredClone(connection)
    : JSON.parse(JSON.stringify(connection));
  copy.id = uid();
  copy.name = `${connection.name} Copied`;
  applySharedTagColor(copy);
  state.connections.unshift(copy);
  save(storageKeys.connections, state.connections);
  renderTagDatalist();
  renderConnections();
  showToast(`Duplicated ${connection.name}.`);
}

function requestConnectionPassword({ title, subtitle, hint = "", confirmLabel = "Continue", required = false, privateKeyOption = false, mode = "password" } = {}) {
  const dialog = $("#connectionPasswordDialog");
  const input = $("#connectionPasswordInput");
  const privateKeyRow = $("#connectionPrivateKeyExportRow");
  const privateKeyCheckbox = $("#connectionPrivateKeyExport");
  $("#connectionPasswordTitle").textContent = title || "Password";
  $("#connectionPasswordSubtitle").textContent = subtitle || "";
  $("#connectionPasswordHint").textContent = hint || "";
  $("#connectionPasswordConfirmLabel").textContent = confirmLabel;
  input.value = "";
  input.required = required;
  input.classList.remove("input-error");
  privateKeyRow.hidden = !privateKeyOption;
  privateKeyCheckbox.checked = false;
  dialog.dataset.submitted = "false";
  dialog.dataset.privateKeyOption = privateKeyOption ? "true" : "false";
  dialog.dataset.passwordMode = mode;
  dialog.showModal();
  setTimeout(() => input.focus(), 0);

  return new Promise((resolve) => {
    connectionPasswordResolver = resolve;
  });
}

function resolveConnectionPasswordDialog(value) {
  if (!connectionPasswordResolver) return;
  const resolve = connectionPasswordResolver;
  connectionPasswordResolver = null;
  resolve(value);
}

function sanitizeConnectionForExport(connection, options = {}) {
  const copy = typeof structuredClone === "function"
    ? structuredClone(connection)
    : JSON.parse(JSON.stringify(connection));
  copy.ssh = {
    ...(copy.ssh || {}),
    privateKey: options.includePrivateKey ? copy.ssh?.privateKey || "" : ""
  };
  return copy;
}

async function exportConnections(connections = state.connections, filename = "quarry_connections.quarry") {
  if (!connections.length) {
    showToast("No connections to export.", "error");
    return;
  }
  const payload = {
    type: "quarry.connections",
    version: 1,
    exportedAt: new Date().toISOString(),
    tagColors: state.settings.tagColors || {},
    connections: []
  };
  const options = await requestConnectionPassword({
    title: "Export connections",
    subtitle: "Set a password to encrypt the whole .quarry file.",
    hint: "Leave blank to export plain JSON. Keep private key contents unchecked unless you really want to include pasted key text.",
    confirmLabel: "Export",
    privateKeyOption: true
  });
  if (options === null) return;
  const password = options.password || "";
  payload.connections = connections.map((connection) => sanitizeConnectionForExport(connection, {
    includePrivateKey: Boolean(options.includePrivateKey)
  }));
  const output = password
    ? await encryptQuarryPayload(payload, password)
    : payload;
  downloadText(filename, JSON.stringify(output, null, 2), "application/quarry+json;charset=utf-8");
  showToast(`Exported ${connections.length} connection${connections.length === 1 ? "" : "s"}${password ? " encrypted" : ""}.`);
}

async function exportAllConnections() {
  const stamp = new Date().toISOString().slice(0, 10);
  const connections = selectedExportConnections();
  const suffix = state.selectedConnectionIds.size > 0 ? "selected" : "all";
  await exportConnections(connections, `quarry_connections_${suffix}_${stamp}.quarry`);
}

async function exportSingleConnection(connection) {
  await exportConnections([connection], `${safeFileName(connection.name || "connection")}.quarry`);
}

function importedConnectionFromRaw(raw) {
  if (!raw || typeof raw !== "object") return null;
  const ssh = raw.ssh && typeof raw.ssh === "object" ? raw.ssh : {};
  return {
    id: String(raw.id || uid()),
    name: String(raw.name || raw.host || "Imported connection").trim() || "Imported connection",
    tag: normalizeTag(raw.tag),
    tagColor: normalizeHexColor(raw.tagColor) || tagColor(raw.tag),
    type: raw.type === "postgres" ? "postgres" : "postgres",
    host: String(raw.host || "localhost").trim(),
    port: Number(raw.port || 5432),
    database: String(raw.database || "postgres").trim(),
    user: String(raw.user || "postgres").trim(),
    password: String(raw.password || ""),
    ssl: Boolean(raw.ssl),
    ssh: {
      enabled: Boolean(ssh.enabled),
      host: String(ssh.host || "").trim(),
      port: Number(ssh.port || 22),
      username: String(ssh.username || "").trim(),
      password: String(ssh.password || ""),
      privateKeyPath: String(ssh.privateKeyPath || "").trim(),
      privateKey: String(ssh.privateKey || ""),
      passphrase: String(ssh.passphrase || "")
    }
  };
}

async function readQuarryConnectionsPayload(rawPayload) {
  if (rawPayload?.type !== "quarry.connections.encrypted") return rawPayload;
  encryptedConnectionImportPayload = rawPayload;
  return requestConnectionPassword({
    title: "Import encrypted .quarry",
    subtitle: "Enter the export password to decrypt this file.",
    hint: "This password is only used locally to decrypt the import file.",
    confirmLabel: "Decrypt",
    required: true,
    mode: "decrypt-import"
  });
}

async function importConnectionsFile(event) {
  const input = event.currentTarget;
  const file = input.files?.[0];
  input.value = "";
  if (!file) return;

  try {
    const rawPayload = JSON.parse(await file.text());
    const payload = await readQuarryConnectionsPayload(rawPayload);
    if (!payload) return;
    const rawConnections = Array.isArray(payload) ? payload : payload?.connections;
    if (!Array.isArray(rawConnections)) {
      throw new Error("Invalid .quarry file.");
    }

    for (const [key, record] of Object.entries(payload?.tagColors || {})) {
      if (typeof record === "string") {
        rememberTagColor(key, record);
      } else if (record?.tag && record?.color) {
        rememberTagColor(record.tag, record.color);
      }
    }

    const imported = rawConnections.map(importedConnectionFromRaw).filter(Boolean);
    if (imported.length === 0) throw new Error("No connections found in this file.");

    let added = 0;
    let updated = 0;
    for (const connection of imported) {
      applySharedTagColor(connection);
      const index = state.connections.findIndex((item) => item.id === connection.id);
      if (index >= 0) {
        state.connections.splice(index, 1, connection);
        updated += 1;
      } else {
        state.connections.push(connection);
        added += 1;
      }
      const tab = state.connectionTabs.find((item) => item.connectionId === connection.id);
      if (tab) tab.title = connection.name;
    }
    save(storageKeys.connections, state.connections);
    renderTagDatalist();
    renderConnections();
    renderConnectionTabs();
    showToast(`Imported ${added} new, updated ${updated}.`);
  } catch (error) {
    showToast(error.message || "Import failed.", "error");
  }
}

function deleteConnection(connection) {
  if (!confirm(`Delete connection "${connection.name}"?`)) return;
  const wasActive = state.activeConnectionId === connection.id;
  state.selectedConnectionIds.delete(connection.id);
  if (state.selectedConnectionIds.size === 0) state.connectionSelectionMode = false;
  state.connections = state.connections.filter((item) => item.id !== connection.id);
  state.connectionTabs = state.connectionTabs.filter((tab) => tab.connectionId !== connection.id);
  if (wasActive) {
    const next = state.connectionTabs[0] || null;
    if (next) restoreConnectionTab(next);
    else {
      clearConnectionWorkspace();
      renderResults();
      renderStructure();
      showSqlMode();
    }
    renderSchema();
    renderDataTabs();
  }
  localStorage.removeItem(catalogKey(connection));
  save(storageKeys.connections, state.connections);
  renderConnections();
  renderConnectionTabs();
  showToast(`Deleted ${connection.name}.`);
}

function importConnectionUrl() {
  try {
    const url = new URL($("#connUrl").value.trim());
    if (!["postgres:", "postgresql:"].includes(url.protocol)) {
      throw new Error("Only PostgreSQL URLs are supported right now.");
    }
    $("#connHost").value = url.hostname || "localhost";
    $("#connPort").value = url.port || 5432;
    $("#connDatabase").value = decodeURIComponent(url.pathname.replace(/^\//, "")) || "postgres";
    $("#connUser").value = decodeURIComponent(url.username || "");
    $("#connPassword").value = decodeURIComponent(url.password || "");
    if (!$("#connName").value.trim()) {
      $("#connName").value = `${url.hostname}/${$("#connDatabase").value}`;
    }
    showToast("Connection URL imported.");
  } catch (error) {
    showToast(error.message, "error");
  }
}

async function connect(id) {
  saveActiveConnectionTabState();
  const tab = getOrCreateConnectionTab(id);
  restoreConnectionTab(tab);
  renderDataTabs();
  renderConnections();
  renderConnectionTabs();
  const connection = activeConnection();
  if (!connection) return;
  if (tab.schemas?.length) {
    showToast(`Switched to ${connection.name}.`);
    return;
  }
  const token = uid();
  const deadline = Date.now() + connectionTimeoutMs;
  const timeoutMessage = connectionTimeoutMessage(connection);
  state.connectionLoadToken = token;
  $("#connectionState").textContent = "Connecting...";
  $("#editorConnectionLabel").textContent = connection.name;
  setSchemaLoading("Connecting...");
  try {
    const test = await api(
      "/api/test-connection",
      { config: connectionConfig(connection) },
      { timeoutMs: remainingDeadlineMs(deadline), timeoutMessage }
    );
    if (state.connectionLoadToken !== token || state.activeConnectionId !== id) return;
    tab.status = `${test.data.user}@${test.data.database}`;
    $("#connectionState").textContent = tab.status;
    await refreshSchema({
      timeoutMs: remainingDeadlineMs(deadline),
      timeoutMessage,
      rethrow: true,
      connectionToken: token
    });
    if (state.connectionLoadToken !== token || state.activeConnectionId !== id) return;
    saveActiveConnectionTabState();
    renderConnectionTabs();
    showToast(`Connected to ${connection.name}.`);
  } catch (error) {
    if (state.connectionLoadToken !== token || state.activeConnectionId !== id) return;
    const timedOut = /timed out|timeout/i.test(error.message || "");
    tab.status = timedOut ? "Connection timed out" : "Connection failed";
    $("#connectionState").textContent = tab.status;
    setReady(tab.status);
    setSchemaError(error.message);
    renderConnectionTabs();
    showToast(error.message, "error");
  } finally {
    if (state.connectionLoadToken === token) state.connectionLoadToken = null;
  }
}

async function openDatabaseDialog() {
  const connection = activeConnection();
  if (!connection) {
    showToast("Connect first.", "error");
    return;
  }
  state.databaseDialog = { items: [], selected: connection.database || "", loading: true };
  $("#databaseSearch").value = "";
  renderDatabaseList();
  $("#databaseDialog").showModal();
  try {
    const response = await api("/api/databases", { config: connectionConfig(connection) });
    state.databaseDialog.items = response.data || [];
    state.databaseDialog.selected = connection.database || state.databaseDialog.items[0]?.name || "";
    state.databaseDialog.loading = false;
    renderDatabaseList();
  } catch (error) {
    state.databaseDialog.loading = false;
    renderDatabaseList();
    showToast(error.message, "error");
  }
}

function renderDatabaseList() {
  const list = $("#databaseList");
  const openButton = $("#openSelectedDatabaseButton");
  if (!list) return;
  const search = ($("#databaseSearch")?.value || "").trim().toLowerCase();
  if (state.databaseDialog.loading) {
    list.innerHTML = '<div class="empty-state"><span class="spinner"></span> Loading databases...</div>';
    if (openButton) openButton.disabled = true;
    return;
  }
  const items = (state.databaseDialog.items || []).filter((item) => item.name.toLowerCase().includes(search));
  if (items.length === 0) {
    list.innerHTML = '<div class="empty-state">No databases found.</div>';
    if (openButton) openButton.disabled = true;
    return;
  }
  list.innerHTML = "";
  for (const item of items) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `database-row ${item.name === state.databaseDialog.selected ? "active" : ""}`;
    button.innerHTML = `
      <span data-icon="database"></span>
      <span class="grow"></span>
      <span class="database-meta"></span>
    `;
    button.querySelector(".grow").textContent = item.name;
    button.querySelector(".database-meta").textContent = item.size || "";
    button.addEventListener("click", () => {
      state.databaseDialog.selected = item.name;
      renderDatabaseList();
    });
    button.addEventListener("dblclick", () => switchDatabase(item.name));
    list.append(button);
  }
  if (openButton) openButton.disabled = !state.databaseDialog.selected;
  installIcons();
}

async function switchDatabase(databaseName) {
  const connection = activeConnection();
  if (!connection || !databaseName) return;
  if (connection.database === databaseName) {
    $("#databaseDialog").close();
    return;
  }
  saveActiveConnectionTabState();
  connection.database = databaseName;
  save(storageKeys.connections, state.connections);
  $("#databaseDialog").close();
  $("#connectionState").textContent = `Switching to ${databaseName}...`;
  resetActiveDatabaseWorkspace();
  renderConnections();
  renderConnectionTabs();
  const token = uid();
  const deadline = Date.now() + connectionTimeoutMs;
  const timeoutMessage = connectionTimeoutMessage(connection);
  state.connectionLoadToken = token;
  try {
    const test = await api(
      "/api/test-connection",
      { config: connectionConfig(connection) },
      { timeoutMs: remainingDeadlineMs(deadline), timeoutMessage }
    );
    if (state.connectionLoadToken !== token) return;
    const tab = activeConnectionTab();
    if (tab) tab.status = `${test.data.user}@${test.data.database}`;
    $("#connectionState").textContent = `${test.data.user}@${test.data.database}`;
    await refreshSchema({
      timeoutMs: remainingDeadlineMs(deadline),
      timeoutMessage,
      rethrow: true,
      connectionToken: token
    });
    if (state.connectionLoadToken !== token) return;
    saveActiveConnectionTabState();
    showToast(`Opened database ${databaseName}.`);
  } catch (error) {
    if (state.connectionLoadToken !== token) return;
    const timedOut = /timed out|timeout/i.test(error.message || "");
    $("#connectionState").textContent = timedOut ? "Connection timed out" : "Connection failed";
    setSchemaError(error.message);
    showToast(error.message, "error");
  } finally {
    if (state.connectionLoadToken === token) state.connectionLoadToken = null;
  }
}

async function createDatabaseFromDialog() {
  const connection = activeConnection();
  if (!connection) return;
  const name = prompt("New database name");
  if (!name?.trim()) return;
  try {
    await api("/api/create-database", { config: connectionConfig(connection), database: name.trim() });
    showToast(`Created database ${name.trim()}.`);
    const response = await api("/api/databases", { config: connectionConfig(connection) });
    state.databaseDialog.items = response.data || [];
    state.databaseDialog.selected = name.trim();
    state.databaseDialog.loading = false;
    renderDatabaseList();
  } catch (error) {
    showToast(error.message, "error");
  }
}

function openSchemaCreateMenu(anchor) {
  const menu = $("#schemaCreateMenu");
  if (!menu) return;
  const rect = anchor.getBoundingClientRect();
  const shouldOpen = menu.hidden;
  state.schemaCreateMenuPosition = {
    top: Math.max(8, Math.min(rect.top - 8, window.innerHeight - 220)),
    left: Math.max(8, rect.left)
  };
  menu.style.top = `${state.schemaCreateMenuPosition.top}px`;
  menu.style.left = `${state.schemaCreateMenuPosition.left}px`;
  menu.hidden = !shouldOpen;
}

function closeSchemaCreateMenu() {
  const menu = $("#schemaCreateMenu");
  if (menu) menu.hidden = true;
}

function createObjectDraft(type) {
  const schema = state.selectedSchema || state.schemas[0]?.name || "public";
  const templates = {
    table: `CREATE TABLE ${quoteIdentJs(schema)}.new_table (\n  id uuid PRIMARY KEY\n);`,
    view: `CREATE VIEW ${quoteIdentJs(schema)}.new_view AS\nSELECT 1 AS value;`,
    "materialized-view": `CREATE MATERIALIZED VIEW ${quoteIdentJs(schema)}.new_materialized_view AS\nSELECT 1 AS value;`,
    function: `CREATE OR REPLACE FUNCTION ${quoteIdentJs(schema)}.new_function()\nRETURNS void\nLANGUAGE plpgsql\nAS $$\nBEGIN\n  -- TODO\nEND;\n$$;`,
    schema: "CREATE SCHEMA new_schema;",
    group: "-- Groups are a TablePlus workspace concept. Use schemas or connection favorites in Quarry."
  };
  createSqlTab(templates[type] || templates.table, `New ${type}`);
  closeSchemaCreateMenu();
}

async function refreshSchema(options = {}) {
  const connection = activeConnection();
  if (!connection) {
    renderSchema();
    return;
  }
  setBusy("Loading schema");
  setSchemaLoading("Loading tables...");
  try {
    const data = await api(
      "/api/schema",
      { config: connectionConfig(connection) },
      {
        timeoutMs: options.timeoutMs,
        timeoutMessage: options.timeoutMessage
      }
    );
    if (options.connectionToken && state.connectionLoadToken !== options.connectionToken) return;
    state.schemas = data.schemas || [];
    state.catalog = data.catalog || { hash: "", tables: {}, customTypes: [] };
    saveCatalog(connection);
    syncTableInfoCacheFromCatalog();
    const tab = activeConnectionTab();
    if (tab) {
      tab.schemas = state.schemas;
      tab.catalog = state.catalog;
      tab.currentTableInfo = state.currentTableInfo;
      tab.tableTabs = state.tableTabs;
      tab.status = $("#connectionState").textContent || connection.name;
    }
    renderSchema();
    renderConnectionTabs();
    setReady(`Loaded ${state.schemas.reduce((sum, schema) => sum + schema.tables.length, 0)} objects`);
  } catch (error) {
    if (options.connectionToken && state.connectionLoadToken !== options.connectionToken) return;
    setReady("Schema failed");
    setSchemaError(error.message);
    showToast(error.message, "error");
    if (options.rethrow) throw error;
  }
}

async function openTable(schema, table, offset = 0, options = {}) {
  const connection = activeConnection();
  if (!connection) {
    showToast("Connect first.", "error");
    return;
  }
  saveActiveTabState();
  const tab = getOrCreateTableTab(schema, table);
  if (!options.force && tab.result) {
    activateTableTab(tab.id);
    return;
  }
  const preserveRows = Boolean(options.preserveRows && tab.result);
  const loadingAction = options.loadingAction || (preserveRows ? "refresh" : "open");
  state.activeTableTabId = tab.id;
  state.selectedSchema = schema;
  state.selectedTableKey = tableKey(schema, table);
  state.selectedObjectKeys = new Set([state.selectedTableKey]);
  state.selectedTypeKeys = new Set();
  state.schemaSelectionKind = "table";
  state.schemaObjectSelectionAnchorKey = state.selectedTableKey;
  state.schemaTypeSelectionAnchorKey = null;
  state.currentOffset = offset;
  if (!preserveRows) state.selectedRowIndex = null;
  state.selectedRows = new Set();
  state.dataSelectionAnchorKey = null;
  state.filters = cloneFilters(tab.filters);
  state.filterJoin = normalizedFilterJoin(tab.filterJoin);
  if (!preserveRows) state.pendingEdits = [];
  $("#gridSearch").value = tab.gridSearch || "";
  if (!preserveRows) {
    state.currentTable = {
      schema,
      table,
      fields: [],
      rows: [],
      primaryKey: [],
      limit: pageSize,
      offset,
      hasMore: false,
      sort: tab.sort || null
    };
    tab.result = state.currentTable;
  } else {
    state.currentTable = tab.result;
    state.currentTable.sort = tab.sort || null;
  }
  tab.tableInfo = state.catalog?.tables?.[tableKey(schema, table)] || null;
  if (!preserveRows) tab.pendingEdits = [];
  renderDataTabs();
  renderSchema();
  if (preserveRows) {
    $("#tableSubtitle").textContent = loadingAction === "sort"
      ? `Sorting by ${tab.sort?.column || "column"}...`
      : "Refreshing rows...";
    $("#prevPageButton").disabled = true;
    $("#nextPageButton").disabled = true;
    renderDataGrid(state.currentTable, true);
  } else {
    setGridLoading(schema, table);
  }
  showDataMode();
  setBusy(loadingAction === "sort"
    ? `Sorting ${schema}.${table}`
    : loadingAction === "refresh"
      ? `Refreshing ${schema}.${table}`
      : `Opening ${schema}.${table}`);
  if (loadingAction === "refresh") setDataRefreshLoading(true);
  try {
    const config = connectionConfig(connection);
    const tableResponse = await api("/api/table-data", {
      config,
      schema,
      table,
      limit: pageSize,
      offset,
      filters: activeQueryFiltersForTab(tab),
      filterJoin: activeQueryFilterJoinForTab(tab),
      sort: tab.sort,
      primaryKey: tab.tableInfo?.primaryKey || state.currentTableInfo?.primaryKey || []
    });
    state.currentTable = tableResponse.data;
    state.currentTable.sort = tab.sort || null;
    state.currentTableInfo = state.catalog?.tables?.[tableKey(schema, table)] || null;
    state.sortLoading = null;
    if (loadingAction === "refresh") setDataRefreshLoading(false);
    state.pendingEdits = [];
    tab.result = state.currentTable;
    tab.tableInfo = state.currentTableInfo;
    tab.filters = cloneFilters(state.filters);
    tab.filterJoin = normalizedFilterJoin(state.filterJoin);
    tab.gridSearch = $("#gridSearch").value || "";
    tab.selectedRowIndex = null;
    tab.pendingEdits = [];
    $("#commitButton").disabled = true;
    $("#tableInfoButton").disabled = !state.currentTableInfo;
    $("#structureInfoButton").disabled = !state.currentTableInfo;
    updateDataRefreshButton();
    renderDataTabs();
    renderDataGrid(tableResponse.data, true);
    renderStructure(state.currentTableInfo);
    syncFilterBarVisibility();
    const querySql = tableQueryPreview(schema, table, offset, tab);
    $("#dataElapsed").textContent = formatDuration(tableResponse.data.elapsedMs);
    appendQueryMessage({
      status: "ok",
      source: loadingAction === "refresh" ? "Refresh" : loadingAction === "sort" ? "Sort" : "Data",
      sql: querySql,
      elapsedMs: tableResponse.data.elapsedMs,
      rowCount: tableResponse.data.rows.length
    }, { global: true, targetSqlTab: null });
    saveActiveConnectionTabState();
    if (!options.skipHistory) {
      addHistoryEntry("table", `Open ${schema}.${table}`, {
        sql: querySql,
        schema,
        table,
        filters: activeQueryFiltersForTab(tab),
        filterJoin: activeQueryFilterJoinForTab(tab),
        sort: tab.sort || null
      });
    }
    setReady(`${tableResponse.data.rows.length} rows in ${formatDuration(tableResponse.data.elapsedMs)}`);
  } catch (error) {
    state.sortLoading = null;
    if (loadingAction === "refresh") setDataRefreshLoading(false);
    if (preserveRows && state.currentTable?.fields?.length) renderDataGrid(state.currentTable, true);
    appendQueryMessage({
      status: "error",
      source: "Data",
      sql: tableQueryPreview(schema, table, offset, tab),
      error: error.message
    }, { global: true, targetSqlTab: null });
    setReady("Open failed");
    showToast(error.message, "error", { log: false });
  }
}

async function refreshCurrentDataTable() {
  if (!$("#structurePane").hidden) return refreshCurrentStructure();
  if ($("#dataPane").hidden || !state.currentTable) return false;
  const tab = activeTableTab();
  if (!tab || state.dataRefreshLoading) return true;
  saveActiveTabState();
  addHistoryEntry("refresh", `Refresh ${state.currentTable.schema}.${state.currentTable.table}`, {
    sql: tableQueryPreview(state.currentTable.schema, state.currentTable.table, state.currentOffset, tab),
    schema: state.currentTable.schema,
    table: state.currentTable.table,
    offset: state.currentOffset,
    filters: activeQueryFiltersForTab(tab),
    filterJoin: activeQueryFilterJoinForTab(tab),
    sort: tab.sort || null
  });
  await openTable(
    state.currentTable.schema,
    state.currentTable.table,
    state.currentOffset,
    { force: true, preserveRows: true, loadingAction: "refresh", skipHistory: true }
  );
  return true;
}

async function refreshCurrentStructure() {
  if (!state.currentTable || state.dataRefreshLoading) return Boolean(state.currentTable);
  if (hasStructureChanges() && !confirm("Discard unsaved structure edits and refresh?")) return true;
  const { schema, table } = state.currentTable;
  addHistoryEntry("refresh", `Refresh structure ${schema}.${table}`, { schema, table });
  setDataRefreshLoading(true);
  setBusy(`Refreshing structure ${schema}.${table}`);
  try {
    await refreshSchema();
    state.currentTableInfo = state.catalog?.tables?.[tableKey(schema, table)] || null;
    const tab = activeTableTab();
    if (tab) tab.tableInfo = state.currentTableInfo;
    renderStructure(state.currentTableInfo);
    saveActiveConnectionTabState();
    showStructureMode();
    setReady("Structure refreshed");
  } finally {
    setDataRefreshLoading(false);
  }
  return true;
}

async function loadTablePage(direction) {
  if (!state.currentTable) return;
  const nextOffset = Math.max(
    0,
    state.currentOffset + (direction === "next" ? pageSize : -pageSize)
  );
  await openTable(state.currentTable.schema, state.currentTable.table, nextOffset, { force: true });
}

async function toggleSort(column) {
  if (!state.currentTable) return;
  const tab = activeTableTab();
  if (!tab) return;
  if (state.sortLoading) return;
  const current = tab.sort;
  tab.sort = {
    column,
    direction: current?.column === column && current.direction === "desc" ? "asc" : "desc"
  };
  state.currentTable.sort = tab.sort;
  state.sortLoading = { tabId: tab.id, column };
  renderDataGrid(state.currentTable, true);
  addHistoryEntry("sort", `${state.currentTable.schema}.${state.currentTable.table} order by ${column} ${tab.sort.direction}`, {
    sql: tableQueryPreview(state.currentTable.schema, state.currentTable.table, 0, tab)
  });
  await openTable(state.currentTable.schema, state.currentTable.table, 0, { force: true, preserveRows: true, loadingAction: "sort", skipHistory: true });
}

function visibleDataGridItems(result, filter = $("#gridSearch").value.trim().toLowerCase()) {
  return (result?.rows || [])
    .map((row, rowIndex) => ({
      row,
      rowIndex,
      rowKey: dataRowKey(row, rowIndex, result)
    }))
    .filter(({ row }) => {
      if (!filter) return true;
      return Object.values(row).some((value) => String(value ?? "").toLowerCase().includes(filter));
    });
}

function syncDataRowSelectionClasses() {
  $$("#dataGrid tbody tr[data-row-key]").forEach((row) => {
    row.classList.toggle("selected-row", state.selectedRows.has(row.dataset.rowKey));
  });
}

function selectDataGridRow(row, rowIndex, rowKey, visibleItems, mode, options = {}) {
  const orderedKeys = visibleItems.map((item) => item.rowKey);
  state.activeGridSource = "data";
  state.dataSelectionAnchorKey = nextSelectionAnchor(
    state.dataSelectionAnchorKey,
    orderedKeys,
    rowKey,
    mode
  );
  state.selectedRows = nextKeySelection(
    state.selectedRows,
    orderedKeys,
    state.dataSelectionAnchorKey,
    rowKey,
    mode
  );
  const activeItem = state.selectedRows.has(rowKey)
    ? { row, rowIndex }
    : visibleItems.find((item) => state.selectedRows.has(item.rowKey)) || null;
  state.selectedRowIndex = activeItem?.rowIndex ?? null;
  const tab = activeTableTab();
  if (tab) tab.selectedRowIndex = state.selectedRowIndex;
  syncDataRowSelectionClasses();
  if (options.showInspector !== false && activeItem) {
    showRowInspector(activeItem.row, activeItem.rowIndex, options.anchorCell || null, { defer: Boolean(options.deferInspector) });
  }
  updateApplySelectedState();
}

function renderDataGrid(result, editable = false) {
  const table = $("#dataGrid");
  const filter = $("#gridSearch").value.trim().toLowerCase();
  $("#tableTitle").textContent = result?.schema ? `${result.schema}.${result.table}` : "No table selected";
  const rowStart = result?.rows?.length ? result.offset + 1 : result?.offset || 0;
  const rowEnd = result ? result.offset + (result.rows?.length || 0) : 0;
  const loadingSort = state.sortLoading?.tabId === state.activeTableTabId ? state.sortLoading : null;
  $("#tableSubtitle").textContent = loadingSort
    ? `sorting by ${loadingSort.column}...`
    : result?.primaryKey?.length
      ? `primary key: ${result.primaryKey.join(", ")}`
      : "read-only grid";
  const totalText = result && Number.isFinite(Number(result.totalRows))
    ? ` / ${formatRowNumber(result.totalRows)}`
    : "";
  $("#pageInfo").textContent = result
    ? `Rows ${formatRowNumber(rowStart)}-${formatRowNumber(rowEnd)}${totalText}`
    : "Rows 0-0";
  $("#dataElapsed").textContent = result?.elapsedMs ? formatDuration(result.elapsedMs) : "No query";
  $("#prevPageButton").disabled = !result || result.offset <= 0;
  $("#nextPageButton").disabled = !result?.hasMore;

  if (!result || !result.fields?.length) {
    table.innerHTML = "";
    renderRowInspector(null);
    return;
  }

  const visibleItems = visibleDataGridItems(result, filter);

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  for (const field of result.fields) {
    const th = document.createElement("th");
    const sortButton = document.createElement("button");
    sortButton.type = "button";
    sortButton.className = "column-sort-button";
    const activeSort = result.sort?.column === field.name ? result.sort.direction : "";
    sortButton.textContent = `${field.name}${activeSort ? ` ${activeSort === "desc" ? "↓" : "↑"}` : ""}`;
    sortButton.disabled = Boolean(loadingSort);
    sortButton.classList.toggle("sorting", loadingSort?.column === field.name);
    sortButton.addEventListener("click", () => toggleSort(field.name));
    th.append(sortButton);
    headRow.append(th);
  }
  thead.append(headRow);

  const tbody = document.createElement("tbody");
  visibleItems.forEach(({ row, rowIndex, rowKey }) => {
    const pkValues = rowPkValues(row, result);
    const tr = document.createElement("tr");
    tr.className = [
      state.selectedRows.has(rowKey) ? "selected-row" : "",
      row.__pendingDelete ? "pending-delete-row" : "",
      row.__pendingInsert ? "pending-insert-row" : ""
    ].filter(Boolean).join(" ");
    tr.dataset.rowKey = rowKey;
    const selectRow = (mode = "single", options = {}) => selectDataGridRow(row, rowIndex, rowKey, visibleItems, mode, options);
    tr.addEventListener("mousedown", (event) => {
      if (event.button !== 0) return;
      if (event.target?.closest?.("input, textarea, select, [contenteditable='true']")) return;
      event.preventDefault();
      const mode = selectionModeFromEvent(event);
      selectRow(mode, { showInspector: false });
      state.dragSelection = mode.startsWith("range") ? null : { source: "data", mode: "add" };
    });
    tr.addEventListener("mouseenter", () => {
      if (state.dragSelection?.source !== "data") return;
      selectRow("add", { showInspector: false });
    });
    tr.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      state.activeGridSource = "data";
      if (!state.selectedRows.has(rowKey)) selectRow("single", { anchorCell: event.target?.closest?.("td") || null });
      openGridContextMenu(event, "data");
    });
    tr.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey) return;
      selectRow("single", {
        anchorCell: event.target?.closest?.("td") || null,
        deferInspector: event.detail === 1
      });
    });

    result.fields.forEach((field) => {
      const td = document.createElement("td");
      const value = row[field.name];
      const displayValue = cellValue(value);
      const full = fullValue(value);
      td.title = full;
      renderCellValue(td, field, row, displayValue);
      const canEdit = editable && !row.__pendingDelete && (result.primaryKey?.length || row.__pendingInsert);
      if (canEdit) {
        const enumOptions = enumOptionsForColumn(field.name);
        if (enumOptions.length > 0) {
          let enumEditorTimer = null;
          td.classList.add("editable-cell");
          td.addEventListener("click", (event) => {
            event.stopPropagation();
            if (event.detail >= 3) {
              clearTimeout(enumEditorTimer);
              openTextCellInputEditor(td, field, row, rowIndex, rowKey, pkValues);
              return;
            }
            if (event.metaKey || event.ctrlKey || event.shiftKey) return;
            selectRow("single", { anchorCell: td, deferInspector: event.detail === 1 });
          });
          td.addEventListener("dblclick", (event) => {
            event.stopPropagation();
            clearPendingRowInspector();
            clearTimeout(enumEditorTimer);
            enumEditorTimer = setTimeout(() => {
              enumEditorTimer = null;
              openEnumCellEditor(td, field, row, rowIndex, rowKey, pkValues);
              showRowInspector(row, rowIndex, td);
            }, 220);
          });
          tr.append(td);
          return;
        }
        td.addEventListener("click", (event) => {
          event.stopPropagation();
          if (event.metaKey || event.ctrlKey || event.shiftKey) return;
          selectRow("single", { anchorCell: td, deferInspector: event.detail === 1 });
        });
        td.addEventListener("dblclick", (event) => {
          event.stopPropagation();
          clearPendingRowInspector();
          td.contentEditable = "true";
          td.focus();
          showRowInspector(row, rowIndex, td);
        });
        td.addEventListener("focus", () => {
          td.dataset.before = editValue(value);
          td.textContent = editValue(value);
          if (td.textContent === "NULL") td.textContent = "";
        });
        td.addEventListener("blur", () => {
          const nextValue = td.textContent;
          if (nextValue === td.dataset.before) {
            td.contentEditable = "false";
            return;
          }
          td.classList.add("changed");
          recordCellEdit({
            row,
            rowIndex,
            rowKey,
            pkValues,
            column: field.name,
            value: nextValue
          });
          td.contentEditable = "false";
        });
      }
      tr.append(td);
    });
    tbody.append(tr);
  });

  table.replaceChildren(thead, tbody);
  const selectedItem = visibleItems.find((item) => item.rowIndex === state.selectedRowIndex);
  if (selectedItem) {
    renderRowInspector(selectedItem.row, selectedItem.rowIndex);
  } else {
    renderRowInspector(null);
  }
  updateApplySelectedState();
}

function updateApplySelectedState() {
  const hasPending = state.pendingEdits.length > 0 || state.pendingObjectDeletes.length > 0;
  $("#applySelectedButton").disabled = !hasPending;
  $("#commitButton").disabled = !hasPending;
}

function activeDataSelection() {
  const rows = state.currentTable?.rows || [];
  const selected = rows
    .map((row, rowIndex) => ({ row, rowIndex, rowKey: dataRowKey(row, rowIndex, state.currentTable) }))
    .filter((item) => state.selectedRows.has(item.rowKey));
  if (selected.length > 0) return selected;
  if (state.selectedRowIndex !== null && rows[state.selectedRowIndex]) {
    const row = rows[state.selectedRowIndex];
    return [{ row, rowIndex: state.selectedRowIndex, rowKey: dataRowKey(row, state.selectedRowIndex, state.currentTable) }];
  }
  return [];
}

function activeResultSelection() {
  const result = activeResult();
  const rows = result?.rows || [];
  const indices = [...state.selectedResultRows].sort((a, b) => a - b);
  return indices.map((rowIndex) => ({ row: rows[rowIndex], rowIndex })).filter((item) => item.row);
}

function selectionForSource(source) {
  const isData = source === "data";
  const result = isData ? state.currentTable : activeResult();
  const fields = result?.fields || [];
  const selection = isData ? activeDataSelection() : activeResultSelection();
  return {
    result,
    fields,
    rows: selection.map((item) => item.row),
    items: selection
  };
}

function isTextEditingTarget(target = document.activeElement) {
  return Boolean(target?.closest?.("input, textarea, select, [contenteditable='true']"));
}

function gridSourceForCommand(event = null) {
  if (event?.target?.closest?.("#dataGrid")) return "data";
  if (event?.target?.closest?.("#resultsBody")) return "result";
  if (document.activeElement?.closest?.("#dataGrid")) return "data";
  if (document.activeElement?.closest?.("#resultsBody")) return "result";
  if (state.activeGridSource === "result" && !$(".results-pane")?.hidden && activeSqlTab()?.resultView === "data") return "result";
  if (state.activeGridSource === "data" && !$("#dataPane")?.hidden) return "data";
  if (!$("#dataPane")?.hidden && state.currentTable?.rows?.length) return "data";
  if (!$(".results-pane")?.hidden && activeSqlTab()?.resultView === "data" && activeResult()?.rows?.length) return "result";
  return null;
}

function selectAllRowsForCurrentContext(event = null) {
  if (event?.target?.closest?.("#schemaTree") || document.activeElement?.closest?.("#schemaTree")) {
    return selectAllSchemaTreeItems();
  }
  const source = gridSourceForCommand(event);
  if (source === "result") return selectAllResultRows();
  if (source === "data") return selectAllDataRows();
  return selectAllSchemaTreeItems();
}

function selectAllSchemaTreeItems() {
  if (!$("#connectionsPanel")?.classList.contains("active")) return false;
  if (!activeConnection() || !$("#schemaTree")) return false;
  const activeRow = document.activeElement?.closest?.("#schemaTree .schema-row");
  const activeTypeTree = document.activeElement?.closest?.("#schemaTree .type-tree");
  const kind = activeRow?.classList.contains("type-row") || activeTypeTree
    ? "type"
    : state.schemaSelectionKind || "table";

  if (kind === "type") {
    const keys = visibleCustomTypes().map((typeInfo) => typeKey(typeInfo.schema, typeInfo.name));
    if (keys.length === 0) return false;
    state.selectedObjectKeys = new Set();
    state.selectedTypeKeys = new Set(keys);
    state.schemaSelectionKind = "type";
    state.schemaTypeSelectionAnchorKey = keys[0] || null;
    updateSchemaSelectionClasses();
    return true;
  }

  const keys = visibleSchemaTables().map((table) => tableKey(table.schema, table.name));
  if (keys.length === 0) return false;
  state.selectedObjectKeys = new Set(keys);
  state.selectedTypeKeys = new Set();
  state.schemaSelectionKind = "table";
  state.schemaObjectSelectionAnchorKey = keys[0] || null;
  updateSchemaSelectionClasses();
  return true;
}

function selectAllDataRows() {
  if ($("#dataPane").hidden || !state.currentTable?.rows?.length) return false;
  const visibleItems = visibleDataGridItems(state.currentTable);
  if (visibleItems.length === 0) return false;
  const rowKeys = visibleItems.map((item) => item.rowKey);
  state.selectedRows = new Set(rowKeys);
  state.dataSelectionAnchorKey = rowKeys[0] || null;
  state.selectedRowIndex = visibleItems[0]?.rowIndex ?? null;
  state.activeGridSource = "data";
  const tab = activeTableTab();
  if (tab) tab.selectedRowIndex = state.selectedRowIndex;
  renderDataGrid(state.currentTable, true);
  return true;
}

function selectAllResultRows() {
  const result = activeResult();
  if ($(".results-pane")?.hidden || !result?.rows?.length || activeSqlTab()?.resultView !== "data") return false;
  state.selectedResultRows = new Set(result.rows.map((_, rowIndex) => rowIndex));
  state.resultSelectionAnchorIndex = result.rows.length ? 0 : null;
  state.activeGridSource = "result";
  renderResults();
  return true;
}

function selectedRowsToCsv(fields, rows, withHeader = false) {
  const body = rowsToCsv(fields, rows);
  if (withHeader) return body;
  return body.split("\n").slice(1).join("\n");
}

function selectedRowsToPlainText(fields, rows) {
  return rows.map((row) => fields.map((field) => fullValue(row[field.name])).join("\t")).join("\n");
}

function selectedRowsToHtml(fields, rows) {
  const cells = (tag, values) => `<tr>${values.map((value) => `<${tag}>${escapeHtml(value)}</${tag}>`).join("")}</tr>`;
  return `<table><thead>${cells("th", fields.map((field) => field.name))}</thead><tbody>${rows.map((row) => cells("td", fields.map((field) => fullValue(row[field.name])))).join("")}</tbody></table>`;
}

function selectedRowsToMarkdown(fields, rows) {
  const header = `| ${fields.map((field) => field.name).join(" | ")} |`;
  const separator = `| ${fields.map(() => "---").join(" | ")} |`;
  const body = rows.map((row) => `| ${fields.map((field) => String(fullValue(row[field.name])).replaceAll("|", "\\|")).join(" | ")} |`);
  return [header, separator, ...body].join("\n");
}

function selectedRowsToInsertStatements(fields, rows, source) {
  const tableName = source === "data" && state.currentTable
    ? qualifiedJs(state.currentTable.schema, state.currentTable.table)
    : quoteIdentJs("target_table");
  const columns = fields.map((field) => quoteIdentJs(field.name)).join(", ");
  return rows.map((row) => {
    const values = fields.map((field) => {
      const value = row[field.name];
      if (value === null || value === undefined) return "NULL";
      if (typeof value === "object") return quoteLiteralJs(JSON.stringify(value));
      return quoteLiteralJs(value);
    }).join(", ");
    return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
  }).join("\n");
}

async function copySelectedRows(format, source) {
  const { fields, rows } = selectionForSource(source);
  if (!fields.length || !rows.length) {
    showToast("Select rows first.", "error");
    return;
  }
  const textValue = {
    plain: selectedRowsToPlainText(fields, rows),
    json: JSON.stringify(rows, null, 2),
    html: selectedRowsToHtml(fields, rows),
    markdown: selectedRowsToMarkdown(fields, rows),
    csv: selectedRowsToCsv(fields, rows, false),
    csvHeader: selectedRowsToCsv(fields, rows, true),
    insert: selectedRowsToInsertStatements(fields, rows, source)
  }[format] || "";
  await writeClipboard(textValue);
  showToast("Copied selected rows.");
  closeGridContextMenu();
}

function handleGridKeyboardShortcut(event) {
  if (!(event.metaKey || event.ctrlKey) || isTextEditingTarget(event.target)) return false;
  const source = gridSourceForCommand(event);
  if (!source) return false;
  const key = event.key.toLowerCase();
  const selection = selectionForSource(source);

  if (key === "c" && selection.rows.length > 0) {
    event.preventDefault();
    void copySelectedRows(event.shiftKey ? "csvHeader" : "plain", source);
    return true;
  }

  if (key === "v" && source === "data" && selection.rows.length > 0) {
    event.preventDefault();
    void pasteRowsFromClipboard();
    return true;
  }

  if (key === "d" && source === "data" && selection.rows.length > 0) {
    event.preventDefault();
    duplicateSelectedRows();
    return true;
  }

  return false;
}

function addPendingInsert(row) {
  if (!state.currentTable) return;
  row.__pendingInsert = true;
  row.__rowKey = `insert-${uid()}`;
  state.currentTable.rows.unshift(row);
  state.pendingEdits.push({ action: "insert", rowKey: row.__rowKey, values: { ...row } });
  const tab = activeTableTab();
  if (tab) {
    tab.result = state.currentTable;
    tab.pendingEdits = [...state.pendingEdits];
  }
  state.selectedRows = new Set([row.__rowKey]);
  state.dataSelectionAnchorKey = row.__rowKey;
  state.activeGridSource = "data";
  state.selectedRowIndex = 0;
  renderDataGrid(state.currentTable, true);
  updateApplySelectedState();
}

function addEmptyRow() {
  if (!state.currentTable) return;
  const row = {};
  for (const field of state.currentTable.fields || []) row[field.name] = "";
  addPendingInsert(row);
  closeGridContextMenu();
}

function duplicateSelectedRows() {
  const selected = activeDataSelection();
  if (!state.currentTable || selected.length === 0) return;
  for (const { row } of selected.reverse()) {
    const next = {};
    for (const field of state.currentTable.fields || []) {
      next[field.name] = row[field.name];
      if (state.currentTable.primaryKey?.includes(field.name)) next[field.name] = "";
    }
    addPendingInsert(next);
  }
  closeGridContextMenu();
}

function markSelectedRowsForDelete(options = {}) {
  const cascade = typeof options === "boolean" ? options : Boolean(options.cascade);
  const ignoreFk = typeof options === "object" && Boolean(options.ignoreFk);
  const selected = activeDataSelection();
  if (!state.currentTable?.primaryKey?.length || selected.length === 0) return;
  for (const { row, rowIndex, rowKey } of selected) {
    row.__pendingDelete = ignoreFk ? "ignore-fk" : cascade ? "cascade" : "delete";
    if (!state.pendingEdits.some((change) => change.rowKey === rowKey && ["delete", "deleteCascade", "deleteIgnoreFk"].includes(change.action))) {
      state.pendingEdits.push({
        action: ignoreFk ? "deleteIgnoreFk" : cascade ? "deleteCascade" : "delete",
        rowIndex,
        rowKey,
        pkValues: rowPkValues(row, state.currentTable),
        cascade,
        ignoreFk
      });
    }
  }
  const tab = activeTableTab();
  if (tab) tab.pendingEdits = [...state.pendingEdits];
  renderDataGrid(state.currentTable, true);
  updateApplySelectedState();
  closeGridContextMenu();
}

async function pasteRowsFromClipboard() {
  if (!state.currentTable) return;
  const selected = activeDataSelection();
  if (selected.length === 0) return;
  const textValue = await navigator.clipboard?.readText?.().catch(() => "") || "";
  if (!textValue.trim()) {
    showToast("Clipboard is empty.", "error");
    return;
  }
  const lines = textValue.trim().split(/\r?\n/);
  const fields = state.currentTable.fields || [];
  selected.forEach(({ row, rowIndex, rowKey }, selectedIndex) => {
    const values = (lines[selectedIndex] || lines[0]).split(/\t|,/);
    fields.forEach((field, index) => {
      if (values[index] === undefined) return;
      recordCellEdit({ row, rowIndex, rowKey, pkValues: rowPkValues(row, state.currentTable), column: field.name, value: values[index] });
    });
  });
  renderDataGrid(state.currentTable, true);
  closeGridContextMenu();
}

function closeGridContextMenu() {
  $("#gridContextMenu").hidden = true;
}

function objectDeleteKeyword(table) {
  switch (String(table?.type || "").toUpperCase()) {
    case "VIEW":
      return "VIEW";
    case "MATERIALIZED VIEW":
      return "MATERIALIZED VIEW";
    case "FOREIGN TABLE":
      return "FOREIGN TABLE";
    default:
      return "TABLE";
  }
}

function markSelectedObjectsForDelete(options = {}) {
  const selected = activeObjectSelection();
  if (selected.length === 0) return;
  for (const { key, table } of selected) {
    const existing = pendingObjectDeleteForKey(key);
    const next = {
      action: "dropObject",
      objectKey: key,
      schema: table.schema,
      name: table.name,
      type: table.type,
      cascade: Boolean(options.cascade),
      ignoreFk: Boolean(options.ignoreFk)
    };
    if (existing) Object.assign(existing, next);
    else state.pendingObjectDeletes.push(next);
  }
  const tab = activeConnectionTab();
  if (tab) tab.pendingObjectDeletes = [...state.pendingObjectDeletes];
  renderSchema();
  updateApplySelectedState();
  closeGridContextMenu();
}

async function copySelectedObjectNames() {
  const selected = activeObjectSelection();
  if (selected.length === 0) return;
  await writeClipboard(selected.map(({ table }) => qualifiedJs(table.schema, table.name)).join("\n"));
  showToast("Copied object names.");
  closeGridContextMenu();
}

function openFirstSelectedObject() {
  const first = activeObjectSelection()[0];
  if (!first) return;
  openTable(first.table.schema, first.table.name, 0);
  closeGridContextMenu();
}

function openObjectContextMenu(event) {
  const menu = $("#gridContextMenu");
  const selected = activeObjectSelection();
  menu.innerHTML = "";
  const typeLabel = selected.length === 1 ? objectDeleteKeyword(selected[0].table).toLowerCase() : "objects";
  const separator = document.createElement("div");
  separator.className = "menu-separator";
  menu.append(
    menuButton("Open", () => openFirstSelectedObject(), selected.length === 0),
    menuButton("Copy name", () => copySelectedObjectNames(), selected.length === 0),
    menuButton("Export all data...", () => exportSelectedTablesData(), selected.length === 0),
    separator,
    menuButton(`Delete ${typeLabel}...`, () => openDeleteOptionsDialog("object"), selected.length === 0)
  );
  placeFixedMenu(menu, event.clientX, event.clientY);
}

function openDeleteOptionsDialog(source) {
  const isObject = source === "object";
  const selectedCount = isObject ? activeObjectSelection().length : activeDataSelection().length;
  if (selectedCount === 0) {
    showToast(isObject ? "Select tables first." : "Select rows first.", "error");
    return;
  }
  state.deleteOptionsTarget = { source };
  $("#deleteOptionsTitle").textContent = isObject ? "Delete objects" : "Delete rows";
  $("#deleteOptionsSubtitle").textContent = isObject
    ? `${selectedCount} selected object${selectedCount === 1 ? "" : "s"} will be marked for drop.`
    : `${selectedCount} selected row${selectedCount === 1 ? "" : "s"} will be marked for delete.`;
  $("#deleteCascadeOption").checked = false;
  $("#deleteIgnoreFkOption").checked = false;
  $("#deleteIgnoreFkOption").disabled = isObject;
  $("#deleteIgnoreFkLabel").classList.toggle("disabled", isObject);
  $("#deleteIgnoreFkHint").textContent = isObject
    ? "Foreign-key ignore only applies to row deletes; use cascade for dependent objects."
    : "Requires a database role allowed to set session_replication_role.";
  closeGridContextMenu();
  $("#deleteOptionsDialog").showModal();
}

function confirmDeleteOptions(event) {
  event.preventDefault();
  const source = state.deleteOptionsTarget?.source;
  const options = {
    cascade: $("#deleteCascadeOption").checked,
    ignoreFk: $("#deleteIgnoreFkOption").checked
  };
  $("#deleteOptionsDialog").close();
  state.deleteOptionsTarget = null;
  if (source === "object") markSelectedObjectsForDelete(options);
  else markSelectedRowsForDelete(options);
}

function menuButton(label, action, disabled = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.disabled = disabled;
  if (action) button.addEventListener("click", action);
  return button;
}

function placeFixedMenu(menu, clientX, clientY, options = {}) {
  const margin = options.margin || 8;
  menu.hidden = false;
  menu.style.visibility = "hidden";
  menu.style.maxHeight = `${Math.max(140, window.innerHeight - margin * 2)}px`;
  menu.style.overflowY = "";

  const rect = menu.getBoundingClientRect();
  const left = Math.min(Math.max(margin, clientX), Math.max(margin, window.innerWidth - rect.width - margin));
  const top = Math.min(Math.max(margin, clientY), Math.max(margin, window.innerHeight - rect.height - margin));
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  menu.style.visibility = "";
  return { left, top, width: rect.width, height: rect.height };
}

function openGridContextMenu(event, source) {
  const menu = $("#gridContextMenu");
  const isData = source === "data";
  const { rows } = selectionForSource(source);
  const canMutate = isData && state.currentTable?.primaryKey?.length;
  menu.innerHTML = "";
  menu.append(
    menuButton("Paste", () => pasteRowsFromClipboard(), !isData),
    menuButton("Duplicate", () => duplicateSelectedRows(), !isData || rows.length === 0),
    menuButton("Add row", () => addEmptyRow(), !isData || !state.currentTable),
    menuButton("Delete...", () => openDeleteOptionsDialog("data"), !canMutate || rows.length === 0)
  );
  const copyGroup = document.createElement("div");
  copyGroup.className = "context-submenu";
  const copyButton = menuButton("Copy >", null, rows.length === 0);
  const submenu = document.createElement("div");
  submenu.className = "context-submenu-panel";
  [
    ["Plain text", "plain"],
    ["JSON", "json"],
    ["HTML", "html"],
    ["Markdown table", "markdown"],
    ["CSV", "csv"],
    ["CSV with header", "csvHeader"],
    ["Insert statements", "insert"]
  ].forEach(([label, format]) => {
    submenu.append(menuButton(label, () => copySelectedRows(format, source), rows.length === 0));
  });
  copyGroup.append(copyButton, submenu);
  const openCopySubmenu = () => {
    clearTimeout(copyGroup.closeTimer);
    copyGroup.classList.add("open");
  };
  const scheduleCopySubmenuClose = () => {
    clearTimeout(copyGroup.closeTimer);
    copyGroup.closeTimer = setTimeout(() => copyGroup.classList.remove("open"), 240);
  };
  copyGroup.addEventListener("mouseenter", openCopySubmenu);
  copyGroup.addEventListener("mouseleave", scheduleCopySubmenuClose);
  copyButton.addEventListener("click", (clickEvent) => {
    clickEvent.preventDefault();
    if (!copyButton.disabled) copyGroup.classList.toggle("open");
  });
  submenu.addEventListener("mouseenter", openCopySubmenu);
  submenu.addEventListener("mouseleave", scheduleCopySubmenuClose);
  menu.append(copyGroup);
  const rect = placeFixedMenu(menu, event.clientX, event.clientY);
  const submenuWidth = 204;
  const submenuHeight = 280;
  copyGroup.classList.toggle("flip-x", rect.left + rect.width + submenuWidth > window.innerWidth - 8);
  copyGroup.classList.toggle("flip-y", rect.top + rect.height + submenuHeight > window.innerHeight - 8);
}

async function applyRow(rowKey) {
  const changes = state.pendingEdits.filter((change) => change.rowKey === rowKey);
  if (changes.length === 0) {
    showToast("No changes for this row.");
    return;
  }
  await commitEdits(changes, []);
}

async function applySelectedRows() {
  if (state.pendingEdits.length === 0) {
    showToast("No changes to save.");
    return;
  }
  await commitEdits();
}

function renderRowInspector(row, rowIndex = null) {
  const meta = $("#rowInspectorMeta");
  const body = $("#rowInspectorBody");
  if (!row || !state.currentTable?.fields?.length) {
    clearPendingRowInspector();
    setRowInspectorVisible(false);
    meta.textContent = "Select a row";
    body.innerHTML = '<div class="empty-state">Select a row to inspect full values.</div>';
    return;
  }

  setRowInspectorVisible(true);
  meta.textContent = `Row ${(state.currentTable.offset || 0) + rowIndex + 1}`;
  body.innerHTML = "";
  for (const field of state.currentTable.fields) {
    const item = document.createElement("div");
    item.className = "inspector-field";
    const label = document.createElement("div");
    label.className = "inspector-label";
    label.textContent = field.name;
    const enumOptions = enumOptionsForColumn(field.name);
    let value;
    if (enumOptions.length > 0 && state.currentTable.primaryKey?.length) {
      value = document.createElement("select");
      value.className = "inspector-value inspector-select-editor";
      const current = row[field.name] ?? "";
      const options = enumOptions.includes(current) || current === "" ? enumOptions : [current, ...enumOptions];
      value.innerHTML = [
        current === "" ? '<option value=""></option>' : "",
        ...options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`)
      ].join("");
      value.value = current;
      value.addEventListener("change", () => {
        value.classList.add("changed");
        const pkValues = {};
        for (const pk of state.currentTable.primaryKey) pkValues[pk] = row[pk];
        recordCellEdit({
          row,
          rowIndex,
          rowKey: JSON.stringify(pkValues),
          pkValues,
          column: field.name,
          value: value.value
        });
      });
    } else {
      value = document.createElement("pre");
      value.className = "inspector-value";
      value.textContent = fullValue(row[field.name]);
    }
    if (state.currentTable.primaryKey?.length) {
      if (enumOptions.length > 0) {
        item.append(label, value);
        body.append(item);
        continue;
      }
      const pkValues = {};
      for (const pk of state.currentTable.primaryKey) pkValues[pk] = row[pk];
      const rowKey = JSON.stringify(pkValues);
      value.contentEditable = "true";
      value.addEventListener("focus", () => {
        value.dataset.before = editValue(row[field.name]);
        value.textContent = editValue(row[field.name]);
      });
      value.addEventListener("blur", () => {
        const nextValue = value.textContent;
        if (nextValue === value.dataset.before) {
          value.textContent = fullValue(row[field.name]);
          return;
        }
        value.classList.add("changed");
        row[field.name] = nextValue;
        state.pendingEdits.push({
          rowIndex,
          rowKey,
          pkValues,
          column: field.name,
          value: nextValue
        });
        const tab = activeTableTab();
        if (tab) tab.pendingEdits = [...state.pendingEdits];
        updateApplySelectedState();
      });
    }
    item.append(label, value);
    body.append(item);
  }
}

function filterNeedsSecondValue(operator) {
  return ["BETWEEN", "NOT BETWEEN"].includes(String(operator || "").toUpperCase());
}

function renderFilters() {
  const list = $("#filterList");
  list.innerHTML = "";
  renderFilterControls();
  const columns = state.currentTable?.fields?.map((field) => field.name) || [];
  state.filters.forEach((filter, index) => {
    const row = document.createElement("div");
    row.className = "filter-row";

    const enabled = document.createElement("input");
    enabled.type = "checkbox";
    enabled.checked = filter.enabled !== false;
    enabled.addEventListener("change", () => {
      filter.enabled = enabled.checked;
      markFilterDraftChanged();
      saveActiveTabState();
      renderFilterControls();
    });

    const column = document.createElement("select");
    column.innerHTML = [
      '<option value="">Column</option>',
      ...columns.map((name) => `<option value="${name}">${name}</option>`)
    ].join("");
    column.value = filter.column || "";
    column.addEventListener("change", () => {
      filter.column = column.value;
      markFilterDraftChanged();
      saveActiveTabState();
    });

    const operator = document.createElement("select");
    operator.innerHTML = filterOperators.map(([label, value]) => `<option value="${value}">${label}</option>`).join("");
    operator.value = filter.operator || "=";

    const value = document.createElement("input");
    value.placeholder = "Value";
    value.value = filter.value || "";
    value.addEventListener("input", () => {
      filter.value = value.value;
      markFilterDraftChanged();
      saveActiveTabState();
    });

    const value2 = document.createElement("input");
    value2.placeholder = "Value 2";
    value2.value = filter.value2 || "";
    value2.addEventListener("input", () => {
      filter.value2 = value2.value;
      markFilterDraftChanged();
      saveActiveTabState();
    });

    const syncSecondValue = () => {
      const needsSecondValue = filterNeedsSecondValue(filter.operator);
      row.classList.toggle("has-second-value", needsSecondValue);
      value.placeholder = needsSecondValue ? "Value 1" : "Value";
      value2.hidden = !needsSecondValue;
      value2.disabled = !needsSecondValue;
    };

    operator.addEventListener("change", () => {
      filter.operator = operator.value;
      if (!filterNeedsSecondValue(filter.operator)) {
        filter.value2 = "";
        value2.value = "";
      }
      syncSecondValue();
      markFilterDraftChanged();
      saveActiveTabState();
    });

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "tool-button filter-row-remove";
    remove.title = "Remove filter";
    remove.setAttribute("aria-label", "Remove filter");
    remove.innerHTML = '<span data-icon="minus"></span>';
    remove.addEventListener("click", () => removeFilterAt(index));

    row.append(enabled, column, operator, value, value2, remove);
    syncSecondValue();
    list.append(row);
  });
  installIcons();
}

function markFilterDraftChanged() {
  const tab = activeTableTab();
  if (tab) tab.filtersApplied = false;
}

function renderFilterControls() {
  const join = normalizedFilterJoin(state.filterJoin);
  const applyButton = $("#applyFiltersButton");
  const menu = $("#filterJoinMenu");
  const checkedCount = state.filters.filter((filter) => filter.enabled !== false).length;
  if (applyButton) {
    applyButton.disabled = state.filters.length === 0;
    applyButton.title = `Apply ${checkedCount} checked filter${checkedCount === 1 ? "" : "s"} with AND (Cmd+Enter)`;
  }
  menu?.querySelectorAll("[data-filter-join]").forEach((button) => {
    const active = button.dataset.filterJoin === join;
    button.classList.toggle("active", active);
    button.setAttribute("aria-checked", String(active));
  });
}

function syncFilterBarVisibility() {
  const bar = $("#filterBar");
  if (!bar) return;
  const tab = activeTableTab();
  const shouldShow = Boolean(tab?.filterBarOpen && state.filters.length > 0);
  bar.hidden = !shouldShow;
  if (!bar.hidden) renderFilters();
  closeFilterJoinMenu();
}

function toggleFilterBar(force, options = {}) {
  const bar = $("#filterBar");
  const tab = activeTableTab();
  const shouldShow = typeof force === "boolean" ? force : bar.hidden;
  if (!shouldShow) {
    bar.hidden = true;
    if (tab) tab.filterBarOpen = false;
    closeFilterJoinMenu();
    saveActiveTabState();
    return;
  }
  if (shouldShow && options.ensureRow && state.filters.length === 0) {
    state.filters.push({ enabled: true, column: "", operator: "=", value: "", value2: "" });
  }
  if (tab) tab.filterBarOpen = state.filters.length > 0;
  bar.hidden = !state.filters.length;
  saveActiveTabState();
  syncFilterBarVisibility();
}

function addFilter() {
  state.filters.push({ enabled: true, column: "", operator: "=", value: "", value2: "" });
  $("#filterBar").hidden = false;
  markFilterDraftChanged();
  const tab = activeTableTab();
  if (tab) tab.filterBarOpen = true;
  saveActiveTabState();
  renderFilters();
}

async function removeFilterAt(index = state.filters.length - 1) {
  if (index < 0 || index >= state.filters.length) return;
  state.filters.splice(index, 1);
  markFilterDraftChanged();
  saveActiveTabState();
  syncFilterBarVisibility();
  if (state.filters.length === 0 && state.currentTable) {
    const tab = activeTableTab();
    if (tab) {
      tab.filtersApplied = false;
      tab.filterBarOpen = false;
    }
    await openTable(state.currentTable.schema, state.currentTable.table, 0, { force: true });
  }
}

function removeFilter() {
  removeFilterAt(state.filters.length - 1);
}

function closeFilterJoinMenu() {
  const menu = $("#filterJoinMenu");
  if (menu) menu.hidden = true;
}

function openFilterJoinMenu() {
  const menu = $("#filterJoinMenu");
  if (!menu) return;
  renderFilterControls();
  menu.hidden = !menu.hidden;
}

function setFilterJoin(join) {
  state.filterJoin = normalizedFilterJoin(join);
  const tab = activeTableTab();
  if (tab) tab.filterJoin = state.filterJoin;
  saveActiveTabState();
  renderFilterControls();
}

async function applyFilters(join = state.filterJoin) {
  if (!state.currentTable) return;
  setFilterJoin(join);
  closeFilterJoinMenu();
  const tab = activeTableTab();
  if (tab) {
    tab.filtersApplied = state.filters.some((filter) => filter.enabled !== false && filter.column);
    tab.filterBarOpen = state.filters.length > 0;
  }
  saveActiveTabState();
  addHistoryEntry("filter", `Filter ${state.currentTable.schema}.${state.currentTable.table}`, {
    sql: tableQueryPreview(state.currentTable.schema, state.currentTable.table, 0, activeTableTab()),
    filters: activeQueryFiltersForTab(activeTableTab()),
    filterJoin: activeQueryFilterJoinForTab(activeTableTab())
  });
  await openTable(state.currentTable.schema, state.currentTable.table, 0, { force: true });
}

function text(value) {
  if (value === null || value === undefined || value === "") return "NULL";
  if (typeof value === "boolean") return value ? "yes" : "no";
  return String(value);
}

function appendMetaItem(parent, label, value) {
  const item = document.createElement("div");
  item.className = "meta-item";
  const span = document.createElement("span");
  span.textContent = label;
  const strong = document.createElement("strong");
  strong.textContent = text(value);
  strong.title = strong.textContent;
  item.append(span, strong);
  parent.append(item);
}

function buildTable(columns, rows) {
  const wrapper = document.createElement("div");
  wrapper.className = "structure-table";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  columns.forEach((column) => {
    const th = document.createElement("th");
    th.textContent = column.label;
    headRow.append(th);
  });
  thead.append(headRow);

  const tbody = document.createElement("tbody");
  rows.forEach((row) => {
    const tr = document.createElement("tr");
    columns.forEach((column) => {
      const td = document.createElement("td");
      td.textContent = text(row[column.key]);
      td.title = td.textContent;
      if (column.wide) td.className = "definition-cell";
      tr.append(td);
    });
    tbody.append(tr);
  });
  table.append(thead, tbody);
  wrapper.append(table);
  return wrapper;
}

function appendStructureSection(parent, title, tableNode) {
  const section = document.createElement("section");
  section.className = "structure-section";
  const heading = document.createElement("h3");
  heading.textContent = title;
  section.append(heading, tableNode);
  parent.append(section);
}

function columnForeignKey(info, columnName) {
  const constraint = (info.constraints || []).find((item) => (
    item.type === "f" && (item.columns || []).includes(columnName)
  ));
  if (!constraint) return "";
  const foreignColumns = (constraint.foreign_columns || []).join(",");
  return `${constraint.foreign_schema}.${constraint.foreign_table}(${foreignColumns})`;
}

function columnCheck(info, columnName) {
  const constraint = (info.constraints || []).find((item) => (
    item.type === "c" && (item.definition || "").includes(columnName)
  ));
  return constraint?.definition || "";
}

function parseIndexDefinition(index) {
  const definition = index.definition || "";
  const columnMatch = definition.match(/\((.*)\)(?:\s+INCLUDE|\s+WHERE|$)/i);
  const includeMatch = definition.match(/\s+INCLUDE\s+\((.*?)\)/i);
  const conditionMatch = definition.match(/\s+WHERE\s+(.+)$/i);
  const algorithmMatch = definition.match(/\s+USING\s+([A-Za-z0-9_]+)/i);
  return {
    name: index.name || "",
    index_algorithm: (algorithmMatch?.[1] || "BTREE").toUpperCase(),
    is_unique: /^CREATE\s+UNIQUE\s+INDEX/i.test(definition),
    column_name: columnMatch?.[1] || "",
    condition: conditionMatch?.[1] || "",
    include: includeMatch?.[1] || "",
    comment: index.comment || "",
    definition
  };
}

function normalizeStructureRows(kind, rows, info) {
  if (kind === "column") {
    return (rows || []).map((row) => ({
      ordinal_position: row.ordinal_position,
      name: row.name || "",
      type: row.type || "",
      nullable: Boolean(row.nullable),
      check: columnCheck(info, row.name),
      default_value: row.default_value || "",
      foreign_key: columnForeignKey(info, row.name),
      comment: row.comment || ""
    }));
  }
  if (kind === "index") return (rows || []).map(parseIndexDefinition);
  return rows || [];
}

function structureDisplayValue(value, column) {
  if (column.type === "boolean") return value ? "YES" : "NO";
  if (value === null || value === undefined || value === "") return column.empty || "NULL";
  return String(value);
}

function structureCellRawValue(value, column) {
  if (column.type === "boolean") return value ? "true" : "false";
  return value === null || value === undefined ? "" : String(value);
}

function updateStructureRowState(row) {
  const existing = row.dataset.existing === "true";
  const original = JSON.parse(row.dataset.originalJson || "{}");
  let changed = !existing;
  row.querySelectorAll(".structure-cell[data-key]").forEach((cell) => {
    const key = cell.dataset.key;
    const originalValue = structureCellRawValue(original[key], { type: cell.dataset.type });
    const currentValue = cell.dataset.value || "";
    const isChanged = currentValue !== originalValue;
    cell.classList.toggle("changed", isChanged);
    if (existing && isChanged) changed = true;
  });
  row.classList.toggle("structure-row-changed", changed && existing);
  row.classList.toggle("pending-insert-row", !existing);
  updateStructureSaveState();
}

function updateStructureSaveState() {
  const hasChanges = hasStructureChanges();
  $("#saveStructureButton").disabled = !hasChanges;
}

function hasStructureChanges() {
  return $$("#structureBody tr[data-kind]").some((row) => {
    if (row.dataset.existing !== "true") {
      return Array.from(row.querySelectorAll(".structure-cell[data-key]")).some((cell) => (cell.dataset.value || "").trim());
    }
    const original = JSON.parse(row.dataset.originalJson || "{}");
    return Array.from(row.querySelectorAll(".structure-cell[data-key]")).some((cell) => {
      const key = cell.dataset.key;
      const originalValue = structureCellRawValue(original[key], { type: cell.dataset.type });
      return (cell.dataset.value || "") !== originalValue;
    });
  });
}

function commitStructureCellEdit(cell, column, value) {
  const nextValue = column.type === "boolean" ? String(value === "true" || value === true) : String(value || "").trim();
  cell.dataset.value = nextValue;
  cell.textContent = structureDisplayValue(column.type === "boolean" ? nextValue === "true" : nextValue, column);
  cell.classList.toggle("empty-value", !nextValue);
  updateStructureRowState(cell.closest("tr"));
}

function openStructureCellEditor(cell, column) {
  if (column.editable === false) return;
  const currentValue = cell.dataset.value || "";
  cell.innerHTML = "";
  const editor = column.type === "boolean" ? document.createElement("select") : document.createElement("input");
  editor.className = column.type === "boolean" ? "structure-cell-select" : "structure-cell-input";
  if (column.type === "boolean") {
    editor.innerHTML = '<option value="true">YES</option><option value="false">NO</option>';
    editor.value = currentValue === "false" ? "false" : "true";
  } else {
    editor.value = currentValue;
    editor.placeholder = column.placeholder || "";
  }
  const finish = (commit = true) => {
    if (commit) commitStructureCellEdit(cell, column, editor.value);
    else commitStructureCellEdit(cell, column, currentValue);
  };
  editor.addEventListener("click", (event) => event.stopPropagation());
  editor.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      finish(true);
    }
    if (event.key === "Escape") {
      event.preventDefault();
      finish(false);
    }
  });
  editor.addEventListener("blur", () => finish(true), { once: true });
  cell.append(editor);
  editor.focus();
  if (editor.select) editor.select();
}

function createStructureRow(kind, columns, row, existing = true) {
  const tr = document.createElement("tr");
  tr.dataset.kind = kind;
  tr.dataset.existing = String(existing);
  tr.dataset.original = row.name || "";
  tr.dataset.originalJson = JSON.stringify(row);
  columns.forEach((column) => {
    const td = document.createElement("td");
    td.dataset.key = column.key;
    td.dataset.type = column.type || "";
    td.dataset.value = structureCellRawValue(row[column.key], column);
    td.className = `structure-cell ${column.editable === false ? "" : "editable-cell"}`.trim();
    if (column.wide) td.classList.add("definition-cell");
    td.textContent = structureDisplayValue(row[column.key], column);
    td.title = td.textContent;
    td.classList.toggle("empty-value", !td.dataset.value);
    td.addEventListener("dblclick", () => openStructureCellEditor(td, column));
    tr.append(td);
  });
  updateStructureRowState(tr);
  return tr;
}

function buildEditableTable(kind, columns, rows) {
  const wrapper = document.createElement("div");
  wrapper.className = "structure-table editable-structure-table";
  wrapper.dataset.structureKind = kind;
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  columns.forEach((column) => {
    const th = document.createElement("th");
    th.textContent = column.label;
    headRow.append(th);
  });
  thead.append(headRow);

  const tbody = document.createElement("tbody");
  rows.forEach((row) => tbody.append(createStructureRow(kind, columns, row, true)));
  table.append(thead, tbody);
  wrapper.append(table);
  return wrapper;
}

function renderStructure(info = state.currentTableInfo) {
  const body = $("#structureBody");
  $("#structureTitle").textContent = info?.schema ? `${info.schema}.${info.table}` : "No table selected";
  $("#structureSubtitle").textContent = info ? `${info.kind} - ${info.columns.length} columns` : "";

  if (!info) {
    body.innerHTML = '<div class="empty-state">Open a table to inspect its structure.</div>';
    updateStructureSaveState();
    return;
  }

  body.innerHTML = "";
  const editorHead = document.createElement("div");
  editorHead.className = "structure-editor-head";
  editorHead.innerHTML = `
    <label>Name <input value="${info.table}" readonly /></label>
    <label>Primary <span class="primary-pill">${info.primaryKey?.join(", ") || "None"}</span></label>
    <label><span data-icon="search"></span><input id="structureColumnSearch" placeholder="Search for column..." /></label>
  `;
  body.append(editorHead);

  const stack = document.createElement("div");
  stack.className = "structure-grid-stack";
  body.append(stack);

  const columnDefinitions = [
    { key: "ordinal_position", label: "#", editable: false },
    { key: "name", label: "column_name", placeholder: "column_name" },
    { key: "type", label: "data_type", placeholder: "varchar(255)" },
    { key: "nullable", label: "is_nullable", type: "boolean" },
    { key: "check", label: "check", placeholder: "CHECK (...)", wide: true },
    { key: "default_value", label: "column_default", placeholder: "NULL for no default", wide: true },
    { key: "foreign_key", label: "foreign_key", placeholder: "public.table(id)", wide: true },
    { key: "comment", label: "comment", placeholder: "NULL", wide: true }
  ];
  const indexDefinitions = [
    { key: "name", label: "index_name", placeholder: "idx_table_column" },
    { key: "index_algorithm", label: "index_algorithm", placeholder: "BTREE" },
    { key: "is_unique", label: "is_unique", type: "boolean" },
    { key: "column_name", label: "column_name", placeholder: "column_a,column_b", wide: true },
    { key: "condition", label: "condition", placeholder: "EMPTY", wide: true },
    { key: "include", label: "include", placeholder: "EMPTY", wide: true },
    { key: "comment", label: "comment", placeholder: "NULL", wide: true }
  ];
  state.structureColumns = { column: columnDefinitions, index: indexDefinitions };

  appendStructureSection(
    stack,
    "Columns",
    buildEditableTable(
      "column",
      columnDefinitions,
      normalizeStructureRows("column", info.columns, info)
    )
  );
  const splitter = document.createElement("div");
  splitter.className = "structure-splitter";
  stack.append(splitter);

  appendStructureSection(
    stack,
    "Indexes",
    buildEditableTable(
      "index",
      indexDefinitions,
      normalizeStructureRows("index", info.indexes, info)
    )
  );
  $("#structureColumnSearch")?.addEventListener("input", filterStructureColumns);
  installIcons();
  updateStructureSaveState();
}

function renderTableInfoDialog(info) {
  $("#tableInfoTitle").textContent = `${info.schema}.${info.table}`;
  $("#tableInfoSubtitle").textContent = `${info.kind} - ${info.columns.length} columns - cached ${info.hash || ""}`;
  $("#tableDdlViewer").value = info.ddl || "-- DDL unavailable in catalog cache. Refresh schema to reload table metadata.";
}

function openTableInfo() {
  const info = state.currentTableInfo;
  if (!info) {
    showToast("Open a table first.", "error");
    return;
  }

  renderTableInfoDialog(info);
  $("#tableInfoDialog").showModal();
}

function exportActiveResult(format, button = null) {
  const result = activeResult();
  if (!result?.fields?.length) {
    showToast("No result set to export.", "error");
    return;
  }
  return withButtonLoading(button, async () => {
    const connection = activeConnection();
    const base = safeFileName(`${connection?.database || "query"}_${result.command || "result"}`);
    if (format === "json") {
      downloadText(`${base}.json`, JSON.stringify(result.rows, null, 2), "application/json;charset=utf-8");
      return;
    }
    downloadText(`${base}.csv`, rowsToCsv(result.fields, result.rows), "text/csv;charset=utf-8");
  });
}

function stripCachedTypeDefinitions(ddl = "") {
  const textValue = String(ddl || "").trim();
  const marker = "-- Table Definition";
  const index = textValue.indexOf(marker);
  return index >= 0 ? textValue.slice(index).trim() : textValue;
}

function buildCachedDatabaseSchema(connection) {
  const catalog = state.catalog || {};
  const tables = Object.values(catalog.tables || {}).sort((a, b) => (
    `${a.schema}.${a.table}`.localeCompare(`${b.schema}.${b.table}`)
  ));
  const customTypes = [...(catalog.customTypes || [])].sort((a, b) => (
    `${a.schema}.${a.name}`.localeCompare(`${b.schema}.${b.name}`)
  ));
  if (tables.length === 0 && customTypes.length === 0) {
    throw new Error("Schema cache is empty. Refresh the connection schema first.");
  }

  const lines = [
    "-- Quarry database schema export",
    `-- Database: ${connection.database}`,
    `-- Generated at ${new Date().toISOString()}`,
    `-- Catalog hash: ${catalog.hash || "unknown"}`,
    ""
  ];

  for (const typeInfo of customTypes) {
    lines.push(`DROP TYPE IF EXISTS ${qualifiedJs(typeInfo.schema, typeInfo.name)};`);
    lines.push(
      `CREATE TYPE ${qualifiedJs(typeInfo.schema, typeInfo.name)} AS ENUM (${(typeInfo.labels || []).map(quoteLiteralJs).join(", ")});`
    );
    lines.push("");
  }

  for (const info of tables) {
    const ddl = stripCachedTypeDefinitions(info.ddl);
    if (ddl) lines.push(ddl, "", "");
  }

  return `${lines.join("\n").trim()}\n`;
}

async function exportDatabase(button = null) {
  const connection = activeConnection();
  if (!connection) {
    showToast("Connect first.", "error");
    return;
  }
  return withButtonLoading(button, async () => {
    setBusy("Downloading schema");
    try {
      const sql = buildCachedDatabaseSchema(connection);
      downloadText(`${safeFileName(connection.database)}_schema.sql`, sql, "text/sql;charset=utf-8");
      setReady("Schema downloaded");
      showToast("Schema downloaded from cache.");
    } catch (error) {
      setReady("Export failed");
      showToast(error.message, "error");
    }
  });
}

async function exportSelectedTablesData() {
  const selected = activeObjectSelection();
  const connection = activeConnection();
  if (!connection || selected.length === 0) {
    showToast("Select a table first.", "error");
    return;
  }
  const names = selected.map(({ table }) => `${table.schema}.${table.name}`);
  const preview = names.length === 1 ? names[0] : `${names.length} tables`;
  const confirmed = confirm(
    `Export all rows from ${preview}?\n\nThis runs SELECT * without a limit. Large tables can take a long time and create a big CSV file.`
  );
  closeGridContextMenu();
  if (!confirmed) return;

  setBusy(`Exporting ${preview}`);
  let exported = 0;
  try {
    for (const { table } of selected) {
      const response = await api("/api/export-table-data", {
        config: connectionConfig(connection),
        schema: table.schema,
        table: table.name
      });
      const data = response.data;
      downloadText(
        `${safeFileName(`${connection.database}_${table.schema}_${table.name}`)}.csv`,
        rowsToCsv(data.fields || [], data.rows || []),
        "text/csv;charset=utf-8"
      );
      appendQueryMessage({
        status: "ok",
        source: "Export",
        sql: data.sql || `select * from ${qualifiedJs(table.schema, table.name)};`,
        elapsedMs: data.elapsedMs,
        rowCount: data.rows?.length ?? data.rowCount ?? null
      });
      exported += 1;
    }
    setReady(`Exported ${exported} table${exported === 1 ? "" : "s"}`);
    showToast(`Exported ${exported} table${exported === 1 ? "" : "s"}.`);
  } catch (error) {
    setReady("Export failed");
    appendQueryMessage({
      status: "error",
      source: "Export",
      sql: names.map((name) => `select * from ${name};`).join("\n"),
      error: error.message
    });
    showToast(error.message, "error", { log: false });
  }
}

function openImportDialog() {
  $("#importStatus").textContent = state.currentTable
    ? `Current table: ${state.currentTable.schema}.${state.currentTable.table}`
    : "CSV/JSON needs an open table.";
  $("#importFile").value = "";
  $("#importDialog").showModal();
}

async function runImport(event) {
  event.preventDefault();
  const file = $("#importFile").files?.[0];
  const type = $("#importType").value;
  if (!file) {
    $("#importStatus").textContent = "Choose a file first.";
    return;
  }
  const content = await file.text();

  try {
    if (type === "sql") {
      createSqlTab(content, file.name.replace(/\.sql$/i, "") || `SQL ${state.sqlTabs.length + 1}`);
      $("#importDialog").close();
      await runSql(content);
      return;
    }

    if (!state.currentTable) {
      throw new Error("Open the target table before importing CSV or JSON.");
    }
    const rows = type === "json" ? parseJsonRows(content) : parseCsv(content);
    if (rows.length === 0) throw new Error("No import rows found.");

    $("#importStatus").textContent = `Importing ${rows.length} rows...`;
    const response = await api("/api/import-rows", {
      config: connectionConfig(),
      schema: state.currentTable.schema,
      table: state.currentTable.table,
      rows
    });
    $("#importDialog").close();
    await openTable(state.currentTable.schema, state.currentTable.table, state.currentOffset, { force: true });
    showToast(`Imported ${response.data.inserted} rows.`);
  } catch (error) {
    $("#importStatus").textContent = error.message;
  }
}

async function copyTableDdl() {
  const ddl = $("#tableDdlViewer").value;
  if (!ddl) return;
  await navigator.clipboard.writeText(ddl);
  showToast("DDL copied.");
}

function downloadTableDdl(button = null) {
  const info = state.currentTableInfo;
  const ddl = $("#tableDdlViewer").value;
  if (!info || !ddl) return;
  return withButtonLoading(button, async () => {
    downloadText(`${safeFileName(`${info.schema}_${info.table}`)}.sql`, ddl, "text/sql;charset=utf-8");
  });
}

function rowValue(row, key) {
  const node = row.querySelector(`[data-key="${key}"]`);
  if (!node) return "";
  if (node.matches("input, select, textarea")) {
    if (node.type === "checkbox") return node.checked;
    return node.value.trim();
  }
  if (node.classList.contains("structure-cell")) {
    return node.dataset.type === "boolean" ? node.dataset.value === "true" : (node.dataset.value || "").trim();
  }
  const input = node.querySelector("input, select, textarea");
  if (!input) return (node.dataset.value || node.textContent || "").trim();
  if (input.type === "checkbox") return input.checked;
  return input.value.trim();
}

function filterStructureColumns(event) {
  const query = event.target.value.trim().toLowerCase();
  $$('#structureBody tr[data-kind="column"]').forEach((row) => {
    const haystack = Array.from(row.querySelectorAll(".structure-cell"))
      .map((cell) => cell.textContent || "")
      .join(" ")
      .toLowerCase();
    row.hidden = query && !haystack.includes(query);
  });
}

function blankStructureRow(kind) {
  if (kind === "column") {
    return {
      ordinal_position: "",
      name: "",
      type: "",
      nullable: true,
      check: "",
      default_value: "",
      foreign_key: "",
      comment: ""
    };
  }
  return {
    name: "",
    index_algorithm: "BTREE",
    is_unique: false,
    column_name: "",
    condition: "",
    include: "",
    comment: "",
    definition: ""
  };
}

function addStructureDraft(kind) {
  if (!state.currentTableInfo) {
    showToast("Open a table structure first.", "error");
    return;
  }
  const columns = state.structureColumns?.[kind];
  const tbody = $(`#structureBody .structure-table[data-structure-kind="${kind}"] tbody`);
  if (!columns || !tbody) return;
  const row = createStructureRow(kind, columns, blankStructureRow(kind), false);
  tbody.append(row);
  row.scrollIntoView({ block: "nearest" });
  const firstEditable = row.querySelector(".structure-cell.editable-cell");
  if (firstEditable) requestAnimationFrame(() => firstEditable.dispatchEvent(new MouseEvent("dblclick", { bubbles: true })));
  updateStructureSaveState();
}

function parseForeignKeyTarget(value) {
  const match = String(value || "").trim().match(/^((?:"[^"]+"|[A-Za-z_][A-Za-z0-9_]*)\.)?("?[^"(.]+"?|[A-Za-z_][A-Za-z0-9_]*)\s*\(([^)]+)\)$/);
  if (!match) return null;
  return {
    schema: match[1] ? match[1].replace(/\.$/, "").replace(/^"|"$/g, "") : state.currentTableInfo?.schema || "public",
    table: match[2].replace(/^"|"$/g, ""),
    columns: match[3].split(",").map((item) => item.trim()).filter(Boolean)
  };
}

function indexDefinitionFromRow(row, tableSql) {
  const name = rowValue(row, "name");
  const columns = rowValue(row, "column_name");
  if (!name || !columns) return "";
  const algorithm = (rowValue(row, "index_algorithm") || "BTREE").toUpperCase();
  const unique = rowValue(row, "is_unique") ? "UNIQUE " : "";
  const include = rowValue(row, "include");
  const condition = rowValue(row, "condition");
  return [
    `CREATE ${unique}INDEX ${quoteIdentJs(name)} ON ${tableSql} USING ${algorithm} (${columns})`,
    include ? `INCLUDE (${include})` : "",
    condition ? `WHERE ${condition}` : ""
  ].filter(Boolean).join(" ");
}

function collectStructureSql() {
  const info = state.currentTableInfo;
  if (!info) return "";
  const tableSql = qualifiedJs(info.schema, info.table);
  const statements = [];

  $$("#structureBody tr[data-kind]").forEach((row) => {
    const kind = row.dataset.kind;
    const existing = row.dataset.existing === "true";
    const original = JSON.parse(row.dataset.originalJson || "{}");

    if (kind === "column") {
      const name = rowValue(row, "name");
      const type = rowValue(row, "type");
      const nullable = rowValue(row, "nullable");
      const check = rowValue(row, "check");
      const defaultValue = rowValue(row, "default_value");
      const foreignKey = rowValue(row, "foreign_key");
      const comment = rowValue(row, "comment");
      if (!name || !type) return;
      if (!existing) {
        const parts = [`ALTER TABLE ${tableSql} ADD COLUMN ${quoteIdentJs(name)} ${type}`];
        if (defaultValue) parts.push(`DEFAULT ${defaultValue}`);
        if (!nullable) parts.push("NOT NULL");
        statements.push(`${parts.join(" ")};`);
        if (check) {
          statements.push(`ALTER TABLE ${tableSql} ADD CONSTRAINT ${quoteIdentJs(`${info.table}_${name}_check`)} ${check};`);
        }
        const fkTarget = parseForeignKeyTarget(foreignKey);
        if (fkTarget) {
          statements.push(`ALTER TABLE ${tableSql} ADD CONSTRAINT ${quoteIdentJs(`${info.table}_${name}_fkey`)} FOREIGN KEY (${quoteIdentJs(name)}) REFERENCES ${qualifiedJs(fkTarget.schema, fkTarget.table)} (${fkTarget.columns.map(quoteIdentJs).join(", ")});`);
        }
        if (comment) {
          statements.push(`COMMENT ON COLUMN ${tableSql}.${quoteIdentJs(name)} IS ${quoteLiteralJs(comment)};`);
        }
        return;
      }
      let currentName = original.name;
      if (name !== original.name) {
        statements.push(`ALTER TABLE ${tableSql} RENAME COLUMN ${quoteIdentJs(original.name)} TO ${quoteIdentJs(name)};`);
        currentName = name;
      }
      if (type !== original.type) {
        statements.push(`ALTER TABLE ${tableSql} ALTER COLUMN ${quoteIdentJs(currentName)} TYPE ${type};`);
      }
      if ((defaultValue || "") !== (original.default_value || "")) {
        statements.push(defaultValue
          ? `ALTER TABLE ${tableSql} ALTER COLUMN ${quoteIdentJs(currentName)} SET DEFAULT ${defaultValue};`
          : `ALTER TABLE ${tableSql} ALTER COLUMN ${quoteIdentJs(currentName)} DROP DEFAULT;`);
      }
      if (nullable !== original.nullable) {
        statements.push(`ALTER TABLE ${tableSql} ALTER COLUMN ${quoteIdentJs(currentName)} ${nullable ? "DROP" : "SET"} NOT NULL;`);
      }
      if ((comment || "") !== (original.comment || "")) {
        statements.push(`COMMENT ON COLUMN ${tableSql}.${quoteIdentJs(currentName)} IS ${comment ? quoteLiteralJs(comment) : "NULL"};`);
      }
    }

    if (kind === "constraint") {
      const name = rowValue(row, "name");
      const definition = rowValue(row, "definition");
      if (!name || !definition) return;
      if (existing && (name !== original.name || definition !== original.definition)) {
        statements.push(`ALTER TABLE ${tableSql} DROP CONSTRAINT ${quoteIdentJs(original.name)};`);
      }
      if (!existing || name !== original.name || definition !== original.definition) {
        statements.push(`ALTER TABLE ${tableSql} ADD CONSTRAINT ${quoteIdentJs(name)} ${definition};`);
      }
    }

    if (kind === "index") {
      const name = rowValue(row, "name");
      const definition = indexDefinitionFromRow(row, tableSql);
      if (!definition) return;
      const changed = ["name", "index_algorithm", "is_unique", "column_name", "condition", "include"].some((key) => (
        rowValue(row, key) !== original[key]
      ));
      if (existing && changed) {
        statements.push(`DROP INDEX IF EXISTS ${qualifiedJs(info.schema, original.name)};`);
      }
      if (!existing || changed) {
        statements.push(definition.endsWith(";") ? definition : `${definition};`);
      }
    }
  });

  return statements.join("\n");
}

async function saveStructureChanges() {
  const sql = collectStructureSql();
  if (!sql.trim()) {
    showToast("No structure changes to save.");
    return;
  }
  setBusy("Saving structure");
  try {
    await api("/api/query", { config: connectionConfig(), sql });
    await refreshSchema();
    if (state.currentTable) {
      state.currentTableInfo = state.catalog?.tables?.[tableKey(state.currentTable.schema, state.currentTable.table)] || state.currentTableInfo;
      const tab = activeTableTab();
      if (tab) tab.tableInfo = state.currentTableInfo;
      renderStructure(state.currentTableInfo);
    }
    saveActiveConnectionTabState();
    showStructureMode();
    setReady("Structure saved");
    showToast("Structure changes saved.");
  } catch (error) {
    setReady("Structure save failed");
    showToast(error.message, "error");
  }
}

function openTypeEditor(typeInfo) {
  state.activeType = typeInfo;
  $("#typeDialogTitle").textContent = `${typeInfo.schema}.${typeInfo.name}`;
  $("#typeDialogSubtitle").textContent = `Enum - ${typeInfo.labels?.length || 0} values`;
  $("#typeStatus").textContent = "";
  const editor = $("#enumEditor");
  editor.innerHTML = "";
  for (const label of typeInfo.labels || []) appendEnumInput(label);
  if ((typeInfo.labels || []).length === 0) appendEnumInput("");
  $("#typeDialog").showModal();
}

function appendEnumInput(value = "") {
  const row = document.createElement("div");
  row.className = "enum-row";
  row.dataset.original = value;
  const input = document.createElement("input");
  input.value = value;
  input.placeholder = "ENUM_VALUE";
  row.append(input);
  $("#enumEditor").append(row);
}

function collectEnumSql() {
  const typeInfo = state.activeType;
  if (!typeInfo) return "";
  const typeSql = qualifiedJs(typeInfo.schema, typeInfo.name);
  const statements = [];
  $$("#enumEditor .enum-row").forEach((row) => {
    const original = row.dataset.original || "";
    const next = row.querySelector("input")?.value.trim() || "";
    if (!next) return;
    if (!original) statements.push(`ALTER TYPE ${typeSql} ADD VALUE IF NOT EXISTS ${quoteLiteralJs(next)};`);
    else if (next !== original) statements.push(`ALTER TYPE ${typeSql} RENAME VALUE ${quoteLiteralJs(original)} TO ${quoteLiteralJs(next)};`);
  });
  return statements.join("\n");
}

async function saveTypeChanges(event) {
  event.preventDefault();
  const sql = collectEnumSql();
  if (!sql.trim()) {
    $("#typeStatus").textContent = "No changes.";
    return;
  }
  $("#typeStatus").textContent = "Saving...";
  try {
    await api("/api/query", { config: connectionConfig(), sql });
    $("#typeDialog").close();
    await refreshSchema();
    showToast("Custom type saved.");
  } catch (error) {
    $("#typeStatus").textContent = error.message;
  }
}

function syncResultRowSelectionClasses() {
  $$("#resultsBody tr[data-row-index]").forEach((row) => {
    row.classList.toggle("selected-row", state.selectedResultRows.has(Number(row.dataset.rowIndex)));
  });
}

function selectResultRow(rowIndex, mode) {
  const result = activeResult();
  const orderedIndexes = (result?.rows || []).map((_, index) => index);
  state.activeGridSource = "result";
  state.resultSelectionAnchorIndex = nextSelectionAnchor(
    state.resultSelectionAnchorIndex,
    orderedIndexes,
    rowIndex,
    mode
  );
  state.selectedResultRows = nextKeySelection(
    state.selectedResultRows,
    orderedIndexes,
    state.resultSelectionAnchorIndex,
    rowIndex,
    mode
  );
  syncResultRowSelectionClasses();
}

function renderResults() {
  const tabs = $("#resultTabs");
  const body = $("#resultsBody");
  const sqlTab = activeSqlTab();
  const resultSets = sqlTab?.resultSets || [];
  const activeResultIndex = sqlTab?.activeResultIndex || 0;
  const view = sqlTab?.resultView || "data";
  tabs.innerHTML = "";
  body.innerHTML = "";
  [
    ["data", "Data"],
    ["message", "Message"],
    ["chart", "Chart"]
  ].forEach(([mode, label]) => {
    const tab = document.createElement("button");
    tab.className = `result-tab ${view === mode ? "active" : ""}`;
    tab.type = "button";
    tab.textContent = label;
    tab.addEventListener("click", () => {
      sqlTab.resultView = mode;
      renderResults();
    });
    tabs.append(tab);
  });

  const result = resultSets[activeResultIndex] || resultSets[0];
  const canExport = view === "data" && Boolean(result?.fields?.length);
  $("#exportResultCsvButton").disabled = !canExport;
  $("#exportResultJsonButton").disabled = !canExport;
  $("#resultElapsed").textContent = result?.elapsedMs ? formatDuration(result.elapsedMs) : "No query";

  if (view === "message") {
    const messages = [...(state.queryMessages || [])]
      .sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
    $("#resultMeta").textContent = `${messages.length} messages`;
    if (messages.length === 0) {
      body.innerHTML = '<div class="empty-state">No messages yet.</div>';
      return;
    }
    const log = document.createElement("div");
    log.className = "message-log";
    for (const message of messages) {
      const item = document.createElement("div");
      item.className = `message-item ${message.status === "error" ? "error" : ""}`;
      const meta = document.createElement("div");
      meta.className = "message-meta";
      meta.textContent = `${formatLogTime(message.createdAt)}  ${message.source || "SQL"}  ${message.elapsedMs !== null && message.elapsedMs !== undefined ? formatDuration(message.elapsedMs) : ""}${message.rowCount !== null && message.rowCount !== undefined ? `  ${message.rowCount} row${message.rowCount === 1 ? "" : "s"}` : ""}`;
      const pre = document.createElement("pre");
      pre.textContent = message.error || message.sql || "(no SQL)";
      item.append(meta, pre);
      log.append(item);
    }
    body.append(log);
    body.scrollTop = body.scrollHeight;
    return;
  }

  if (view === "chart") {
    $("#resultMeta").textContent = "Chart";
    body.innerHTML = '<div class="empty-state">Chart view is planned.</div>';
    return;
  }

  if (resultSets.length === 0) {
    $("#resultMeta").textContent = "No results";
    body.innerHTML = '<div class="empty-state">Run SQL to view rows.</div>';
    return;
  }

  $("#resultMeta").textContent = `${result.rowCount ?? result.rows?.length ?? 0} rows`;
  const wrapper = document.createElement("div");
  wrapper.className = "table-scroll";
  const resultTable = document.createElement("table");
  if (!result.fields?.length) {
    body.innerHTML = `<div class="empty-state">${result.command || "Query"} completed.</div>`;
    return;
  }

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  result.fields.forEach((field) => {
    const th = document.createElement("th");
    th.textContent = field.name;
    headRow.append(th);
  });
  thead.append(headRow);

  const tbody = document.createElement("tbody");
  result.rows.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");
    tr.className = state.selectedResultRows.has(rowIndex) ? "selected-row" : "";
    tr.addEventListener("mousedown", (event) => {
      if (event.button !== 0) return;
      if (event.target?.closest?.("input, textarea, select, [contenteditable='true']")) return;
      event.preventDefault();
      const mode = selectionModeFromEvent(event);
      selectResultRow(rowIndex, mode);
      state.dragSelection = mode.startsWith("range") ? null : { source: "result" };
    });
    tr.addEventListener("mouseenter", () => {
      if (state.dragSelection?.source !== "result") return;
      selectResultRow(rowIndex, "add");
    });
    tr.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      state.activeGridSource = "result";
      if (!state.selectedResultRows.has(rowIndex)) {
        state.selectedResultRows = new Set([rowIndex]);
        state.resultSelectionAnchorIndex = rowIndex;
      }
      renderResults();
      openGridContextMenu(event, "result");
    });
    tr.dataset.rowIndex = String(rowIndex);
    result.fields.forEach((field) => {
      const td = document.createElement("td");
      const value = row[field.name];
      td.textContent = cellValue(value);
      td.title = fullValue(value);
      tr.append(td);
    });
    tbody.append(tr);
  });
  resultTable.append(thead, tbody);
  wrapper.append(resultTable);
  if (resultSets.length > 1) {
    const switcher = document.createElement("div");
    switcher.className = "result-set-switcher";
    resultSets.forEach((set, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `result-set-button ${index === activeResultIndex ? "active" : ""}`;
      button.textContent = set.command || `Result ${index + 1}`;
      button.addEventListener("click", () => {
        sqlTab.activeResultIndex = index;
        state.selectedResultRows = new Set();
        state.resultSelectionAnchorIndex = null;
        syncActiveSqlResultState(sqlTab);
        renderResults();
      });
      switcher.append(button);
    });
    body.append(switcher);
  }
  body.append(wrapper);
}

function selectedSqlStatement() {
  const editor = $("#sqlEditor");
  if (editor.selectionStart !== editor.selectionEnd) {
    return editor.value.slice(editor.selectionStart, editor.selectionEnd);
  }
  const before = editor.value.slice(0, editor.selectionStart);
  const after = editor.value.slice(editor.selectionStart);
  const start = before.lastIndexOf(";") + 1;
  const endOffset = after.indexOf(";");
  const end = endOffset === -1 ? editor.value.length : editor.selectionStart + endOffset;
  return editor.value.slice(start, end);
}

function sqlEditorSelection() {
  const editor = $("#sqlEditor");
  if (!editor) return null;
  return {
    start: editor.selectionStart,
    end: editor.selectionEnd,
    direction: editor.selectionDirection || "none"
  };
}

function restoreSqlEditorSelection(selection, options = {}) {
  const editor = $("#sqlEditor");
  if (!editor || !selection) return;
  if (options.focus !== false) editor.focus({ preventScroll: true });
  editor.setSelectionRange(selection.start, selection.end, selection.direction || "none");
  renderSqlAutocompleteGhost();
}

async function runSqlPreservingEditorSelection(sql, selection = sqlEditorSelection()) {
  restoreSqlEditorSelection(selection);
  try {
    await runSql(sql);
  } finally {
    restoreSqlEditorSelection(selection);
  }
}

function preserveSqlEditorSelectionOnMouseDown(button) {
  button?.addEventListener("mousedown", (event) => {
    const editor = $("#sqlEditor");
    if (!editor || document.activeElement !== editor) return;
    if (editor.selectionStart === editor.selectionEnd) return;
    event.preventDefault();
  });
}

const sqlIdentifierPart = String.raw`(?:"[^"]+"|[A-Za-z_][A-Za-z0-9_]*)(?:\.(?:"[^"]+"|[A-Za-z_][A-Za-z0-9_]*))?`;
const sqlWordOperators = ["=", "!=", "<>", "<", ">", "<=", ">=", "IS", "IS NOT", "IN", "NOT IN", "LIKE", "ILIKE", "BETWEEN", "NOT BETWEEN"];
const sqlStatementKeywords = [
  "SELECT", "WITH", "INSERT INTO", "UPDATE", "DELETE FROM", "ALTER TABLE", "ALTER TYPE",
  "CREATE TABLE", "DROP TABLE", "CREATE INDEX", "DROP INDEX"
];
const sqlJoinKeywords = ["JOIN", "LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "FULL JOIN", "CROSS JOIN"];
const sqlAfterTableKeywords = ["WHERE", "JOIN", "LEFT JOIN", "INNER JOIN", "ORDER BY", "GROUP BY", "LIMIT"];
const sqlAfterJoinTableKeywords = ["ON", "WHERE", "JOIN", "LEFT JOIN", "INNER JOIN", "ORDER BY", "GROUP BY", "LIMIT"];
const sqlAlterObjectKeywords = ["TABLE", "TYPE", "INDEX", "VIEW"];
const sqlAlterTableActions = ["ADD COLUMN", "DROP COLUMN", "ALTER COLUMN", "RENAME COLUMN", "ADD CONSTRAINT", "DROP CONSTRAINT", "RENAME TO"];
const sqlAlterTypeActions = ["ADD VALUE", "RENAME VALUE", "RENAME TO"];
const sqlColumnTypeKeywords = ["uuid", "text", "varchar", "integer", "int4", "bigint", "boolean", "jsonb", "timestamptz", "timestamp", "date", "numeric"];
const sqlBoundaryKeywords = new Set([
  "SELECT", "FROM", "WHERE", "JOIN", "LEFT", "RIGHT", "INNER", "FULL", "CROSS", "ON", "GROUP", "ORDER",
  "HAVING", "LIMIT", "OFFSET", "UNION", "EXCEPT", "INTERSECT", "AND", "OR", "SET", "RETURNING", "VALUES",
  "INSERT", "INTO", "UPDATE", "DELETE", "ALTER", "CREATE", "DROP", "TABLE", "TYPE", "INDEX", "ADD",
  "COLUMN", "CONSTRAINT", "RENAME", "VALUE", "TO", "BY", "AS"
]);

function catalogTables() {
  return Object.values(state.catalog?.tables || {});
}

function tableName(table) {
  return table.table || table.name;
}

function tableIdentifiers(table) {
  const name = tableName(table);
  return [name, `${table.schema}.${name}`].filter(Boolean);
}

function customTypes() {
  return state.catalog?.customTypes || [];
}

function customTypeIdentifiers(typeInfo) {
  return [typeInfo.name, `${typeInfo.schema}.${typeInfo.name}`].filter(Boolean);
}

function normalizeSqlIdentifier(identifier) {
  return String(identifier || "")
    .replaceAll('"', "")
    .trim()
    .toLowerCase();
}

function tableMatchesIdentifier(table, identifier) {
  const normalized = normalizeSqlIdentifier(identifier);
  return tableIdentifiers(table).some((candidate) => normalizeSqlIdentifier(candidate) === normalized);
}

function customTypeMatchesIdentifier(typeInfo, identifier) {
  const normalized = normalizeSqlIdentifier(identifier);
  return customTypeIdentifiers(typeInfo).some((candidate) => normalizeSqlIdentifier(candidate) === normalized);
}

function tableForIdentifier(identifier) {
  return catalogTables().find((candidate) => tableMatchesIdentifier(candidate, identifier)) || null;
}

function customTypeForIdentifier(identifier) {
  return customTypes().find((candidate) => customTypeMatchesIdentifier(candidate, identifier)) || null;
}

function scanSqlCursorContext(textValue) {
  const stateValue = {
    inSingleQuote: false,
    inDoubleQuote: false,
    inLineComment: false,
    inBlockComment: false,
    lastTopLevelSemicolon: -1
  };
  for (let index = 0; index < textValue.length; index += 1) {
    const char = textValue[index];
    const next = textValue[index + 1] || "";
    if (stateValue.inLineComment) {
      if (char === "\n") stateValue.inLineComment = false;
      continue;
    }
    if (stateValue.inBlockComment) {
      if (char === "*" && next === "/") {
        stateValue.inBlockComment = false;
        index += 1;
      }
      continue;
    }
    if (stateValue.inSingleQuote) {
      if (char === "'" && next === "'") {
        index += 1;
      } else if (char === "'") {
        stateValue.inSingleQuote = false;
      }
      continue;
    }
    if (stateValue.inDoubleQuote) {
      if (char === '"' && next === '"') {
        index += 1;
      } else if (char === '"') {
        stateValue.inDoubleQuote = false;
      }
      continue;
    }
    if (char === "-" && next === "-") {
      stateValue.inLineComment = true;
      index += 1;
      continue;
    }
    if (char === "/" && next === "*") {
      stateValue.inBlockComment = true;
      index += 1;
      continue;
    }
    if (char === "'") {
      stateValue.inSingleQuote = true;
      continue;
    }
    if (char === '"') {
      stateValue.inDoubleQuote = true;
      continue;
    }
    if (char === ";") {
      stateValue.lastTopLevelSemicolon = index;
    }
  }
  return stateValue;
}

function hasSemicolonOnCurrentLine(beforeCursor) {
  const lineStart = beforeCursor.lastIndexOf("\n") + 1;
  const { lastTopLevelSemicolon } = scanSqlCursorContext(beforeCursor);
  return lastTopLevelSemicolon >= lineStart;
}

function isSqlLiteralAutocompleteBlocked(beforeCursor) {
  const context = scanSqlCursorContext(beforeCursor);
  if (context.inSingleQuote || context.inDoubleQuote) return true;
  return /'(?:''|[^'])*'$/.test(beforeCursor);
}

function sqlTokenAtEnd(textValue) {
  const match = textValue.match(/[A-Za-z_][A-Za-z0-9_$.]*$/);
  const token = match?.[0] || "";
  return { token, start: textValue.length - token.length };
}

function activeStatementBeforeCursor(editor) {
  const cursor = editor.selectionStart;
  const before = editor.value.slice(0, cursor);
  const { lastTopLevelSemicolon } = scanSqlCursorContext(before);
  const start = Math.max(lastTopLevelSemicolon + 1, 0);
  return before.slice(start);
}

function addUniqueAutocompleteOption(options, seen, label, priority = 50, meta = {}) {
  const value = String(label || "");
  if (!value.trim()) return;
  const key = `${meta.mode || "replace"}:${value.toLowerCase()}`;
  if (seen.has(key)) return;
  seen.add(key);
  options.push({ label: value, priority, ...meta });
}

function keywordAutocompleteOptions(keywords, token, priorityBase = 0) {
  const options = [];
  const seen = new Set();
  keywords.forEach((keyword, index) => addUniqueAutocompleteOption(options, seen, keyword, priorityBase + index));
  return sortAutocompleteOptions(options, token);
}

function appendKeywordAutocompleteOptions(keywords, priorityBase = 0) {
  return keywords.map((keyword, index) => ({
    label: ` ${keyword}`,
    priority: priorityBase + index,
    mode: "append",
    suffix: ` ${keyword}`
  }));
}

function trailingIdentifierMatch(compactStatement, prefixPattern) {
  return compactStatement.match(new RegExp(`${prefixPattern}\\s+(${sqlIdentifierPart})$`, "i"));
}

function referencedTables(statementBeforeCursor) {
  const tables = [];
  const seen = new Set();
  const pattern = /\b(?:from|join|update|into|delete\s+from)\s+((?:"[^"]+"|[A-Za-z_][A-Za-z0-9_]*)(?:\.(?:"[^"]+"|[A-Za-z_][A-Za-z0-9_]*))?)(?:\s+(?:as\s+)?([A-Za-z_][A-Za-z0-9_]*))?/gi;
  let match;
  while ((match = pattern.exec(statementBeforeCursor))) {
    let alias = match[2] || "";
    if (sqlBoundaryKeywords.has(alias.toUpperCase())) alias = "";
    const table = catalogTables().find((candidate) => tableMatchesIdentifier(candidate, match[1]));
    if (!table) continue;
    const key = `${table.schema}.${tableName(table)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    tables.push({ table, alias: alias || tableName(table) });
  }
  return tables;
}

function activeAutocompleteTables(statementBeforeCursor) {
  const fromTables = referencedTables(statementBeforeCursor);
  if (fromTables.length) return fromTables;
  if (state.currentTable) return [{ table: state.currentTable, alias: state.currentTable.table }];
  return [];
}

function autocompleteTableKey(table) {
  return `${table.schema}.${tableName(table)}`;
}

function columnAutocompleteOptionsForSources(sources, token, options = [], seen = new Set(), basePriority = 30) {
  sources.forEach(({ table, alias }, sourceIndex) => {
    const columns = table.columns || table.fields || [];
    columns.forEach((column, columnIndex) => {
      const name = column.name;
      addUniqueAutocompleteOption(options, seen, name, basePriority + sourceIndex * 100 + columnIndex);
      if (alias) addUniqueAutocompleteOption(options, seen, `${alias}.${name}`, basePriority + 40 + sourceIndex * 100 + columnIndex);
    });
  });
  return sortAutocompleteOptions(options, token);
}

function sortAutocompleteOptions(options, token = "") {
  const lowerToken = token.toLowerCase();
  return options
    .filter((option) => {
      if (!lowerToken) return true;
      return option.mode === "append" || option.label.toLowerCase().startsWith(lowerToken);
    })
    .sort((a, b) => a.priority - b.priority || a.label.length - b.label.length || a.label.localeCompare(b.label));
}

function tableAutocompleteOptions(token, excludedTableKeys = new Set()) {
  const options = [];
  const seen = new Set();
  const allTables = catalogTables();
  const preferredTables = allTables.filter((table) => !excludedTableKeys.has(autocompleteTableKey(table)));
  const tables = preferredTables.length ? preferredTables : allTables;
  tables.forEach((table, tableIndex) => {
    tableIdentifiers(table).forEach((identifier, identifierIndex) => (
      addUniqueAutocompleteOption(options, seen, identifier, 20 + tableIndex + identifierIndex)
    ));
  });
  return sortAutocompleteOptions(options, token);
}

function columnAutocompleteOptions(statementBeforeCursor, token, options = [], seen = new Set(), basePriority = 30) {
  const sources = activeAutocompleteTables(statementBeforeCursor);
  const active = state.currentTable;
  if (!sources.length && active?.fields?.length) {
    active.fields.forEach((field, index) => (
      addUniqueAutocompleteOption(options, seen, field.name, basePriority + index)
    ));
    return sortAutocompleteOptions(options, token);
  }
  return columnAutocompleteOptionsForSources(sources, token, options, seen, basePriority);
}

function customTypeAutocompleteOptions(token, options = [], seen = new Set(), basePriority = 20) {
  customTypes().forEach((typeInfo, typeIndex) => {
    customTypeIdentifiers(typeInfo).forEach((identifier, identifierIndex) => (
      addUniqueAutocompleteOption(options, seen, identifier, basePriority + typeIndex + identifierIndex)
    ));
  });
  return sortAutocompleteOptions(options, token);
}

function customTypeValueAutocompleteOptions(typeInfo, token, options = [], seen = new Set(), basePriority = 20) {
  (typeInfo?.values || typeInfo?.labels || []).forEach((value, index) => {
    addUniqueAutocompleteOption(options, seen, `'${value}'`, basePriority + index);
  });
  return sortAutocompleteOptions(options, token);
}

function alterTableContext(compactStatement) {
  const match = compactStatement.match(new RegExp(`^\\s*alter\\s+table\\s+(${sqlIdentifierPart})(?:\\s|$)`, "i"));
  if (!match) return null;
  const table = tableForIdentifier(match[1]);
  return table ? { table, alias: tableName(table) } : null;
}

function alterTypeContext(compactStatement) {
  const match = compactStatement.match(new RegExp(`^\\s*alter\\s+type\\s+(${sqlIdentifierPart})(?:\\s|$)`, "i"));
  if (!match) return null;
  const typeInfo = customTypeForIdentifier(match[1]);
  return typeInfo || null;
}

function exactTableContextOptions(compactStatement) {
  const contexts = [
    { prefix: "^\\s*update", keywords: ["SET"] },
    { prefix: "^\\s*delete\\s+from", keywords: ["WHERE", "RETURNING"] },
    { prefix: "^\\s*insert\\s+into", keywords: ["(", "VALUES", "SELECT"] },
    { prefix: "^\\s*alter\\s+table", keywords: sqlAlterTableActions },
    { prefix: "\\bjoin", keywords: sqlAfterJoinTableKeywords },
    { prefix: "\\bfrom", keywords: sqlAfterTableKeywords }
  ];
  for (const context of contexts) {
    const match = trailingIdentifierMatch(compactStatement, context.prefix);
    if (match && tableForIdentifier(match[1])) {
      return appendKeywordAutocompleteOptions(context.keywords);
    }
  }
  return null;
}

function tableContextKeywordOptions(compactStatement, token) {
  const contexts = [
    { prefix: "^\\s*update", keywords: ["SET"] },
    { prefix: "^\\s*delete\\s+from", keywords: ["WHERE", "RETURNING"] },
    { prefix: "^\\s*insert\\s+into", keywords: ["(", "VALUES", "SELECT"] },
    { prefix: "^\\s*alter\\s+table", keywords: sqlAlterTableActions },
    { prefix: "\\bjoin", keywords: sqlAfterJoinTableKeywords },
    { prefix: "\\bfrom", keywords: sqlAfterTableKeywords }
  ];
  for (const context of contexts) {
    const match = trailingIdentifierMatch(compactStatement, context.prefix);
    if (match && tableForIdentifier(match[1])) {
      return keywordAutocompleteOptions(context.keywords, token);
    }
  }
  return null;
}

function exactCustomTypeContextOptions(compactStatement) {
  const match = trailingIdentifierMatch(compactStatement, "^\\s*alter\\s+type");
  if (match && customTypeForIdentifier(match[1])) {
    return appendKeywordAutocompleteOptions(sqlAlterTypeActions);
  }
  return null;
}

function customTypeContextKeywordOptions(compactStatement, token) {
  const match = trailingIdentifierMatch(compactStatement, "^\\s*alter\\s+type");
  if (match && customTypeForIdentifier(match[1])) {
    return keywordAutocompleteOptions(sqlAlterTypeActions, token);
  }
  return null;
}

function defaultSqlAutocompleteOptions(token) {
  const options = [];
  const seen = new Set();
  [...sqlStatementKeywords, ...sqlJoinKeywords, ...sqlAutocompleteKeywords].forEach((keyword, index) => addUniqueAutocompleteOption(options, seen, keyword, index));
  tableAutocompleteOptions(token).forEach((option, index) => (
    addUniqueAutocompleteOption(options, seen, option.label, 40 + index)
  ));
  columnAutocompleteOptions("", token, options, seen, 80);
  customTypes().forEach((type, index) => {
    addUniqueAutocompleteOption(options, seen, type.name, 160 + index);
    addUniqueAutocompleteOption(options, seen, `${type.schema}.${type.name}`, 161 + index);
    (type.values || type.labels || []).forEach((value, valueIndex) => (
      addUniqueAutocompleteOption(options, seen, `'${value}'`, 180 + valueIndex)
    ));
  });
  return sortAutocompleteOptions(options, token);
}

function sqlAutocompleteOptions(statementBeforeCursor, token) {
  const prefix = statementBeforeCursor.slice(0, statementBeforeCursor.length - token.length);
  const compactPrefix = prefix.replace(/\s+/g, " ");
  const compactStatement = statementBeforeCursor.replace(/\s+/g, " ").trim();
  const alterTable = alterTableContext(compactStatement);
  const alterType = alterTypeContext(compactStatement);

  if (/^\s*$/.test(compactPrefix)) {
    return keywordAutocompleteOptions(sqlStatementKeywords, token);
  }

  if (/\bis\s+$/i.test(compactPrefix)) {
    return sortAutocompleteOptions([
      { label: "NULL", priority: 0 },
      { label: "NOT NULL", priority: 1 }
    ], token);
  }

  const exactCustomTypeOptions = exactCustomTypeContextOptions(compactStatement);
  if (exactCustomTypeOptions) return exactCustomTypeOptions;

  const exactTableOptions = exactTableContextOptions(compactStatement);
  if (exactTableOptions) return exactTableOptions;

  const preTokenCustomTypeOptions = customTypeContextKeywordOptions(compactPrefix.trim(), token);
  if (preTokenCustomTypeOptions) return preTokenCustomTypeOptions;

  const preTokenTableOptions = tableContextKeywordOptions(compactPrefix.trim(), token);
  if (preTokenTableOptions) return preTokenTableOptions;

  if (/\border\s+$/i.test(compactPrefix) || /\bgroup\s+$/i.test(compactPrefix)) {
    return keywordAutocompleteOptions(["BY"], token);
  }

  if (/\bdelete\s+$/i.test(compactPrefix)) {
    return keywordAutocompleteOptions(["FROM"], token);
  }

  if (/\binsert\s+$/i.test(compactPrefix)) {
    return keywordAutocompleteOptions(["INTO"], token);
  }

  if (/\balter\s+$/i.test(compactPrefix)) {
    return keywordAutocompleteOptions(sqlAlterObjectKeywords, token);
  }

  if (/\bcreate\s+$/i.test(compactPrefix) || /\bdrop\s+$/i.test(compactPrefix)) {
    return keywordAutocompleteOptions(["TABLE", "TYPE", "INDEX", "VIEW"], token);
  }

  if (/\balter\s+type\s+$/i.test(compactPrefix)) {
    return customTypeAutocompleteOptions(token);
  }

  if (alterType && /\balter\s+type\s+.+\s+add\s+$/i.test(compactPrefix)) {
    return keywordAutocompleteOptions(["VALUE"], token);
  }

  if (alterType && /\balter\s+type\s+.+\s+rename\s+$/i.test(compactPrefix)) {
    return keywordAutocompleteOptions(["VALUE", "TO"], token);
  }

  if (alterType && /\balter\s+type\s+.+\s+rename\s+value\s+$/i.test(compactPrefix)) {
    return customTypeValueAutocompleteOptions(alterType, token);
  }

  if (alterTable && /\balter\s+table\s+.+\s+add\s+$/i.test(compactPrefix)) {
    return keywordAutocompleteOptions(["COLUMN", "CONSTRAINT"], token);
  }

  if (alterTable && /\balter\s+table\s+.+\s+drop\s+$/i.test(compactPrefix)) {
    return keywordAutocompleteOptions(["COLUMN", "CONSTRAINT"], token);
  }

  if (alterTable && /\balter\s+table\s+.+\s+(?:drop|alter|rename)\s+column\s+$/i.test(compactPrefix)) {
    return columnAutocompleteOptionsForSources([alterTable], token);
  }

  if (alterTable && /\balter\s+table\s+.+\s+add\s+column\s+[A-Za-z_][A-Za-z0-9_]*\s+$/i.test(compactPrefix)) {
    const options = [];
    const seen = new Set();
    sqlColumnTypeKeywords.forEach((keyword, index) => addUniqueAutocompleteOption(options, seen, keyword, index));
    return customTypeAutocompleteOptions(token, options, seen, 40);
  }

  if (/\bjoin\s+$/i.test(compactPrefix)) {
    const joinedTableKeys = new Set(referencedTables(statementBeforeCursor).map(({ table }) => autocompleteTableKey(table)));
    return tableAutocompleteOptions(token, joinedTableKeys);
  }

  if (/\b(?:from|update|into|table)\s+$/i.test(compactPrefix)) {
    return tableAutocompleteOptions(token);
  }

  if (/\b(?:order|group)\s+by\s+$/i.test(compactPrefix)) {
    return columnAutocompleteOptions(statementBeforeCursor, token);
  }

  if (/\b(?:where|on|and|or|having|set|returning)\s+$/i.test(compactPrefix)) {
    if (/\breturning\s+$/i.test(compactPrefix)) {
      const options = [{ label: "*", priority: 0 }];
      return columnAutocompleteOptions(statementBeforeCursor, token, options, new Set(["replace:*"]), 5);
    }
    return columnAutocompleteOptions(statementBeforeCursor, token);
  }

  if (/\bset\s+[A-Za-z_][A-Za-z0-9_$.]*\s+$/i.test(compactPrefix)) {
    return keywordAutocompleteOptions(["="], token);
  }

  if (/\bset\s+.+\s*=\s+.+\s+$/i.test(compactPrefix)) {
    return keywordAutocompleteOptions(["WHERE", "RETURNING"], token);
  }

  if (/\b(?:where|on|and|or|having)\s+[A-Za-z_][A-Za-z0-9_$.]*\s+$/i.test(compactPrefix)) {
    return sortAutocompleteOptions(sqlWordOperators.map((operator, index) => ({ label: operator, priority: index })), token);
  }

  if (/\border\s+by\s+[A-Za-z_][A-Za-z0-9_$.]*\s+$/i.test(compactPrefix)) {
    return keywordAutocompleteOptions(["DESC", "ASC"], token);
  }

  if (/\b(?:where|on|and|or|having)\s+.+\s+(?:=|<>|<|>|<=|>=|like|ilike|in|not in|between|not between)\s+.+\s+$/i.test(compactPrefix)) {
    return keywordAutocompleteOptions(["AND", "OR", "ORDER BY", "GROUP BY", "LIMIT", "RETURNING"], token);
  }

  if (/\bselect\s+$/i.test(compactPrefix) || /,\s*$/i.test(compactPrefix)) {
    const options = [{ label: "*", priority: 0 }];
    return columnAutocompleteOptions(statementBeforeCursor, token, options, new Set(["replace:*"]), 5);
  }

  return token ? defaultSqlAutocompleteOptions(token) : [];
}

function sqlAutocompleteMatch(editor) {
  if (editor.selectionStart !== editor.selectionEnd) return false;
  const cursor = editor.selectionStart;
  const beforeCursor = editor.value.slice(0, cursor);
  if (hasSemicolonOnCurrentLine(beforeCursor) || isSqlLiteralAutocompleteBlocked(beforeCursor)) {
    return false;
  }
  const statementBeforeCursor = activeStatementBeforeCursor(editor);
  const { token, start } = sqlTokenAtEnd(statementBeforeCursor);
  const option = sqlAutocompleteOptions(statementBeforeCursor, token).find((item) => {
    if (item.mode === "append") return Boolean(item.suffix);
    if (!token) return true;
    return item.label.toLowerCase().startsWith(token.toLowerCase()) && item.label.toLowerCase() !== token.toLowerCase();
  });
  if (!option) return false;
  const absoluteStart = cursor - (statementBeforeCursor.length - start);
  const suffix = option.suffix || option.label.slice(token.length);
  return {
    option,
    token,
    cursor,
    start: option.mode === "append" ? cursor : absoluteStart,
    end: cursor,
    suffix
  };
}

function renderSqlAutocompleteGhost() {
  const editor = $("#sqlEditor");
  const ghost = $("#sqlAutocompleteGhost");
  if (!editor || !ghost) return;
  ghost.replaceChildren();
  ghost.scrollTop = editor.scrollTop;
  ghost.scrollLeft = editor.scrollLeft;
  if (document.activeElement !== editor) return;
  const match = sqlAutocompleteMatch(editor);
  if (!match?.suffix) return;

  const before = document.createElement("span");
  before.className = "sql-autocomplete-hidden";
  before.textContent = editor.value.slice(0, match.cursor);
  const suffix = document.createElement("span");
  suffix.className = "sql-autocomplete-suggestion";
  suffix.textContent = match.suffix;
  const after = document.createElement("span");
  after.className = "sql-autocomplete-hidden";
  after.textContent = editor.value.slice(match.cursor);
  ghost.append(before, suffix, after);
}

function completeSqlAtCursor(editor) {
  const match = sqlAutocompleteMatch(editor);
  if (!match) return false;
  const { option, start, end } = match;
  const inserted = option.mode === "append" ? option.suffix : option.label;
  editor.value = `${editor.value.slice(0, start)}${inserted}${editor.value.slice(end)}`;
  editor.selectionStart = editor.selectionEnd = start + inserted.length;
  saveActiveSqlTab();
  clearSqlGenerationReview({ silent: true });
  setReady(`Completed ${option.label}`);
  renderSqlAutocompleteGhost();
  return true;
}

function sqlMayChangeSchema(sql) {
  return /\b(?:alter|create|drop|comment|rename)\s+(?:table|type|index|view|materialized\s+view|schema|function|trigger|constraint|sequence)\b/i.test(sql || "")
    || /\balter\s+table\b/i.test(sql || "")
    || /\balter\s+type\b/i.test(sql || "");
}

async function runSql(sql) {
  const connection = activeConnection();
  const sqlTab = activeSqlTab();
  if (!connection) {
    showToast("Connect first.", "error");
    return;
  }
  if (!sql.trim()) {
    showToast("SQL is empty.", "error");
    return;
  }
  saveActiveSqlTab();
  showSqlMode();
  setBusy("Running SQL");
  try {
    const response = await api("/api/query", {
      config: connectionConfig(connection),
      sql
    });
    const targetTab = sqlTab || activeSqlTab();
    targetTab.resultSets = (response.data.results || []).map((result) => ({
      ...result,
      elapsedMs: response.data.elapsedMs
    }));
    targetTab.activeResultIndex = 0;
    targetTab.resultView = "data";
    state.selectedResultRows = new Set();
    state.resultSelectionAnchorIndex = null;
    appendQueryMessage({
      status: "ok",
      source: "SQL",
      sql,
      elapsedMs: response.data.elapsedMs,
      rowCount: targetTab.resultSets.reduce((sum, result) => sum + (result.rowCount ?? result.rows?.length ?? 0), 0)
    }, { targetSqlTab: targetTab });
    syncActiveSqlResultState(targetTab);
    renderResults();
    if (sqlMayChangeSchema(sql)) {
      await refreshSchema();
      if (state.currentTableInfo) renderStructure(state.currentTableInfo);
    }
    saveActiveConnectionTabState();
    pushHistory(sql);
    setReady(`Done in ${formatDuration(response.data.elapsedMs)}`);
  } catch (error) {
    const targetTab = sqlTab || activeSqlTab();
    if (targetTab) targetTab.resultView = "message";
    appendQueryMessage({
      status: "error",
      source: "SQL",
      sql,
      error: error.message
    }, { targetSqlTab: targetTab });
    renderResults();
    setReady("Query failed");
    showToast(error.message, "error", { log: false });
  }
}

function splitSqlStatements(sql) {
  const statements = [];
  let start = 0;
  let i = 0;
  let single = false;
  let double = false;
  let lineComment = false;
  let blockComment = false;
  let dollarTag = "";

  while (i < sql.length) {
    const char = sql[i];
    const next = sql[i + 1];

    if (lineComment) {
      if (char === "\n") lineComment = false;
      i += 1;
      continue;
    }
    if (blockComment) {
      if (char === "*" && next === "/") {
        blockComment = false;
        i += 2;
        continue;
      }
      i += 1;
      continue;
    }
    if (dollarTag) {
      if (sql.startsWith(dollarTag, i)) {
        i += dollarTag.length;
        dollarTag = "";
        continue;
      }
      i += 1;
      continue;
    }
    if (single) {
      if (char === "'" && next === "'") {
        i += 2;
        continue;
      }
      if (char === "'") single = false;
      i += 1;
      continue;
    }
    if (double) {
      if (char === '"' && next === '"') {
        i += 2;
        continue;
      }
      if (char === '"') double = false;
      i += 1;
      continue;
    }

    if (char === "-" && next === "-") {
      lineComment = true;
      i += 2;
      continue;
    }
    if (char === "/" && next === "*") {
      blockComment = true;
      i += 2;
      continue;
    }
    if (char === "'") {
      single = true;
      i += 1;
      continue;
    }
    if (char === '"') {
      double = true;
      i += 1;
      continue;
    }
    if (char === "$") {
      const match = sql.slice(i).match(/^\$[A-Za-z_][A-Za-z0-9_]*\$|^\$\$/);
      if (match) {
        dollarTag = match[0];
        i += dollarTag.length;
        continue;
      }
    }
    if (char === ";") {
      const statement = sql.slice(start, i).trim();
      if (statement) statements.push(statement);
      start = i + 1;
    }
    i += 1;
  }

  const tail = sql.slice(start).trim();
  if (tail) statements.push(tail);
  return statements;
}

function mapSqlOutsideLiterals(sql, transform) {
  let output = "";
  let buffer = "";
  let i = 0;
  const flush = () => {
    if (!buffer) return;
    output += transform(buffer);
    buffer = "";
  };

  while (i < sql.length) {
    const char = sql[i];
    const next = sql[i + 1];

    if (char === "-" && next === "-") {
      flush();
      const end = sql.indexOf("\n", i + 2);
      const stop = end === -1 ? sql.length : end;
      output += sql.slice(i, stop);
      i = stop;
      continue;
    }
    if (char === "/" && next === "*") {
      flush();
      const end = sql.indexOf("*/", i + 2);
      const stop = end === -1 ? sql.length : end + 2;
      output += sql.slice(i, stop);
      i = stop;
      continue;
    }
    if (char === "'") {
      flush();
      const start = i;
      i += 1;
      while (i < sql.length) {
        if (sql[i] === "'" && sql[i + 1] === "'") {
          i += 2;
          continue;
        }
        if (sql[i] === "'") {
          i += 1;
          break;
        }
        i += 1;
      }
      output += sql.slice(start, i);
      continue;
    }
    if (char === '"') {
      flush();
      const start = i;
      i += 1;
      while (i < sql.length) {
        if (sql[i] === '"' && sql[i + 1] === '"') {
          i += 2;
          continue;
        }
        if (sql[i] === '"') {
          i += 1;
          break;
        }
        i += 1;
      }
      output += sql.slice(start, i);
      continue;
    }
    if (char === "$") {
      const match = sql.slice(i).match(/^\$[A-Za-z_][A-Za-z0-9_]*\$|^\$\$/);
      if (match) {
        flush();
        const tag = match[0];
        const end = sql.indexOf(tag, i + tag.length);
        const stop = end === -1 ? sql.length : end + tag.length;
        output += sql.slice(i, stop);
        i = stop;
        continue;
      }
    }

    buffer += char;
    i += 1;
  }

  flush();
  return output;
}

function normalizeSqlOutsideLiterals(sql) {
  return mapSqlOutsideLiterals(sql, (part) => part.replace(/\s+/g, " "));
}

function formatAlterTableStatement(statement) {
  const match = statement.match(/^ALTER\s+TABLE\s+(.+?)\s+ALTER\s+COLUMN\s+(.+?)\s+TYPE\s+(.+?)\s+USING\s+(.+)$/i);
  if (!match) return null;
  return [
    `ALTER TABLE ${match[1].trim()}`,
    `  ALTER COLUMN ${match[2].trim()} TYPE ${match[3].trim()}`,
    `  USING ${match[4].trim()}`
  ].join("\n");
}

function formatSqlStatement(statement) {
  const normalized = normalizeSqlOutsideLiterals(statement).trim();
  const alterTable = formatAlterTableStatement(normalized);
  if (alterTable) return `${alterTable};`;

  let formatted = normalized;
  formatted = mapSqlOutsideLiterals(formatted, (part) => part
    .replace(/\b(SELECT|WITH|INSERT\s+INTO|UPDATE|DELETE\s+FROM|VALUES|SET|FROM|WHERE|GROUP\s+BY|ORDER\s+BY|HAVING|LIMIT|OFFSET|RETURNING|LEFT\s+JOIN|RIGHT\s+JOIN|INNER\s+JOIN|FULL\s+JOIN|JOIN|ON|UNION|ALTER\s+TABLE|ALTER\s+TYPE|CREATE\s+TABLE|CREATE\s+TYPE|CREATE\s+UNIQUE\s+INDEX|CREATE\s+INDEX|DROP\s+TABLE|DROP\s+TYPE|DROP\s+INDEX)\b/gi, (match) => `\n${match.replace(/\s+/g, " ").toUpperCase()}`)
    .replace(/\b(AND|OR)\b/gi, (match) => `\n  ${match.toUpperCase()}`)
    .replace(/\s*,\s*/g, ",\n  "));
  formatted = formatted
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+\n/g, "\n")
    .trim();
  return `${formatted};`;
}

function formatSql() {
  const editor = $("#sqlEditor");
  const formatted = splitSqlStatements(editor.value)
    .map(formatSqlStatement)
    .join("\n\n");
  editor.value = formatted;
  saveActiveSqlTab();
  clearSqlGenerationReview({ silent: true });
  showSqlMode();
}

function schemaSummary() {
  return state.schemas.map((schema) => {
    const tables = schema.tables.map((table) => {
      const columns = table.columns.map((column) => {
        const pk = table.primaryKey.includes(column.name) ? " pk" : "";
        return `${column.name} ${column.type}${pk}`;
      }).join(", ");
      return `${schema.name}.${table.name}(${columns})`;
    });
    return tables.join("\n");
  }).join("\n");
}

function schemaCatalogForAi() {
  const tableCatalog = state.catalog?.tables || {};
  const customTypeValues = new Map((state.catalog?.customTypes || []).map((type) => [
    `${type.schema}.${type.name}`,
    type.values || type.labels || []
  ]));
  const tables = Object.values(tableCatalog).map((table) => ({
    schema: table.schema,
    table: table.table,
    kind: table.kind,
    estimatedRows: table.estimated_rows,
    tableSize: table.table_size,
    totalSize: table.total_size,
    comment: table.comment || null,
    ddl: table.ddl || "",
    primaryKey: table.primaryKey || [],
    columns: (table.columns || []).map((column) => ({
      name: column.name,
      type: column.type,
      nullable: Boolean(column.nullable),
      default: column.default_value || null,
      position: column.position,
      isEnum: Boolean(column.is_enum),
      typeSchema: column.type_schema || null,
      typeName: column.type_name || null,
      customTypeValues: customTypeValues.get(`${column.type_schema}.${column.type_name}`) || []
    })),
    foreignKeys: (table.constraints || [])
      .filter((constraint) => constraint.type === "FOREIGN KEY")
      .map((constraint) => ({
        name: constraint.name,
        columns: constraint.columns || [],
        references: {
          schema: constraint.foreign_schema,
          table: constraint.foreign_table,
          columns: constraint.foreign_columns || []
        },
        definition: constraint.definition
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
  }));

  return {
    hash: state.catalog?.hash || "",
    activeTable: state.currentTable
      ? { schema: state.currentTable.schema, table: state.currentTable.table }
      : null,
    tables,
    customTypes: (state.catalog?.customTypes || []).map((type) => ({
      schema: type.schema,
      name: type.name,
      values: type.values || type.labels || []
    }))
  };
}

function selectedEditorLineRange() {
  const editor = $("#sqlEditor");
  const textValue = editor.value;
  if (editor.selectionStart === editor.selectionEnd) {
    return { start: 0, end: textValue.length, text: textValue, selected: false };
  }
  const selectionStart = Math.min(editor.selectionStart, editor.selectionEnd);
  const selectionEnd = Math.max(editor.selectionStart, editor.selectionEnd);
  const lastSelectedIndex = Math.max(selectionStart, selectionEnd - 1);
  const start = textValue.lastIndexOf("\n", selectionStart - 1) + 1;
  const nextNewline = textValue.indexOf("\n", lastSelectedIndex);
  const end = nextNewline === -1 ? textValue.length : nextNewline;
  return { start, end, text: textValue.slice(start, end), selected: true };
}

function activeSqlGenerationReview() {
  return activeSqlTab()?.generationReview || null;
}

function appendDiffLine(container, className, textValue) {
  const line = document.createElement("div");
  line.className = className;
  line.textContent = textValue;
  container.append(line);
}

function sqlSuggestionsFromResponse(data) {
  const suggestions = Array.isArray(data?.suggestions) ? data.suggestions : [];
  const normalized = suggestions
    .map((item, index) => ({
      id: item.id || uid(),
      title: item.title || `Option ${index + 1}`,
      sql: String(item.sql || "").trim()
    }))
    .filter((item) => item.sql);
  const fallback = String(data?.sql || "").trim();
  if (normalized.length === 0 && fallback) {
    normalized.push({ id: uid(), title: "Option 1", sql: fallback });
  }
  return normalized;
}

function selectedSqlSuggestion(review = activeSqlGenerationReview()) {
  if (!review) return null;
  const suggestions = review.suggestions?.length
    ? review.suggestions
    : [{ id: "legacy", title: "Option 1", sql: review.generatedSql || "" }];
  return suggestions[review.selectedIndex || 0] || suggestions[0] || null;
}

function renderSqlOptionDiff(container, originalText, generatedSql) {
  appendDiffLine(container, "diff-header", "--- Existing");
  for (const line of (originalText || "").split("\n")) appendDiffLine(container, "diff-line remove", `- ${line}`);
  appendDiffLine(container, "diff-header", "+++ Generated");
  for (const line of (generatedSql || "").split("\n")) appendDiffLine(container, "diff-line add", `+ ${line}`);
}

function renderSqlGenerationReview() {
  const panel = $("#sqlGenerationReview");
  if (!panel) return;
  const review = activeSqlGenerationReview();
  panel.hidden = !review;
  if (!review) return;

  const originalLines = (review.originalText || "").split("\n");
  const suggestions = review.suggestions?.length ? review.suggestions : [{ title: "Option 1", sql: review.generatedSql || "" }];
  $("#sqlGenerationSubtitle").textContent = `${review.selected ? "Selected lines" : "Entire editor"} - ${suggestions.length} candidate${suggestions.length === 1 ? "" : "s"} from ${originalLines.length} source line${originalLines.length === 1 ? "" : "s"}`;

  const diff = $("#sqlGenerationDiff");
  diff.innerHTML = "";
  suggestions.forEach((suggestion, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `sql-option-card ${index === (review.selectedIndex || 0) ? "active" : ""}`;
    card.addEventListener("click", () => selectSqlSuggestion(index));
    const label = document.createElement("div");
    label.className = "sql-option-label";
    label.textContent = `${suggestion.title || `Option ${index + 1}`}${index === (review.selectedIndex || 0) ? " - selected" : ""}`;
    const optionDiff = document.createElement("div");
    optionDiff.className = "sql-option-diff";
    renderSqlOptionDiff(optionDiff, review.originalText, suggestion.sql);
    card.append(label, optionDiff);
    diff.append(card);
  });
}

function selectSqlSuggestion(index) {
  const review = activeSqlGenerationReview();
  if (!review?.suggestions?.[index]) return;
  review.selectedIndex = index;
  renderSqlGenerationReview();
}

function clearSqlGenerationReview(options = {}) {
  const tab = activeSqlTab();
  if (!tab?.generationReview) return;
  tab.generationReview = null;
  renderSqlGenerationReview();
  if (!options.silent) setReady("SQL suggestion dismissed");
}

function replaceEditorRange(textValue, range, sql) {
  const prefix = textValue.slice(0, range.start);
  const suffix = textValue.slice(range.end);
  const needsLeadingNewline = prefix && !prefix.endsWith("\n") ? "\n" : "";
  const needsTrailingNewline = suffix && !suffix.startsWith("\n") ? "\n" : "";
  const insertedStart = prefix.length + needsLeadingNewline.length;
  return {
    value: `${prefix}${needsLeadingNewline}${sql}${needsTrailingNewline}${suffix}`,
    insertedStart
  };
}

async function requestSqlGeneration({ range, prompt, sourceValue, previousSuggestions = [], regenerate = false, button = null }) {
  const connection = activeConnection();
  const apiKey = state.settings.openAiKey || $("#openAiKey").value;
  if (!apiKey) {
    setView("settings");
    showToast("Add your OpenAI API key in Settings first.", "error");
    return null;
  }
  if (!prompt) {
    showToast("Write or select text to generate SQL.", "error");
    return null;
  }

  return withButtonLoading(button, async () => {
    setBusy("Generating SQL");
    try {
      const response = await api("/api/ai/sql", {
        apiKey,
        model: state.settings.openAiModel || "gpt-5.4-mini",
        systemPrompt: sqlGenerationSystemPrompt(),
        prompt,
        dialect: connection?.type === "postgres" ? "PostgreSQL" : "SQL",
        schemaSummary: aiSendSchemaInfo() ? schemaSummary() : "",
        schemaCatalog: aiSendSchemaInfo() ? schemaCatalogForAi() : null,
        currentSql: sourceValue,
        previousSuggestions,
        regenerate,
        sendSchemaInfo: aiSendSchemaInfo(),
        readOnlyOnly: aiReadOnlyOnly()
      });
      const suggestions = sqlSuggestionsFromResponse(response.data);
      const sql = suggestions[0]?.sql || "";
      if (!sql) throw new Error("OpenAI returned an empty SQL suggestion.");
      const tab = activeSqlTab();
      if (tab) {
        tab.generationReview = {
          id: uid(),
          sourceValue,
          range,
          selected: range.selected,
          prompt,
          originalText: range.text,
          generatedSql: sql,
          suggestions,
          selectedIndex: 0,
          createdAt: new Date().toISOString()
        };
      }
      renderSqlGenerationReview();
      showSqlMode();
      setReady("Review SQL suggestion");
      showToast("Review generated SQL, then accept it.");
      return tab?.generationReview || null;
    } catch (error) {
      setReady("SQL generation failed");
      showToast(error.message, "error");
      return null;
    }
  });
}

async function generateSqlFromEditor(button = null) {
  const editor = $("#sqlEditor");
  const range = selectedEditorLineRange();
  await requestSqlGeneration({
    range,
    prompt: range.text.trim(),
    sourceValue: editor.value,
    button
  });
}

async function regenerateSqlSuggestion(button = null) {
  const review = activeSqlGenerationReview();
  if (!review) return;
  await requestSqlGeneration({
    range: review.range,
    prompt: review.prompt,
    sourceValue: review.sourceValue,
    previousSuggestions: review.suggestions || (review.generatedSql ? [{ sql: review.generatedSql }] : []),
    regenerate: true,
    button
  });
}

function acceptSqlSuggestion() {
  const review = activeSqlGenerationReview();
  const editor = $("#sqlEditor");
  if (!review || !editor) return;

  const currentValue = editor.value;
  const currentRangeText = currentValue.slice(review.range.start, review.range.end);
  if (currentValue !== review.sourceValue && currentRangeText !== review.originalText) {
    showToast("Editor changed after generation. Regenerate before accepting.", "error");
    return;
  }

  const suggestion = selectedSqlSuggestion(review);
  if (!suggestion?.sql) return;
  const next = replaceEditorRange(currentValue, review.range, suggestion.sql);
  editor.value = next.value;
  editor.focus();
  editor.selectionStart = next.insertedStart;
  editor.selectionEnd = next.insertedStart + suggestion.sql.length;
  saveActiveSqlTab();
  clearSqlGenerationReview({ silent: true });
  showSqlMode();
  setReady("SQL accepted");
  showToast("SQL suggestion accepted.");
}

async function commitEdits(changes = state.pendingEdits, objectChanges = state.pendingObjectDeletes) {
  const rowChanges = changes || [];
  const objectDeletes = objectChanges || [];
  if (rowChanges.length === 0 && objectDeletes.length === 0) return;
  if (rowChanges.length > 0 && !state.currentTable) {
    showToast("Open a table before saving row edits.", "error");
    return;
  }
  setBusy("Committing edits");
  try {
    let rowSummary = "";
    let dropped = 0;
    if (rowChanges.length > 0) {
      const response = await api("/api/commit-table-edits", {
        config: connectionConfig(),
        schema: state.currentTable.schema,
        table: state.currentTable.table,
        primaryKey: state.currentTable.primaryKey,
        changes: rowChanges
      });
      const applied = new Set(rowChanges);
      state.pendingEdits = state.pendingEdits.filter((change) => !applied.has(change));
      const tab = activeTableTab();
      if (tab) tab.pendingEdits = [...state.pendingEdits];
      state.selectedRows = new Set();
      state.dataSelectionAnchorKey = null;
      addHistoryEntry("edit", `Save edits on ${state.currentTable.schema}.${state.currentTable.table}`);
      rowSummary = [
        response.data.updated ? `${response.data.updated} updated` : "",
        response.data.inserted ? `${response.data.inserted} inserted` : "",
        response.data.deleted ? `${response.data.deleted} deleted` : ""
      ].filter(Boolean).join(", ");
    }
    if (objectDeletes.length > 0) {
      const response = await api("/api/commit-object-deletes", {
        config: connectionConfig(),
        changes: objectDeletes
      });
      const appliedKeys = new Set(objectDeletes.map((change) => change.objectKey));
      state.pendingObjectDeletes = state.pendingObjectDeletes.filter((change) => !appliedKeys.has(change.objectKey));
      state.selectedObjectKeys = new Set([...state.selectedObjectKeys].filter((key) => !appliedKeys.has(key)));
      if (state.currentTable && appliedKeys.has(tableKey(state.currentTable.schema, state.currentTable.table))) {
        state.currentTable = null;
        state.currentTableInfo = null;
        state.selectedTableKey = null;
        state.tableTabs = state.tableTabs.filter((tabItem) => !appliedKeys.has(tabItem.id));
        state.activeTableTabId = state.tableTabs[0]?.id || null;
        renderDataTabs();
        renderDataGrid(null);
        renderStructure();
      }
      const tab = activeConnectionTab();
      if (tab) tab.pendingObjectDeletes = [...state.pendingObjectDeletes];
      dropped = response.data.dropped || 0;
      addHistoryEntry("edit", `Drop ${dropped} database object${dropped === 1 ? "" : "s"}`);
    }
    updateApplySelectedState();
    if (rowChanges.length > 0 && state.currentTable) {
      await openTable(state.currentTable.schema, state.currentTable.table, state.currentOffset, { force: true });
    }
    if (objectDeletes.length > 0) {
      await refreshSchema();
    }
    const summary = [
      rowSummary,
      dropped ? `${dropped} dropped` : ""
    ].filter(Boolean).join(", ") || "0 changed";
    showToast(`Committed ${summary}.`);
  } catch (error) {
    setReady("Commit failed");
    const hadDelete = rowChanges.some((change) => ["delete", "deleteCascade", "deleteIgnoreFk"].includes(change.action));
    if (hadDelete && state.currentTable) {
      state.pendingEdits = state.pendingEdits.filter((change) => !["delete", "deleteCascade", "deleteIgnoreFk"].includes(change.action));
      const tab = activeTableTab();
      if (tab) tab.pendingEdits = [...state.pendingEdits];
      await openTable(state.currentTable.schema, state.currentTable.table, state.currentOffset, { force: true, skipHistory: true });
    }
    if (objectDeletes.length > 0) {
      const attempted = new Set(objectDeletes.map((change) => change.objectKey));
      state.pendingObjectDeletes = state.pendingObjectDeletes.filter((change) => !attempted.has(change.objectKey));
      const tab = activeConnectionTab();
      if (tab) tab.pendingObjectDeletes = [...state.pendingObjectDeletes];
      await refreshSchema();
    }
    showToast(error.message, "error");
  }
}

function saveSettings(event) {
  event.preventDefault();
  state.settings = {
    ...state.settings,
    openAiKey: $("#openAiKey").value.trim(),
    openAiModel: $("#openAiModel").value.trim() || "gpt-5.4-mini",
    sqlGenerationSystemPrompt: $("#sqlGenerationSystemPrompt").value.trim() || defaultSqlGenerationSystemPrompt,
    aiSendSchemaInfo: $("#aiSendSchemaInfo").checked,
    aiReadOnlyOnly: $("#aiReadOnlyOnly").checked,
    rememberSecrets: $("#rememberSecrets").checked
  };
  saveSettingsState();
  renderSqlGenerationMenu();
  showToast("Settings saved.");
}

function hydrateSettings() {
  state.settings.tagColors = state.settings.tagColors || {};
  $("#openAiKey").value = state.settings.openAiKey || "";
  $("#openAiModel").value = state.settings.openAiModel || "gpt-5.4-mini";
  $("#sqlGenerationSystemPrompt").value = sqlGenerationSystemPrompt();
  $("#aiSendSchemaInfo").checked = aiSendSchemaInfo();
  $("#aiReadOnlyOnly").checked = aiReadOnlyOnly();
  $("#rememberSecrets").checked = state.settings.rememberSecrets !== false;
  renderTagDatalist();
}

function bindEvents() {
  $$(".rail-button").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
  $("#newConnectionButton").addEventListener("click", () => openConnectionDialog());
  $("#exportConnectionsButton").addEventListener("click", exportAllConnections);
  $("#importConnectionsButton").addEventListener("click", () => $("#connectionsImportFile").click());
  $("#connectionsImportFile").addEventListener("change", importConnectionsFile);
  $("#connectionSearch").addEventListener("input", renderConnections);
  $("#connectionPasswordForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const dialog = $("#connectionPasswordDialog");
    const input = $("#connectionPasswordInput");
    const value = input.value;
    const mode = dialog.dataset.passwordMode || "password";
    if (mode === "decrypt-import") {
      decryptQuarryPayload(encryptedConnectionImportPayload, value)
        .then((payload) => {
          encryptedConnectionImportPayload = null;
          dialog.dataset.submitted = "true";
          dialog.close();
          resolveConnectionPasswordDialog(payload);
        })
        .catch((error) => {
          input.classList.add("input-error");
          input.select();
          $("#connectionPasswordHint").textContent = error.message || "Could not decrypt .quarry file.";
        });
      return;
    }
    dialog.dataset.submitted = "true";
    const result = dialog.dataset.privateKeyOption === "true"
      ? { password: value, includePrivateKey: $("#connectionPrivateKeyExport").checked }
      : value;
    dialog.close();
    resolveConnectionPasswordDialog(result);
  });
  $("#connectionPasswordInput").addEventListener("input", () => {
    const dialog = $("#connectionPasswordDialog");
    $("#connectionPasswordInput").classList.remove("input-error");
    if (dialog.dataset.passwordMode === "decrypt-import") {
      $("#connectionPasswordHint").textContent = "This password is only used locally to decrypt the import file.";
    }
  });
  $("#connectionPasswordDialog").addEventListener("close", () => {
    const dialog = $("#connectionPasswordDialog");
    encryptedConnectionImportPayload = null;
    if (dialog.dataset.submitted !== "true") resolveConnectionPasswordDialog(null);
  });
  $("#objectSearch").addEventListener("input", renderSchema);
  $("#favoriteSearch").addEventListener("input", renderFavorites);
  $("#gridSearch").addEventListener("input", () => {
    const tab = activeTableTab();
    if (tab) tab.gridSearch = $("#gridSearch").value;
    if (state.currentTable) renderDataGrid(state.currentTable, true);
  });
  $("#openDatabaseButton").addEventListener("click", openDatabaseDialog);
  $("#refreshSchemaButton").addEventListener("click", refreshSchema);
  $("#schemaSelect").addEventListener("change", (event) => {
    state.selectedSchema = event.target.value;
    state.selectedTableKey = null;
    saveActiveConnectionTabState();
    renderSchema();
  });
  $("#schemaCreateMenuButton").addEventListener("click", (event) => openSchemaCreateMenu(event.currentTarget));
  $("#schemaCreateMenu").addEventListener("click", (event) => {
    const action = event.target.closest("button")?.dataset.action;
    if (action) createObjectDraft(action);
  });
  $("#sqlModeButton").addEventListener("click", showSqlMode);
  $("#dataModeButton").addEventListener("click", showDataMode);
  $("#structureModeButton").addEventListener("click", showStructureMode);
  $("#addStructureIndexButton").addEventListener("click", () => addStructureDraft("index"));
  $("#addStructureColumnButton").addEventListener("click", () => addStructureDraft("column"));
  $("#structureTriggersButton").addEventListener("click", () => showToast("Trigger editing is planned."));
  $("#structureBottomInfoButton").addEventListener("click", openTableInfo);
  preserveSqlEditorSelectionOnMouseDown($("#runCurrentButton"));
  preserveSqlEditorSelectionOnMouseDown($("#runAllButton"));
  $("#runAllButton").addEventListener("click", () => {
    saveActiveSqlTab();
    void runSqlPreservingEditorSelection($("#sqlEditor").value);
  });
  $("#runCurrentButton").addEventListener("click", () => void runSqlPreservingEditorSelection(selectedSqlStatement()));
  $("#formatButton").addEventListener("click", formatSql);
  $("#commitButton").addEventListener("click", () => commitEdits());
  $("#applySelectedButton").addEventListener("click", () => commitEdits());
  $("#closeRowInspectorButton").addEventListener("click", closeRowInspector);
  $("#refreshWorkspaceButton").addEventListener("click", () => refreshCurrentDataTable());
  $("#refreshDataButton").addEventListener("click", () => refreshCurrentDataTable());
  $("#prevPageButton").addEventListener("click", () => loadTablePage("prev"));
  $("#nextPageButton").addEventListener("click", () => loadTablePage("next"));
  $("#addFilterButton").addEventListener("click", addFilter);
  $("#removeFilterButton").addEventListener("click", removeFilter);
  $("#applyFiltersButton").addEventListener("click", () => applyFilters("and"));
  $("#filterJoinMenuButton").addEventListener("click", openFilterJoinMenu);
  $("#filterJoinMenu").addEventListener("click", (event) => {
    const join = event.target.closest("button")?.dataset.filterJoin;
    if (join) applyFilters(join);
  });
  $("#tableInfoButton").addEventListener("click", openTableInfo);
  $("#structureInfoButton").addEventListener("click", openTableInfo);
  $("#saveStructureButton").addEventListener("click", saveStructureChanges);
  $("#exportDbButton").addEventListener("click", (event) => exportDatabase(event.currentTarget));
  $("#importButton").addEventListener("click", openImportDialog);
  $("#importForm").addEventListener("submit", runImport);
  $("#typeForm").addEventListener("submit", saveTypeChanges);
  $("#addEnumValueButton").addEventListener("click", () => appendEnumInput(""));
  $("#exportResultCsvButton").addEventListener("click", (event) => exportActiveResult("csv", event.currentTarget));
  $("#exportResultJsonButton").addEventListener("click", (event) => exportActiveResult("json", event.currentTarget));
  $("#copyTableDdlButton").addEventListener("click", copyTableDdl);
  $("#downloadTableDdlButton").addEventListener("click", (event) => downloadTableDdl(event.currentTarget));
  $("#favoriteSqlButton").addEventListener("click", () => {
    saveActiveSqlTab();
    toggleFavorite($("#sqlEditor").value, activeSqlTab()?.title || "SQL favorite", favoriteConnectionMeta());
    renderHistory();
  });
  $("#magicButton").addEventListener("click", (event) => generateSqlFromEditor(event.currentTarget));
  $("#magicButton").addEventListener("contextmenu", openSqlGenerationMenu);
  $("#acceptSqlButton").addEventListener("click", acceptSqlSuggestion);
  $("#regenerateSqlButton").addEventListener("click", (event) => regenerateSqlSuggestion(event.currentTarget));
  $("#dismissSqlGenerationButton").addEventListener("click", () => clearSqlGenerationReview());
  $("#toggleAiSchemaInfoButton").addEventListener("click", () => (
    setSqlGenerationPreference("aiSendSchemaInfo", !aiSendSchemaInfo())
  ));
  $("#toggleAiReadOnlyButton").addEventListener("click", () => (
    setSqlGenerationPreference("aiReadOnlyOnly", !aiReadOnlyOnly())
  ));
  $("#openSqlGenerationSettingsButton").addEventListener("click", openSqlGenerationSettings);
  $("#resetSqlPromptButton").addEventListener("click", () => {
    $("#sqlGenerationSystemPrompt").value = defaultSqlGenerationSystemPrompt;
    $("#sqlGenerationSystemPrompt").focus();
  });
  $("#settingsForm").addEventListener("submit", saveSettings);
  $("#databaseSearch").addEventListener("input", renderDatabaseList);
  $("#databaseForm").addEventListener("submit", (event) => {
    event.preventDefault();
    switchDatabase(state.databaseDialog.selected);
  });
  $("#newDatabaseButton").addEventListener("click", createDatabaseFromDialog);
  $("#deleteOptionsForm").addEventListener("submit", confirmDeleteOptions);
  $("#sqlTabMenu").addEventListener("click", (event) => {
    const action = event.target.closest("button")?.dataset.action;
    const tabId = state.openSqlTabMenuId;
    if (!action || !tabId) return;
    if (action === "rename") renameSqlTab(tabId);
    if (action === "favorite") favoriteSqlTab(tabId);
    closeSqlTabMenu();
  });
  $("#favoriteMenu").addEventListener("click", async (event) => {
    const action = event.target.closest("button")?.dataset.action;
    const favorite = state.favorites.find((item) => item.id === state.openFavoriteMenuId);
    if (!action || !favorite) return;
    if (action === "rename") renameFavorite(favorite.id);
    if (action === "copy") {
      await writeClipboard(favorite.sql);
      showToast("Copied favorite SQL.");
    }
    if (action === "remove") removeFavorite(favorite.id);
    closeFavoriteMenu();
  });
  $$(".dialog-close").forEach((button) => {
    button.addEventListener("click", () => button.closest("dialog")?.close());
  });
  $$("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
  $("#clearHistoryButton").addEventListener("click", () => {
    state.history = [];
    save(storageKeys.history, state.history);
    renderHistory();
  });
  $("#clearFavoritesButton").addEventListener("click", () => {
    if (!state.favorites.length || !confirm("Clear all favorite queries?")) return;
    state.favorites = [];
    saveFavorites();
  });
  $("#connectionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const connection = readConnectionForm();
    if (!connection.name || !connection.host || !connection.database || !connection.user) {
      $("#connectionFormStatus").textContent = "Fill the required fields.";
      return;
    }
    upsertConnection(connection);
    $("#connectionDialog").close();
  });
  $("#connTag").addEventListener("input", () => {
    applyStoredTagColorToForm();
  });
  $("#connTag").addEventListener("change", () => {
    $("#connTag").value = normalizeTag($("#connTag").value);
    applyStoredTagColorToForm();
  });
  $("#testConnectionButton").addEventListener("click", async () => {
    const testButton = $("#testConnectionButton");
    testButton.classList.remove("test-success", "test-error");
    testButton.disabled = true;
    setConnectionTestButton("Testing...");
    $("#connectionFormStatus").textContent = "Testing...";
    try {
      const test = await api("/api/test-connection", { config: connectionConfig(readConnectionForm()) });
      $("#connectionFormStatus").textContent = `Connected as ${test.data.user}`;
      $("#connectionFormStatus").className = "status-ok";
      setConnectionTestButton("Connected", "success");
    } catch (error) {
      $("#connectionFormStatus").textContent = error.message;
      $("#connectionFormStatus").className = "status-error";
      setConnectionTestButton("Failed", "error");
    } finally {
      testButton.disabled = false;
      setTimeout(() => {
        setConnectionTestButton();
      }, 2600);
    }
  });
  $("#importUrlButton").addEventListener("click", importConnectionUrl);
  $("#chooseSshKeyButton").addEventListener("click", async () => {
    if (window.desktopApi?.chooseSshKey) {
      const filePath = await window.desktopApi.chooseSshKey();
      if (!filePath) return;
      $("#sshPrivateKeyPath").value = filePath;
      $("#sshPrivateKey").value = "";
      $("#connectionFormStatus").textContent = `Selected key path: ${filePath}`;
      $("#connectionFormStatus").className = "status-ok";
      return;
    }
    $("#sshPrivateKeyFile").click();
  });
  $("#sshPrivateKeyFile").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    $("#sshPrivateKey").value = await file.text();
    $("#connectionFormStatus").textContent = `Loaded key file: ${file.name}`;
    $("#connectionFormStatus").className = "status-ok";
  });
  $("#sqlEditor").addEventListener("input", () => {
    saveActiveSqlTab();
    updateFavoriteSqlButton();
    clearSqlGenerationReview({ silent: true });
    renderSqlAutocompleteGhost();
  });
  $("#sqlEditor").addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      event.preventDefault();
      void runSqlPreservingEditorSelection(event.shiftKey ? $("#sqlEditor").value : selectedSqlStatement());
    }
    if (event.key === "Tab") {
      event.preventDefault();
      const editor = event.target;
      if (completeSqlAtCursor(editor)) return;
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.value = `${editor.value.slice(0, start)}  ${editor.value.slice(end)}`;
      editor.selectionStart = editor.selectionEnd = start + 2;
      saveActiveSqlTab();
      clearSqlGenerationReview({ silent: true });
      renderSqlAutocompleteGhost();
    }
  });
  $("#sqlEditor").addEventListener("keyup", renderSqlAutocompleteGhost);
  $("#sqlEditor").addEventListener("click", renderSqlAutocompleteGhost);
  $("#sqlEditor").addEventListener("focus", renderSqlAutocompleteGhost);
  $("#sqlEditor").addEventListener("blur", renderSqlAutocompleteGhost);
  $("#sqlEditor").addEventListener("scroll", renderSqlAutocompleteGhost);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSqlGenerationMenu();
    if (event.key === "Escape") closeFavoriteMenu();
    if (event.key === "Escape") closeSqlTabMenu();
    if (event.key === "Escape") closeSchemaCreateMenu();
    if (event.key === "Escape" && state.openConnectionMenuId) {
      closeConnectionMenu();
      return;
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "w") {
      event.preventDefault();
      closeFocusedTabOrWindow();
      return;
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "t") {
      event.preventDefault();
      createFocusedTab();
      return;
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "a" && !isTextEditingTarget(event.target)) {
      const handled = selectAllRowsForCurrentContext(event);
      if (handled) {
        event.preventDefault();
        return;
      }
    }
    if (handleGridKeyboardShortcut(event)) return;
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "f" && !$("#dataPane").hidden) {
      event.preventDefault();
      toggleFilterBar(true, { ensureRow: true });
    }
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter" && !$("#dataPane").hidden && !$("#filterBar").hidden) {
      event.preventDefault();
      applyFilters(event.shiftKey ? "or" : "and");
      return;
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "r" && !$("#dataPane").hidden) {
      event.preventDefault();
      refreshCurrentDataTable();
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s" && !$("#structurePane").hidden && hasStructureChanges()) {
      event.preventDefault();
      saveStructureChanges();
      return;
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s" && (state.pendingEdits.length > 0 || state.pendingObjectDeletes.length > 0)) {
      event.preventDefault();
      commitEdits();
    }
    if (event.key === "Delete" && !isTextEditingTarget(event.target)) {
      if (!$("#dataPane").hidden && activeDataSelection().length > 0) {
        event.preventDefault();
        markSelectedRowsForDelete({ cascade: false, ignoreFk: false });
        return;
      }
      if ($("#connectionsPanel").classList.contains("active") && activeObjectSelection().length > 0) {
        event.preventDefault();
        markSelectedObjectsForDelete({ cascade: false, ignoreFk: false });
      }
    }
  });
  window.desktopApi?.onRefreshDataShortcut?.(() => refreshCurrentDataTable());
  window.desktopApi?.onCloseTabShortcut?.(() => closeFocusedTabOrWindow());
  window.desktopApi?.onNewTabShortcut?.(() => createFocusedTab());
  document.addEventListener("pointerdown", (event) => {
    if (!event.target.closest("#gridContextMenu")) closeGridContextMenu();
    if (!event.target.closest("#filterJoinMenu") && !event.target.closest("#filterJoinMenuButton")) closeFilterJoinMenu();
    if (!event.target.closest("#sqlGenerationMenu") && !event.target.closest("#magicButton")) closeSqlGenerationMenu();
    if (!event.target.closest("#favoriteMenu") && !event.target.closest(".favorite-menu-button")) closeFavoriteMenu();
    if (!event.target.closest("#sqlTabMenu") && !event.target.closest(".sql-tab")) closeSqlTabMenu();
    if (!event.target.closest("#schemaCreateMenu") && !event.target.closest("#schemaCreateMenuButton")) closeSchemaCreateMenu();
    if (!state.openConnectionMenuId || event.target.closest(".connection-actions")) return;
    closeConnectionMenu();
  }, true);
  document.addEventListener("focusin", (event) => {
    if (!state.openConnectionMenuId || event.target.closest(".connection-actions")) return;
    closeConnectionMenu();
  });
  document.addEventListener("mouseup", () => {
    state.dragSelection = null;
  });
  bindResizers();
}

function bindResizers() {
  let resizing = null;
  $("#sidebarResizer").addEventListener("mousedown", () => {
    resizing = "sidebar";
    document.body.classList.add("resizing");
  });
  $("#inspectorResizer").addEventListener("mousedown", () => {
    resizing = "inspector";
    document.body.classList.add("resizing");
  });
  $("#workspaceResizer").addEventListener("mousedown", () => {
    resizing = "workspace";
    document.body.classList.add("resizing");
  });
  document.addEventListener("mousemove", (event) => {
    if (!resizing) return;
    if (resizing === "sidebar") {
      const width = Math.min(Math.max(event.clientX - 52, 230), 520);
      document.documentElement.style.setProperty("--sidebar-width", `${width}px`);
    } else if (resizing === "inspector") {
      const appWidth = window.innerWidth;
      const width = Math.min(Math.max(appWidth - event.clientX, 240), 620);
      document.documentElement.style.setProperty("--inspector-width", `${width}px`);
    } else {
      const height = Math.min(Math.max(event.clientY - 49, 180), window.innerHeight - 190);
      document.documentElement.style.setProperty("--workspace-top-height", `${height}px`);
    }
  });
  document.addEventListener("mouseup", () => {
    resizing = null;
    document.body.classList.remove("resizing");
  });
}

function boot() {
  installIcons();
  hydrateSettings();
  state.activeSqlTabId = state.sqlTabs[0]?.id || null;
  syncSqlTabSequence();
  $("#sqlEditor").value = activeSqlTab()?.sql || "";
  bindEvents();
  renderSqlTabs();
  renderConnections();
  renderConnectionTabs();
  renderSchema();
  renderStructure();
  renderDataTabs();
  renderHistory();
  renderFavorites();
  renderResults();
  renderSqlGenerationReview();
  updateFavoriteSqlButton();
}

boot();
