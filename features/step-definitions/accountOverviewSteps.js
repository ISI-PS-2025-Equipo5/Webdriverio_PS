import { Given, When, Then } from '@wdio/cucumber-framework';
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
  const accounts = await AccountsOverviewPage.getAccountNumbers();
  await expect(accounts.length).toBeGreaterThan(0);
});

Then(/^each account should display the current balance$/, async () => {
  const rows = await AccountsOverviewPage.accountrows;
  for (const row of rows) {
    const balanceCell = await row.$$('td')[1]; // segunda columna: balance
    const balanceText = await balanceCell.getText();
    await expect(balanceText).not.toBe('');
    await expect(balanceText).toMatch(/^\$\d+\.\d{2}$/); // ejemplo: $100.00
  }
});
// Escenario 2: Ver detalles de una cuenta específica
// ------------------------
When(/^I click on the account with number (\d+)$/, async (accountNumber) => {
  await AccountsOverviewPage.clickAccountByNumber(accountNumber);
});

Then(
  /^I should see the details of the account with (\d+) and (\w+) and (\$\d+\.\d{2}) and (\$\d+\.\d{2})$/,
  async (accountNumber, accountType, balance, availableBalance) => {
    const actual = await AccountDetailsPage.getAllAccountDetails();

    await expect(actual.accountNumber).toBe(accountNumber);
    await expect(actual.accountType).toBe(accountType);
    await expect(actual.balance).toBe(balance);
    await expect(actual.availableBalance).toBe(availableBalance);
  }
);

Then(/^I should see recent transactions or a no-transactions message$/, async () => {
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
Then(/^I should see the details of the account (\d+)$/, async (accountNumber) => {
  const actual = await AccountDetailsPage.accountId.getText();
  await expect(actual).toBe(accountNumber);
});

Then(/^I should see updated balance and recent transactions or a no-transactions message$/, async () => {
  const hasTable = await AccountDetailsPage.hasTransactions();

  if (hasTable) {
    const rows = await AccountDetailsPage.getTransactionRows();
    await expect(rows.length).toBeGreaterThan(0);
  } else {
    const visible = await AccountDetailsPage.isNoTransactionsMessageVisible();
    await expect(visible).toBe(true);
    const msg = await AccountDetailsPage.noTransactionsMessage.getText();
    await expect(msg).toContain("No transactions found");
  }
});



