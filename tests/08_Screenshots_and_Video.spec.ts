import {chromium, test} from '@playwright/test';
import {saveVideo} from "playwright-video";

test ('screenshot', async () => {
    const browser = await chromium.launch({headless: false})
    const context = await browser.newContext()
    const page = await context.newPage()
    const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
    const ffmpeg = require('fluent-ffmpeg');
    ffmpeg.setFfmpegPath(ffmpegPath);

    const capture = await saveVideo(page,'./screenshots/Video.mp4')// saves video
    await page.goto('https://react-redux.realworld.io/#/login')

    await page.fill('input[type = "email"]','qacamp.acad@gmail.com');
    await page.type('input[type = "password"]','test12345');
    await page.click('.btn');
    await page.screenshot({path: './screenshots/screenshot.png', fullPage: true})// does screenshot
    await capture.stop()
    await browser.close()
})