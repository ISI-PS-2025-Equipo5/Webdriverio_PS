Feature: Para Bank accounts overview Info Feature

  Background:
    Given I am on the login page
    When I login with yenny1 and 12345

  Scenario: Consultar el estado de mis cuentas y navegar entre ellas
    Given I am on the accounts overview page
    Then I should see a list of all my accounts with their current and available balances
    When I click on the first account in the list
    Then I should see the account details with correct type, balance and available balance
    And I should see either the recent transactions table or a message saying there are no transactions
    When I navigate back to the accounts overview page
    And I click on a different account
    Then I should see the updated account details and its transaction information