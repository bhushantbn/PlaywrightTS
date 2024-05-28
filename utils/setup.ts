import { chromium } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

export async function globalSetup(storageStatePath: string): Promise<void> {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const baseURL = process.env.SHOPIFY_URL;
  const password = process.env.SHOPIFY_PASSWORD;

  if (!baseURL || !password) {
    throw new Error("Environment variables SHOPIFY_URL and SHOPIFY_PASSWORD must be set");
  }

  await page.goto(baseURL);
  await page.locator("#password").fill(password);
  await page.getByRole("button", { name: "Enter" }).click();

  // Save the storage state to a file
  await context.storageState({ path: storageStatePath });

  await browser.close();
}
