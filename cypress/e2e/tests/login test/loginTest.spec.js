import login from "../../Pages/LoginPage/loginPage";

// Scenario 1 : Login with Valid crediential

Given("I navigate to the Website", () => {

cy.visit("http://automationpractice.com/");

});

When("I entered valid crediential", (datatable) => {

datatable.hashes().forEach((element) => {

login.enterUserNamePassword(element.email, element.validpassword);

});

});

When("User click on sign in button", () => {

login.clickOnSignInButton();

});

Then("Validate the title after login", () => {

login.verifyPageTitle();

});

// Scenario 2 : Login with Invalid crediential and Verify error messsage

When("I entered invalid crediential", (datatable) => {

datatable.hashes().forEach((element) => {

login.enterUserNamePassword(element.email, element.invalidpassword);

});

});

When("User click on sign in button", () => {

login.clickOnSignInButton();

});

Then("Error message should display", (datatable) => {

datatable.hashes().forEach((element) => {

login.validateErrorMessage(element.errormessage);

});

});