Feature: Para Bank accounts overview Info Feature

  Background:
    Given I am on the login page
    When I login with yeliza and 12345678

  Scenario: As a user, I can view all accounts into the Para Bank Website
    Given I am on the accounts overview page
    Then I should see a list of all my accounts
    And each account should display the current balance

  Scenario Outline: Ver los detalles de una cuenta específica
    When I click on the account with number <accountNumber>
    Then I should see the details of the account with <accountNumber> and <accountType> and <balance> and <availableBalance>
    And I should see recent transactions or a no-transactions message

    Examples:
      | accountNumber | accountType | balance  | availableBalance |
      | 25776         | CHECKING    | $411.50  | $515.50          |
      | 25998         | CHECKING    | $104.00  | $104.00          |

  Scenario Outline: Cambiar de cuenta y ver actualización
    Given I am on the accounts overview page
    When I click on the account with number <accountNumber>
    Then I should see the details of the account <accountNumber>
    And I should see updated balance and recent transactions or a no-transactions message

    Examples:
      | accountNumber |
      | 25998         |
    



 
