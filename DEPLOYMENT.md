# Deployment

This site is a **Vite + TypeScript** static build, deployed on **Vercel**.

## Build settings

| Setting               | Value                                                       |
| --------------------- | ----------------------------------------------------------- |
| Framework Preset      | **Vite**                                                    |
| Root Directory        | `./`                                                        |
| Install Command       | `npm ci` (auto-selected — `package-lock.json` is committed) |
| Build Command         | `npm run build` (runs `tsc && vite build`)                  |
| Output Directory      | `dist`                                                      |
| Node.js Version       | 22.x (Vercel default)                                       |
| Environment Variables | **None required.** Optional: `SITE_URL` (see below)         |

The `build` script type-checks with `tsc` before bundling, so a type error fails
the deploy rather than shipping broken code. Keep it that way.

### Site URL

Canonical, Open Graph, `robots.txt` and `sitemap.xml` need an absolute URL.
`vite.config.ts` resolves one at build time:

1. `SITE_URL` — set this only to override
2. `VERCEL_PROJECT_PRODUCTION_URL` — Vercel injects this automatically
3. `http://localhost:4173` — local fallback, emits a build warning

So no Vercel environment variable is needed for a `*.vercel.app` deployment.
**When you attach a custom domain**, set `SITE_URL` to it (e.g.
`https://karthikv.dev`) in Project → Settings → Environment Variables and
redeploy, otherwise the canonical and OG tags keep pointing at the
`.vercel.app` host.

## First-time setup on Vercel

1. Sign in at <https://vercel.com> with the GitHub account that owns this repo.
2. **Add New… → Project**, then import `kavikar/portfolio`.
   Grant Vercel access to the repo if prompted.
3. Vercel auto-detects the **Vite** preset. Confirm the values in the table
   above — in particular that Output Directory is `dist`.
4. Leave Environment Variables empty.
5. **Deploy.** The first build takes well under a minute.

The project is served at a `*.vercel.app` subdomain, shown on the project
Overview page.

## Automatic deployments

Vercel enables Git integration by default once the repo is imported:

- Pushes to the **production branch** (`main`) → production deployment.
- Pushes to any other branch → a preview deployment with its own URL.
- Opening a pull request → Vercel comments the preview URL on the PR.

Verify under **Project → Settings → Git** that _Production Branch_ is `main`.

## Local development

```bash
npm ci
npm run dev      # dev server with HMR
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
```

## Adding a custom domain later

1. **Project → Settings → Domains → Add**, then enter the domain.
2. Vercel displays the **exact DNS records** required for that specific domain
   (they differ for an apex domain vs. a `www` subdomain, and Vercel has
   changed its recommended IPs over time). Copy the values from that screen —
   do not reuse records from an older guide.
3. Add those records at your registrar and wait for verification. Vercel issues
   the TLS certificate automatically once DNS resolves.

## CI

`.github/workflows/ci.yml` runs on every push to `main` and every pull request:
lint, format check, typecheck and build, then the Playwright suite. Vercel
deploys independently of CI, so a red CI run does not by itself block a
deployment — check both before assuming a push is healthy.

## Notes

- Fonts load from Google Fonts at runtime; there is no self-hosted fallback
  beyond the CSS font stack.
- `og.png` is a committed static asset in `public/`. Regenerate it if the
  headline, title or accent colour changes.
