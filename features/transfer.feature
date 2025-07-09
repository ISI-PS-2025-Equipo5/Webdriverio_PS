Feature: Para Bank Transfer Feature

  Background:
    Given: I am on the login  in parabank page 
    when i transfer with username john and password demo

  Scenario Outline: As a user, I can transfer into the Parabank Page
    Given I am in the transfer page
    When I transfer with <Amount> and <FromAccount> and <toAccount>
    Then I should see a text register result saying <message>

    Examples: 
      | Amount     | FromAccount    | toAccount     | message             |
      | 15         | 13344          | 14232         | successful transfer |
