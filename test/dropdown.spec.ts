import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Select dropdown list", async ({ page }) => {
  await page.locator("//a[normalize-space()='Select Dropdown List']").click();
  await page.waitForTimeout(2000);
  await page.locator("//select[@id='select-demo']").selectOption("Tuesday");
  await expect(
    page.locator("//p[@class='selected-value text-size-14']")
  ).toHaveText("Day selected :- Tuesday");
  await expect(
    page.locator("//p[@class='selected-value text-size-14']")
  ).toContainText("Day selected :- Tuesday");
});
