@RunAllTestCases @login
Feature: Login to my store platform
        **As a ** my store platform's user
        ** I want to ** login in the platform
        ** So I can  *** access to interact with my products and configurations

  @LoginSuccesful
  Scenario Outline: Validate access to Admin portal through Login succesfull
    Given <actorName> is a my store user
    When He wants to acccess to my store platform
      | email   | password   |
      | <email> | <password> |
    Then He should see the my store platform main page

    Examples: 
      | actorName | email                 | password |
      | Sebastian | athan3350@hotmail.com | sebas    |
