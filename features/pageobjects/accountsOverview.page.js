import Page from "./page.js";

class AccountsOverviewPage extends Page {
  get accountTable() {
    return $('#accountTable');
  }

  get accountrows() {
    return this.accountTable.$$('tbody tr');
  }

  async getAccountNumbers() {
    const rows = await this.accountrows;
    return Promise.all(
      rows.map(async (row) => {
        const link = await row.$('a');
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
  
    await accountLink.click();
  }
 
  open() {
    return super.open('overview');//Ruta para la página overview
  }
}

export default new AccountsOverviewPage();
