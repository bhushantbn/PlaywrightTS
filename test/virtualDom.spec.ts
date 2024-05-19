import { test, expect } from "@playwright/test";
import { tz } from "moment-timezone";
import { ToDateOptionsWithTZ, format } from "date-fns-tz";
import moment from "moment";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");
});
test.afterEach(async ({ page }) => {
  await page.screenshot({path:'screenshot.png',fullPage:true})
  await page.close();
});

test("Verify Countdown Timer Displays IST",async ({ page }) => {
  await page.locator('//a[normalize-space()="Virtual DOM"]').click();

  // Function to get current time in a specified timezone
  function getTimeZone(timezone: string) {
    return moment.tz(timezone).format('h:mm:ss A');
  }

  // Get the current time in Asia/Kolkata timezone
  const indianTime = getTimeZone('Asia/Kolkata');
  console.log('Expected Indian Time:', indianTime);

  // Locator for the timer text that includes the current time in IST
  const timerLocator = page.locator(`text=Current Time: ${indianTime}`);

  // Wait for the element to be visible
  await timerLocator.waitFor();

  // Get the text content of the timer element
  const initialDisplayedTimeText = await timerLocator.textContent();
  console.log('Initial Displayed Time:', initialDisplayedTimeText);

  // Assert that the timer displays the current time in IST
  expect(initialDisplayedTimeText).toContain(indianTime);
  
});

test("Verify Countdown Timer Displays US", async ({ page }) => {
  await page.locator('//a[normalize-space()="Virtual DOM"]').click();
  function getTimeZone(timezone: string) {
    return tz(timezone).format("h:mm:ss A");
  }
  const usTime = getTimeZone("America/New_York");
  const timerLocator = page.getByText(`Current Time in USA: ${usTime}`)
  const initialDisplayedTimeText =
    (await timerLocator.textContent()) ?? "No countdown timer text";
  console.log("Initial:", initialDisplayedTimeText);
  
  console.log(usTime);
  
  expect(initialDisplayedTimeText).toContain(usTime);
});

test("Verify Countdown Timer Displays KOREA", async ({ page }) => {
  await page.locator('//a[normalize-space()="Virtual DOM"]').click();
  function getTimeZone(timezone: string) {
    return tz(timezone).format("h:mm:ss A");
  }
  const koreanTime = getTimeZone("Asia/Seoul");
  const timerLocator = page.getByText(`Current Time in Korea: ${koreanTime}`)
  const initialDisplayedTimeText =
    (await timerLocator.textContent()) ?? "No countdown timer text";
  console.log("Initial:", initialDisplayedTimeText);
  
  console.log(koreanTime);
  
  expect(initialDisplayedTimeText).toContain(koreanTime);
});
