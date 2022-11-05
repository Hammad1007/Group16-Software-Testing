Feature: Create task

    Feature create task will work depending on the user input.

Background:
        Given I'm a signed in user and I click on create new task
    
Scenario: Incorrect due date
        When when I enter incorrect due date
            | duedate        | title     |
            | November 5 202 | secret_sauce |
        Then The error message "invalid date. Must be in format November 5 2022." is displayed

Scenario: Missing due date
        When when I leave due date field empty
            | duedate | title     |
            |         | secret_sauce |
        Then The error message "Required." is displayed
    
Scenario: Too short Title
        When when I enter incorrect too short title
            | duedate             | title     |
            | November 5 2022     | se        |
        Then The error message "Must be 2 or more characters." is displayed

Scenario: Too Long Title
        When when I enter incorrect too long title
            | duedate             | title     |
            | November 5 2022     | secret secret secret secret secret secret secret secret|
        Then The error message "Must be 50 characters or less." is displayed

Scenario: Missing title
        When when I leave title field empty
            | duedate        | title     |
            | November 5 2022|           |
        Then The error message "invalid date. Must be in format November 5 2022." is displayed
