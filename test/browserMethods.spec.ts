import { test, expect, chromium } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://www.google.com");
});
test.afterEach(async ({ page }) => {
  await page.close();
});
test("google search", async ({ page }) => {
  await page.locator(".gLFyf").fill("Playwright")
  await page.press(".gLFyf", "Enter")
  await page
    .locator(
      '//h3[contains(text(),"Playwright: Fast and reliable end-to-end testing f")]'
    )
    .click();
    await expect(page).toHaveURL('https://playwright.dev/');
    await page.waitForTimeout(3000);
});
