import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['Pixel 7'] });

test.describe('mobile navigation', () => {
  test('the menu overlay fills the screen when opened after scrolling', async ({
    page,
  }) => {
    await page.goto('/');

    // Scroll past the threshold so #navbar gains .scrolled, which applies
    // backdrop-filter. That makes the navbar the containing block for
    // fixed-position descendants, so an overlay sized with `bottom: 0`
    // collapses to zero height and the links spill over the page.
    await page.evaluate(() => window.scrollTo({ top: 400, behavior: 'instant' }));
    await expect(page.locator('#navbar')).toHaveClass(/scrolled/);

    await page.locator('.nav-toggle').click();

    const box = await page.locator('.nav-links').boundingBox();
    const viewport = page.viewportSize();
    expect(box).not.toBeNull();
    expect(viewport).not.toBeNull();

    // The overlay must actually cover the page, not collapse behind the links.
    expect(box!.height).toBeGreaterThan(viewport!.height * 0.6);
    expect(box!.width).toBeGreaterThanOrEqual(viewport!.width - 1);

    // Covering geometrically is not enough: the menu is unreadable if page
    // content shows through it, so require a solid background too.
    const bg = await page
      .locator('.nav-links')
      .evaluate((el) => getComputedStyle(el).backgroundColor);
    const alpha = bg.startsWith('rgba') ? Number(bg.split(',')[3]?.replace(')', '')) : 1;
    expect(alpha).toBeGreaterThanOrEqual(0.99);

    // And the page beneath must not be reachable through it.
    const covered = await page.evaluate(() => {
      const el = document.elementFromPoint(innerWidth / 2, innerHeight / 2);
      return !!el?.closest('.nav-links');
    });
    expect(covered).toBe(true);
  });

  test('menu links are hidden until the toggle is used', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.nav-links')).toBeHidden();

    await page.locator('.nav-toggle').click();
    await expect(page.locator('.nav-links')).toBeVisible();
    for (const label of ['About', 'Experience', 'Skills', 'Projects', 'Contact']) {
      await expect(
        page.locator('.nav-links').getByRole('link', { name: label }),
      ).toBeVisible();
    }
  });

  test('tapping a link closes the menu and reaches the section', async ({ page }) => {
    await page.goto('/');
    await page.locator('.nav-toggle').click();
    await page.locator('.nav-links').getByRole('link', { name: 'Projects' }).click();

    await expect(page.locator('.nav-links')).toBeHidden();
    await expect(page.locator('#projects')).toBeInViewport({ timeout: 10_000 });
  });
});

test.describe('profile photo', () => {
  test('renders and is actually decoded, not a broken image', async ({ page }) => {
    await page.goto('/');
    const img = page.locator('.about-photo');
    await img.scrollIntoViewIfNeeded();
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('alt', /\S/);

    // naturalWidth is 0 for an image that failed to load, which still "renders".
    const natural = await img.evaluate((el: HTMLImageElement) => ({
      w: el.naturalWidth,
      h: el.naturalHeight,
    }));
    expect(natural.w).toBeGreaterThan(0);
    expect(natural.h).toBeGreaterThan(0);
  });
});
