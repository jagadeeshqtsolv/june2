import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('Login, sort products, add to cart, verify cart', { tag: ["@e2e","@regression","@P0","@e2e-login-sort-add-to-cart"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Open application URL', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.auth.username);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.auth.password);
  });
  await test.step('Click — Click login button', async () => {
    await loginPage.clickLoginButton();
  });
  await test.step('Select — Select sort option Price (Low to High)', async () => {
    await inventoryPage.selectNameAToZ2('lohi');
  });
  await test.step('Click — Click Add to Cart for Sauce Labs Backpack', async () => {
    await inventoryPage.clickAddToCartSauceLabsBackpack();
  });
  await test.step('Assert text — Verify cart icon shows 1 item', async () => {
    await inventoryPage.expectProductsVisible();

  });
});
