export type ConnectionTag =
  | "Local"
  | "Testing"
  | "Development"
  | "QA"
  | "Staging"
  | "Production"
  | string;

export interface SshConfig {
  enabled?: boolean;
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  privateKey?: string;
  privateKeyPath?: string;
  passphrase?: string;
}

export interface DbConnectionConfig {
  id?: string;
  name?: string;
  tag?: ConnectionTag;
  tagColor?: string;
  type?: "postgres" | "mysql" | "sqlite" | string;
  host?: string;
  port?: number;
  database?: string;
  user?: string;
  username?: string;
  password?: string;
  ssl?: boolean;
  ssh?: SshConfig;
}

export interface QueryField {
  name: string;
  dataTypeID?: number;
  format?: string;
}

export interface QueryResultPayload {
  command?: string;
  rowCount?: number;
  fields: QueryField[];
  rows: Record<string, unknown>[];
  elapsedMs?: number;
}

export interface CatalogColumn {
  name: string;
  type: string;
  nullable?: boolean;
  default_value?: string | null;
  is_enum?: boolean;
  type_schema?: string | null;
  type_name?: string | null;
  primaryKey?: boolean;
}

export interface CatalogTable {
  schema: string;
  table: string;
  kind?: string;
  primaryKey?: string[];
  columns?: CatalogColumn[];
  constraints?: Array<Record<string, unknown>>;
  indexes?: Array<Record<string, unknown>>;
  ddl?: string;
  hash?: string;
}

export interface CustomTypeInfo {
  schema: string;
  name: string;
  labels?: string[];
  values?: string[];
  hash?: string;
}

export interface SchemaCatalog {
  hash?: string;
  tables?: Record<string, CatalogTable> | CatalogTable[];
  customTypes?: CustomTypeInfo[];
}
