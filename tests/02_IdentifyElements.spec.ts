import { test, expect, chromium } from '@playwright/test';
test.only ('identify_elements', async ({ page}) => {
    const browser = await chromium.launch({ headless: false });
 //   const signIn = await page.locator('.btn')
  //  const signIn = await page.locator('css=button')
    //const signIn = await page.locator('xpath=//button[@type=submit]')
    const signIn = await page.locator('css=button >> "Sign in"')
    const input = await page.$$('.form-control')

    await page.goto('https://react-redux.realworld.io/#/login');
    await input[0].click()
    await input[1].click()
    await signIn.click()
    await page.screenshot({ path: './screenshots/todo.png' });
    await browser.close();
})

