import { test as base } from "@playwright/test";

let baseURL = "http://google.com";

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto(baseURL);
    await use(page);
  },
});
