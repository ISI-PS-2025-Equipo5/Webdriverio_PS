import Page from "./page.js";

class RegisterPage extends Page {
    
    get inputFirstName() {
        return $("//input[@id='customer.firstName']");
    }
    
    get inputLastName() {
        return $("//input[@id='customer.lastName']");
    }
    
    get inputAddress() {
        return $("//input[@id='customer.address.street']");
    }
    
    get inputCity() {
        return $("//input[@id='customer.address.city']");
    }
    
    get inputState() {
        return $("//input[@id='customer.address.state']");
    }
    
    get inputZipCode() {
        return $("//input[@id='customer.address.zipCode']");
    }
    
    get inputPhone() {
        return $("//input[@id='customer.phoneNumber']");
    }
    
    get inputSsn() {
        return $("//input[@id='customer.ssn']");
    }
    
    get inputUsername() {
        return $("//input[@id='customer.username']");
    }
    
    get inputPassword() {
        return $("//input[@id='customer.password']");
    }
    
    get inputConfirmPassword() {
        return $("//input[@id='repeatedPassword']");
    }
    
    get btnRegister() {
        return $("//input[@value='Register']");
    }
    
    async register(
        firstName,
        lastName,
        address,
        city,
        state,
        zipCode,
        phone,
        ssn,
        username,
        password,
        confirmPassword
    ) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputAddress.setValue(address);
        await this.inputCity.setValue(city);
        await this.inputState.setValue(state);
        await this.inputZipCode.setValue(zipCode);
        await this.inputPhone.setValue(phone);
        await this.inputSsn.setValue(ssn);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(confirmPassword);
        
        await this.btnRegister.click();
    }
    
    open() {
        return super.open("register");
    }
}

export default new RegisterPage();