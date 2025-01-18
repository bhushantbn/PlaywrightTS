import { test, expect } from "@playwright/test";
import * as fs from "fs";
import path from "path";

// Load JSON data from file
test.use({ storageState: 'storageState.json' });

const filePath = path.resolve(__dirname, "../test-data/testdata.json");

const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

test.describe("Data Driven Testing Using JSON", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://meetanshi.com");
  });
  test.afterAll(async ({ page }) => {
    await page.close();
  });
  // Iterate over each set of data in the JSON file
  for (const userData of data) {
    test(`Login Test for user ${userData.email}`, async ({ page }) => {
       await page.click("i.icon.icon-user.not-logged-in");
      // Enter the username and password
      await page.fill("#email", userData.email);
      await page.fill("#pass", userData.password);

      // Submit the login form
      await page.click("#send2");
      await page.context().storageState({ path: 'storageState.json' });
      // Assert something after login (e.g., presence of a logout button)
      await expect(page.locator("button.logout")).toBeVisible();
    });
  }
});
