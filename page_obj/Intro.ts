import { expect, Locator, Page, request } from '@playwright/test';
export class Intro {
    readonly page: Page;
    readonly search: Locator;
    constructor(page: Page) {
        this.page = page;
        this.search = page.getByText('Search')
    }

    async goto(url) {
        await this.page.goto (url)
    }

    async clickOnSearch() {
        await this.search.click()
    }

}