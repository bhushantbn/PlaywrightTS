import { test, expect } from "@playwright/test";

test.describe("disappear Element", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });
  test("disappear Element visible", async ({ page }) => {
    await page.getByRole("link", { name: "Disappearing Elements" }).click();
    const heading= page.locator("h3",{hasText:'Disappearing Elements'})
    await expect(heading).toBeVisible()

  });
  test("disappear Element hidden", async ({ page }) => {
    await page.getByRole("link", { name: "Disappearing Elements" }).click();
    const liElements = await page.$$('li');
    for(const liElement of liElements){
      const text=await liElement.innerText()
      console.log(text);
    }
    //console.log(liElements);
    
    // const count=await links.count(
    // console.log(count);
       
    //await expect(heading).toBeHidden()

  });
});
