import { test, expect, ElementHandle } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");
  await page.locator('//a[normalize-space()="iFrame Demo"]').click();
});
test.afterEach(async ({ page }) => {
  await page.close();
});
test("Check Heading of Frame locator page", async ({ page }) => {
  const heading = await page.$("h1");
  if (heading) {
    await expect(
      page.locator(
        '//h1[@class="text-size-64 font-bold text-black text-center leading-none md:w-full leading-height-70 mx-auto smtablet:text-size-30 smtablet:leading-height-42"]'
      )
    ).toHaveText("Simple iframe");
  }
});
test("Check font Bold in iFrame Text", async ({ page }) => {
  const textEditor = page
    .frameLocator(
      "div >> internal:has-text=/^Simple iFrame containing Editor$/ >> iframe"
    )
    .getByText("Your content.");
  await page.waitForTimeout(2000);

  await textEditor.focus();
  await textEditor.selectText();
  await page.waitForTimeout(2000);
  await page
    .frameLocator(
      "div >> internal:has-text=/^Simple iFrame containing Editor$/ >> iframe"
    )
    .getByRole("button", { name: "𝐁" })
    .click();
  await page.waitForTimeout(2000);
  const expectedFontWeight = "700";
  const computedStyle = await textEditor.evaluate((element) => {
    const style = window.getComputedStyle(element);
    return {
      fontWeight: style.getPropertyValue("font-weight"),
    };
  });
  console.log("font weight is:", computedStyle.fontWeight);
  expect(computedStyle.fontWeight).toBe(expectedFontWeight);
  expect(expectedFontWeight).toBeTruthy();
});
test("Check font italic in iFrame Text", async ({ page }) => {
  const textEditor = page
    .frameLocator(
      "div >> internal:has-text=/^Simple iFrame containing Editor$/ >> iframe"
    )
    .getByText("Your content.");
  await page.waitForTimeout(2000);

  await textEditor.focus();
  await textEditor.selectText();
  await page.waitForTimeout(2000);
  await page
    .frameLocator(
      "div >> internal:has-text=/^Simple iFrame containing Editor$/ >> iframe"
    )
    .getByRole("button", { name: "𝑰" })
    .click();
  await page.waitForTimeout(2000);
  const expectedFontStyle = "italic";
  const computedStyle = await textEditor.evaluate((element) => {
    const style = window.getComputedStyle(element);
    return {
      fontStyle: style.getPropertyValue("font-style"),
    };
  });
  console.log("font style is:", computedStyle.fontStyle);
  expect(computedStyle.fontStyle).toBe(expectedFontStyle);
  expect(expectedFontStyle).toBeTruthy();
});

test("Check font line-Through style in iFrame Text", async ({ page }) => {
  const textEditor = page
    .frameLocator(
      "div >> internal:has-text=/^Simple iFrame containing Editor$/ >> iframe"
    )
    .getByText("Your content.");
  await page.waitForTimeout(2000);

  await textEditor.focus();
  await textEditor.selectText();
  await page.waitForTimeout(2000);
  await page
    .frameLocator(
      "div >> internal:has-text=/^Simple iFrame containing Editor$/ >> iframe"
    )
    .getByRole("button", { name: "ab" })
    .click();
  await page.waitForTimeout(2000);
  const expectedFontStyle = "line-through";
  const computedStyle = await textEditor.evaluate((element) => {
    const style = window.getComputedStyle(element);
    return {
      textDecoration: style.getPropertyValue("text-decoration"),
    };
  });
  console.log("font style is:", computedStyle.textDecoration);
  const hasLineThrough = computedStyle.textDecoration.includes("line-through");
  expect(hasLineThrough).toBe(true);
});
test("Check font Underline style in iFrame Text", async ({ page }) => {
  const textEditor = page
    .frameLocator(
      "div >> internal:has-text=/^Simple iFrame containing Editor$/ >> iframe"
    )
    .getByText("Your content.");
  await page.waitForTimeout(2000);

  await textEditor.focus();
  await textEditor.selectText();
  await page.waitForTimeout(2000);
  await page
    .frameLocator(
      "div >> internal:has-text=/^Simple iFrame containing Editor$/ >> iframe"
    )
    .getByRole("button", { name: "𝐔" })
    .click();

  await page.waitForTimeout(2000);
  const expectedFontStyle = "underline";
  const computedStyle = await textEditor.evaluate((element) => {
    const style = window.getComputedStyle(element);
    return {
      textDecoration: style.getPropertyValue("text-decoration"),
    };
  });
  console.log("font style is:", computedStyle.textDecoration);
  const hasLineThrough = computedStyle.textDecoration.includes("underline");
  expect(hasLineThrough).toBe(true);
});
