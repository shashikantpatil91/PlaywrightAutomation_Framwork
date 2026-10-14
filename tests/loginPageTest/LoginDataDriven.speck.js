import { test, expect } from '@playwright/test';
import users from '../../test-data/Users.json';

for (const [userType, user] of object.entries(users))
    test.only(`Data Driven login for ${user.userType}`, async ({ loginPage }) => {
        await loginPage.open();
        await loginPage.login(user.username, user.password);

        if (user.expectedError) {
            await expect(LoginPage.expectedError).toHaveText(user.expectedError)

        }
        else {

            await expect(LoginPage.page).toHaveURL(/inventory\.html/);
        }

    })
