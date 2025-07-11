import { Given, When, Then } from '@wdio/cucumber-framework';
import PaymentsPage from '../pageobjects/payment.page.js';
import { expect } from '@wdio/globals';




Given('yo estoy en la pagina de bill pay', async () => {
  await PaymentsPage.open();
});


When(/^yo pago con (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/, async (PayeeName,Address,City,State,ZipCode,Phone,Account,VerifyAccount,Amount) => {
  await PaymentsPage.payment(PayeeName,Address,City,State,ZipCode,Phone,Account,VerifyAccount,Amount);
});



Then('el sistema muestra un mensaje de éxito del pago', async () => {
  const mensajeExito = await $("//p[contains(text(),'Bill Payment to')]");
  await expect(mensajeExito).toBeDisplayed();
  await expect(mensajeExito).toHaveTextContaining('was successful.');
});
