import Page from "./page.js";

class AccountsOverviewPage extends Page {
  get accountTable() {
    return $('#accountTable');
  }

  get accountRows() {
    return this.accountTable.$$('tbody tr');
  }

  async getAccountNumbers() {
    const rows = await this.accountRows;
    return Promise.all(
      rows.map(async (row) => {
        const link = await row.$('a');
        const exists = await link.isExisting();
        if (!exists) {
          throw new Error('Fila ${index + 1} no tiene un enlace de cuenta.');
        }
        return link.getText();
      })
    );
  }
  async clickAccountByNumber(accountNumber) {
    const accountLink = await $('=${accountNumber}');
    const exists = await accountLink.isExisting();
  
    if (!exists) {
      throw new Error(`La cuenta con número ${accountNumber} no se encuentra en la tabla.`);
    }
    await accountLink.scrollIntoView();  //
    await accountLink.click();
  }
  //Verifiica que la tabla de cuentas este desplegada
  async isAccountTableVisible(){
    return this.accountTable.isDisplayed();
  }
 
  open() {
    return super.open('overview');//Ruta para la página overview
  }
}

export default new AccountsOverviewPage();
