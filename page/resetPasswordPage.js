export class ResetPasswordPage {
    constructor(page){
        this.page = page
        this.resetPasswordButton = ".orangehrm-forgot-password-button--reset"
    }

    async resetPassword (page) {
        const exists = await page.locator('.orangehrm-forgot-password-button--reset').isVisible()

    }
}