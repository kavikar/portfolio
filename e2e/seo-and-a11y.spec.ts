import { test, expect } from '@playwright/test';

test.describe('SEO metadata', () => {
  test('has the tags link previews and search engines need', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Karthik Vakkalagadda/);

    const content = (sel: string) => page.locator(sel).getAttribute('content');
    expect(await content('meta[name="description"]')).toBeTruthy();
    expect(await content('meta[property="og:title"]')).toBeTruthy();
    expect(await content('meta[property="og:description"]')).toBeTruthy();
    expect(await content('meta[name="twitter:card"]')).toBe('summary_large_image');

    // A relative or placeholder og:image breaks previews on every platform.
    const ogImage = await content('meta[property="og:image"]');
    expect(ogImage).toMatch(/^https?:\/\/.+\/og\.png$/);
    expect(ogImage).not.toContain('%SITE_URL%');

    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toMatch(/^https?:\/\//);
    expect(canonical).not.toContain('%SITE_URL%');
  });

  test('exposes valid Person structured data', async ({ page }) => {
    await page.goto('/');

    const raw = await page.locator('script[type="application/ld+json"]').textContent();
    expect(raw).toBeTruthy();

    const data = JSON.parse(raw as string);
    expect(data['@type']).toBe('Person');
    expect(data.name).toBe('Karthik Vakkalagadda');
    expect(data.sameAs).toEqual(
      expect.arrayContaining([expect.stringContaining('github.com')]),
    );
  });
});

test.describe('contact privacy', () => {
  test('email is absent from the HTML source but assembled at runtime', async ({
    page,
    request,
  }) => {
    // Scrapers read the served HTML, so the address must not appear in it.
    const source = await (await request.get('/')).text();
    expect(source).not.toContain('karthik.v451@gmail.com');
    expect(source).not.toContain('mailto:karthik.v451');

    // Humans must still get a working one-click mailto.
    await page.goto('/');
    const link = page.locator('a[data-email-user]');
    await expect(link).toHaveAttribute('href', 'mailto:karthik.v451@gmail.com');
    await expect(link.locator('.email-text')).toHaveText('karthik.v451@gmail.com');
  });

  test('no phone number is published anywhere', async ({ request }) => {
    const source = await (await request.get('/')).text();
    expect(source).not.toMatch(/tel:/);
    expect(source).not.toMatch(/\d{3}[.\- ]\d{3}[.\- ]\d{4}/);
  });

  test('the resume is served as a PDF', async ({ request }) => {
    const res = await request.get('/Karthik_Vakkalagadda_Resume.pdf');
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('pdf');
    expect((await res.body()).length).toBeGreaterThan(10_000);
  });

  // The PDF's *contents* cannot be checked from here: its text sits in
  // FlateDecode streams using subsetted font encodings, so asserting on the
  // response bytes silently passes whatever the file contains. That check
  // lives in scripts/check-resume.mjs, which uses a real text extractor and
  // runs in CI.
});

test.describe('accessibility', () => {
  test('skip link is reachable by keyboard and targets the main content', async ({
    page,
  }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');

    const skip = page.locator('.skip-link');
    await expect(skip).toBeFocused();
    await expect(skip).toBeVisible();
    await expect(skip).toHaveAttribute('href', '#main');
    await expect(page.locator('#main')).toHaveCount(1);
  });

  test('interactive elements show a visible focus ring', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');

    const outline = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el) return null;
      const s = getComputedStyle(el);
      return { width: s.outlineWidth, style: s.outlineStyle };
    });

    expect(outline).not.toBeNull();
    expect(outline?.style).not.toBe('none');
    expect(parseFloat(outline?.width ?? '0')).toBeGreaterThan(0);
  });

  test('images and icon-only links carry accessible names', async ({ page }) => {
    await page.goto('/');

    const unnamed = await page.evaluate(() =>
      [...document.querySelectorAll('a')]
        .filter((a) => !a.textContent?.trim())
        .filter((a) => !a.getAttribute('aria-label') && !a.getAttribute('title'))
        .map((a) => a.outerHTML.slice(0, 80)),
    );
    expect(unnamed).toEqual([]);
  });
});

test.describe('reduced motion', () => {
  test.use({ reducedMotion: 'reduce' });

  test('all content is visible without scrolling and animations are stilled', async ({
    page,
  }) => {
    await page.goto('/');

    // The reveal animation must degrade to "already revealed", never to hidden.
    for (const sel of ['#timeline > *', '#skills-grid > *', '#projects-grid > *']) {
      await expect(page.locator(sel).first()).toBeVisible();
    }

    // Counters should already show their final value rather than animating up.
    const first = page.locator('.stat-number[data-target]').first();
    const target = await first.getAttribute('data-target');
    await expect(first).toHaveText(new RegExp(`^${target}\\+?$`));

    // The typing animation is replaced by static text, and its cursor removed.
    await expect(page.locator('.typed-text')).not.toBeEmpty();
    await expect(page.locator('.cursor')).toHaveCount(0);
  });
});
