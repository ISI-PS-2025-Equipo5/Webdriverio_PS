Feature: Para Bank Transfer Feature

  Background:
    Given I am on the login page 
    When I login with john and demo

  Scenario Outline: As a user, I want a transfer
    Given I am in the transfer page
    When I transfer with <amount>
    Then I should see a transfer result saying <amount> from <fromAccount> to <toAccount>

    Examples: 
      | amount     | fromAccount    | toAccount     |
      | 15         | 12678          | 12900         |
