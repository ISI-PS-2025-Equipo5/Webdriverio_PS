import { Given, When, Then, And } from '@wdio/cucumber-framework';
import AccountsOverviewPage from '../pageobjects/accountsOverview.page.js';
import AccountDetailsPage from "../pageobjects/accountDetails.page.js";

import { sleep } from "../pageobjects/page.js";

// Escenario 1: Ver todas las cuentas
// ------------------------
Given(/^I am on the accounts overview page$/, async () => {
  await sleep(2000);
  await AccountsOverviewPage.open();
  await sleep(2000);

});

Then(/^I should see a list of all my accounts$/, async () => {
  await $('#accountTable').waitForDisplayed({ timeout: 5000 });
  const accounts = await AccountsOverviewPage.getAccountNumbers();
  await expect(accounts.length).toBeGreaterThan(0);
});

Then(/^each account should show its current balance and available amount$/, async () => {
  const rows = await AccountsOverviewPage.accountRows;
  for (const row of rows) {
    const balanceCell = await row.$$('td')[1]; // segunda columna: balance
    const availableCell = await row.$$('td')[2]; // available balance
    
    const balanceText = await balanceCell.getText();
    const availableText = await availableCell.getText();

    await expect(balanceText).toMatch(/^\$\d+\.\d{2}$/); // ejemplo: $100.00
    await expect(availableText).toMatch(/^\$\d+\.\d{2}$/);

  }
});
// Escenario 2: Ver detalles de una cuenta 
// ------------------------
When(/^I click on the account with number (\d+)$/, async (accountNumber) => {
  console.log("Intentando hacer clic en la cuenta:", accountNumber);
  await AccountsOverviewPage.clickAccountByNumber(accountNumber);
});

Then(
  /^I should be on the account details page for (\d+)"$/,
  async (accountNumber) => {
    const actual = await AccountDetailsPage.accountId.getText();
    await expect(actual).toBe(accountNumber);
  }
);

And(/^I should see the account type "(\w+)", balance "(\$\d+\.\d{2})" and available balance "(\$\d+\.\d{2})"$/, 
  async (accountType, balance, availableBalance) => {
    const actual = await AccountDetailsPage.getAllAccountDetails();

    await expect(actual.accountType).toBe(accountType);
    await expect(actual.balance).toBe(balance);
    await expect(actual.availableBalance).toBe(availableBalance);
  
});

And(/^I should see either the recent transactions table or a message saying there are no transactions$/, async () => {
  const hasTable = await AccountDetailsPage.hasTransactions();

  if (hasTable) {
    const rows = await AccountDetailsPage.getTransactionRows();
    await expect(rows.length).toBeGreaterThan(0);
  } else {
    const noTxMessageVisible = await AccountDetailsPage.isNoTransactionsMessageVisible();
    await expect(noTxMessageVisible).toBe(true);
    const text = await AccountDetailsPage.noTransactionsMessage.getText();
    await expect(text).toContain("No transactions found");
  }
});
// Escenario 3: Cambiar de cuenta y ver actualización
// ------------------------
Given(/^I have viewed details for account "(\d+)"$/, async (accountNumber) => {
  await AccountsOverviewPage.open();
  await AccountsOverviewPage.clickAccountByNumber(accountNumber);
  const actual = await AccountDetailsPage.accountId.getText();
  await expect(actual).toBe(accountNumber);
});

When(/^I go back to the accounts overview page$/, async () => {
  await browser.back();
  await sleep(1000); // espera a que cargue el overview
});

And(/^I click on the account number "(\d+)"$/, async (accountNumber) => {
  await AccountsOverviewPage.clickAccountByNumber(accountNumber);
});

Then(/^I should see the account details for "(\d+)"$/, async (accountNumber) => {
  const actual = await AccountDetailsPage.accountId.getText();
  await expect(actual).toBe(accountNumber);
});



