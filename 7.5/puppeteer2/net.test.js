const { clickElement, putText, getText } = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
  page.close();
});

describe("Ticket booking ", () => {

  test("The first link test", async () => {
    const actual = await getText(page, ".page-header__title");
    expect(actual).toContain("Идёмвкино");
  });

  test("Book ticket VIP", async () => {
    await page.waitForSelector('.page-nav');
    await clickElement(page, 'body > nav > a:nth-child(2)');
    await clickElement(page, 'body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(1) > a');
    await page.waitForSelector('.buying-scheme');
    await page.click("body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(6)");
    await page.click('.acceptin-button');
    const actual = await getText(page, ".acceptin-button");
    await expect(actual).toContain("Получить код бронирования");
  });

  test("Book two tickets", async () => {
    await page.waitForSelector('.page-nav');
    await clickElement(page, 'body > nav > a:nth-child(3)');
    await clickElement(page, 'body > main > section:nth-child(4) > div.movie-seances__hall > ul > li > a');
    await page.waitForSelector('.buying-scheme');
    await page.click("body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > span:nth-child(8)");
    await page.click("body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > span:nth-child(9)");
    await page.click('.acceptin-button');
    const actual = await getText(page, ".acceptin-button");
    await expect(actual).toContain("Получить код бронирования");
  });

  test("Ticket already booked", async() =>{
    await page.waitForSelector('.page-nav');
    await clickElement(page, "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(2) > a");
    await page.waitForSelector('.buying-scheme');
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span.buying-scheme__chair.buying-scheme__chair_standart.buying-scheme__chair_taken");
    const actual = await page.$eval('.acceptin-button', (button) => {
      return button.disabled;
    });
    expect(actual).toBe(true);
  });
});
