const { test, expect } = require('@playwright/test');
import { LoginPage } from '../page/loginPage.js';
import { DashboardPage } from '../page/dashboardPage.js';


test.describe('Login Scenarios', () => {
    test('Successful Login', async ({ page }) => {
        const login = new LoginPage(page)
        const dashboard = new DashboardPage(page)

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await login.loginWithUser()
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await dashboard.checkDashboardPage()
    });

    test('Unsuccessful Login with wrong username', async ({ page }) => {
        const login = new LoginPage(page)

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await login.loginWithWrongUsername()
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await expect(page.getByRole('heading', { level: 5, name: 'Login' })).toBeVisible();
    });

    test('Unsuccessful Login with wrong password', async ({ page }) => {
        const login = new LoginPage(page)

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await login.loginWithWrongPassword()
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await expect(page.getByRole('heading', { level: 5, name: 'Login' })).toBeVisible();
    });

});
        