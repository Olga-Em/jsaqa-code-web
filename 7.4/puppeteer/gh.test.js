let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content", async () => {
    jest.setTimeout(10000);
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  });

  test("The first link attribute", async () => {
    jest.setTimeout(10000);
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    jest.setTimeout(20000);
    const btnSelector = ".btn-muted-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  });
});

test("Sign in page header", async () => {
  await page.goto("https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fteam");
  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual('Sign in to GitHub · GitHub');
});

test("GitHub Enterprise page test", async () => {
  jest.setTimeout(10000);
  await page.goto("https://github.com/enterprise");
  const mainTitleText = await page.$eval("[data-testid=EyebrowBanner]", el => el.textContent);
  expect(mainTitleText).toEqual('GitHub Galaxy: A global enterprise event tourRegister now to join us in a city near you.');
});

test("GitHub Enterprise Heading-module", async () => {
  jest.setTimeout(10000);
  await page.goto("https://github.com/enterprise");
  const mainTitleText = await page.$eval("[id=hero-section-brand-heading]", el => el.textContent);
  expect(mainTitleText).toEqual('The AI-powereddeveloper platform.');
});


