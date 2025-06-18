import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.getByText('Select your countryRemove item').click();
  await page.getByRole('option', { name: 'Bangladesh' }).click();
});