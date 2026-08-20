# Contributing to BBrains

First off, thank you for considering contributing to BBrains. It's people like you that make this platform what it is.

Please read this document carefully — it keeps the repository healthy and protects the project's dual-license model.

## Code of conduct

All contributors must follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Contributor License Agreement (CLA)

**Important.** BBrains is dual-licensed (AGPL-3.0 community edition + a commercial license). To legally sell a commercial license that includes community-contributed code, every contributor must grant BBrains the right to use their contribution under both licenses.

- Every external pull request is **blocked until the contributor signs the CLA** via the [CLA Assistant](https://cla-assistant.io) bot.
- Signing is a one-time, no-signature-required digital click-through.
- If you're contributing on behalf of a company, an authorized person must sign on its behalf.
- The CLA covers all contributions: code, docs, tests, translations, and assets.

## How to contribute

1. **Find or open an issue** describing what you want to do. It must carry the correct `module:*` and `priority:*` labels.
2. **Discuss the design** for anything non-trivial before writing code.
3. **Fork** the repository (or create a `feature/*` or `fix/*` branch) from `develop`.
4. Implement your change, following the rules below.
5. Open a pull request against `develop` using the PR template.

## Branching & workflow

- `main` — always production-ready. Protected: no direct pushes, ≥2 approvals, signed commits, all checks green.
- `develop` — integration branch for in-progress work. All PRs target `develop`.
- Branch naming: `feature/<short-name>`, `fix/<short-name>`, `docs/<short-name>`, `release/vX.Y.Z`.

## Rules for pull requests

- **Title** follows [Conventional Commits](https://www.conventionalcommits.org/): `feat(economy): add wallet transfer endpoint`, `fix(chat): handle reconnect after network drop`.
- **Scope**: keep PRs small (ideally < 500 changed lines, hard cap ~1000). Split large work into logical PRs.
- **Tests**: new features must include unit/integration tests with ≥ 80% coverage on new code. Run the full suite before pushing.
- **No secrets**: never commit credentials, API keys, or `.env` files. CI runs secret scanning.
- **No `console.log`** in production code — use the platform's structured logger.
- **Schema changes** require a Prisma migration and the `module:db` label.
- **New dependencies** must be discussed in an issue first.
- **Breaking changes** require a dedicated issue, maintainer approval, and a migration guide.
- **Documentation**: update docs in `docs/` when public APIs or behavior change.

## Getting the code running

See the [README](README.md#getting-started). In short:

```bash
pnpm install
cp .env.example .env
pnpm docker:up
pnpm db:migrate && pnpm db:seed
pnpm dev
```

## Quality commands

```bash
pnpm lint          # ESLint across the monorepo
pnpm typecheck     # TypeScript strict checks
pnpm test          # unit + integration tests
pnpm build         # production builds
pnpm format        # Prettier formatting
```

## Code style

- TypeScript everywhere on the JS side, strict mode, `@bbrains/*` packages for shared code.
- Python (AI service) follows `ruff` with the config in `services/ai-service/pyproject.toml`.
- Prettier + ESLint are enforced in CI; format before you commit.

## Issue labels

Labels keep triage fast. See [`docs/contributing/labels.md`](docs/contributing/labels.md) for the full taxonomy (`type:*`, `priority:*`, `module:*`, `status:*`, contributor labels).

## Review process

1. CI runs lint, typecheck, tests, build, and security scans on every PR.
2. A CLA check must pass.
3. [CODEOWNERS](.github/CODEOWNERS) auto-request review from the right people.
4. `main` requires ≥2 approvals from code owners; `develop` requires ≥1.
5. Approvals are dismissed when new commits are pushed.

## Release process

Releases are cut from `main` via version tags (`vX.Y.Z`). A [release workflow](.github/workflows/release.yml) builds and publishes versioned Docker images to GitHub Container Registry. See `docs/contributing/releases.md` for details.

---

Thank you for contributing to BBrains!
