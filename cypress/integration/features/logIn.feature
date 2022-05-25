@RunAllTestCases @login
Feature: Login to my store platform
        **As a ** my store platform's user
        ** I want to ** login in the platform
        ** So I can  *** access to interact with my products and configurations

  @LoginSuccesful
  Scenario Outline: Validate access to Admin portal through Login succesfull
    Given He is a my store user
    When <actorName> wants to acccess to my store platform
    Then He should see the my store platform main page

    Examples: 
      | actorName   |
      | "Sebastian" |
