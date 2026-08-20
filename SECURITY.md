# Security Policy

BBrains handles student academic records, behavioral data, and virtual/financial transactions. Security is a first-class concern.

## Reporting a vulnerability

**Do not open a public GitHub issue for security problems.**

Please report vulnerabilities privately using one of these channels:

1. **GitHub Security Advisories (preferred):** https://github.com/bbrains/bbrains/security/advisories — use "Report a vulnerability".
2. **Email:** `security@bbrains.app` — encrypt sensitive payloads with our PGP key if requested.

Please include:

- Affected component(s) and version/commit
- Description of the vulnerability and its impact
- Steps to reproduce (or a PoC), sanitized of any real data
- Suggested fix, if you have one

You should receive an acknowledgment within 48 hours and regular updates on remediation status.

## Scope

In scope: the `bbrains/bbrains` monorepo — API, web, mobile, AI service, code-runner, realtime-media, infrastructure/Docker/K8s, and official deployments.

Out of scope: third-party dependencies and infrastructure you self-host (unless it ships in our Docker Compose stack).

## Disclosure policy

We follow coordinated disclosure:

- Maintainers triage and work on a fix.
- A private security advisory is published before any public announcement.
- We will credit reporters (unless they prefer to remain anonymous) once a fix is released.

## Known security practices

- Short-lived JWTs + HttpOnly refresh tokens.
- RBAC permission check on every sensitive endpoint.
- TLS 1.3 in transit; encryption at rest for sensitive data.
- Input validation (Zod) and XSS sanitization (DOMPurify) on rich text.
- Rate limiting on messaging, payments, and giveaways.
- Append-only audit logging that even admins cannot delete.
- CI runs CodeQL, `pnpm audit`, gitleaks secret scanning, and Trivy on every PR.
- See [`docs/architecture/security.md`](docs/architecture/security.md) for details.

## Supported versions

Only the latest stable release (and the `main` branch) receive security fixes. Self-hosted institutions must upgrade to supported versions promptly; check release notes for security advisories.

## Rewards

We do not currently run a paid bug bounty program, but we will publicly acknowledge valid reports (with consent).
