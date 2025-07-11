import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import { sleep } from '../pageobjects/page.js';


Given('yo estoy en la pagina Request loan', async () => {
    await PaymentsPage.open();
  });

When(/^yo ingreso la cantidad a prestar (.*) and deposito (.*)$/, async (LoanAmount,DownPayment) => {
    await PaymentsPage.payment(LoanAmount,DownPayment);
    await PaymentsPage.confirmarPago();
  });

Then('el sistema muestra un mensaje de éxito del prestamo', async () => {
    await sleep(2000);
    const mensajeExito = await $("//p[contains(text(),'Bill Payment to')]");
    await expect(mensajeExito).toBeDisplayed();
    await expect(mensajeExito).toHaveTextContaining('was successful.');
  });


