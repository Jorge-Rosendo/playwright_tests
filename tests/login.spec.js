const { test, expect } = require('@playwright/test');
import { LoginPage } from '../page/loginPage.js';
import { DashboardPage } from '../page/dashboardPage.js';
import { ResetPasswordPage } from '../page/resetPasswordPage.js';

test.describe('Login Scenarios', () => {
    test('Successful Login', async ({ page }) => {
        const login = new LoginPage(page)
        const dashboard = new DashboardPage(page)

        await login.accessingLoginPage()
        await login.loginWithUser()
        await dashboard.accessingDashboardPage()
        await dashboard.checkDashboardPage()
    });

    test('Unsuccessful Login with wrong username', async ({ page }) => {
        const login = new LoginPage(page)

        await login.accessingLoginPage()
        await login.loginWithWrongUsername()
        await login.loginDenied()
        await login.stayedOnTheSamePage()
    });

    test('Unsuccessful Login with wrong password', async ({ page }) => {
        const login = new LoginPage(page)

        await login.accessingLoginPage()
        await login.loginWithWrongPassword()
        await login.loginDenied()
        await login.stayedOnTheSamePage()
    });

    test('Checking the forgot password option', async ({ page }) => {
        const login = new LoginPage(page)
        const resetPassword = new ResetPasswordPage(page)
        
        await login.accessingLoginPage()
        await login.forgotPasswordOption(page)
        await resetPassword.resetPassword(page)
    })

    test('Checking the option to access the official orangeHRM website', async ({ page }) => {
        const login = new LoginPage(page)
        
        await login.accessingLoginPage()
        await login.clickOnTheOrangeLink()
    })
});
        