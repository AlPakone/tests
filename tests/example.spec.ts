import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from "../page_obj/Playwright";
import { Intro } from "../page_obj/Intro";

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/.*intro/);
});

test.describe("navigation", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });
  test('get started', async ({ page }) => {
    const playwrightDevPage = new PlaywrightDevPage(page)
    const intro = new Intro(page)
    const newPage = 'https://playwright.dev/docs/intro'

    await playwrightDevPage.goto
    await playwrightDevPage.getStarted()
    await playwrightDevPage.check()
  })

  test('get started2', async ({ page}) => {
  const playwrightDevPage = new PlaywrightDevPage(page)
  const intro = new Intro(page)
  const newPage = 'https://playwright.dev/docs/intro'

  await playwrightDevPage.goto
  await playwrightDevPage.getStarted()
    await intro.goto
    await intro.clickOnSearch()
})
})