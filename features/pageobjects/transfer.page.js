
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

    get selectFromAccount(){
        return $("//select[@id='fromAccountId']//option[@value='12678']")
    }
    
    get inputToAccount () {
        return $("//select[@id='toAccountId']");
    }

    get selectToAccount () {
        return $("//select[@id='toAccountId']//option[@value='12900']");
    }

    get btnTransfer () {
        return $("//input[@value='Transfer']");
    }

    get transferlink () {
        return $("//a[normalize-space()='transfer']");
    }

   //Aca va la logica, los atributos que pusimos en los features y los metodos que creamos en las linea anteriores
   //Teniendo en cuenta cual atributo de cual feature corresponde a cada uno de los atributos que creamos en el page object

    async transfer (amount) {
        await this.inputAmount.setValue(amount);
        await this.inputFromAccount.click(); //primero damos clic
        await this.selectFromAccount.click(); //seleccionamos
        await this.inputToAccount.click(); //segundo clic
        await this.selectToAccount.click(); //seleccionamos
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
