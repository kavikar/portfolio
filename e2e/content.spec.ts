import { test, expect, type Page } from '@playwright/test';

/** Scrolls the full page so IntersectionObserver-driven reveals fire. */
async function scrollThrough(page: Page): Promise<void> {
  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      // behavior:'instant' overrides the stylesheet's `scroll-behavior: smooth`.
      // Without it each scrollTo animates, the position lags further behind on
      // every step, and the lower sections are never actually reached.
      window.scrollTo({ top: y, behavior: 'instant' });
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
}

test.describe('content rendering', () => {
  test('renders every data-driven section', async ({ page }) => {
    await page.goto('/');

    // These are rendered from src/data.ts at runtime, so an empty section
    // means the render step silently failed rather than the data being absent.
    await expect(page.locator('#timeline > *')).not.toHaveCount(0);
    await expect(page.locator('#skills-grid > *')).not.toHaveCount(0);
    await expect(page.locator('#certs-grid > *')).not.toHaveCount(0);
    await expect(page.locator('#projects-grid > *')).not.toHaveCount(0);
  });

  test('sections become visible once scrolled into view', async ({ page }) => {
    await page.goto('/');
    await scrollThrough(page);

    for (const sel of ['#timeline > *', '#skills-grid > *', '#projects-grid > *']) {
      const first = page.locator(sel).first();
      await expect(first).toBeVisible();
      await expect(first).toHaveClass(/visible/);
    }
  });

  test('stat counters finish on their target values', async ({ page }) => {
    await page.goto('/');
    await scrollThrough(page);

    const counters = page.locator('.stat-number[data-target]');
    const count = await counters.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const el = counters.nth(i);
      const target = await el.getAttribute('data-target');
      // Counters animate up to the target and append "+" for values >= 2.
      await expect(el).toHaveText(new RegExp(`^${target}\\+?$`), { timeout: 10_000 });
    }
  });

  test('every in-page nav anchor resolves to a real section', async ({ page }) => {
    await page.goto('/');

    const dangling = await page.evaluate(() =>
      [...document.querySelectorAll('a[href^="#"]')]
        .map((a) => a.getAttribute('href') as string)
        .filter((href) => href.length > 1 && !document.querySelector(href)),
    );
    expect(dangling).toEqual([]);
  });

  test('project links open safely in a new tab', async ({ page }) => {
    await page.goto('/');

    const links = page.locator('.project-card a.project-link');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      await expect(link).toHaveAttribute('href', /^https:\/\/github\.com\//);
      await expect(link).toHaveAttribute('target', '_blank');
      // Without rel=noopener the opened page gets a handle on window.opener.
      await expect(link).toHaveAttribute('rel', /noopener/);
    }
  });

  test('the print-only static title stays hidden on screen', async ({ page }) => {
    // It exists so printing never catches a half-typed phrase; on screen the
    // animated span is the one that should show.
    await page.goto('/');
    await expect(page.locator('.typed-static')).toBeHidden();
    await expect(page.locator('.typed-text')).toBeVisible();
  });

  test('no anchor is nested inside another anchor', async ({ page }) => {
    await page.goto('/');

    // Regression guard: nested <a> is invalid HTML, and the parser silently
    // splits the outer element in two rather than erroring, which previously
    // broke both the project card layout and its reveal animation.
    const nested = await page.evaluate(() =>
      [...document.querySelectorAll('a a')].map((a) => a.outerHTML.slice(0, 80)),
    );
    expect(nested).toEqual([]);
  });

  test('each project card renders exactly one title and period', async ({ page }) => {
    await page.goto('/');

    const cards = page.locator('#projects-grid > .project-card');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    // Every direct child of the grid must be a well-formed card.
    await expect(page.locator('#projects-grid > *')).toHaveCount(count);

    for (let i = 0; i < count; i++) {
      await expect(cards.nth(i).locator('.project-name')).toHaveCount(1);
      await expect(cards.nth(i).locator('.project-period')).toHaveCount(1);
    }
  });
});

test.describe('page health', () => {
  test('loads with no console errors or failed requests', async ({ page }) => {
    // Stub Google Fonts so the assertion measures this site, not the network.
    // Without this the suite fails wherever fonts.googleapis.com is unreachable.
    await page.route(/fonts\.(googleapis|gstatic)\.com/, (route) =>
      route.fulfill({ status: 200, contentType: 'text/css', body: '' }),
    );

    const problems: string[] = [];
    page.on(
      'console',
      (m) => m.type() === 'error' && problems.push(`console: ${m.text()}`),
    );
    page.on('pageerror', (e) => problems.push(`pageerror: ${e.message}`));
    page.on('response', (r) => {
      // Google Fonts is third-party; a network hiccup there is not a site defect.
      if (r.status() >= 400 && new URL(r.url()).origin === new URL(page.url()).origin) {
        problems.push(`${r.status()} ${r.url()}`);
      }
    });

    await page.goto('/', { waitUntil: 'networkidle' });
    await scrollThrough(page);

    expect(problems).toEqual([]);
  });

  test('serves favicon, robots.txt and sitemap.xml', async ({ request }) => {
    for (const path of ['/favicon.svg', '/robots.txt', '/sitemap.xml', '/og.png']) {
      const res = await request.get(path);
      expect(res.status(), `${path} should be served`).toBe(200);
    }
  });
});
