import { test, expect, chromium } from "@playwright/test";
import { convertHexToRGB } from "../utils/convertHexToRGB";


test.describe("AboutUs Section Jaypal UI Testcases", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://bhushantesting.myshopify.com/");
    const password = page.locator("#password");
    await password.fill("bhushan");
    await page.getByRole("button", { name: "Enter" }).click();
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });
  test(
    "Verify About Us section title",
    { tag: "@titleSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const locator = page.locator(".meetanshi-heading-main");
      expect(await locator.textContent()).toContain("Meetanshi About Us");
    }
  );
  test(
    "Verify About Us section Title Font Size Desktop",
    { tag: "@titleSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const titleElement = page.locator(".meetanshi-heading-main");
      await expect(titleElement).toHaveCSS("font-size", "30px");
    }
  );
  test(
    "Verify About Us section Title Font Size Mobile",
    { tag: "@titleSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 360, height: 640 });
      const titleElement = page.locator(".meetanshi-heading-main");
      await expect(titleElement).toHaveCSS("font-size", "14px");
    }
  );
  test(
    "Verify About Us section Title Padding (top/bottom) Desktop",
    { tag: "@titleSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const titleElement = page.locator(".meetanshi-heading-main");
      await expect(titleElement).toHaveCSS("padding-top", "20px");
      await expect(titleElement).toHaveCSS("padding-bottom", "20px");
    }
  );

  test(
    "Verify About Us section Title Padding (top/bottom) Mobile",
    { tag: "@titleSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 360, height: 640 });
      const titleElement = page.locator(".meetanshi-heading-main");
      await expect(titleElement).toHaveCSS("padding-top", "10px");
      await expect(titleElement).toHaveCSS("padding-bottom", "10px");
    }
  );
  test(
    "Verify About Us section Title Padding (Left/Right)",
    { tag: "@titleSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const titleElement = page.locator(".meetanshi-heading-main");
      await expect(titleElement).toHaveCSS("padding-left", "17px");
      await expect(titleElement).toHaveCSS("padding-right", "17px");
    }
  );
  test(
    "Verify About Us section Title Margin (Top/Botttom) Desktop",
    { tag: "@titleSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const titleElement = page.locator(".meetanshi-heading-main");
      await expect(titleElement).toHaveCSS("margin-top", "17px");
      await expect(titleElement).toHaveCSS("margin-bottom", "17px");
    }
  );
  test(
    "Verify About Us section Title Margin (Top/Botttom) Mobile",
    { tag: "@titleSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 360, height: 640 });
      const titleElement = page.locator(".meetanshi-heading-main");
      await expect(titleElement).toHaveCSS("margin-top", "15px");
      await expect(titleElement).toHaveCSS("margin-bottom", "15px");
    }
  );
  test(
    "Verify Section Heading text alignment",
    { tag: "@titleSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const titleElement = page.locator(".meetanshi-heading-main");
      await expect(titleElement).toHaveCSS("text-align", "right");
    }
  );
  test(
    "Verify Section Heading font weight",
    { tag: "@titleSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const titleElement = page.locator(".meetanshi-heading-main");
      await expect(titleElement).toHaveCSS("font-weight", "900");
    }
  );
  test(
    "Verify Section Heading Text visibility",
    { tag: "@titleSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const headingText = page.locator("h2", { hasText: "We’re Meetanshi" });
      await expect(headingText).toBeVisible();
    }
  );
  test(
    "Heading Font Size (Desktop)",
    { tag: "@headingSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const headingText = page.locator("h2", { hasText: "We’re Meetanshi" });
      await expect(headingText).toHaveCSS("font-size", "10px");
    }
  );
  test(
    "Heading Font Size (Mobile) ",
    { tag: "@headingSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 360, height: 640 });
      const headingText = page.locator("h2", { hasText: "We’re Meetanshi" });
      await expect(headingText).toHaveCSS("font-size", "10px");
    }
  );
  test(
    "Heading Padding top (Desktop)",
    { tag: "@headingSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const headingText = page.locator("h2", { hasText: "We’re Meetanshi" });
      await expect(headingText).toHaveCSS("padding-top", "10px");
    }
  );
  test(
    "Heading Padding top (Mobile)",
    { tag: "@headingSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 360, height: 640 });
      const headingText = page.locator("h2", { hasText: "We’re Meetanshi" });
      await expect(headingText).toHaveCSS("padding-top", "10px");
    }
  );
  test(
    "Heading Padding Bottom (Desktop)",
    { tag: "@headingSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const headingText = page.locator("h2", { hasText: "We’re Meetanshi" });
      await expect(headingText).toHaveCSS("padding-bottom", "10px");
    }
  );
  test(
    "Heading Padding Bottom (Mobile)",
    { tag: "@headingSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 360, height: 640 });
      const headingText = page.locator("h2", { hasText: "We’re Meetanshi" });
      await expect(headingText).toHaveCSS("padding-bottom", "10px");
    }
  );
  test("Heading padding left", { tag: "@headingSetting" }, async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const headingText = page.locator("h2", { hasText: "We’re Meetanshi" });
    await expect(headingText).toHaveCSS("padding-left", "16px");
  });
  test(
    "Heading padding right",
    { tag: "@headingSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const headingText = page.locator("h2", { hasText: "We’re Meetanshi" });
      await expect(headingText).toHaveCSS("padding-right", "18px");
    }
  );
  test(
    "Heading text alignment",
    { tag: "@headingSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const headingText = page.locator("h2", { hasText: "We’re Meetanshi" });
      await expect(headingText).toHaveCSS("text-align", "left");
    }
  );
  test(
    "Heading text fontColor",
    { tag: "@headingSetting" },
    async ({ page }) => {
      let rgbColor = convertHexToRGB("#C74848");
      await page.setViewportSize({ width: 1920, height: 1080 });
      const headingText = page.locator("h2", { hasText: "We’re Meetanshi" });
      await expect(headingText).toHaveCSS(
        "color",
        `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`
      );
    }
  );
  test("Heading font weight", { tag: "@headingSetting" }, async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const headingText = page.locator("h2", { hasText: "We’re Meetanshi" });
    await expect(headingText).toHaveCSS("font-weight", "600");
  });
  test(
    "Heading text Transform",
    { tag: "@headingSetting" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const headingText = page.locator("h2", { hasText: "We’re Meetanshi" });
      await expect(headingText).toHaveCSS("text-transform", "uppercase");
    }
  );
  test("Heading font family", { tag: "@headingSetting" }, async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const headingText = page
      .locator("h2")
      .filter({ hasText: "We’re Meetanshi" });
    await expect(headingText).toHaveCSS("font-family", "Mono");
  });
  test(
    "horizontal line Width desktop",
    { tag: "@rulerSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const horizontalLine = page.locator(".about-inner-overline-wrapper");
      await expect(horizontalLine).toHaveCSS("width", "50%");
    }
  );
  test(
    "horizontal line Width mobile",
    { tag: "@rulerSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 360, height: 640 });
      const horizontalLine = page.locator(".about-inner-overline-wrapper");
      await expect(horizontalLine).toHaveCSS("width", "50%");
    }
  );

  test("Line color", { tag: "@rulerSettings" }, async ({ page }) => {
    let rgbColor = convertHexToRGB("#dd2020");
    await page.setViewportSize({ width: 1920, height: 1080 });
    const horizontalLine = page.locator(".about-inner-overline-wrapper");
    await expect(horizontalLine).toHaveCSS(
      "background",
      `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`
    );
  });
  test(
    "Line margin top(Desktop)",
    { tag: "@rulerSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test(
    "Line margin top(mobile)",
    { tag: "@rulerSettings" },
    async ({ page }) => {}
  );

  test(
    "Line margin bottom(Desktop)",
    { tag: "@rulerSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test(
    "Line margin bottom(mobile)",
    { tag: "@rulerSettings" },
    async ({ page }) => {}
  );
  test("Line height desktop", { tag: "@rulerSettings" }, async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
  });
  test(
    "ruler height mobile",
    { tag: "@rulerSettings" },
    async ({ page }) => {}
  );
  test("Sub title content", { tag: "@subtitleSettings" }, async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
  });
  test(
    "Sub title fontsize desktop",
    { tag: "@subtitleSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test(
    "Sub title fontsize mobile",
    { tag: "@subtitleSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test(
    "Sub title font family",
    { tag: "@subtitleSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test(
    "Sub title text transform",
    { tag: "@subtitleSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test(
    "Sub title padding (top/bottom) desktop",
    { tag: "@subtitleSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test(
    "Sub title padding (top/bottom) mobile",
    { tag: "@subtitleSettings" },
    async ({ page }) => {}
  );
  test(
    "Sub title padding (left/right)",
    { tag: "@subtitleSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test(
    "Sub title margin (top/bottom)",
    { tag: "@subtitleSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test(
    "Sub title font color",
    { tag: "@subtitleSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test(
    "textbox width desktop",
    { tag: "@textboxSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test(
    "textbox width mobile",
    { tag: "@textboxSettings" },
    async ({ page }) => {}
  );
  test(
    "Text box Padding (top/bottom) (Desktop)",
    { tag: "@textboxSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test(
    "Text box Padding (top/bottom) (Mobile)",
    { tag: "@textboxSettings" },
    async ({ page }) => {}
  );
  test(
    "Text box Padding (left/right) (Desktop)",
    { tag: "@textboxSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test(
    "Text box Padding (left/right) (Mobile)",
    { tag: "@textboxSettings" },
    async ({ page }) => {}
  );
  test(
    "Text box Background color",
    { tag: "@textboxSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test(
    "Text box Border radius",
    { tag: "@textboxSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test(
    "Text box Background color transparency",
    { tag: "@textboxSettings" },
    async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    }
  );
  test("Handle google page", async () => {
    try {
      const browser = await chromium.launch({ headless: false });
      const context = await browser.newContext();
      let page = await context.newPage();
      await page.goto("google.com");
      await browser.close();
    } catch (error) {
      console.error("Error:", error);
    }
  });
});
