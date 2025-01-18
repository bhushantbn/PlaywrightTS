import {
  chromium,
  expect,
  Browser,
  BrowserContext,
  Page,
} from "@playwright/test";
import { globalSetup } from "../utils/setup.ts";
import * as fs from "fs";
import * as dotenv from "dotenv";
import { test } from "../utils/fixture";
dotenv.config();

const storageStatePath = "storageState.json";

let browser: Browser;
let context: BrowserContext;
let page: Page;

test.beforeAll(async () => {
  // Check if the storage state file exists; if not, run the login function
  if (!fs.existsSync(storageStatePath)) {
    await globalSetup(storageStatePath);
  }
  browser = await chromium.launch();
});

test.beforeEach(async () => {
  // Reuse the saved storage state
  context = await browser.newContext({ storageState: storageStatePath });
  page = await context.newPage();

  const baseURL = process.env.URL;

  if (!baseURL) {
    throw new Error("Environment variable SHOPIFY_URL must be set");
  }

  await page.goto(baseURL);
  await page.getByRole("link", { name: "all lenses" }).click();
});

test.afterEach(async () => {
  if (page) {
    await page.close();
  }
  if (context) {
    await context.close();
  }
});

test.afterAll(async () => {
  // Ensure that the browser instance is closed
  if (browser) {
    await browser.close();
  }
});

test.describe("UI Testcases", () => {
  test("check subTitle font size", async () => {
    await page
      .locator("span.trust-badge-sub-title")
      .first()
      .waitFor({ state: "visible" });
    const elements = page.locator("span.trust-badge-sub-title");
    for (const element of await elements.all()) {
      await expect(element).toHaveCSS("font-size", "13px");
    }
  });
  test("check Title font size", async () => {
    await page
      .locator("span.trust-badge-title")
      .first()
      .waitFor({ state: "visible" });
    const elements = page.locator("span.trust-badge-title");

    for (const element of await elements.all()) {
      await expect(element).toHaveCSS("font-size", "18px");
    }
  });
  test("Verify Google Page Title", async () => {
    const title = await page.title();
    expect(title).toBe("Google");
  });
});
