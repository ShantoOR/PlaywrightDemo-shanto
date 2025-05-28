import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/admin/login.page';
import { HomeBezaPage } from '../../pages/admin/homeBeza.page';
import testdata from '../../fixtures/testdata.json';

test('Login with valid data and navigate to Investment Clearance', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(testdata.validuser.email, testdata.validuser.password);

  const homeBezaPage = new HomeBezaPage(page);
  await homeBezaPage.navigateToInvestmentClearance(); // ✅ new action added

  // Optional: Add a check to confirm we’ve landed on the correct URL
  await expect(page).toHaveURL('http://192.168.1.125:31710/sops/196');

  await page.context().storageState({
    path: 'fixtures/auth/userAuthState.json',
  });
});
