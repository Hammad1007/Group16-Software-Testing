Feature: Create Class 

    Feature add subject will add a new class in my list.

Background:
        Given I'm a signed in user and I click on schedule option and add class button.
Scenario Outline: Create new class
        When when I enter <module>, <room>, <building>, and <teacher>
        Then the <error> is displayed
        Examples:
            | module                                                               | room                                               | building |teacher|error|
            | science                                                              | 4                                                  | 67  | lana    ||
            |sciencesciencesciencesciencesciencesciencesciencesciencesciencescience|4                                                   |67|lana|Must be 40 characters or less.|
            |science                                                               |jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj|67|lana|Room must be 40 characters or less.|
            |science                                                               |4                                                   |hvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv|lana|Building must be 40 characters or less.|
            |science                                                               |4                                                   |67|hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh|Teacher must be 40 characters or less.|
