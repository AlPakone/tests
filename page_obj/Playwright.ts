import { expect, Locator, Page } from '@playwright/test';
import {allure} from "allure-playwright";

export class PlaywrightDevPage {
    readonly page: Page;
    readonly getStartedLink: Locator;
    readonly gettingStartedHeader: Locator;
    readonly pomLink: Locator;
    readonly tocList: Locator;
    public newPage: string

    constructor(page: Page) {
        this.page = page;
        this.getStartedLink = page.locator('a', { hasText: 'Get started' });
        this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
        this.pomLink = page.locator('li', { hasText: 'Guides' }).locator('a', { hasText: 'Page Object Model' });
        this.tocList = page.locator('article div.markdown ul > li > a');
        this.newPage = "https://playwright.dev/docs/intro"
    }

    async goto(allureS) {
        await this.page.goto('https://playwright.dev');
    }
    async getStarted() {
        await this.getStartedLink.first().click();
        await expect(this.gettingStartedHeader).toBeVisible();
    }
    async pageObjectModel() {
        await this.getStarted();
        await this.pomLink.click();
    }

    async check(){
        await expect(this.page).toHaveURL(this.newPage)
    }
}