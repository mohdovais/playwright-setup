
import { chromium, FullConfig } from '@playwright/test';
import path from 'path';

const { USERNAME, PASSWORD } = process.env;

if (USERNAME == null || PASSWORD == null) {
    throw "Provide environment variable USERNAME & PASSWORD";
}

async function globalSetup(config: FullConfig) {
    const { baseURL, storageState } = config.projects[0].use;
    const browser = await chromium.launch({
        channel: 'chrome'
    });
    const page = await browser.newPage();
    await page.goto(path.join(baseURL, 'login'));
    await page.fill('input[name="login"]', USERNAME);
    await page.fill('input[name="password"]', PASSWORD);
    await page.click('text=Sign in');
    await page.context().storageState({ path: storageState as string });
    await browser.close();
}

export default globalSetup;