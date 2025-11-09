const {test, expect}=require('@playwright/test')
const HomePage=require('..//Pages/Homepage');


test('Orange HRM test cases', async ({ page }) => {
  const home = new HomePage(page);
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await home.Logincredentials();


  
await expect(home.dashboard).toBeVisible();
console.log("pass");
})