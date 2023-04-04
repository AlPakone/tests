import {chromium, expect, test} from "@playwright/test";
test ('upload', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html')
    await page.setInputFiles('input[type="file"]', './screenshots/todo-03.png')
    await page.click('input[type="submit"]')
    const html = await page.innerHTML('p')
    expect(html).toMatch("You've uploaded a file.")
    await browser.close()
})

test('dowload', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext({acceptDownloads: true})
    const page = await context.newPage()

    await page.goto('https://github.com/gothinkster/react-redux-realworld-example-app')
    await page.click("summary[class='btn btn-primary']")
    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
        page.click('.octicon-file-zip'),
    ])
    download.saveAs('./download.zip')
})