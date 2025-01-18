import { test, expect } from '@playwright/test';

test("API request testing in Typescript", async ({ page, request }) => {
    const response = await page.goto('https://google.com');
    
    if (response) {
        console.log(response.request().redirectedFrom());
    } else {
        console.log('Response is null');
    }
});

test("API request testing in Javascript", async ({ page, request }) => {
    const response = await page.goto('http://google.com');
    console.log(response.request().redirectedFrom().url());
});

