# Architecture

This directory holds the technical architecture documentation for BBrains.

- [`security.md`](security.md) — security design and CI security gates
- `overview.md` — high-level architecture diagram and data flow *(to be written)*
- `database.md` — schema-per-domain database design *(to be written)*
- `real-time.md` — Socket.IO / LiveKit real-time design *(to be written)*
- `offline-sync.md` — mobile offline-first sync & conflict resolution *(to be written)*

## TL;DR

- **Modular monolith**: one NestJS API (`services/api`) containing all business modules as
  strongly separated internal domains. This keeps wallet/ACID transactions simple and makes
  self-hosting a one-command Docker Compose deploy.
- **Satellite services** (isolated for security/ecosystem reasons, not scale): Python FastAPI
  AI service, Judge0 code-runner, LiveKit real-time media.
- **Clients**: Next.js PWA (web), React Native/Expo (mobile, offline-first), Next.js landing.
- **Data**: PostgreSQL (single DB, domain schemas), Valkey/Redis (cache, pub/sub, leaderboards),
  MinIO (object storage), Meilisearch (full-text), Qdrant (vector embeddings).

Module boundaries inside the monolith map 1:1 to future microservice boundaries, so the
architecture can scale out later without a rewrite.

Full written-up design will be added here as the PRD matures (`../prd/`).