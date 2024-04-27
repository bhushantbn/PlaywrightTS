import { test, expect } from "@playwright/test";
import { convertHexToRGB } from "../utils/convertHexToRGB";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");
  await page.locator('//a[normalize-space()="Hover Demo"]').click();
});
test.afterEach(async ({ page }) => {
  await page.close();
});

test("Check Hover Demo Heading", async ({ page }) => {
  const heading = page.getByText("Mouse Hover");
  expect(await heading.textContent()).toBe("Mouse Hover");
});
test("Check Hover Demo Button BG-Color", async ({ page }) => {
  const button = page.locator(
    '//div[@class="bg-green-100 border border-green-100 text-white px-15 py-5 rounded font-medium hover:bg-white hover:text-green-100 cursor-pointer transition duration-300"]'
  );
  let rgbColor = convertHexToRGB("#28a745");

  await expect(button).toHaveCSS(
    "background-color",
    `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`
  );
});

test("Check Hover Demo Button 1 Hover Color", async ({ page }) => {
  const button = page.locator(
    '//div[@class="bg-green-100 border border-green-100 text-white px-15 py-5 rounded font-medium hover:bg-white hover:text-green-100 cursor-pointer transition duration-300"]'
  );
  await button.hover();

  let rgbColor = convertHexToRGB("#ffffff");

  await expect(button).toHaveCSS(
    "background-color",
    `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`
  );
});

test("Check Hover Demo Button 2 BG-Color", async ({ page }) => {
  const button = page.locator(
    '//div[@class="ml-40 bg-green-200 border border-green-200 text-white px-15 py-5 rounded font-medium hover:bg-gray-800 hover:border-gray-800 cursor-pointer transition duration-300"]'
  );
  let rgbColor = convertHexToRGB("#17a2b8");

  await expect(button).toHaveCSS(
    "background-color",
    `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`
  );
});

test("Check Hover Demo Button 2 Hover Color", async ({ page }) => {
  const button = page.locator(
    '//div[@class="ml-40 bg-green-200 border border-green-200 text-white px-15 py-5 rounded font-medium hover:bg-gray-800 hover:border-gray-800 cursor-pointer transition duration-300"]'
  );
  await button.hover();

  let rgbColor = convertHexToRGB("#4a4a4a");

  await expect(button).toHaveCSS(
    "background-color",
    `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`
  );
});

test("Check Link Hover Text Decoration", async ({ page }) => {
  const link = page.locator(
    '//div[@class="font-semibold text-gray-800 hover:underline cursor-pointer transition duration-300"]'
  );
  link.hover();
  await page.waitForTimeout(2000);
  const isUnderlinePresent = await link.evaluate(() => {
    // Find the element you want to check for underline
    const element = document.querySelector(
      'div[class="font-semibold text-gray-800 hover:underline cursor-pointer transition duration-300"]'
    ); // Replace 'your-selector' with your CSS selector

    // Check if the element exists
    if (!element) {
      // If element doesn't exist, return false
      return false;
    }
    const computedStyle = window.getComputedStyle(element);
    return computedStyle.textDecoration.includes("underline");
  });
  console.log(isUnderlinePresent);
  expect(isUnderlinePresent).toBeTruthy();
});

test("Check Hover Me Text Color", async ({ page }) => {
  const link = page.locator(
    '//div[@class="ml-40 font-semibold text-gray-800 hover:text-lambda-900 cursor-pointer transition duration-300"]'
  );
  await link.hover();
  let rgbColor = convertHexToRGB("#0ebac5");

  await expect(link).toHaveCSS(
    "color",
    `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`
  );
});

test("No Effect only content show Effect", async ({ page }) => {
  const img = page.locator('//div[@class="s__column m-15"]//img[@alt="Image"]');
  const p = page.locator(
    '//p[@class="text-center w-300 sp__text font-medium"]'
  );
  await img.hover();
  expect(await p.textContent()).toBe("Hover");
});

test("CSS Zoom IN effect", async ({ page }) => {
  const imgLocator = page.locator(
    '//div[@class="image-card"]//img[@alt="Image"]'
  );
  await imgLocator.hover();
  await page.waitForTimeout(2000);
  const isImageHover = await imgLocator.evaluate(() => {
    // Find the element you want to check for underline
    const element = document.querySelector(
      'div[class="image-card"] img[alt="Image"]'
    ); // Replace 'your-selector' with your CSS selector

    // Check if the element exists
    if (!element) {
      // If element doesn't exist, return false
      return false;
    }
    const computedStyle = window.getComputedStyle(element);
    return computedStyle.transition.includes(".4s ease");
  });
  console.log(isImageHover);
  expect(isImageHover).toBeTruthy();
});
test("CSS Zoom OUT Effect", async ({ page }) => {
  const imgLocator = page.locator(
    "//div[@class='s__column3']//img[@alt='Image']"
  );
  await imgLocator.hover();
  const transformValue = await imgLocator.evaluate(
    (element) => window.getComputedStyle(element).transform
  );
  console.log(transformValue);
  expect(transformValue).toBeTruthy()
});
