
const { expect } = require('@playwright/test')
class HomePage {

    constructor(page) {
        this.page = page;
        this.username = page.locator("input[name='username']");
        this.password = page.locator("input[name='password']");
        this.submit = page.locator("button[type='submit']");
        this.dashboard = page.locator('h6', { hasText: 'Dashboard' });

    }

    async Logincredentials() {
        await this.username.fill('Admin');
        await this.password.fill('admin123');
        await this.submit.click();

    }

}
module.exports = HomePage;