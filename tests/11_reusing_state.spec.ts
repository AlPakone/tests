import {chromium, test} from '@playwright/test';

test ('screenshot @smoke', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext({storageState: 'state.json'})
    const page = await context.newPage()

    await page.goto('https://react-redux.realworld.io/#/')
    await page.waitForTimeout(5000)
    await page.screenshot({path: './screenshots/screenshot.png'})
    await context.storageState({ path: 'state.json' })
    await browser.close()
})




