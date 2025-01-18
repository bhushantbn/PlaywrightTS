import { test, expect, Dialog } from "@playwright/test";
import { assert } from "console";

test.describe("Context Menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground");
    await page.getByText("Context Menu").click();
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });
  test("Verify Context menu dialog", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("You selected a context menu");
      await dialog.accept();
    });
    await page.locator("#hot-spot").click({ button: "right" });
  });
});
