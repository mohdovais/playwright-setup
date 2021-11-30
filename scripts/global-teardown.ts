
import { FullConfig } from '@playwright/test';
import fs from 'fs';


async function globalSetup(config: FullConfig) {
    const { storageState } = config.projects[0].use;
    fs.unlinkSync(storageState as string)
}

export default globalSetup;