import { test, expect } from '@playwright/test';
import { AdminTypeform } from '../page_obj/adminTypeform'

test('has title', async ({ page }) => {
    const adminTypeform = new AdminTypeform(page)
    await adminTypeform.goto()
    await adminTypeform.login()
});