Feature: Parabank payment Feature

Background:
    Given I am on the login page
    When I login with jaider34 and jaider

Scenario: Pago exitoso a un beneficiario
    Given yo estoy en la pagina de bill pay
    When yo pago con <PayeeName> and <Address> and <City> and <State> and <ZipCode> and <Phone> and <Account> and <VerifyAccount> and <Amount>
    Then el sistema muestra un mensaje de éxito del pago


    Examples:
    |PayeeName  |Address    |City       |State  |ZipCode|Phone      |Account|VerifyAccount  |Amount |
    |alex       |new york   |new york   |DC     |0987   |3298760987 |15009  |15009          |1.0    |
