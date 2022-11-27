Feature: Create task

    Feature create task will work depending on the user input.

Background:
        Given I'm a signed in user and I click on create new task
    

Scenario Outline: Create new task
    When when I enter < duedate>, and <title>
    Then the <error> is displayed

    Examples:
        | duedate         | title        | error                                          |
        | November 5 202  | secret_sauce |invalid date. Must be in format November 5 2022.|
        |                 | secret_sauce |Required.                                       |
        | November 5 2022 | se           |Must be 2 or more characters.                   |
        | November 5 2022 | secret secret secret secret secret secret secret secret|Must be 50 characters or less.|
        | November 5 2022 |           |invalid date. Must be in format November 5 2022.|
