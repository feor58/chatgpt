# Vue 3 Module Federation Template

Minimal Vue 3 + TypeScript + Webpack 5 setup with Module Federation.

## Structure
- `shared-lib` – shared TypeScript package used by host and remotes.
- `remote` – exposes `RemoteButton` component via Module Federation.
- `remote2` – exposes `RemoteLabel` component via Module Federation.
- `host` – consumes both remotes and uses `shared-lib`.

Each directory can be a standalone repository. They are linked locally via `file:` dependencies.

## Development
1. Install dependencies and build shared package:
   ```bash
   cd shared-lib && npm install && npm run build
   ```
2. In separate terminals start remotes and host:
   ```bash
   cd remote && npm install && npm run serve
   cd remote2 && npm install && npm run serve
   cd host && npm install && npm run serve
   ```
3. Open `http://localhost:3000` to see the host loading both remote components.
