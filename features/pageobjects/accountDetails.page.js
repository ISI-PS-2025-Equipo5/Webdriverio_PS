import Page from "./page.js";

class AccountDetailsPage extends Page{
  get accountId(){
    return $('#accountId');
  }
  get accountType(){
    return $('#accountType');
  }
  get balance() {
  return $('#balance');
  }
  get availableBalance() {
    return $('#availableBalance');
  }
  get transactionTable() {
    return $('#transactionTable');
  }
  get noTransactionsMessage() {
    return $('#noTransactions');
  }
  async getAllAccountDetails() {
    return {
      accountNumber: await this.accountId.getText(),
      accountType: await this.accountType.getText(),
      balance: await this.balance.getText(),
      availableBalance: await this.availableBalance.getText(),
    };
  }
  async hasTransactions() {
    return this.transactionTable.isDisplayed();
  }

  async getTransactionRows() {
    return this.transactionTable.$$('tbody tr');
  }

  async isNoTransactionsMessageVisible() {
    return this.noTransactionsMessage.isDisplayed();
  }
}
export default new AccountDetailsPage();
