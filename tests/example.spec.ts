import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const element = await page.locator('h1');
    await expect(element).toBeVisible();
});