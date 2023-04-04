import {test, chromium} from '@playwright/test';
import {expect} from '../node_modules/expect'

test ('identify_elements', async ({ }) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto('https://react-redux.realworld.io/#/login');
    await page.fill('input[type = "email"]','qacamp.acad@gmail.com');
    await page.type('input[type = "password"]','test12345');
    await page.click('.btn');
    await page.screenshot({ path: './screenshots/todo-03.png' });
    await page.waitForTimeout(5000)
    const logotext = await page.$eval('.navbar-brand', el => el.textContent)
    console.log('logotext: '+logotext)
    const logohref = await page.$eval('.navbar-brand', el => el.baseURI)
    console.log('logohref: '+logohref)
    const content = await page.textContent('.navbar-brand')
    console.log(content)
    const text = await page.innerText('.navbar-brand')
    console.log('text: '+text)
    const html = await page.innerHTML('.feed-toggle')
    console.log(html)
    const href = await page.getAttribute('.navbar-brand','href')
    console.log('href: '+href)
})

