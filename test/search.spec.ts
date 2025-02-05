import { test, expect } from '@playwright/test';

test('Verify Home page Title', async ({ page }) => {
  await page.goto('https://meetanshi.com/');

  await expect(page).toHaveTitle(/Meetanshi - Top-rated Magento & Shopify Development Company/);
});

test('Verify Search functionality', async ({ page }) => {
  await page.goto('https://meetanshi.com/', { waitUntil: 'domcontentloaded' });

  await page.locator('.search').first().click();
  await page.getByPlaceholder("Search entire store here...").fill('paypal');
  await page.press('.search', 'Enter');
  // await page.pause()
  // Expects page to have a heading with the name of Installation.
  expect(await page.locator('h1').innerText()).toBe('Search results for: \'paypal\'');
  await expect(page).toHaveTitle(/Search results for: 'paypal'/);
  await expect(page).toHaveURL(/\?q=paypal/);
});
