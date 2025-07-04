Feature: Para Bank accounts overview Info Feature

  Background:
    Given I am on the login page
    When I login with yeliza and 12345    

    
  Scenario Outline: As a user, I can view all accounts into the Para Bank Website
    Given I am on the accounts overview page
    Then I should see a list of all my accounts
    And each account should display the current balance



 
