import Page, { sleep } from './page.js';


class PaymentsPage  extends Page{
    // Selectors
    get inputUsername () {
      return $("//input[@name='username']");
  }

  get inputPassword () {
      return $("//input[@name='password']");
  }

  get btnSubmit () {
      return $("//input[@value='Log In']");
  }
  
    get PayeeName() { return $("//input[@name='payee.name']"); }
  
    get Address() { return $("//input[@name='payee.address.street']"); }
  
    get City() { return $("//input[@name='payee.address.city']"); }
  
    get State() { return $("//input[@name='payee.address.state']"); }
  
    get ZipCode() { return $("//input[@name='payee.address.zipCode']"); }
  
    get Phone() { return $("//input[@name='payee.phoneNumber']"); }
  
    get Account() { return $("//td//input[@name='payee.accountNumber']"); }
  
    get VerifyAccount() { return $("//input[@name='verifyAccount']"); }

    get Amount() { return $("//input[@name='amount']")}
  
    get mensajeExito() { return $("//p[contains(text(),'Bill Payment to')]"); }

    get enviarPago() { return $("//input[@value='Send Payment']")}
  
    // Actions
  
    async payment(PayeeName,Address,City, State,ZipCode,Phone,Account,VerifyAccount,Amount){
      await sleep(2000)
      await this.PayeeName.setValue(PayeeName);
      await this.Address.setValue(Address);
      await this.City.setValue(City);
      await this.State.setValue(State);
      await this.ZipCode.setValue(ZipCode);
      await this.Phone.setValue(Phone);
      await this.Account.setValue(Account);
      await this.VerifyAccount.setValue(VerifyAccount);
      await this.Amount.setValue(Amount);
      await browser.execute(() => {
        window.scrollTo(0, 0);
      });      
    }
  
  
    async confirmarPago() {
      await this.enviarPago.click();
    }

    open(){
        return super.open('billpay')
    }
  }
  
  export default new PaymentsPage();
  