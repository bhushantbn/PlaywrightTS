import { AxeBuilder } from '@axe-core/playwright';
import {test,expect, chromium} from '@playwright/test';

test("Accesibility testing",async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://dequeuniversity.com/demo/mars/');

  try {
    const results = await new AxeBuilder({ page }).analyze();
    console.log(results);
  } catch (e) {
    // do something with the error
  }

  await browser.close();
});