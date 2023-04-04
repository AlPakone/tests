import { expect, Locator, Page } from '@playwright/test';
export class AdminTypeform {
    readonly username: Locator;
    readonly password: Locator;
    readonly loginbutton: Locator;
    readonly page: Page;


    constructor(page: Page) {
        this.page = page;
        this.username = page.getByText('Email')
        this.password = page.getByPlaceholder('At least 8 characters')
        this.loginbutton = page.getByRole('button', { name: 'Log in to Typeform' })
    }
    async login() {
        await this.username.fill('markovilikegames@gmail.com')
        await this.password.fill('JetMiarim2')
        await this.loginbutton.click()
    }

     async goto() {
        await this.page.goto ('https://admin.typeform.com/login')
    }}
