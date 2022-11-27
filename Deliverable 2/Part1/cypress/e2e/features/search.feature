Feature: Search  

    Feature search will search according to user input.

Background:
        Given I'm a signed in user and I click on search bar

Scenario Outline: search entry
        When when I enter <search> value          
        Then Error message <error> is displayed
       
        Examples:
            | search                                    | error | 
            |biology                                    |       |
            | b                                         | Enter 2 or more characters to search (1 to go) | 
            | hellohellohellohellohellohellohellohello  |Search term can only be 32 characters or less (3 too many)|
            |                                           |Enter 2 or more characters to search (2 to go)|
   