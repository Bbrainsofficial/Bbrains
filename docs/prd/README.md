# PRD

The BBrains Product Requirements Document is a living document. Multiple AI-generated
drafts were produced during initial ideation; they are preserved in the repository's
[`context/`](../../context/) folder:

- `context/prompt.md` — the original feature brainstorm (50 ideas)
- `context/all.md` — consolidated PRD synthesizing all sources
- `context/claude.md` — Claude's PRD (microservices-first draft)
- `context/gemini.md` — Gemini's PRD (concise feature pillars)
- `context/gpt.md` — GPT's PRD (phased roadmap + open-source library suggestions)

## Status

- **v1.0.0 — Draft** — pending team review.

## Plan of record

The consolidated PRD follows **`context/all.md`** as the primary source, adopting:

- **Modular monolith** backend (NestJS) with a small number of satellite services.
- **pnpm + Turborepo** monorepo (see root `package.json`, `pnpm-workspace.yaml`, `turbo.json`).
- **Dual license**: AGPL-3.0 community edition + commercial license for
  self-host/cloud tiers.
- Phased delivery: P0 MVP → P1 → P2 → P3 (see `all.md` §4 Scope & Phasing).

## Next steps

1. Break Phase 1 (P0) items into GitHub Issues tagged with `module:*` + `priority:P0-*`.
2. Finalize the PRD as `v1.md` in this directory once reviewed.
3. Stand up the Docker Compose self-hosting path early (see `../self-hosting/`).