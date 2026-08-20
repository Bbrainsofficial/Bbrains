# Self-hosting

Guides and reference material for institutions that self-host BBrains.

- `install.md` — step-by-step install wizard walkthrough *(to be written)*
- `configuration.md` — environment variables and admin settings *(to be written)*
- `upgrades.md` — version upgrades and backups *(to be written)*
- `licensing.md` — how to apply and activate a commercial license *(to be written)*

## Quick start

```bash
cp .env.example .env        # fill in secrets
docker compose -f infrastructure/docker/docker-compose.yml up -d
```

See the root [README](../../README.md#getting-started) for the full local setup.