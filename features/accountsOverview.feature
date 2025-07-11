Feature: Para Bank accounts overview Info Feature

  Background:
    Given I am on the login page
    When I login with eliza and 123456

  Scenario: Mostrar todas las cuentas
    Given I am on the accounts overview page
    Then I should see a list of all my accounts
    And each account should show its current balance and available amount

  Scenario Outline: Ver los detalles de una cuenta 
    Given I am on the accounts overview page
    When I click on the account number <accountNumber>
    Then I should be on the account details page for <accountNumber>
    And I should see the account type <accountType>, balance <balance> and available balance <availableBalance>
    And I should see either the recent transactions table or a message saying there are no transactions

    Examples:
      | accountNumber | accountType | balance  | availableBalance |
      | 14121         | CHECKING    | $315.50  | $315.50          |
      | 14232         | CHECKING    | $100.00  | $100.00          |

  Scenario Outline: Cambiar a otra cuenta y actualizar
    Given I have viewed details for account <firstAccount>
    When I go back to the accounts overview page
    And I click on the account number <secondAccount>
    Then I should see the account details for <secondAccount> 

    Examples:
      | firstAccount | secondAccount |
      | 14121        | 14232         |
     





 
