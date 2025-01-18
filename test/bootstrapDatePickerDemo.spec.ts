import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("Context Menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground");
    await page.getByText("Bootstrap Date Picker").click();
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });
  test("Verify Bootstrap Date Picker", async ({ page }) => {
    const toDate = faker.date.past().toLocaleDateString("en-CA");
    await page.locator("#birthday").fill(`${toDate}`);
    console.log(toDate);
    
  });
});
