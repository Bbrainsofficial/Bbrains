# Scripts

Repository-wide utility scripts (run from the repo root).

Planned scripts (to be added):

- `setup.sh` / `setup.ps1` — bootstrap a development environment (deps, env, db).
- `seed.ts` — seed development data through `packages/database`.
- `generate-types.ts` — regenerate shared API types from OpenAPI/Zod schemas.
- `release.ts` — semantic-release orchestration helpers.

Most scripts are thin wrappers around pnpm filters, e.g.:

```bash
pnpm --filter @bbrains/database db:migrate
pnpm --filter @bbrains/database db:seed
```