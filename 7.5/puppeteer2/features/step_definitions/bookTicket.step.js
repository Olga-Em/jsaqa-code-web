const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { putText, getText, clickElement } = require("../../lib/commands.js");
var {setDefaultTimeout} = require("cucumber");
setDefaultTimeout(60 * 1000);


Before(async function () {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on page {string}", async function (string) {
  return await this.page.goto(`https://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 50000,
  });
});
When("user selects the desired day", async function () {
  return await clickElement(this.page, "body > nav > a:nth-child(2)");
}, 70000);

Then ("user selects the desired movie", async function () {
  return await clickElement (
    this.page,"body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(1) > a");
}, 70000);

Then ("user chooses a location", async function () {
  return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(6)");
}, 70000);

Then ("user is booking tickets", async function () {
  return await clickElement(this.page, ".acceptin-button");
});

Then("user confirms the booking {string}", async function (string) {
  const actual =await getText(this.page, ".acceptin-button");
  await expect(actual).contain("Забронировать");
}, 70000);


When("user selects the desired day2", async function () {
  return await clickElement(this.page, "body > nav > a:nth-child(3)");
}, 70000);

Then ("user selects the desired movie2", async function () {
  return await clickElement (
    this.page,"body > main > section:nth-child(4) > div.movie-seances__hall > ul > li > a");
}, 70000);

Then ("user chooses a location2", async function () {
  return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > span:nth-child(8)");
}, 70000);

Then ("user chooses a location3", async function () {
  return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > span:nth-child(9)");
}, 70000);

When ("user selects the desired movie3", async function () {
  return await clickElement (
    this.page,"body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(2) > a");
}, 70000);

Then ("user chooses a book location", async function () {
  return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span.buying-scheme__chair.buying-scheme__chair_standart.buying-scheme__chair_taken");
}, 70000);

Then ("make sure that the Забронировать button is inactive", async function () {
  const actual = await this.page.$eval('.acceptin-button', (button) => {
    return button.disabled;
  });
  expect(actual).toBe(true);
}, 70000);





