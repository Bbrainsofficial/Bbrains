# Security architecture

## Authentication & authorization

- **JWTs**: short-lived access tokens (15 min default) + HttpOnly refresh tokens (7 days).
- **RBAC**: every sensitive endpoint is gated by a reusable NestJS guard that validates
  permission flags carried in the token, populated at login from the role system
  (`src/common/guards/permissions.guard.ts`). Roles are hierarchical (Discord-style).
- **SSO**: optional Keycloak integration for institutional OIDC/SAML identity providers.

## Data protection

- TLS 1.3 in transit everywhere.
- Passwords hashed with bcrypt; sensitive fields encrypted at rest.
- Secrets live in environment variables / a secrets manager — never in the repo
  (enforced by gitleaks in CI).
- Rich text sanitized with DOMPurify to prevent XSS; all inputs validated with Zod.

## Audit logging

- Append-only `audit_logs` schema in PostgreSQL partition. No delete path exists for
  any user including admins. Logs track actor, action, resource, before/after JSON, IP, UA.

## Rate limiting

Applied at the gateway/app level per-user and per-IP, focused on messaging, payments,
giveaways, and auth endpoints.

## Compliance

- Privacy by default: student data is scoped per institution; contact-gated chat anonymity
  is a feature. GDPR and FERPA considerations drive the visibility/privacy settings and
  data retention policy (see `../prd/`).
- Export and delete tooling for user data to support data-subject requests.

## CI security gates

Every PR and weekly scheduled run executes (see `.github/workflows/security.yml`):

1. CodeQL analysis (JS/TS + Python)
2. `pnpm audit --audit-level=high`
3. gitleaks secret scanning
4. Trivy filesystem scan (CRITICAL/HIGH)

## Incident response

- Report via the process in `SECURITY.md`.
- Maintainers triage within 48h; coordinated disclosure; credit reporters on request.