Feature: Para Bank Transfer Feature

  Background:
    Given: I login with username sebas and password 1234

  Scenario Outline: As a user, I can transfer into the Parabank Page
    Given I am on the transfer page
    When I transfer with <Amount> and <FromAccount> and <toAccount>
    Then I should see a text register result saying <message>

    Examples: 
      | Amount     | FromAccount    | toAccount     | message             |
      | 15         | 13455          | 13566         | successful transfer |
