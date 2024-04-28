import { expect } from '@playwright/test'
import { test } from '../utils/test-fixture'

test.describe('Calendly', () => {
  test('book the next available timeslot', async ({ page,ai }) => {
    await page.goto('https://calendly.com/zerostep-test/test-calendly')

    await ai('Verify that a calendar is displayed')
    await ai('Dismiss the privacy modal')
    await ai('Click on the first day in the month with times available');
    await ai('Click on the first available time in the sidebar')
    await ai('Click the Next button')
    await ai('Fill out the form with realistic values')
    await ai('Submit the form')

    const element = page.getByText('You are scheduled')
    expect(element).toBeDefined()
  })
})
