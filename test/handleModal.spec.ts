import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");
});
test.afterEach(async ({ page }) => {
  await page.close();
});
test("handle Single  Bootstrap Modal Popup", async ({ page }) => {
  await page.locator('//a[normalize-space()="Bootstrap Modals"]').click();
  await page.locator('[data-target="#myModal"]').click();
  const modal = await page.waitForSelector('//div[@class="modal-body"]', {
    state: "visible",
  });
  expect(await modal.textContent()).toBe(
    "This is the place where the content for the modal dialog displays"
  );
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Save Changes" }).click();
  await page.waitForTimeout(1000);
  expect(await modal.isHidden()).toBeTruthy();
});

test("handle Multiple  Bootstrap Modal Popup", async ({ page }) => {
  await page.locator('//a[normalize-space()="Bootstrap Modals"]').click();
  await page.locator("//button[@data-target='#myMultiModal']").click();
  const modal = await page.waitForSelector(
    'div[id="myMultiModal"] div[class="modal-body"]',
    {
      state: "visible",
    }
  );
  expect(await modal.textContent()).toBe(
    "This is the place where the content for the modal dialog displays.Click launch modal button to launch second modal.Click close link to close the modal.Clicking on Save Changes button will close the modal and refresh the pageLaunch Modal"
  );
  await page.waitForTimeout(3000);
  await page
    .locator(
      "//button[@class='btn btn-dark selenium_btn hover:bg-lambda-900 hover:border-lambda-900'][normalize-space()='Launch Modal']"
    )
    .click();
  const newModal = await page.waitForSelector(
    'div[id="mySecondModal"] div[class="modal-dialog"]',
    {
      state: "visible",
    }
  );
  expect(await newModal.textContent()).toBe(
    "Modal 2×This is the place where the content for the modal dialog displays.CloseSave Changes"
  );
  await page.waitForTimeout(1000);
  await page
    .locator(
      "//div[@id='mySecondModal']//button[@type='button'][normalize-space()='Save Changes']"
    )
    .click();
  await page.waitForTimeout(1000);
  expect(await newModal.isHidden()).toBeTruthy();
  await page.getByRole("button", { name: "Save Changes" }).click();
  await page.waitForTimeout(1000);
  expect(await modal.isHidden()).toBeTruthy();
});
