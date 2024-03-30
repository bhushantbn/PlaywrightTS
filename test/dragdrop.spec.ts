import { test, expect, Browser, chromium, Page } from "@playwright/test";

test("Drag and drop", async () => {
  const browser: Browser = await chromium.launch({
    headless: true,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  await page.goto(
    "https://jqueryui.com/resources/demos/droppable/default.html"
  );
  await page.locator("#draggable").dragTo(page.locator("#droppable"));
  await page.waitForTimeout(2000);
  await page.close();
});
test("mouse Operation", async () => {
  const browser: Browser = await chromium.launch({
    headless: true,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  await page.goto(
    "https://jqueryui.com/resources/demos/droppable/default.html"
  );
  await page.locator('#draggable').hover();
  await page.mouse.down();
  await page.locator('#droppable').hover();
  await page.mouse.up()
});
