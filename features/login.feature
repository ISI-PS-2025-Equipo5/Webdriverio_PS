Feature: Para Bank Login Feature

  Scenario Outline: As a user, I can log into the Parabank Accounts Service Page
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a text saying <message>

    Examples: 
      | username          | password | message           |
      | invalidUsername   | password | Error!            |
<<<<<<< HEAD
      | john              | demo     | Accounts Overview |
=======
      | eliza        | 123456 | Accounts Overview |
>>>>>>> 4230f47611d70244b00913749d709ea3957ac63f
