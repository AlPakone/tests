import {chromium, test} from "@playwright/test";

test ('multiple context and pages', async ({}) => {
    const browser = await chromium.launch()
    const userContext = await browser.newContext()
    const adminContext = await browser.newContext()
    const userPageOne = await userContext.newPage()
    const userPageTwo = await userContext.newPage()
    const adminPage = await adminContext.newPage()

    await userPageOne.goto('https://react-redux.realworld.io/#/login');

    const [popup] = await Promise.all([
        userPageOne.waitForEvent('popup'),
        userPageOne.click('#open'), //Opens a new tab
    ])

    const [newPage] = await Promise.all([
        userContext.waitForEvent('page'),
        userPageOne.click('a[target="_blank"]'), //Opens a new tab
    ])
    console.log(await userPageOne.title())
    console.log(await newPage.title())

})