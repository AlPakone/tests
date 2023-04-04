import {test, expect, chromium} from '@playwright/test';
const data = require('../testData/data.json')

test.only ('navigate', async ({}) => {
    const browser = await chromium.launch({headless: false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto(data.url)// goto method

    await page.fill('input[type = "email"]',data.email);
    await page.type('input[type = "password"]',data.password);
    await page.click('.btn');

    await page.waitForTimeout(2000)
    await page.click('.nav-link')
    //
    // await page.goBack()// go back
    // await page.waitForTimeout(1000)
    // await page.goForward()// go forward
    // await page.reload()// restart the page


})

