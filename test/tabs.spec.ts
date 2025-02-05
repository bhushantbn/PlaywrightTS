import { test, expect } from "@playwright/test";

test("Verify Tabs", async ({ page }) => {
  await page.goto("https://sdetunicorns.com/blog/");

  // Define expected tab names with correct formatting
  const tabs = [
    "All Blogs",
    "Typescript",
    "Web Automation",
    "Javascript",
    "API Testing",
    "WebdriverIO Tutorial",
  ];

  // Extract text from all tab elements
  let text = await page.locator(".elementor-tab-title").allInnerTexts();

  // Normalize by removing duplicates and trimming spaces (but keeping case)
  const normalize = (arr: string[]) => [...new Set(arr.map((t) => t.trim()))];

  const uniqueTabs = normalize(tabs);
  const uniqueText = normalize(text);

  // Compare the normalized sets
  expect(uniqueText).toEqual(uniqueTabs);
});
