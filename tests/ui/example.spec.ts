import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  const info = test.info();
  info.annotations.push({ type: 'feature', description: 'Homepage' });
  info.annotations.push({ type: 'story', description: 'Title Check' });
  info.annotations.push({ type: 'severity', description: 'normal' });
  info.annotations.push({ type: 'description', description: 'Check that the homepage title contains "Playwright".' });

  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  const info = test.info();
  info.annotations.push({ type: 'feature', description: 'Homepage' });
  info.annotations.push({ type: 'story', description: 'Navigation' });
  info.annotations.push({ type: 'severity', description: 'critical' });
  info.annotations.push({ type: 'description', description: 'Ensure that the Get Started link navigates to Installation section.' });

  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
