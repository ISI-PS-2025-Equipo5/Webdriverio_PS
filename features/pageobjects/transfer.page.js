import Page from './page.js';

/**
 * Esta subpagina contiene especificamente los selectores y los metodos para la pagina de transferencias
 */

class TransferPage extends Page {
    /**
     * definimos los selectores usando gets
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
