import { test, expect, BrowserContext, Page } from "@playwright/test";

let context: BrowserContext;
let page: Page;

test.describe("Context Menu", () => {
  test.beforeEach(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://computer-database.gatling.io/computers"); // Replace with your actual URL
  });

  test.afterEach(async () => {
    await page.close();
    await context.close();
  });

  test("Sample Test", async () => {
    await expect(page).toHaveTitle(/Computers database/); // Replace with the expected title
  });
});
