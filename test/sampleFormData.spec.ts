import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Check Sample Form Faker Data", async ({ page }) => {
  await page.locator("//a[normalize-space()='Simple Form Demo']").click();
  const message = faker.git.commitMessage();
  await page.locator("//input[@id='user-message']").fill(message);
  await page.locator("//button[@id='showInput']").click();
  expect(await page.locator("//p[@id='message']").textContent()).toBe(message);
  console.log(message);
});

test('Check sum of 2 input fields',async({page})=>{
  await page.locator("//a[normalize-space()='Simple Form Demo']").click();
  const num1=faker.number.int()
  await page.locator('//input[@id="sum1"]').fill(`${num1}`)
  const num2=faker.number.int()
  await page.locator('//input[@id="sum2"]').fill(`${num2}`)
  await page.locator('//button[normalize-space()="Get Sum"]').click()
  const sum = num1+num2
  expect(await page.locator('//p[@id="addmessage"]').textContent()).toBe(`${sum}`)
})

