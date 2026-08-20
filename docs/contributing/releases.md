# Releases

## Versioning

BBrains follows [Semantic Versioning](https://semver.org) (`MAJOR.MINOR.PATCH`).
The current version is tracked in the root `package.json`.

## Release process

1. **Prepare** — merge all intended work into `develop`; CI must be green.
2. **Cut a release branch** `release/vX.Y.Z` from `develop`.
3. **Finalize** — update version numbers, PRD version, and changelog.
4. **Merge to `main`** — via PR with the standard protections (≥2 approvals).
5. **Tag** — push `vX.Y.Z` to `main`. The [release workflow](../../.github/workflows/release.yml):
   - builds and pushes versioned Docker images to GitHub Container Registry
     (`ghcr.io/bbrains/bbrains/{api,web,ai-service}`)
   - creates a GitHub Release with auto-generated release notes
6. **Backport fixes** — `fix/*` PRs target `develop`, then cherry-pick to `main` when needed.

Self-hosted institutions pull pinned version tags (`ghcr.io/bbrains/bbrains/api:v1.2.3`).

## Milestones

Feature work is tracked with GitHub Projects milestones (e.g. "v1 MVP", "Gamification v2").
An issue is only closed after its PRs are merged and the milestone is updated.
