import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://ui.shadcn.com/");
  await page
    .getByText("Components").nth(1)
    .click();
  await page.getByRole("link", { name: "Components" }).click();
});
test.afterEach(async ({ page }) => {
  await page.close();
});
test("Verify Toast Message", async ({ page }) => {
  await page.getByText("Toast").click();
  await page.getByRole("button", { name: "Add to calendar" }).click();
  await expect(
    page.getByText("Scheduled: Catch up", { exact: true })
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Undo" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    page.getByText("Scheduled: Catch up", { exact: true })
  ).not.toBeVisible();
});

test("Verify Undo Button toBevisible", async ({ page }) => {
  await page.getByText("Toast").click();
  await page.getByRole("button", { name: "Add to calendar" }).click();
  await expect(
    page.getByText("Scheduled: Catch up", { exact: true })
  ).toBeVisible();
});
test("Verify Toast Close Button isClickable", async ({ page }) => {
  await page.getByText("Toast").click();
  await page.getByRole("button", { name: "Add to calendar" }).click();
  await page.locator("svg.lucide.lucide-x.h-4.w-4").hover();
});
