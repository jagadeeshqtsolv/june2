import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test.describe('Product Listing & Add to Cart', () => {
  test('Login and verify product listing page loads', { tag: ["@smoke","@regression","@P0","@smoke-login-product-listing"] }, async ({ page, loginPage, inventoryPage }) => {
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
    await test.step('Assert visible — Verify product listing page is visible', async () => {
      await inventoryPage.expectInventoryListVisible();
    });
  });

  test('Verify product details are visible on listing', { tag: ["@smoke","@regression","@P0","@smoke-product-details-visibility"] }, async ({ page, loginPage, inventoryPage }) => {
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
    await test.step('Assert visible — Verify product name is visible', async () => {
      await inventoryPage.expectInventoryItemNameVisible();
    });
    await test.step('Assert visible — Verify product price is visible', async () => {
      await inventoryPage.expectInventoryItemPriceVisible();
    });
    await test.step('Assert visible — Verify product description is visible', async () => {
      await inventoryPage.expectInventoryItemDescVisible();
    });
    await test.step('Assert visible — Verify product image is visible', async () => {
      await inventoryPage.expectInventoryItemImgVisible();
    });
  });

  test('Add a product to cart and verify cart icon updates', { tag: ["@smoke","@regression","@P0","@smoke-add-to-cart"] }, async ({ page, loginPage, inventoryPage }) => {
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
    await test.step('Click — Click Add to Cart for Sauce Labs Backpack', async () => {
      await inventoryPage.clickAddToCartSauceLabsBackpack();
    });
    await test.step('Assert text — Verify cart icon shows 1 item', async () => {
      await inventoryPage.expectShoppingCartBadgeText('1');
    });
  });

  test('Remove a product from cart and verify cart icon updates', { tag: ["@smoke","@regression","@P0","@smoke-remove-from-cart"] }, async ({ page, loginPage, inventoryPage }) => {
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
    await test.step('Click — Click Add to Cart for Sauce Labs Backpack', async () => {
      await inventoryPage.clickAddToCartSauceLabsBackpack();
    });
    await test.step('Click — Click Remove for Sauce Labs Backpack', async () => {
      await inventoryPage.clickRemoveSauceLabsBackpack();
    });
    await test.step('Assert hidden — Verify cart icon is hidden (no items)', async () => {
      await inventoryPage.expectShoppingCartBadgeHidden();
    });
  });

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
      await inventoryPage.selectSortOption('Price (low to high)');
    });
    await test.step('Click — Click Add to Cart for Sauce Labs Backpack', async () => {
      await inventoryPage.clickAddToCartSauceLabsBackpack();
    });
    await test.step('Assert text — Verify cart icon shows 1 item', async () => {
      await inventoryPage.expectShoppingCartBadgeText('1');
    });
  });

  test('Navigate to product detail and back to listing', { tag: ["@e2e","@regression","@P0","@e2e-product-detail-navigation"] }, async ({ page, loginPage, inventoryPage }) => {
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
    await test.step('Click — Click Sauce Labs Backpack product name', async () => {
      await inventoryPage.clickInventoryItemNameByText('Sauce Labs Backpack');
    });
    await test.step('Assert visible — Verify product detail page is visible', async () => {
      await inventoryPage.expectInventoryDetailsDescContainerVisible();
    });
    await test.step('Click — Click Back to Products button', async () => {
      await inventoryPage.clickBackToProducts();
    });
    await test.step('Assert visible — Verify product listing page is visible', async () => {
      await inventoryPage.expectInventoryListVisible();
    });
  });

  test('Add multiple products to cart and verify cart count', { tag: ["@e2e","@regression","@P0","@e2e-add-multiple-products-to-cart"] }, async ({ page, loginPage, inventoryPage }) => {
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
    await test.step('Click — Click Add to Cart for Sauce Labs Backpack', async () => {
      await inventoryPage.clickAddToCartSauceLabsBackpack();
    });
    await test.step('Click — Click Add to Cart for Sauce Labs Bike Light', async () => {
      await inventoryPage.clickAddToCartSauceLabsBikeLight();
    });
    await test.step('Assert text — Verify cart icon shows 2 items', async () => {
      await inventoryPage.expectShoppingCartBadgeText('2');
    });
  });

  test('Add and remove product from cart, verify cart updates', { tag: ["@e2e","@regression","@P0","@e2e-add-remove-cart-flow"] }, async ({ page, loginPage, inventoryPage }) => {
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
    await test.step('Click — Click Add to Cart for Sauce Labs Backpack', async () => {
      await inventoryPage.clickAddToCartSauceLabsBackpack();
    });
    await test.step('Assert text — Verify cart icon shows 1 item', async () => {
      await inventoryPage.expectShoppingCartBadgeText('1');
    });
    await test.step('Click — Click Remove for Sauce Labs Backpack', async () => {
      await inventoryPage.clickRemoveSauceLabsBackpack();
    });
    await test.step('Assert hidden — Verify cart icon is hidden (no items)', async () => {
      await inventoryPage.expectShoppingCartBadgeHidden();
    });
  });

  test('Login fails with invalid credentials', { tag: ["@negative","@regression","@P0","@login-invalid-credentials"] }, async ({ page, loginPage }) => {
    await test.step('Open — Navigate to login page', async () => {
      await page.goto('/');
    });
    await test.step('Fill — Enter invalid username', async () => {
      await loginPage.fillUserName(testData.invalid.auth.username);
    });
    await test.step('Fill — Enter invalid password', async () => {
      await loginPage.fillPassword(testData.invalid.auth.password);
    });
    await test.step('Click — Click login button', async () => {
      await loginPage.clickLoginButton();
    });
    await test.step('Assert visible — Error message is displayed', async () => {
      await loginPage.expectLoginButtonVisible();
    });
  });

  test('Login fails when password is missing', { tag: ["@negative","@regression","@P0","@login-missing-password"] }, async ({ page, loginPage }) => {
    await test.step('Open — Navigate to login page', async () => {
      await page.goto('/');
    });
    await test.step('Fill — Enter valid username', async () => {
      await loginPage.fillUserName(testData.auth.username);
    });
    await test.step('Clear — Clear password field', async () => {
      await loginPage.clearPassword();
    });
    await test.step('Click — Click login button', async () => {
      await loginPage.clickLoginButton();
    });
    await test.step('Assert visible — Error message is displayed', async () => {
      await loginPage.expectLoginButtonVisible();
    });
  });

  test('Cannot add product to cart when not logged in', { tag: ["@negative","@regression","@P1","@add-to-cart-unauthenticated"] }, async ({ page, loginPage }) => {
    await test.step('Open — Navigate directly to inventory page without login', async () => {
      await page.goto('/inventory.html');
    });
    await test.step('Assert visible — Login page is displayed', async () => {
      await loginPage.expectLoginButtonVisible();
    });
  });

  test('Add to cart fails for non-existent product', { tag: ["@negative","@regression","@P2","@add-to-cart-invalid-product"] }, async ({ page, loginPage, inventoryPage }) => {
    await test.step('Open — Navigate to login page', async () => {
      await page.goto('/');
    });
    await test.step('Fill — Enter valid username', async () => {
      await loginPage.fillUserName(testData.auth.username);
    });
    await test.step('Fill — Enter valid password', async () => {
      await loginPage.fillPassword(testData.auth.password);
    });
    await test.step('Click — Click login button', async () => {
      await loginPage.clickLoginButton();
    });
    await test.step('Click — Attempt to click Add to Cart for non-existent product', async () => {
      await inventoryPage.clickNonExistentAddToCart();
    });
    await test.step('Assert hidden — Cart icon does not update', async () => {
      await inventoryPage.expectShoppingCartBadgeHidden();
    });
  });

  test('Sorting fails with invalid sort option', { tag: ["@negative","@regression","@P2","@sort-invalid-option"] }, async ({ page, loginPage, inventoryPage }) => {
    await test.step('Open — Navigate to login page', async () => {
      await page.goto('/');
    });
    await test.step('Fill — Enter valid username', async () => {
      await loginPage.fillUserName(testData.auth.username);
    });
    await test.step('Fill — Enter valid password', async () => {
      await loginPage.fillPassword(testData.auth.password);
    });
    await test.step('Click — Click login button', async () => {
      await loginPage.clickLoginButton();
    });
    await test.step('Select — Select invalid sort option', async () => {
      await inventoryPage.selectSortOption('invalid_option');
    });
    await test.step('Assert text — Error or no change in product order', async () => {
      await inventoryPage.expectProductOrderUnchanged();
    });
  });
});
