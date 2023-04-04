import {test, expect, chromium} from '@playwright/test';

test ('interacting', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto('https://todomvc.com/examples/react/#/');
    await page.fill('.new-todo','task_1');
    await page.press('.new-todo', 'Enter');
    await page.fill('.new-todo','task_2');
    await page.press('.new-todo', 'Enter');
    const elements = await page.$$('.toggle');
    await elements.forEach(element => element.check())
})

