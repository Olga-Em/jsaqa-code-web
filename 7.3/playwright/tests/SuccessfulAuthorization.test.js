const { test, expect } = require('@playwright/test');
const {email, password} = require("./user.js");
const {chromium} = require("playwright");

    test("Successful authorization", async ({ page }) => {
      
      const browser = await chromium.launch({
        headless : false,
        slowMo : 500,
        devtools : true,
      });
      
      await page.goto('https://netology.ru/');
  
      await Promise.all([
        page.waitForNavigation(/*{ url: 'https://netology.ru/?modal=sign_in' }*/),
        page.click('text=Войти')
      ]);
      
      await page.click('[placeholder="Email"]');

      await page.fill('[placeholder="Email"]', (email));
  
      await page.click('[placeholder="Пароль"]');

      await page.fill('[placeholder="Пароль"]', (password));
 
      await Promise.all([
        page.waitForNavigation(/*{ url: 'https://netology.ru/profile/7481162' }*/),
        page.click('[data-testid="login-submit-btn"]')
      ]);

      await expect(page.locator("Моё обучение")).toBeVisible;

    });
