import Page from "./page.js";

class AccountDetailsPage extends Page{
  //Elementos de detalles de cuenta
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
  //Elemento relacionado con transacciones
  get transactionTable() {
    return $('#transactionTable');
  }
  get noTransactionsMessage() {
    return $('#noTransactions');
  }
  //Retorna los detalles actuales de la cuenta
  async getAllAccountDetails() {
    return {
      accountNumber: await this.accountId.getText(),
      accountType: await this.accountType.getText(),
      balance: await this.balance.getText(),
      availableBalance: await this.availableBalance.getText(),
    };
  }
  //Verifica si se muestran transacciones
  async hasTransactions() {
    return this.transactionTable.isDisplayed();
  }


  async getTransactionRows() {
    if (await this.hasTransactions()){
      return this.transactionTable.$$('tbody tr');
    }
    return [];
  }
//Verifca si se muestra el msj de "no hay transacciones"
  async isNoTransactionsMessageVisible() {
    return this.noTransactionsMessage.isDisplayed();
  }
  // Verifica que la página de detalles esté correctamente cargada.
   
  async isDetailsPageVisible() {
    return this.accountId.isDisplayed();
  }
}
export default new AccountDetailsPage();
