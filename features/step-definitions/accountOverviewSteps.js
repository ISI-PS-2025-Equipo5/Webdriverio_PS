import { Given, Then } from '@wdio/cucumber-framework';
import AccountsOverviewPage from '../pageobjects/accountsOverview.page.js';
import { sleep } from "../pageobjects/page.js";

Given(/^I am on the update contact info page$/, async () => {
  await sleep(2000);
  await AccountsOverviewPage.open();
  await sleep(2000);
});


Then(/^I should see a list of all my accounts$/, async () => {
  const rows = await AccountsOverviewPage.rows;
  await expect(rows.length).toBeGreaterThan(0);
});

Then(/^each account should display the current balance$/, async () => {
  const balances = await AccountsOverviewPage.getBalances();

  for (const balance of balances) {
    await expect(balance).not.toBe('');
    await expect(balance).toMatch(/^\$?[0-9,]+(\.\d{2})?$/); // formato $1,000.00
  }
});
