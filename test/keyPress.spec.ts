import { test, expect } from "@playwright/test";
import { Faker, faker } from "@faker-js/faker";

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/");
  });
  
test.afterEach(async ({ page }) => {
    await page.close();
});

test("Keypress event", async ({ page }) => {
    const inputText="Tab"
    await page.locator('//a[normalize-space()="Key Press"]').click()
    await page.locator('//input[@id="my_field"]').press(inputText)
    const label=page.locator('#result')
    const labelText=await label?.textContent()
    //await page.waitForTimeout(2000)
    expect(labelText).toBeTruthy()
    console.log(inputText.toString().toUpperCase());
    console.log(labelText);
     
})