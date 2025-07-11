
import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from '../pageobjects/login.page.js';
import AccountsOverviewPage from '../pageobjects/accountsOverview.page.js';
import PaymentsPage from '../pageobjects/payment.page.js';
import TransferPage from '../pageobjects/transfer.page.js';


const pages = {
  login: LoginPage,
  accounts: AccountsOverviewPage,
  payment: PaymentsPage,
  transfer: TransferPage
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

//LOGIN
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a text saying (.*)$/, async (message) => {
  if (message == "Error!") {
    // invalid username or password
    await expect($('.title')).toBeExisting();
    await expect($('.title')).toHaveTextContaining(message);
  } else {
    // valid username or password
    await expect($('.title')).toBeExisting();
    await expect($('.title')).toHaveTextContaining(message);
  }
});
