import Page from "./page.js";

class AccountsOverviewPage extends Page {
  get accountTable() {
    return $('#accountTable');
  }

  async getAccountRows() {
    const table = await this.accountTable;
    return table.$$('tbody tr');
  }

  async getAccountNumbers() {
    const rows = await this.accountRows;
    return Promise.all(
      rows.map(async (row, index) => {
        const link = await row.$('a');
        const exists = await link.isExisting();
        if (!exists) {
          throw new Error('Fila ${index + 1} no tiene un enlace de cuenta.');
        }
        return link.getText();
      })
    );
  }
   async getFirstAccountNumber() {
    const rows = await this.getAccountRows();
    const firstLink = await rows[0].$('a');
    return await firstLink.getText();
  }

  async clickAccountByNumber(accountNumber) {
    const accountLink = await $('=${accountNumber}');
    const exists = await accountLink.isExisting();
  
    if (!exists) {
      throw new Error(`La cuenta con número ${accountNumber} no se encuentra en la tabla.`);
    }
    await accountLink.click();

  }
async clickFirstAccount() {
  const rows = await this.getAccountRows();
  const firstDataRow = rows[1]; // Saltar cabecera
  const firstLink = await firstDataRow.$('a');
  await firstLink.click();
}

async clickDifferentAccount(excludeAccountNumber) {
  const rows = await this.getAccountRows();
  for (const row of rows) {
    const link = await row.$('a');
    const number = await link.getText();
    if (number !== excludeAccountNumber) {
      await link.click();
      return number;
    }
  }
  throw new Error("No se encontró una cuenta diferente.");
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
