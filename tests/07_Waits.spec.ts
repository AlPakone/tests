import {test, expect, chromium} from '@playwright/test';

test ('navigate', async ({}) => {
    const browser = await chromium.launch({headless: false})
    const context = await browser.newContext()
    context.setDefaultTimeout(45000)
    const page = await context.newPage()
    page.setDefaultTimeout(50000)
    page.setDefaultNavigationTimeout(50000)

    await page.goto('https://react-redux.realworld.io/#/login')// goto method

    await page.fill('input[type = "email"]','qacamp.acad@gmail.com');
    await page.type('input[type = "password"]','test12345');
    await page.click('.btn');

    await page.waitForTimeout(5000)// - timeout

    await page.waitForSelector('.nav-link')// - wait until selector is visible

    await Promise.all([
        await page.waitForNavigation(),
        await page.click('.btn'),
    ])// - wait until the navigation is completed

    await page.waitForLoadState("domcontentloaded")// - waits for specific loadstate

   const [newPage] = await Promise.all([
       context.waitForEvent('page'),
       page.click('a[target="_blank"]'), //Opens a new tab
    ])


})