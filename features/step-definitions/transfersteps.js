
import { Given, When, Then } from "@wdio/cucumber-framework";

import TransferPage from '../pageobjects/transfer.page.js';

const pages = {
  transfer: TransferPage,
  accounts: AccountsOverviewPage
};

Given(/^I am on the transfer page$/, async () => {
  await TransferPage.open();
});

When(/^I transfer with (.*) and (.*) and (.*)$/, 
    async (amount,fromAccount,toAccount) => {
      await TransferPage.transfer(
        amount,
        fromAccount,
        toAccount
      );
      await mysleep(1000);
    }
  );

Then(/^I should see a text register result saying (.*)$/,
    async (message) => {
  if (message == "successful transfer") {
    // transfer successful
    await expect($('.title')).toBeExisting();
    await expect($('.title')).toHaveTextContaining(message);
  }
  else{
    // transfer failed
    await expect($('.error')).toBeExisting();
    await expect($('.error')).toHaveTextContaining(message);
  }
  await mysleep(1000);
});