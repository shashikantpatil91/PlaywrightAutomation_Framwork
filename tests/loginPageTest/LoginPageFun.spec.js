import { test, expect } from '../../fixture/baseFixture.js';
import env from '../../config/env.config.js';
import { MESSAGES } from '../../utiles/constants.js';
import logger from '../../utiles/loggers.js';

// Flow: open the login page and submit invalid credentials. Validates the visible error and its expected message.
test('invalid credentials display a login error', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login('invalid_user', 'invalid_password');
logger.info("attempted login with invalid credentinal: invalid_user/invalid_password");
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(MESSAGES.INVALID_CREDENTIALS);
});

// Flow: open the login page and sign in with the configured standard user. Validates navigation to inventory.
test('standard user can log in successfully', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(env.username, env.password);
    await expect(loginPage.page).toHaveURL(/inventory\.html/);
});