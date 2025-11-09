// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,

  use: {
    browserName: 'chromium',
    headless: false,
  },

  reporter: [
    ['list'], // For console output
    ['allure-playwright'], // 👈 Add this line
  ],
});
