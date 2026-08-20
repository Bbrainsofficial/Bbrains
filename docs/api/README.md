# API documentation

The BBrains API is a NestJS modular monolith exposed at `services/api` (`http://localhost:4000` by default).

- OpenAPI/Swagger is auto-generated via `@nestjs/swagger` and served at `/docs` in development.
- Request/response contracts are defined as shared Zod schemas in `packages/validators` and
  TypeScript types in `packages/types`.

## Per-module docs

- `auth.md` — authentication, sessions, roles *(to be written)*
- `courses.md` — courses, assignments, quizzes, grades *(to be written)*
- `gamification.md` — XP, levels, achievements, streaks *(to be written)*
- `economy.md` — wallet, marketplace, stock market, giveaways *(to be written)*
- `communication.md` — chat, forums, livestreams, council *(to be written)*
- `campus.md` — attendance, library, canteen, events *(to be written)*
- `ai.md` — AI service endpoints *(to be written)*

Standard reference: [OpenAPI 3.0](https://spec.openapis.org/).