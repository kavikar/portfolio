import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';

const pkg = JSON.parse(
  readFileSync(fileURLToPath(new URL('./package.json', import.meta.url)), 'utf-8'),
) as { version: string };

/**
 * Absolute site URL, needed for canonical/OG/JSON-LD tags, robots.txt and the
 * sitemap.
 *
 * Resolution order:
 *   1. SITE_URL                        — explicit override
 *   2. VERCEL_PROJECT_PRODUCTION_URL   — set automatically by Vercel
 *   3. localhost preview               — local builds
 *
 * Keeping this build-time avoids hardcoding a URL that goes stale when the
 * deployment moves or a custom domain is attached.
 */
function resolveSiteUrl(): string {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, '');
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return 'http://localhost:4173';
}

function siteUrlPlugin(): Plugin {
  const siteUrl = resolveSiteUrl();

  return {
    name: 'site-url',

    buildStart() {
      if (siteUrl.startsWith('http://localhost')) {
        // Surfaced rather than silently shipping localhost URLs in OG tags.
        this.warn(`SITE_URL not set; falling back to ${siteUrl}`);
      }
    },

    transformIndexHtml(html) {
      // The canonical link is injected rather than written into index.html:
      // Vite runs decodeURI() over every link[href] while collecting assets,
      // and a "%SITE_URL%" placeholder there throws "URI malformed" at build.
      // meta[content] is not treated as an asset URL, so those substitute fine.
      return {
        html: html.replaceAll('%SITE_URL%', siteUrl),
        tags: [
          {
            tag: 'link',
            attrs: { rel: 'canonical', href: `${siteUrl}/` },
            injectTo: 'head' as const,
          },
        ],
      };
    },

    // robots.txt and sitemap.xml are generated rather than kept in public/,
    // because files in public/ are copied verbatim and would ship the
    // unsubstituted %SITE_URL% placeholder.
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
          `  <url>\n    <loc>${siteUrl}/</loc>\n    <changefreq>monthly</changefreq>\n  </url>\n` +
          '</urlset>\n',
      });
    },
  };
}

export default defineConfig({
  plugins: [siteUrlPlugin()],
  define: { __APP_VERSION__: JSON.stringify(pkg.version) },
  build: { target: 'es2020' },
});
