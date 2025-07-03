import Page from "./page.js";

class AccountsOverviewPage extends Page {
  get tableAccounts() {
    return $('#accountTable');
  }

  get rows() {
    return this.tableAccounts.$$('tbody tr');
  }

  async getBalances() {
    const rows = await this.rows;
    return Promise.all(
      rows.map(async (row) => {
        const balance = await row.$('//th[normalize-space()='Balance*']');
        return balance.getText();
      })
    );
  }
}

export default new AccountsOverviewPage();
