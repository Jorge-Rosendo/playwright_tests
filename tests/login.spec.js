const { test, expect } = require('@playwright/test');

test.describe('Login Scenarios', () => {
    test('Successful Login', async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.getByRole('textbox', { name: 'username' }).fill('Admin')
        await page.getByRole('textbox', { name:'password' }).fill('admin123')
        await page.getByRole('button', { type: 'submit' }).click();
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await page.locator('.oxd-topbar-header-breadcrumb').waitFor()
    });

    test('Unsuccessful Login with wrong username', async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.getByRole('textbox', { name: 'username' }).fill('Adminas')
        await page.getByRole('textbox', { name:'password' }).fill('admin123')
        await page.getByRole('button', { type: 'submit' }).click();
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await expect(page.getByRole('heading', { level: 5, name: 'Login' })).toBeVisible();
    });

    test('Unsuccessful Login with wrong password', async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.getByRole('textbox', { name: 'username' }).fill('Admin')
        await page.getByRole('textbox', { name:'password' }).fill('admin1234')
        await page.getByRole('button', { type: 'submit' }).click();
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await expect(page.getByRole('heading', { level: 5, name: 'Login' })).toBeVisible();
    });

});
        