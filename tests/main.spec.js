const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill('admin123')
    await page.locator("[type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator('.oxd-topbar-header-breadcrumb').waitFor()
});

test('get started link', async ({ page }) => {
 
});
        