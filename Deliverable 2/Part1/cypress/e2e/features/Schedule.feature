Feature: Create Schedule 

    Feature add subject will add a new schedule for my semester.

Background:
        Given I'm a signed in user and I click on create new schedule

Scenario Outline: Create Schedule
        When when I enter <startdate>, and <enddate>
        Then the <error> is displayed

        Examples:
            | startdate         | enddate       | error |
            | January 3 2023    | May 3 2023    |       |
            | January 3 20      | May 3 2023    |Invalid date. Must be in format November 5 2022.|
            | January 3 2023    | May 3 20      |Invalid date. Must be in format November 5 2022.|
            |                   | May 3 2023    |Required.|
            | January 3 20      |               |Required.|

            

