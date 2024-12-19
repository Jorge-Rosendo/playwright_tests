const { expect } = require('@playwright/test');

export class DashboardPage {
    constructor(page){
        this.page = page
        this.dashboardUrl = "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
        this.dashboardHeader = page.locator('.oxd-topbar-header-breadcrumb')

    }

    async accessingDashboardPage () {
        await expect(this.page).toHaveURL(this.dashboardUrl)
    }

    async checkDashboardPage() {
       await this.dashboardHeader.waitFor()
    }
}