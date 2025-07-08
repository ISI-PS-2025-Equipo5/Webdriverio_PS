Feature: Para Bank Transfer Feature

  Scenario Outline: As a user, I can transfer into the Parabank Page
    Given I am on the transfer page
    When I transfer with <Amount> and <FromAccount> and <toAccount>
    Then I should see a text saying <message>

    Examples: 
      | Amount     | FromAccount    | toAccount     | message                                                                          |
      | 15         | 14010          | 14032         | has been transferred <Amount> from account <FromAccount> to account <toAccount>. |
