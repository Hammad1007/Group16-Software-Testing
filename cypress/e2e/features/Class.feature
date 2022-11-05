Feature: Create Class 

    Feature add subject will add a new class in my list.

Background:
        Given I'm a signed in user and I click on schedule option and add class button.

Scenario: correct values
        When when I enter correct values
            | module    | room | building | teacher |                                                  
            | science   | 4    | 67       | lana    |
        Then no error message is displayed.

Scenario: Incorrect module
        When when I enter incorrect module
             | module                                                                   | room | building | teacher |                                                  
             | sciencesciencesciencesciencesciencesciencesciencesciencesciencescience   | 4    | 67       | lana    |
        Then The error message "Must be 40 characters or less." is displayed

Scenario: Incorrect room
        When when I enter incorrect room
             | module    |  room                                                   | building | teacher |                                                  
             | science   | jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj    | 67       | lana    |
        Then The error message "Room must be 40 characters or less." is displayed

Scenario: Incorrect building
        When when I enter incorrect building
             | module    | room | building                                                | teacher |                                                  
             | science   | 4    | hvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv     | lana    |
        Then The error message "Building must be 40 characters or less." is displayed

Scenario: Incorrect teacher
        When when I enter incorrect teacher
                | module    | room | building | teacher |                                                  
                | science   | 4    | 67       | hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh    |
        Then The error message "Teacher must be 40 characters or less." is displayed
