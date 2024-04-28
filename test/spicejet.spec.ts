import { test, expect, Browser, Page } from "@playwright/test";
import { chromium, webkit, firefox } from "@playwright/test";

test("move Element", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  await page.goto("https://www.spicejet.com");
  await page.getByText("Add-ons").first().hover();
  await page.getByText("Taxi").first().click();
  await page.waitForTimeout(5000);
  await page.close();
});

test.only("big basket mousehover", async ({page}) => {
  await page.goto("https://www.bigbasket.com/");
  await page.locator('//button[@id="headlessui-menu-button-:R5bab6:"]').click();
  await page
    .locator('//a[@role="none"][normalize-space()="Beverages"]')
    .first()
    .hover();
  await page.locator('//a[normalize-space()="Tea"]').first().hover();
  await page.locator('//a[normalize-space()="Green Tea"]').first().click();
  await page.close();
});