import { test, expect } from "@playwright/test";
import { assert } from "console";
import { link } from "fs";
import { convertHexToRGB } from "../utils/convertHexToRGB.ts";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.prestashop.com/#/en/front");
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("check prestashop Demo load test", async ({ page }) => {
  await page.waitForSelector("#framelive", { state: "visible" });
  const frameLocator = page.frameLocator("#framelive");
  const linkHover = frameLocator.getByText("Contact Us").nth(0);
  await linkHover.hover();
  const linkHoverColor = await linkHover.evaluate(
    (link) => getComputedStyle(link).color
  );
  const expectedHexColor = "#24b9d7";
  const expectedRGBColor = convertHexToRGB(expectedHexColor);

  // Parse the received RGB color string
  const receivedColorMatch = linkHoverColor.match(/rgb\((\d+), (\d+), (\d+)\)/);
  if (!receivedColorMatch) {
    throw new Error(
      `Received color '${linkHoverColor}' is not in the expected RGB format`
    );
  }

  const receivedRGBColor = {
    red: parseInt(receivedColorMatch[1], 10),
    green: parseInt(receivedColorMatch[2], 10),
    blue: parseInt(receivedColorMatch[3], 10),
  };

  // Compare the RGB values
  expect(receivedRGBColor).toEqual(expectedRGBColor);

  console.log(linkHoverColor);
});
