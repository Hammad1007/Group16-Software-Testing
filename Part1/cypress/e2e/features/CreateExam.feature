Feature: Create Exam 

    Feature create exam will work depending on the user input.

Background:
        Given I'm a signed in user and I click on create new Exam

Scenario Outline: Create new exam
        When when I enter <module>, <duration>, <seat>, <room>
        Then the <error> is displayed
        
        Examples:
            | module                                                   | duration     |seat              |room   | error|
            | heellooheellooheellooheellooheellooheellooheellooheelloo | 60           |8                 |7b     |Module must be 40 characters or less|
            | heello                                                   | 900          |8                 |7b     |Duration is required and must be a number between 5 and 720.|
            | heello                                                   | 60           |88888888888       |7b     |Seat must be 8 characters or less.|
            | heello                                                   | 60           |8                 |77777777777777     |Room must be 30 characters or less.|
            | heello                                                   | 60           |8                 |7b     | |

