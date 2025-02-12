import { test, expect, chromium, Page } from "@playwright/test";
test.describe("herokuapp testcases", () => {
  test.beforeEach(async ({ page }) => {
    const browser = await chromium.launch();
    await page.goto("https://the-internet.herokuapp.com/");
  });
  test.afterEach(async ({ page }) => {
    page.close();
  });
  test("verify dropdown", async ({ page }) => {
    await page.getByRole("link", { name: "Dropdown" }).click();
    await expect(page.getByText("Dropdown List")).toBeVisible();
    await expect(page.locator('h3',{hasText:'Dropdown List'})).toBeVisible();
    await page.locator('//select[@id="dropdown"]').selectOption({value:'2'})
  });
  test('verify checkboxes',async({page})=>{
    await page.getByRole("link", { name: "checkboxes" }).click();
    await expect(page.getByText("Checkboxes")).toBeVisible();
    await page.getByRole('checkbox').first().check()
  })
});
