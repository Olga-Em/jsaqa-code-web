const { test, expect } = require('@playwright/test');
const {chromium} = require("playwright");

    test("Successful authorization", async ({ page }) => {
      
      const browser = await chromium.launch({
        headless : true,
        slowMo : 500,
        devtools : true,
      });
      
      await page.goto('https://netology.ru/');
  
      await Promise.all([
        page.waitForNavigation(/*{ url: 'https://netology.ru/?modal=sign_in' }*/),
        page.click('text=Войти')
      ]);
      
      await page.click('[placeholder="Email"]');

      await page.fill('[placeholder="Email"]', "poj@mail.ru");
  
      await page.click('[placeholder="Пароль"]');

      await page.fill('[placeholder="Пароль"]', "21546");
 
      await page.click('[data-testid="login-submit-btn"]');

      page.locator("data-testid=login-error-hint").isVisible;
        await expect(page.locator("[data-testid=login-error-hint]")).toContainText("Вы ввели неправильно логин или пароль");

    });