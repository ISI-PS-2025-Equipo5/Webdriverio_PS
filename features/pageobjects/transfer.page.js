
import Page from './page.js';
import loginPage from './login.page.js';

/**
 * Esta subpagina contiene especificamente los selectores y los metodos para la pagina de transferencias
 */

class TransferPage extends Page {
    
    //Traemos los selectores para el login porque es necesario para poder hacer las transferencias

     get inputUsername () {
        return $("//input[@name='username']");
    }

    get inputPassword () {
        return $("//input[@name='password']");
    }

    get btnSubmit () {
        return $("//input[@value='Log In']");
    }

    /**
     * definimos los selectores de la tranferencia usando gets
     */
    get inputAmount () {
        return $("//input[@id='amount']");
    }

    get inputFromAccount () {
        return $("//select[@id='fromAccountId']");
    }
    
    get inputToAccount () {
        return $("//select[@id='toAccountId']");
    }

    get btnTransfer () {
        return $("//input[@value='Transfer']");
    }

   //Aca va la logica, los atributos que pusimos en los features y los metodos que creamos en las linea anteriores
   //Teniendo en cuenta cual atributo de cual feature corresponde a cada uno de los atributos que creamos en el page object

    async transfer (Amount, FromAccount, ToAccount) {
        
        await this.inputAmount.setValue(Amount);
        await this.inputFromAccount.setValue(FromAccount);
        await this.inputToAccount.setValue(ToAccount);
        await this.btnTransfer.click();
    }

    /**
     * ponemos el completo de la pagina para que se abra
     */
    open () {
        return super.open('transfer');
    }
}

export default new TransferPage();
