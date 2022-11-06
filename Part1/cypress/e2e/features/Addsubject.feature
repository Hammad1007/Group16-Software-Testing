Feature: Add subject

    Feature add subject will add a new subject in my list.

Background:
        Given I'm a signed in user and I click on create new task and plus button for subjects.

Scenario Outline: Add a subject
        When when I enter <name>
        Then The <error> is displayed
    Examples:
        | name      | error | 
        | science   |       | 
        |s|Name must be 2 or more characters.|
        |sciencesciencesciencesciencesciencesciencesciencesciencesciencesciencesciencescience|Name must be 50 or less characters.|
        |           |Name is required.|


