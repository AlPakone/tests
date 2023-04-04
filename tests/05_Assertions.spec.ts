import {test, expect, chromium} from '@playwright/test';

test ('expect', async ({ }) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto('https://react-redux.realworld.io/#/login');
    await page.fill('input[type = "email"]','qacamp.acad@gmail.com');
    await page.type('input[type = "password"]','test12345');
    await page.click('.btn');
    await page.waitForTimeout(5000)

    const popularTagsCount = await page.$$eval('.tag-default', el => el.length)
    expect(popularTagsCount).toBeGreaterThan(5)
    expect(popularTagsCount).toBeLessThan(15)
    expect(popularTagsCount).toEqual(10)

    const content = await page.textContent('.navbar-brand')
    expect(content).toBe('conduit')

    const html = await page.innerHTML('.feed-toggle')
    expect(html).toMatch('Your Feed')
    expect(html).toMatch('Global Feed')
    expect(html).toBeDefined()

    const href = await page.getAttribute('.navbar-brand','href')
    expect(href).not.toMatch('https://react-redux.realworld.io')
})

