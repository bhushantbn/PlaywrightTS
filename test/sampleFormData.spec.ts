import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Check Sample Form Faker Data", async ({ page }) => {
  await page.getByRole("link",{name:'Simple Form Demo'}).click();
  const message = faker.git.commitMessage();
  await page.getByPlaceholder("Please enter your Message").fill(message);
  await page.getByRole("button",{name:'Get Checked Value'}).click();
  expect(await page.locator("#message").textContent()).toBe(message);
  console.log(message);
});

test('Check sum of 2 input fields',async({page})=>{
  await page.getByRole("link",{name:'Simple Form Demo'}).click();
  const num1=faker.number.int()
  await page.getByPlaceholder('Please enter first value').fill(`${num1}`)
  const num2=faker.number.int()
  await page.getByPlaceholder('Please enter second value').fill(`${num2}`)
  await page.getByRole('button',{name:'Get Sum'}).click()
  const sum = num1+num2
  expect(await page.locator('#addmessage').textContent()).toBe(`${sum}`)
  console.log(sum);
  
})

