Background:

Given I navigate to the Website

Scenario: Login as new sign up user with valid data

When I entered valid crediential

| email | validpassword |

| qatubeupdate@yopmail.com | 12345 |

When User click on sign in button

Then Validate the title after login

Scenario: Login as new sign up user with invalid data

When I entered invalid crediential

| email | invalidpassword |

| qatubeupdate@yopmail.com | 123456 |

When User click on sign in button

Then Error message should display

| errormessage |

| Authentication failed |