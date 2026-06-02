import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class CommonPage {
  private static readonly L = {
    enterUsername: { strategy: 'testId' as const, value: 'username', actionKind: 'textbox' as const },
    enterPassword: { strategy: 'testId' as const, value: 'password', actionKind: 'textbox' as const },
    clickLoginButton: { strategy: 'testId' as const, value: 'login-button', actionKind: 'button' as const },
    selectSortOptionPriceLowToHigh: { strategy: 'testId' as const, value: 'product_sort_container', actionKind: 'generic' as const },
    clickAddToCartForSauceLabsBackpack: { strategy: 'testId' as const, value: 'add-to-cart-sauce-labs-backpack', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}


  async fillEnterUsername(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CommonPage.L.enterUsername), value);
  }

  async clearEnterUsername(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CommonPage.L.enterUsername));
  }

  async typeTextEnterUsername(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CommonPage.L.enterUsername), value);
  }

  async expectEnterUsernameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.enterUsername), timeoutMs);
  }

  async expectEnterUsernameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.enterUsername), timeoutMs);
  }

  async expectEnterUsernameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.enterUsername), expected, timeoutMs);
  }

  async expectEnterUsernameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.enterUsername), substring, timeoutMs);
  }

  async expectEnterUsernameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.enterUsername), value, timeoutMs);
  }

  async expectEnterUsernameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.enterUsername), timeoutMs);
  }

  async expectEnterUsernameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.enterUsername), timeoutMs);
  }

  async expectEnterUsernameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.enterUsername), timeoutMs);
  }

  async expectEnterUsernameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.enterUsername), timeoutMs);
  }

  async expectEnterUsernameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.enterUsername), timeoutMs);
  }

  async expectEnterUsernameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.enterUsername), count, timeoutMs);
  }

  async scrollEnterUsernameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.enterUsername));
  }


  async fillEnterPassword(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CommonPage.L.enterPassword), value);
  }

  async clearEnterPassword(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CommonPage.L.enterPassword));
  }

  async typeTextEnterPassword(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CommonPage.L.enterPassword), value);
  }

  async expectEnterPasswordVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.enterPassword), timeoutMs);
  }

  async expectEnterPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.enterPassword), timeoutMs);
  }

  async expectEnterPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.enterPassword), expected, timeoutMs);
  }

  async expectEnterPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.enterPassword), substring, timeoutMs);
  }

  async expectEnterPasswordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.enterPassword), value, timeoutMs);
  }

  async expectEnterPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.enterPassword), timeoutMs);
  }

  async expectEnterPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.enterPassword), timeoutMs);
  }

  async expectEnterPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.enterPassword), timeoutMs);
  }

  async expectEnterPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.enterPassword), timeoutMs);
  }

  async expectEnterPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.enterPassword), timeoutMs);
  }

  async expectEnterPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.enterPassword), count, timeoutMs);
  }

  async scrollEnterPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.enterPassword));
  }


  async clickClickLoginButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.clickLoginButton));
  }

  async doubleClickClickLoginButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.clickLoginButton));
  }

  async longPressClickLoginButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.clickLoginButton));
  }

  async expectClickLoginButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.clickLoginButton), timeoutMs);
  }

  async expectClickLoginButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.clickLoginButton), timeoutMs);
  }

  async expectClickLoginButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.clickLoginButton), expected, timeoutMs);
  }

  async expectClickLoginButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.clickLoginButton), substring, timeoutMs);
  }

  async expectClickLoginButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.clickLoginButton), value, timeoutMs);
  }

  async expectClickLoginButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.clickLoginButton), timeoutMs);
  }

  async expectClickLoginButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.clickLoginButton), timeoutMs);
  }

  async expectClickLoginButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.clickLoginButton), timeoutMs);
  }

  async expectClickLoginButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.clickLoginButton), timeoutMs);
  }

  async expectClickLoginButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.clickLoginButton), timeoutMs);
  }

  async expectClickLoginButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.clickLoginButton), count, timeoutMs);
  }

  async scrollClickLoginButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.clickLoginButton));
  }


  async clickSelectSortOptionPriceLowToHigh(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.selectSortOptionPriceLowToHigh));
  }

  async doubleClickSelectSortOptionPriceLowToHigh(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.selectSortOptionPriceLowToHigh));
  }

  async longPressSelectSortOptionPriceLowToHigh(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.selectSortOptionPriceLowToHigh));
  }

  async expectSelectSortOptionPriceLowToHighVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.selectSortOptionPriceLowToHigh), timeoutMs);
  }

  async expectSelectSortOptionPriceLowToHighHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.selectSortOptionPriceLowToHigh), timeoutMs);
  }

  async expectSelectSortOptionPriceLowToHighText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.selectSortOptionPriceLowToHigh), expected, timeoutMs);
  }

  async expectSelectSortOptionPriceLowToHighContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.selectSortOptionPriceLowToHigh), substring, timeoutMs);
  }

  async expectSelectSortOptionPriceLowToHighValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.selectSortOptionPriceLowToHigh), value, timeoutMs);
  }

  async expectSelectSortOptionPriceLowToHighEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.selectSortOptionPriceLowToHigh), timeoutMs);
  }

  async expectSelectSortOptionPriceLowToHighDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.selectSortOptionPriceLowToHigh), timeoutMs);
  }

  async expectSelectSortOptionPriceLowToHighChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.selectSortOptionPriceLowToHigh), timeoutMs);
  }

  async expectSelectSortOptionPriceLowToHighUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.selectSortOptionPriceLowToHigh), timeoutMs);
  }

  async expectSelectSortOptionPriceLowToHighFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.selectSortOptionPriceLowToHigh), timeoutMs);
  }

  async expectSelectSortOptionPriceLowToHighCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.selectSortOptionPriceLowToHigh), count, timeoutMs);
  }

  async scrollSelectSortOptionPriceLowToHighIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.selectSortOptionPriceLowToHigh));
  }


  async clickClickAddToCartForSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.clickAddToCartForSauceLabsBackpack));
  }

  async doubleClickClickAddToCartForSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.clickAddToCartForSauceLabsBackpack));
  }

  async longPressClickAddToCartForSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.clickAddToCartForSauceLabsBackpack));
  }

  async expectClickAddToCartForSauceLabsBackpackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.clickAddToCartForSauceLabsBackpack), timeoutMs);
  }

  async expectClickAddToCartForSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.clickAddToCartForSauceLabsBackpack), timeoutMs);
  }

  async expectClickAddToCartForSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.clickAddToCartForSauceLabsBackpack), expected, timeoutMs);
  }

  async expectClickAddToCartForSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.clickAddToCartForSauceLabsBackpack), substring, timeoutMs);
  }

  async expectClickAddToCartForSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.clickAddToCartForSauceLabsBackpack), value, timeoutMs);
  }

  async expectClickAddToCartForSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.clickAddToCartForSauceLabsBackpack), timeoutMs);
  }

  async expectClickAddToCartForSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.clickAddToCartForSauceLabsBackpack), timeoutMs);
  }

  async expectClickAddToCartForSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.clickAddToCartForSauceLabsBackpack), timeoutMs);
  }

  async expectClickAddToCartForSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.clickAddToCartForSauceLabsBackpack), timeoutMs);
  }

  async expectClickAddToCartForSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.clickAddToCartForSauceLabsBackpack), timeoutMs);
  }

  async expectClickAddToCartForSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.clickAddToCartForSauceLabsBackpack), count, timeoutMs);
  }

  async scrollClickAddToCartForSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.clickAddToCartForSauceLabsBackpack));
  }

}
