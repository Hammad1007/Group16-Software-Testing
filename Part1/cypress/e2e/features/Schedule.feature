Feature: Create Schedule 

    Feature add subject will add a new schedule for my semester.

Background:
        Given I'm a signed in user and I click on create new schedule

Scenario: correct data
        When when I enter correct data
            | startdate      | enddate    |                                                  
            | January 3 2023 | May 3 2023 |
        Then no error message is displayed.

Scenario: Incorrect start date
        When when I enter incorrect start date
             | startdate      | enddate    |                                                  
             | January 3 20 | May 3 2023 |
        Then The error message "Invalid date. Must be in format November 5 2022." is displayed

Scenario: Incorrect end date
        When when I enter incorrect end date
             | startdate      | enddate    |                                                  
             | January 3 2023   | May 3 20 |
        Then The error message "Invalid date. Must be in format November 5 2022." is displayed

Scenario: Missing start date
        When when I enter missing start date
             | startdate      | enddate    |                                                  
             |                | May 3 2023 |
        Then The error message "Required." is displayed

Scenario: Missing end date
        When when I enter missing end date
             | startdate      | enddate    |                                                  
             | January 3 20   |            |
        Then The error message "Required." is displayed