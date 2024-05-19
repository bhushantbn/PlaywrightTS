import { test, expect, ElementHandle } from "@playwright/test";
import { log, timeLog } from "console";
import path from "path";
import fs from "fs";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");
});
test.afterEach(async ({ page }) => {
  await page.close();
});
test("file download", async ({ page }) => {
  await page.getByRole('link',{name:'Download File Demo'}).click();
  await page.getByRole('button',{name:'Download File'}).click();
});
test("Generate and Download Text file", async ({ page }) => {
  await page.getByRole('link',{name:'File Download'}).click();
  await page
    .locator('#textbox')
    .pressSequentially("Hello World!!!");
  await page.getByRole("button",{name:'Generate File'}).click();
  const download = await Promise.all([
    page.waitForEvent("download"),
    page.click("id=link-to-download"),
  ]);
  const fileName = download[0].suggestedFilename();
  await download[0].saveAs(fileName);
  console.log(fileName);
});
test("file Upload", async ({ page }) => {
  await page.getByRole('link',{name:'Upload File Demo'}).click();
  await page
    .locator("#file")
    .setInputFiles("test/upload/screenshot.png");
   expect(await page.locator('//div[@id="error"]').textContent()).toBe(
    "File Successfully Uploaded"
  );
 
});

test("find link", async ({ page }) => {
  try {
    await page.waitForSelector("a");

    // Extract all links and their properties
    const links: { name: string; url: string }[] = await page.$$eval(
      "a",
      (elements: HTMLAnchorElement[]) => {
        const linkData: { name: string; url: string }[] = [];
        elements.forEach((element) => {
          const href: string = element.href;
          const textContent: string = element.textContent?.trim() || "";
          if (href && href !== "#" && textContent) {
            linkData.push({ name: textContent, url: href });
          }
        });
        return linkData;
      }
    );

    // Define CSV header and rows
    let csvContent: string = "Link Name,URL\n";
    links.forEach((link) => {
      csvContent += `"${link.name.replace(/"/g, '""')}","${link.url}"\n`;
    });

    // Write CSV content to a file
    const csvFilePath: string = "links.csv";
    fs.writeFileSync(csvFilePath, csvContent, "utf-8");

    console.log(`Extracted ${links.length} links to ${csvFilePath}`);
  } catch (error) {
    console.error("Error occurred:", error);
  }
});
