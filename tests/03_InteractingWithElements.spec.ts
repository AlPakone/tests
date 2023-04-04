import {test, expect, chromium} from '@playwright/test';

test ('identify_elements', async ({ }) => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto('https://react-redux.realworld.io/#/login');
    await page.fill('input[type = "email"]','qacamp.acad@gmail.com');
    await page.type('input[type = "password"]','test12345');
    //await page.click('xpath=//button[@type=submit]', { position: {x : 0, y : 0}, button: 'left', modifiers: ['Shift'], force: true, timeout:45000});
    //await page.dblclick('xpath=//button[@type=submit]');
    await page.focus('xpath=//button[@type=submit]');
    await page.screenshot({ path: './screenshots/todo-03.png' });
})

