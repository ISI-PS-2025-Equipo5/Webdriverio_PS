
import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from '../pageobjects/login.page.js';
import { sleep } from "../pageobjects/page.js";
import TransferPage from '../pageobjects/transfer.page.js';

Given(/^I am in the transfer page$/, async () => {
  await TransferPage.open();
});

When(/^I transfer with (.*)$/, 
    async (amount) => {
      await sleep(2000)
      await TransferPage.transfer(
        amount
      );
    }
  );

Then(/^I should see a transfer result saying (.*) from (.*) to (.*)$/,
    async (amount, fromAccount, toAccount) => {
      const expectedMessage = `$${amount}.00 has been transferred from account #${fromAccount} to account #${toAccount}.`;
      const result = await $("//div[@id='showResult']//p[1]");
      await expect(result).toBeDisplayed();
      await expect(result).toHaveText(expectedMessage);
});