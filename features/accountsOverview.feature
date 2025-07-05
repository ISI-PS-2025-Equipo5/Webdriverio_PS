Feature: Para Bank accounts overview Info Feature

  Background:
    Given I am on the login page
    When I login with jyenny and 12345    

    
  Scenario Outline: As a user, I can view all accounts into the Para Bank Website
    Given I am on the accounts overview page
    Then I should see a list of all my accounts
    And each account should display the current balance
    
  Scenario Outline: Ver los detalles de una cuenta específica
     When I click on the account with number <accountNumber>
     Then I should see the details of the account <accountNumber>
     And I should see recent transactions or a no-transactions message

    Examples:
      | accountNumber |
      | 123456789     |
      | 987654321     |

  Scenario Outline: Cambiar de cuenta y ver actualización
    When I click on the account with number "321"
    Then the account details should update to show "321"
    And I should see the updated balance and recent transactions



 
