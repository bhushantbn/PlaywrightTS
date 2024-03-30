import { test, expect, chromium } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";
import { error } from "console";

test("Accessibility testing", async ({ page }) => {
  await page.goto("https://meetanshi.com/");

  await test.step("Check ally", async () => {
    const { violations } = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag22a"])
      .analyze();
    expect(violations).toHaveLength(1);
  });
});
