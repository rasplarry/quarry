# Quarry

Quarry is a local database client for PostgreSQL. It can run in a browser during development and can be packaged as a macOS desktop app.

## Features

- PostgreSQL connections with optional SSL.
- SSH tunnel support with password, private key text, or local key path.
- Saved connection profiles with tags.
- Database, schema, table, view, and custom type browsing.
- SQL editor with tabs, formatting, execution history, and favorites.
- Data grid with paging, filtering, sorting, row editing, copy, import, and export.
- Structure view for columns, indexes, constraints, and table metadata.
- Optional SQL generation using your own OpenAI API key.

## Requirements

- Bun
- macOS for desktop packaging

## Run Locally

```sh
bun install
bun run dev
```

The local server prints the app URL. By default it runs at:

```txt
http://localhost:5177
```

## Desktop App

Run the app with Electron:

```sh
bun run desktop
```

Build a macOS DMG:

```sh
bun run dist:mac
```

The generated DMG is written to `dist/`.

## Development

TypeScript is the editable source.

- `public/app.ts` builds to `build/app.js`.
- `src/server.ts` builds to `build/server.js`.
- `src/shared/types.ts` contains shared types.

Useful commands:

```sh
bun run typecheck
bun run build:ts
```

Generated JavaScript is written to `build/`.

## Local Data

Quarry stores connection profiles, settings, history, favorites, and cached catalog metadata locally on the machine running the app.

SSH private keys can be stored as local file paths. When a connection uses a key path, Quarry reads the key from the local filesystem at connection time.

The AI SQL feature is optional. When enabled, Quarry sends the selected prompt, SQL context, and optionally schema context to OpenAI using the API key saved in Settings.
