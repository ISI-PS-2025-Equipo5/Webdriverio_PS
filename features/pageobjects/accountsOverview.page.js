import Page from "./page.js";

class AccountsOverviewPage extends Page {
  get accountTable() {
    return $('#accountTable');
  }

  get accountrows() {
    return this.accountTable.$$('tbody tr');
  }

  async getAccountNumbers() {
    const rows = await this.accountRows;
    return Promise.all(
      rows.map(async (row) => {
        const link = await row.$('a');
        return link.getText();
      })
    );
  }
  async clickAccountByNumber(accountNumber) {
  const accountLink = await $(`=${accountNumber}`);
  await expect(accountLink).toBeExisting();
  await accountLink.click();
  }
  open() {
    return super.open('overview');//Ruta para la página overview
  }
}

export default new AccountsOverviewPage();
