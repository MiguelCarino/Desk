# Desk
A basic web desk support snippet panel to improve desk support times.

## Hosting your own configuration

Desk can load its configuration from a URL you control instead of the bundled
default. You host the JSON; Desk only reads it. Nothing about your configuration
passes through Carino infrastructure, and there is no account to create.

**Connect it:** open Desk → **⚙ Settings › Options › 🔗 Source** → paste the URL → *Connect*.
You can also hand agents a link that pre-fills it:

```
https://desk.carino.systems/?config=https://your-org.example.com/desk.json
```

The link never applies silently — Desk names the host and asks the agent to confirm
once before trusting it.

### Requirements for the URL

| | |
|---|---|
| Returns | the same JSON shape as a file you'd load with 📂 Load (must contain `fields` or `dictionary`) |
| Scheme | `https://` (plain `http://` is allowed only for `localhost` during testing) |
| CORS | must send `Access-Control-Allow-Origin` permitting `https://desk.carino.systems` (or `*`) |

Hosts that work with a single CORS rule: S3, Cloudflare R2, Azure Blob, GitHub
Pages, most CDNs, and any web server you run. `raw.githubusercontent.com` works
too. SharePoint/Drive/Dropbox "share links" generally do **not** — they redirect
to an HTML viewer rather than serving the raw file.

To get the cheapest possible update checks, also expose your validators:

```
Access-Control-Expose-Headers: ETag, Last-Modified
Access-Control-Allow-Headers: If-None-Match, If-Modified-Since
```

This is optional. If your host refuses the CORS preflight that conditional
requests require, Desk detects it on the first try and quietly falls back to
plain requests for that source.

### How updates propagate

Desk re-checks the URL on every load, whenever the tab regains focus, and on the
interval chosen in the Source dialog (default: every 5 minutes). Publish a new
version of the file and connected agents pick it up within that window — no
redeploy, no action on their side.

Two properties are worth knowing when you edit a live configuration:

- **Open tickets are never cleared by a sync.** A configuration update re-renders
  the snippet grid and sidebar; it does not touch the agent's tabs, typed field
  values, or notes. (Loading a file manually with 📂 Load still resets tickets —
  that path is unchanged.)
- **Desk is cache-first.** It renders instantly from its local copy and applies
  the network result afterwards. If your host is slow, unreachable, or serving
  something that isn't a valid Desk configuration, agents keep working on the
  last good copy and the Source dialog shows why.

Add an optional `config.revision` (or `config.version`) to your JSON and agents
see the transition, e.g. *"Configuration updated by your organization (12 → 13)"*.

```jsonc
{
  "config": { "defaultLang": "en", "revision": "13" },
  "fields": { /* ... */ }
}
```

## License

Licensed under the **GNU Affero General Public License v3.0 or later** (AGPL-3.0-or-later) — see [LICENSE](LICENSE). Copyright © 2026 Miguel Carino.
