import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const CreateTask = require("../pages/createTask");

Given("I'm a signed in user and I click on create new task", () => {
  cy.visit("/");
  cy.get('.btns-email > .light').click();
  cy.get('[label="Email"] > .input').type('zarintaufique@gmail.com')
  cy.get('[label="Password"] > .input').type('dummy123')
  cy.get('footer > .btn').click()
  cy.get('.icon-task').click()
  cy.get('.zero > .btn').click()
});


When("when I enter incorrect due date", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.duedate);
    cy.log(row.title);
    CreateTask.submitLogin(row.username, row.password)

  });
});
Then("the url will contains the inventory subdirectory", () => {
  cy.url().should("contains", "/inventory.html");
});
Then("The error message {string} is displayed", (errorMessage) => {
  CreateTask.elements.errorMessage().should("have.text", errorMessage);
});
