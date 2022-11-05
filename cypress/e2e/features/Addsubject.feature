Feature: Add subject

    Feature add subject will add a new subject in my list.

Background:
        Given I'm a signed in user and I click on create new task and plus button for subjects.

Scenario: correct name
        When when I enter correct name
            | name    |                                                   
            | science | 
        Then no error message is displayed.

Scenario: Incorrect less name
        When when I enter incorrect less name
            | name    |                                                   
            | s | 
        Then The error message "Name must be 2 or more characters." is displayed

Scenario: Incorrect more name
        When when I enter incorrect more name
            | name    |                                                   
            | sciencesciencesciencesciencesciencesciencesciencesciencesciencesciencesciencescience | 
        Then The error message "Name must be 50 or less characters." is displayed

Scenario: Missing name
        When when I enter correct name
            | name    |                                                   
            |  | 
        Then The error message "Name is required." is displayed

