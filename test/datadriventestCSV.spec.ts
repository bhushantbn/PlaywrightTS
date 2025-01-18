import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

// Define the structure of the CSV data
type TestDataRecord = {
  TestCaseId: string;
  email: string;
  password: string;
};

// Read the CSV file synchronously and parse it
const records: TestDataRecord[] = parse(
  fs.readFileSync(path.join(__dirname, "../test-data/testdata.csv"), "utf-8"),
  {
    columns: true,
    skip_empty_lines: true,
  }
) as TestDataRecord[];

// Test setup before each test case
test.beforeEach(async ({ page }) => {
  await page.goto("https://meetanshi.com");
  await page.click("i.icon.icon-user.not-logged-in");

});
test.afterAll(async ({ page }) => {
    await page.close();
  });  

// Loop through the records and create a test for each row
for (const record of records) {
  test(`Data Driven Testing Using CSV file in Playwright ${record.TestCaseId}`, async ({ page }) => {
    // Search with keywords from the CSV
    await page.fill("#email",record.email);
    await page.fill("#pass",record.password);
    await page.click("#send2");     
    await page.waitForTimeout(5000);

  });
}
