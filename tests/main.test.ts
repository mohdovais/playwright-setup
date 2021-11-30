import { test, expect } from '@playwright/test';

test.beforeEach(async ({ browser, storageState }) => {
    await browser.newContext({ storageState });
})


test('basic test', async ({ page }) => {
    await page.goto('/');
    const title = page.locator('#dashboard-repos-container');
    expect(title).toBeTruthy();
});