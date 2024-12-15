export class LoginPage {
    constructor(page){
        this.page = page
        this.usernameField = page.getByRole('textbox', { name: 'username' })
        this.passwordField = page.getByRole('textbox', { name:'password' })
        this.loginButton = page.getByRole('button', { type: 'submit' })
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
    
    
    
}