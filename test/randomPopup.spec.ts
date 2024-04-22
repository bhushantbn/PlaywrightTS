import { test, expect } from "@playwright/test";

test("Handle random Popup", async ({ page }) => {
  await page.addLocatorHandler(
    page.getByText("Subscribe to CommitQuality"),
    async () => {
      await page.getByTestId("close-popup").click();
    }
  );
  await page.goto("https://commitquality.com/practice-random-popup");
  await new Promise((resolve) => setTimeout(resolve, 6000));
  await page.locator('[data-testid="accordion-1"]').click();
  //await page.close()
});
