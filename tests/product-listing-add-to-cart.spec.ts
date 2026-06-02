import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

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
    await inventoryPage.expectProductsVisible();
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
    await inventoryPage.expectSauceLabsBackpackVisible();
  });
  await test.step('Assert visible — Verify product price is visible', async () => {
    await expect(page.locator('.inventory_item_price').first()).toBeVisible();
  });
  await test.step('Assert visible — Verify product description is visible', async () => {
    await expect(page.locator('.inventory_item_desc').first()).toBeVisible();
  });
  await test.step('Assert visible — Verify product image is visible', async () => {
    await inventoryPage.expectItem4ImgVisible();
  });
});

test('Add a product to cart and verify cart icon updates', { tag: ["@smoke","@regression","@P0","@smoke-add-to-cart"] }, async ({ page, loginPage, inventoryPage, commonPage }) => {
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
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });
});

test('Remove a product from cart and verify cart icon updates', { tag: ["@smoke","@regression","@P0","@smoke-remove-from-cart"] }, async ({ page, loginPage, inventoryPage, cartPage }) => {
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
    await cartPage.clickRemoveSauceLabsBackpack();
  });
  await test.step('Assert hidden — Verify cart icon is hidden (no items)', async () => {
    await expect(page.locator('.shopping_cart_badge')).toBeHidden();
  });
});

test('Login, sort products, add to cart, verify cart', { tag: ["@e2e","@regression","@P0","@e2e-login-sort-add-to-cart"] }, async ({ page, loginPage, inventoryPage, commonPage }) => {
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
    await commonPage.clickSelectSortOptionPriceLowToHigh();
  });
  await test.step('Click — Click Add to Cart for Sauce Labs Backpack', async () => {
    await inventoryPage.clickAddToCartSauceLabsBackpack();
  });
  await test.step('Assert text — Verify cart icon shows 1 item', async () => {
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
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
    await inventoryPage.clickSauceLabsBackpack();
  });
  await test.step('Assert visible — Verify product detail page is visible', async () => {
    await expect(page.locator('.inventory_details_desc_container')).toBeVisible();
  });
  await test.step('Click — Click Back to Products button', async () => {
    await page.locator("[data-test='back-to-products']").click();
  });
  await test.step('Assert visible — Verify product listing page is visible', async () => {
    await inventoryPage.expectProductsVisible();
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
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  });
});

test('Add and remove product from cart, verify cart updates', { tag: ["@e2e","@regression","@P0","@e2e-add-remove-cart-flow"] }, async ({ page, loginPage, inventoryPage, cartPage }) => {
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
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });
  await test.step('Click — Click Remove for Sauce Labs Backpack', async () => {
    await cartPage.clickRemoveSauceLabsBackpack();
  });
  await test.step('Assert hidden — Verify cart icon is hidden (no items)', async () => {
    await expect(page.locator('.shopping_cart_badge')).toBeHidden();
  });
});
