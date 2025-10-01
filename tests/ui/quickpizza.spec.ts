import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('http://127.0.0.1:3333//');
    await page.getByRole('button', { name: 'Pizza, Please!' }).click();
    await page.locator('button[name="pizza-please"]').click();

    await expect(page).toHaveTitle(/Playwright/);
});