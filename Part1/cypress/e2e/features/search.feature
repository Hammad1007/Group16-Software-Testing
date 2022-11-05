Feature: Search  

    Feature search will search according to user input.

Background:
        Given I'm a signed in user and I click on search bar

Scenario: correct entry
        When when I enter correct value
            | search  |
            | biology |
        Then no error message is displayed

Scenario: incorrect less entry
        When when I enter incorrect less value
            | search  |
            | b       |
        Then Error message "Enter 2 or more characters to search (1 to go)" is displayed

Scenario: incorrect more entry
        When when I enter incorrect more value
            | search  |
            | hellohellohellohellohellohellohellohello |
        Then Error message "Search term can only be 32 characters or less (3 too many)" is displayed

Scenario: incorrect less entry
        When when I enter incorrect less value
            | search  |
            |         |
        Then Error message "Enter 2 or more characters to search (2 to go)" is displayed