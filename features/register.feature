Feature: Para Bank Register Feature

  Scenario Outline: As a user, I can register into the Parabank Page
    Given I am on the register page
    When I register with <firstName> and <lastName> and <address> and <city> and <state> and <zipCode> and <phone> and <ssn> and <username> and <password> and <confirmPassword>
    Then I should see a text on the Register result saying <message>

    Examples: 
      | firstName          | lastName | address           | city          | state | zipCode | phone          | ssn | username      | password          | confirmPassword | 
      | For                | Ning     | cll 13            |New York       | USA   | 333     | 12542          |5262 | grupo5        | mayo17            | mayo17          |
      | For                | Ning     | cll 13            |New York       | USA   | 333     | 12542          |5262 | grupo5        | mayo17            | mayo17          |
      | For                | Ning     | cll 13            |New York       | USA   | 333     | 12542          |5262 | grupo5        | mayo17            | mayo17          |
      | For                | Ning     | cll 13            |New York       | USA   | 333     | 12542          |5262 | grupo5        | mayo17            | mayo17          |
