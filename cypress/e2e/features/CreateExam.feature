Feature: Create Exam 

    Feature create exam will work depending on the user input.

Background:
        Given I'm a signed in user and I click on create new Exam

Scenario: Incorrect module
        When when I enter incorrect module
            | module                                                   | duration     |seat    |room   |
            | heellooheellooheellooheellooheellooheellooheellooheelloo | 60           |8       |7b     |
        Then The error message "Module must be 40 characters or less." is displayed

Scenario: Incorrect duration
        When when I enter incorrect module
            | module | duration     |seat    |room   |
            | heello | 900           |8       |7b     |
        Then The error message "Duration is required and must be a number between 5 and 720." is displayed


Scenario: Incorrect seat
        When when I enter incorrect module
           | module | duration     |seat              |room   |
           | heello | 60           |88888888888       |7b     |
        Then The error message "Seat must be 8 characters or less." is displayed


Scenario: Incorrect room
        When when I enter incorrect module
           | module | duration     |seat    |room               |
           | heello | 60           |8       |77777777777777     |
        Then The error message "Room must be 30 characters or less." is displayed

Scenario: Correct data
        When when I enter incorrect module
         | module | duration     |seat    |room   |
         | heello | 60           |8       |7b     |
        Then no error message is displayed