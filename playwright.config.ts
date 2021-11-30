import { PlaywrightTestConfig } from '@playwright/test';

const dir = './playwright';

const config: PlaywrightTestConfig = {
    name: 'demo',
    outputDir: `${dir}/output`,
    snapshotDir: `${dir}/snapshots`,
    retries: process.env.CI ? 2 : 0,
    testDir: './tests',
    forbidOnly: !!process.env.CI,
    globalSetup: require.resolve('./scripts/global-setup'),
    globalTeardown: require.resolve('./scripts/global-teardown'),
    use: {
        channel: 'chrome',
        viewport: { width: 1280, height: 720 },
        headless: true,
        baseURL: 'https://github.com',
        storageState: `${dir}/state.json`,
        trace: 'on-first-retry',
    },
};

export default config;