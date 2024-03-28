import { test, expect, Browser, chromium, Page } from "@playwright/test";

test('Mouse click events',async()=>{
    const browser:Browser=await chromium.launch()
    const page:Page=await browser.newPage()
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    await page.getByText('right click me').click({button:'right'})
    await page.waitForTimeout(2000)
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    await page.getByText('Double-Click Me To See Alert').dblclick();
    await page.waitForTimeout(3000)
    await page.goto('https://the-internet.herokuapp.com/shifting_content')
    await page.getByText('Example 1: Menu Element').click({modifiers:["Shift"]})
    await page.waitForTimeout(2000)
    await browser.close()
})
