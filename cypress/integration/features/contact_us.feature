@RunAllTestCases @contact_us
Feature: Contact us in my store platform
        **As a ** my store platform's user
        ** I want to ** create a ticket
        ** So I can  *** send my questions and suggestions

  @contact_us_successful
  Scenario Outline: Validate create a ticket in the contact us module
    Given He is a my store user
    When <actorName> wants create a new ticket in the contact us module
      | subject   | reference   | message   |
      | <subject> | <reference> | <message> |
    Then He should see his suggestions or questions had been sent

    Examples: 
      | actorName   | subject          | reference | message                        |
      | "Sebastian" | Customer service | Questions | How can I register my product? |
