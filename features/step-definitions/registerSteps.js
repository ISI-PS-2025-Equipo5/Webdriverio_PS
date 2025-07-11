
import { Given, When, Then } from "@wdio/cucumber-framework";

import RegisterPage from "../pageobjects/register.page.js";

const pages = {
  register: RegisterPage
};

Given(/^I am on the register page$/, async (page) => {
  await TransferPage.open();
});

When(/^I register with (.+) and (.+) and (.+) and (.+) and (.+) and (.+) and (.+) and (.+) and (.+) and (.+) and (.+)$/,
    async (
        firstName, 
        lastName, 
        address, 
        city, 
        state, 
        zipCode, 
        hone, 
        ssn, 
        username, 
        password, 
        confirmPassword
    ) => {
      await RegisterPage.register(
        firstName,
        lastName,
        address,
        city,
        state,
        zipCode,
        phone,
        ssn,
        username,
        password,
        confirmPassword
      );
    }
);

Then(/^I should see a text on the Register result saying (.*)$/,
    async (message) => {
        if (message === "password did not match") {
            // invalid password confirmation
            await expect($("span[id='repeatPassword.errors']")).toBeExisting();
            await expect($("span[id='repeatPassword.errors']")).toHaveTextContaining(message);
        } else if (message === " This username already exists") {
            // username already exists
            await expect($(".error")).toBeExisting();
            await expect($(".error")).toHaveTextContaining(message);
        } else {
            // successful registration
            await expect($(".title")).toBeExisting();
            await expect($(".title")).toHaveTextContaining(message);
        }
    }
);
    