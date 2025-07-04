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
        const balance = await row.$('.balance');
        return balance.getText();
      })
    );
  }
  open() {
    return super.open('overview');
  }
}

export default new AccountsOverviewPage();
