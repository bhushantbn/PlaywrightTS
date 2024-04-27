import {test,expect} from '@playwright/test'

test.describe('ImageScale testcase',()=>{
    test.beforeEach(async ({page})=>{
        await page.goto('http://127.0.0.1:5500/ImageAnimations/')
    })
    test.afterEach(async ({page})=>{
        await page.close()
    })
    test('ImageScale testcase',async ({page})=>{
        await page.locator('#Image').hover()
    })
})