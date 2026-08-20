# Issue labels

Maintainers use a consistent label taxonomy so triage and release planning stay fast.
Labels are applied automatically by CI where possible ([`.github/labeler.yml`](../../.github/labeler.yml)).

## Type

- `type:bug` — something is broken
- `type:feature` — new feature request
- `type:enhancement` — improvement to an existing feature
- `type:docs` — documentation changes
- `type:security` — security-related issue (report privately! see `SECURITY.md`)
- `type:performance` — performance improvement
- `type:refactor` — refactoring with no behavior change
- `type:test` — test additions/fixes
- `type:chore` — maintenance, dependency updates

## Priority

- `priority:critical` — production broken, fix immediately
- `priority:high` — important, next sprint
- `priority:medium` — normal priority
- `priority:low` — nice to have

## Module / area

`module:auth` · `module:roles` · `module:lms-core` · `module:gamification` ·
`module:economy` · `module:payments` · `module:chat` · `module:livestream` ·
`module:attendance` · `module:library` · `module:canteen` · `module:events` ·
`module:projects` · `module:whiteboard` · `module:ai` · `module:code-runner` ·
`module:media` · `module:notifications` · `module:audit` · `module:analytics` ·
`module:web` · `module:mobile` · `module:landing` · `module:ui` · `module:db` ·
`module:infra`

## Status

`status:needs-triage` · `status:confirmed` · `status:in-progress` ·
`status:blocked` · `status:needs-more-info` · `status:wont-fix` ·
`status:duplicate` · `status:stale`

## Contributor

- `good first issue` — great for newcomers
- `help wanted` — maintainers need community help
- `hacktoberfest` — Hacktoberfest eligible
- `dependencies` — dependency update PRs (from Dependabot)
