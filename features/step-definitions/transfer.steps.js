
import { Given, When, Then } from "@wdio/cucumber-framework";

import TransferPage from '../pageobjects/transfer.page.js';

const pages = {
  transfer: TransferPage,
  accounts: AccountsOverviewPage
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I transfer with (.*) and (.*) and (.*)$/, 
    async (
        amount,
        fromAccount,
        toAccount
    ) => {
  await TransferPage.transfer(
    amount,
    fromAccount,
    toAccount
);
await mysleep(1000);
});

Then(/^I should see a text saying (.*)$/,
    async (message) => {
  if (message == "has been transferred <Amount> from account <FromAccount> to account <toAccount>") {
    // transfer successful
    await expect($('.title')).toBeExisting();
    await expect($('.title')).toHaveTextContaining(message);
  }
  await mysleep(1000);
});