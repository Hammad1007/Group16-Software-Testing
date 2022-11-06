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
When("when I enter < duedate>, and <title>", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.duedate);
    cy.log(row.title);
    cy.log(row.error);

    CreateTask.typeduedate(row.duedate);
    CreateTask.typeTitle(row.title);
    CreateTask.clickSave();
  });
});

Then("the <error> is displayed", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.duedate);
    cy.log(row.title);
    cy.log(row.error);

    CreateTask.elements.errorMessage().should("have.text", row.error);
  });
});
