import { test, expect } from "@playwright/test";
import { Faker, faker } from "@faker-js/faker";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Check date picker", async ({ page }) => {
  await page.locator("//a[normalize-space()='JQuery Date Picker']").click();
  const toDate=faker.date.past().toLocaleDateString("en-CA")
  const fromDate=faker.date.future().toLocaleDateString("en-CA")
  await page
    .locator("//input[@id='from']")
    .fill(toDate);
  await page
    .locator("//input[@id='to']")
    .fill(fromDate);
    console.log(toDate)
    console.log(fromDate)
});
