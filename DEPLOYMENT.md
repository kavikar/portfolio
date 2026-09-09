# Deployment

This site is a **Vite + TypeScript** static build, deployed on **Vercel**.

## Build settings

| Setting | Value |
| --- | --- |
| Framework Preset | **Vite** |
| Root Directory | `./` |
| Install Command | `npm ci` (auto-selected — `package-lock.json` is committed) |
| Build Command | `npm run build` (runs `tsc && vite build`) |
| Output Directory | `dist` |
| Node.js Version | 22.x (Vercel default) |
| Environment Variables | **None** — the code references no `import.meta.env` / `process.env` values |

The `build` script type-checks with `tsc` before bundling, so a type error fails
the deploy rather than shipping broken code. Keep it that way.

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

Verify under **Project → Settings → Git** that *Production Branch* is `main`.

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

## Notes

- `/favicon.ico` currently 404s — the page declares no icon. Harmless, but a
  favicon and OG/Twitter meta tags would improve browser tabs and link previews.
- Fonts load from Google Fonts at runtime; there is no self-hosted fallback
  beyond the CSS font stack.
