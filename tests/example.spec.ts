import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/admin/login.page';
import testdata from '../fixtures/testdata.json';

test('has title', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(testdata.validuser.email, testdata.validuser.password);
  await page.pause();
});



