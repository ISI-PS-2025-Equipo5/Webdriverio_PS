describe('Pagos parabank', () => {
  it('Debe permitir realizar un pago', async () => {
    await browser.url('https://parabank.parasoft.com/parabank/index.htm');

    // Login
    await $('#username').setValue('john');
    await $('#password').setValue('demo');
    await $('input[type="submit"]').click();

    // Ir a Bill Pay
    await $('=Bill Pay').click();

    // Llenar formulario
    await $('[name="payee.name"]').setValue('Beneficiario Test');
    await $('[name="payee.address.street"]').setValue('123 Test Ave');
    await $('[name="payee.address.city"]').setValue('Testville');
    await $('[name="payee.address.state"]').setValue('TS');
    await $('[name="payee.address.zipCode"]').setValue('12345');
    await $('[name="payee.phoneNumber"]').setValue('555-5555');
    await $('[name="payee.accountNumber"]').setValue('987654321');
    await $('[name="verifyAccount"]').setValue('987654321');
    await $('[name="amount"]').setValue('10');

    // Enviar pago
    await $('input[value="Send Payment"]').click();

    // Validar mensaje de éxito
    const confirmation = await $('div[ng-show="showResult"]');
    await expect(confirmation).toBeDisplayed();
    await expect(confirmation).toHaveTextContaining('Bill Payment Complete');
  });
});
