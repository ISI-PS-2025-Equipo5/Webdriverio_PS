import { Given, When, Then } from '@wdio/cucumber-framework';
import AccountsOverviewPage from '../pageobjects/accountsOverview.page.js';
import AccountDetailsPage from "../pageobjects/accountDetails.page.js";

import { sleep } from "../pageobjects/page.js";

// ------------------------
Given(/^I am on the accounts overview page$/, async () => {
  await sleep(2000);
  await AccountsOverviewPage.open();
  await sleep(2000);

});

Then(/^I should see a list of all my accounts$/, async () => {
  await $('#accountTable').waitForDisplayed({ timeout: 5000 });
  const accounts = await AccountsOverviewPage.getAccountNumbers();
  expect(accounts.length).toBeGreaterThan(0);
});

When(/^I click on the first account in the list$/, async () => {
  firstAccountNumber = await AccountsOverviewPage.getFirstAccountNumber();
  await AccountsOverviewPage.clickAccountByNumber(firstAccountNumber);
});

Then(/^I should see the account details with correct type, balance and available balance$/, async () => {
  const accountId = await AccountDetailsPage.accountId.getText();
  expect(accountId).toBe(firstAccountNumber);

  const type = await AccountDetailsPage.accountType.getText();
  const balance = await AccountDetailsPage.balance.getText();
  const available = await AccountDetailsPage.availableBalance.getText();

  expect(type).not.toBe('');
  expect(balance).toMatch(/\$\d+\.\d{2}/);
  expect(available).toMatch(/\$\d+\.\d{2}/);
});

Then(/^I should see either the recent transactions table or a message saying there are no transactions$/, async () => {
  const hasTable = await AccountDetailsPage.hasTransactions();
  if (hasTable) {
    const rows = await AccountDetailsPage.getTransactionRows();
    expect(rows.length).toBeGreaterThan(0);
  } else {
    const visible = await AccountDetailsPage.isNoTransactionsMessageVisible();
    expect(visible).toBe(true);
  }
});

When(/^I navigate back to the accounts overview page$/, async () => {
  await browser.back();
});

When(/^I click on a different account$/, async () => {
  const newAccountNumber = await AccountsOverviewPage.clickDifferentAccount(firstAccountNumber);
  firstAccountNumber = newAccountNumber;
});

Then(/^I should see the updated account details and its transaction information$/, async () => {
  const accountId = await AccountDetailsPage.accountId.getText();
  expect(accountId).toBe(firstAccountNumber);

  const type = await AccountDetailsPage.accountType.getText();
  const balance = await AccountDetailsPage.balance.getText();
  const available = await AccountDetailsPage.availableBalance.getText();

  expect(type).not.toBe('');
  expect(balance).toMatch(/\$\d+\.\d{2}/);
  expect(available).toMatch(/\$\d+\.\d{2}/);

  const hasTable = await AccountDetailsPage.hasTransactions();
  if (hasTable) {
    const rows = await AccountDetailsPage.getTransactionRows();
    expect(rows.length).toBeGreaterThan(0);
  } else {
    const visible = await AccountDetailsPage.isNoTransactionsMessageVisible();
    expect(visible).toBe(true);
  }
});


