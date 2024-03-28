import { test, expect, Page, chromium } from '@playwright/test';
import { firstFrontDemo } from '../pages/firstFrontDemo';

test.describe("First front demo store test cases",()=>{
  let page:Page;

  test.beforeEach(async({browser})=>{
    browser=await chromium.launch()
    await page.goto('https://meetanshi.in/m2d1/')
  })
  test.afterEach(async ({ page }) => {
    await page.close()
  });
  
  test('Add TO Cart', async ({ page }) => {
    
  });
  

})
