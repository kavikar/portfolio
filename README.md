# Portfolio

[![CI](https://github.com/kavikar/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/kavikar/portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Personal portfolio site for **Karthik Vakkalagadda** — SDET and test infrastructure
engineer, Atlanta GA.

No framework: Vite, TypeScript and hand-written CSS, rendered from a single
typed data file. It stays a static bundle of roughly 11 kB of JS and 13 kB of
CSS, gzipped to about 4 kB and 3 kB.

## Stack

| Area          | Choice                                                       |
| ------------- | ------------------------------------------------------------ |
| Build         | Vite 5, TypeScript 5 (strict, `noUnusedLocals`)              |
| Content       | `src/data.ts` — experience, skills, certifications, projects |
| Tests         | Playwright, desktop + mobile projects                        |
| Quality gates | ESLint, Prettier, `tsc --noEmit`                             |
| CI            | GitHub Actions — lint, format, typecheck, build, then E2E    |
| Hosting       | Vercel, deployed from `main`                                 |

## Getting started

Prerequisites: Node 22 (see `.nvmrc`).

```bash
npm ci
npm run dev          # dev server with HMR
```

## Scripts

| Script                 | Purpose                                     |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Dev server                                  |
| `npm run build`        | Typecheck, then production build to `dist/` |
| `npm run preview`      | Serve the production build locally          |
| `npm run typecheck`    | `tsc --noEmit`                              |
| `npm run lint`         | ESLint                                      |
| `npm run format:check` | Prettier, verify only                       |
| `npm run test:e2e`     | Playwright suite                            |

## Tests

The Playwright suite covers what actually tends to break on a site like this:

- every data-driven section renders, and reveals once scrolled into view
- stat counters settle on their target values
- no dangling in-page anchors, and no nested `<a>` elements
- SEO metadata is present and contains no unsubstituted build placeholders
- the email address is absent from the served HTML but assembled at runtime
- the skip link, focus rings and accessible names work for keyboard users
- with `prefers-reduced-motion`, content is visible immediately rather than hidden

```bash
npm run test:e2e
```

On a machine that already has Chromium, point Playwright at it instead of
downloading a second copy:

```bash
PLAYWRIGHT_CHROMIUM_PATH=/path/to/chromium npm run test:e2e
```

## Site URL and generated files

Canonical, Open Graph, `robots.txt` and `sitemap.xml` all need an absolute URL.
Rather than hardcoding one that goes stale, `vite.config.ts` resolves it at build
time in this order:

1. `SITE_URL` — explicit override
2. `VERCEL_PROJECT_PRODUCTION_URL` — set automatically by Vercel
3. `http://localhost:4173` — local builds, with a build warning

`robots.txt` and `sitemap.xml` are emitted by the build rather than kept in
`public/`, because files in `public/` are copied verbatim and would ship the
unsubstituted placeholder.

To preview a production-shaped build locally:

```bash
SITE_URL="https://example.com" npm run build && npm run preview
```

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for Vercel build settings, the import steps,
and how to attach a custom domain.

## License

[MIT](LICENSE)
