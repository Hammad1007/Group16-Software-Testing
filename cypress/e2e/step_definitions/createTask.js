import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const CreateTask = require("../pages/createTask");


//given statements
Given("I'm a signed in user and I click on create new task", () => {
  cy.visit("/");
  cy.get('.btns-email > .light').click();
  cy.get('[label="Email"] > .input').type('zarintaufique@gmail.com')
  cy.get('[label="Password"] > .input').type('dummy123')
  cy.get('footer > .btn').click()
  cy.get('.icon-task').click()
  cy.get('.zero > .btn').click()
});

//when statements
When("when I enter incorrect due date", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.duedate);
    cy.log(row.title);
    CreateTask.typeduedate(row.duedate);
    CreateTask.typeTitle(row.title);
    CreateTask.clickSave();
  });
});

Then("The error message {string} is displayed", (errorMessage) => {
  CreateTask.elements.errorMessage().should("have.text", errorMessage);
});

When("when I leave due date field empty", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.duedate);
    cy.log(row.title);
    CreateTask.typeduedate(row.duedate);
    CreateTask.typeTitle(row.title);
    CreateTask.clickSave();

  });
});

Then("The error message {string} is displayed", (errorMessage) => {
  CreateTask.elements.errorMessage().should("have.text", errorMessage);
});

When("when I enter incorrect too short title", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.duedate);
    cy.log(row.title);
    CreateTask.typeduedate(row.duedate);
    CreateTask.typeTitle(row.title);
    CreateTask.clickSave();

  });
});

Then("The error message {string} is displayed", (errorMessage) => {
  CreateTask.elements.errorMessage().should("have.text", errorMessage);
});

When("when I enter incorrect too long title", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.duedate);
    cy.log(row.title);
    CreateTask.typeduedate(row.duedate);
    CreateTask.typeTitle(row.title);
    CreateTask.clickSave();

  });
});

Then("The error message {string} is displayed", (errorMessage) => {
  CreateTask.elements.errorMessage().should("have.text", errorMessage);
});

When("when I leave title field empty", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.duedate);
    cy.log(row.title);
    CreateTask.typeduedate(row.duedate);
    CreateTask.typeTitle(row.title);
    CreateTask.clickSave();

  });
});

Then("The error message {string} is displayed", (errorMessage) => {
  CreateTask.elements.errorMessage().should("have.text", errorMessage);
});


