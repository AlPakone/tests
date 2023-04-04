import {chromium, devices, test} from '@playwright/test';

test ('screenshot', async () => {

const browser = await chromium.launch({});
    const Iphone11 = devices("iPhone 11 Pro");
    const context = await browser.newContext({...Iphone11})
    const page = await context.newPage()
    await page.goto('https://www.seleniumeasy.com/test/javascript-alert-box-demo.html', { timeout: 45000 })

// Alert
page.on('dialog', async dialog => {
  console.log(dialog.message())
  console.log(dialog.type())
  await dialog.accept()
})
await page.click("//button[@class='btn btn-default']")

// Confirm
page.on('dialog', dialog => dialog.dismiss());
await page.click("//button[@class='btn btn-default btn-lg'][normalize-space()='Click me!']");

// Prompt
page.on('dialog', dialog => dialog.accept("QA Camp"));
await page.click("//button[normalize-space()='Click for Prompt Box']");

await context.close()
await browser.close()
})