import { test, expect, chromium } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";
import { error } from "console";

test("Accessibility testing", async ({ page }) => {
  await page.goto("https://bbc.co.uk/");
  const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);


  await page.close()
});
