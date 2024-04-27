import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");
});
test.afterEach(async ({ page }) => {
  await page.close();
});
test("CSS Hover Button Effect 1", async ({ page }) => {
  await page.locator('//a[normalize-space()="Hover Demo"]').click();
  const hoverPageHeading = page.locator(
    '//h2[@class="text-black text-size-24 mb-40 font-semibold leading-6"]'
  );
  expect(await hoverPageHeading.textContent()).toBe(
    "CSS Hover Effects on Button"
  );
});

test("CSS Hover Button Effect 2", async ({ page }) => {
  await page.locator('//a[normalize-space()="Hover Demo"]').click();
  expect(
    await page
      .locator(
        '//div[@class="bg-green-100 border border-green-100 text-white px-15 py-5 rounded font-medium hover:bg-white hover:text-green-100 cursor-pointer transition duration-300"]'
      )
      .textContent()
  ).toBe("Hover Me");
  const hoverLocator=await page.waitForSelector(
    '//div[@class="bg-green-100 border border-green-100 text-white px-15 py-5 rounded font-medium hover:bg-white hover:text-green-100 cursor-pointer transition duration-300"]'
  )
  await hoverLocator.hover()
  console.log(hoverLocator.)
  //await page.waitForTimeout(1000)
  const hoverColor=await hoverLocator.evaluate((selector)=>{
    return window.getComputedStyle(selector).getPropertyValue("background-color")
  }) 
  console.log(hoverColor)  
  //expect(hoverColor).toBe("")
});
