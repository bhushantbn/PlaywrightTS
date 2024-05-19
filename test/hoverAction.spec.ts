import { test, expect } from "@playwright/test";
import { assert } from "console";


test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.prestashop.com/#/en/front");
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("check prestashop menu", async ({ page }) => {
  await page.waitForSelector("#framelive", { state: "visible" });
  const frameLocator = page.frameLocator("#framelive");
  const linkHover = frameLocator.locator(
    "//li[@id='category-3']//a[@class='dropdown-item']"
  );
  await linkHover.hover();
  const linkSelector = "a";
  const hoverColor = await page.evaluate((selector) => {
    const linkElement = document.querySelector(
      selector
    ) as HTMLAnchorElement | null;
    if (!linkElement) {
      throw new Error(`Link element '${selector}' not found`);
    }
    // Get the computed style of the link's text content
    const computedStyle = getComputedStyle(linkElement);
    return computedStyle.color; // Return the color property of the computed style
  }, linkSelector);
  expect(hoverColor).toBe("rgb(0, 0, 238)");
  console.log(hoverColor);
});

test("check prestashop Demo load test", async ({ page }) => {
  await page.waitForSelector("#framelive", { state: "visible" });
  const frameLocator = page.frameLocator("#framelive");
  const linkHover = frameLocator.locator(
    "//div[@id='contact-link']//a[normalize-space()='Contact us']"
  );
  await linkHover.hover();
  const hoverColor = await linkHover.evaluate(() => {
    const element = document.querySelector("a");
    if (element) {
      return window.getComputedStyle(element).color; // Access through window object
    }
    return null;
  }); // Assuming a single link
  expect(hoverColor).toBe("rgb(36, 185, 215)");
  console.log(hoverColor);
});
