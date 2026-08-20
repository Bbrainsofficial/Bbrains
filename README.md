# BBrains

> An open-source, gamified Learning Management System (LMS) for colleges — inspired by *Classroom of the Elite*.

BBrains is a complete digital campus ecosystem: everything a modern LMS needs (courses, assignments, quizzes, exams, grading, attendance, announcements) combined with a deep gamification layer (XP, levels, streaks, achievements, score algorithm), a virtual economy (wallet, marketplace, stock-market simulator, giveaways), and social collaboration (Discord-style chat, Twitch-style livestreams, collaborative whiteboards, forums) — all built to run on the **web**, on **mobile** (offline-first), and eventually on a dedicated campus phone OS.

## Status

**Scaffold only.** This repository currently contains the monorepo structure and configuration. Application source code is being added incrementally per the PRD in [`docs/prd/`](docs/prd).

## Repo layout

```
apps/
  web/          Next.js PWA (main web app)
  mobile/       React Native (Expo) app, offline-first
  landing/      Next.js marketing / landing site
services/
  api/          NestJS modular monolith (all business modules)
  ai-service/   Python FastAPI — document Q&A, embeddings, LLM
  code-runner/  Judge0-based sandboxed code execution
  realtime-media/  LiveKit — livestreams, voice/video, screen share
packages/
  ui/           Shared React component library
  types/        Shared TypeScript types
  validators/   Shared Zod validation schemas
  utils/        Shared utilities
  config/       Shared ESLint / TS / Tailwind presets
  database/     Shared Prisma schema & client
infrastructure/
  docker/       Docker Compose stacks + Dockerfiles
  kubernetes/   K8s manifests (managed SaaS)
  helm/         Helm chart (managed SaaS)
docs/
  prd/  architecture/  api/  self-hosting/  contributing/  features/
```

## Tech stack

- **Monorepo**: pnpm workspaces + Turborepo
- **Backend**: NestJS (TypeScript) modular monolith, Prisma ORM, Socket.IO, BullMQ
- **Web**: Next.js (App Router), Tailwind CSS, TanStack Query, Zustand
- **Mobile**: React Native + Expo, WatermelonDB (offline sync)
- **AI**: Python FastAPI, LangChain, Qdrant, Ollama
- **Media**: LiveKit
- **Infra**: Docker Compose (self-host) / Kubernetes + Helm (SaaS)

## Getting started

Requirements: Node.js ≥ 20, pnpm ≥ 9, Docker.

```bash
# 1. Install dependencies
pnpm install

# 2. Start the backing services (Postgres, Redis, MinIO, LiveKit, Judge0, ...)
pnpm docker:up

# 3. Set up environment variables
cp .env.example .env

# 4. Apply database schema and seed
pnpm db:migrate
pnpm db:seed

# 5. Run everything (web, api, ai-service, ...)
pnpm dev
```

See [`docs/self-hosting/`](docs/self-hosting) for deployment, and [`docs/architecture/`](docs/architecture) for the full architecture.

## Contributing

Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) before opening a pull request. All contributors must sign the Contributor License Agreement (CLA); see the project's [CLA Assistant](https://cla-assistant.io) bot.

## Security

Found a vulnerability? **Do not open a public issue.** Follow the disclosure policy in [`SECURITY.md`](SECURITY.md).

## License

BBrains is dual-licensed:

- **AGPL-3.0** — the community edition (this repository). See [`LICENSE`](LICENSE).
- **BBrains Commercial License** — for institutions that self-host under a commercial license or use the managed cloud. See [`COMMERCIAL-LICENSE.md`](COMMERCIAL-LICENSE.md).

## Community

- Website: https://bbrains.app
- Discord: https://discord.gg/bbrains
- Documentation: https://docs.bbrains.app
