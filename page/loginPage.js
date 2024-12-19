const { expect } = require('@playwright/test');

export class LoginPage {
    constructor(page){
        this.page = page
        this.loginUrl = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        this.usernameField = page.getByRole('textbox', { name: 'username' })
        this.passwordField = page.getByRole('textbox', { name:'password' })
        this.loginButton = page.getByRole('button', { type: 'submit' })
        this.forgotPassword = page.locator('.orangehrm-login-forgot')
        this.loginHeader = page.getByRole('heading', { level: 5, name: 'Login' })
        this.orangeLink = page.locator("[href='http://www.orangehrm.com']")
        this.orangeSite = "https://www.orangehrm.com/"
    }

    async accessingLoginPage() {
        await this.page.goto(this.loginUrl);
    }

    async loginWithUser (){
        await this.usernameField.fill('Admin')
        await this.passwordField.fill('admin123')
        await this.loginButton.click()    
    }

    async loginWithWrongUsername (){
        await this.usernameField.fill('Adminas')
        await this.passwordField.fill('admin123')
        await this.loginButton.click()    
    }

    async loginWithWrongPassword (){
        await this.usernameField.fill('Admin')
        await this.passwordField.fill('admin1234')
        await this.loginButton.click()    
    }

    async loginDenied (){
        await expect(this.page).toHaveURL(this.loginUrl)
    }

    async stayedOnTheSamePage (){
        await expect(this.loginHeader).toBeVisible()
    }
    
    async forgotPasswordOption(){
        await this.forgotPassword.click()
    }

    async clickOnTheOrangeLink() {
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'), 
            this.orangeLink.click({ force: true }) 
        ]);
        await newPage.waitForLoadState('load'); 
        await expect(newPage).toHaveURL("https://www.orangehrm.com/");
    }
    
}