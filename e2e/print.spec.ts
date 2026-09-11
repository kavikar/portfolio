import { test, expect } from '@playwright/test';

// The page is built for scrolling. Printing exposes a different layout, so
// these assertions run under print emulation rather than screen.
test.describe('print layout', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.emulateMedia({ media: 'print' });
  });

  test('the fixed navbar is not printed on every page', async ({ page }) => {
    // position:fixed elements repeat on each printed sheet, so the logo landed
    // on top of the content of pages 5 through 8.
    await expect(page.locator('#navbar')).toBeHidden();
    await expect(page.locator('.hero-scroll-hint')).toBeHidden();
  });

  test('decorative hero glows are not printed', async ({ page }) => {
    // They are absolutely positioned and paint over the hero in the printed
    // output: the name, title, summary and buttons came out blank on page one
    // while still being present in the PDF's text layer, so the text was
    // selectable but invisible.
    for (const pseudo of ['::before', '::after']) {
      const display = await page
        .locator('#hero')
        .evaluate((el, p) => getComputedStyle(el, p).display, pseudo);
      expect(display, `#hero${pseudo} must not print`).toBe('none');
    }
  });

  test('filled buttons keep a readable label on paper', async ({ page }) => {
    // The fill is dropped when printing, so a white label lands on white paper.
    const { color } = await page.locator('.btn-primary').evaluate((el) => ({
      color: getComputedStyle(el).color,
    }));
    const [r, g, b] = (color.match(/\d+/g) ?? []).slice(0, 3).map(Number);
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    expect(luminance, 'primary button label must be dark ink').toBeLessThan(0.4);
  });

  test('text is dark on white, not the screen theme', async ({ page }) => {
    // Browsers drop background colours when printing, so near-white body text
    // would land on white paper.
    const { color, background } = await page.evaluate(() => {
      const s = getComputedStyle(document.body);
      return { color: s.color, background: s.backgroundColor };
    });

    const channels = (c: string) => (c.match(/\d+/g) ?? []).slice(0, 3).map(Number);
    const luminance = (c: string) => {
      const [r, g, b] = channels(c);
      return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    };

    expect(luminance(color)).toBeLessThan(0.4); // dark ink
    expect(luminance(background)).toBeGreaterThan(0.8); // light paper
  });

  test('cards are not split across page breaks', async ({ page }) => {
    for (const sel of [
      '.project-card',
      '.skill-category',
      '.cert-card',
      '.timeline-item',
    ]) {
      const value = await page
        .locator(sel)
        .first()
        .evaluate((el) => getComputedStyle(el).breakInside);
      expect(value, `${sel} should avoid breaking across pages`).toBe('avoid');
    }
  });

  test('viewport-sized spacing is collapsed for paper', async ({ page }) => {
    const heroMinHeight = await page
      .locator('#hero')
      .evaluate((el) => getComputedStyle(el).minHeight);
    // 100vh of empty hero becomes a mostly blank first sheet.
    expect(heroMinHeight === 'auto' || heroMinHeight === '0px').toBe(true);
  });

  test('the hero prints fully opaque, not mid-animation', async ({ page }) => {
    // The hero's entrance animation is staggered up to ~1s and its elements
    // declare opacity:0 in their base rule, so a print taken during it caught
    // the summary at ~1% opacity and the name part-faded.
    for (const sel of [
      '.hero-greeting',
      '.hero-name',
      '.hero-summary',
      '.hero-actions',
    ]) {
      const opacity = await page
        .locator(sel)
        .evaluate((el) => getComputedStyle(el).opacity);
      expect(Number(opacity), `${sel} should be fully visible in print`).toBe(1);
    }
  });

  test('stat counters print their target values, not a mid-count snapshot', async ({
    page,
  }) => {
    // The live element is written by a timer, so print paints a static overlay
    // built from data-target instead. Assert on what is actually painted.
    const counters = page.locator('.stat-number[data-target]');
    const count = await counters.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const el = counters.nth(i);
      const target = (await el.getAttribute('data-target')) as string;
      const painted = await el.evaluate(
        (node) => getComputedStyle(node, '::after').content,
      );
      expect(painted).toContain(target);
      // The timer-driven text node must not be the visible one.
      expect(await el.evaluate((node) => getComputedStyle(node).visibility)).toBe(
        'hidden',
      );
    }
  });

  test('a complete job title prints, never a half-typed one', async ({ page }) => {
    // Asserting on the animated span's text passes by luck whenever the retry
    // window happens to catch a finished phrase mid-cycle. Print swaps in a
    // static span, so assert on which element is visible instead.
    await expect(page.locator('.typed-text')).toBeHidden();
    await expect(page.locator('.cursor')).toBeHidden();

    const staticTitle = page.locator('.typed-static');
    await expect(staticTitle).toBeVisible();
    await expect(staticTitle).toHaveText(/\S/);
  });

  test('all content is revealed even without scrolling first', async ({ page }) => {
    // Printing without scrolling must not emit blank space where the reveal
    // animation never fired.
    for (const sel of ['#timeline > *', '#skills-grid > *', '#projects-grid > *']) {
      const opacity = await page
        .locator(sel)
        .first()
        .evaluate((el) => getComputedStyle(el).opacity);
      expect(Number(opacity)).toBe(1);
    }
  });
});
