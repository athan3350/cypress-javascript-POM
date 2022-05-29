@RunAllTestCases @login
Feature: Login to my store platform
        **As a ** my store platform's user
        ** I want to ** login in the platform
        ** So I can  *** access to interact with my products and configurations

  @LoginSuccessful
  Scenario Outline: Validate access to my store platform through Login successful
    Given He is a my store user
    When <actorName> wants to acccess to my store platform
    Then He should see the my store platform main page

    Examples: 
      | actorName   |
      | "Sebastian" |

  @LoginUnSuccessful
  Scenario Outline: Validate to try to login to my store platform with invalid credentials
    Given He is a my store user
    When <actorName> wants to acccess to my store platform
    Then He should see that He is not logged in my store platform by invalid credentials

    Examples: 
      | actorName |
      | "Pancho"  |
