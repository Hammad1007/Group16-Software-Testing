import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const AddSubject = require("../pages/AddSubject");

  Given(" I'm a signed in user and I click on create new task and plus button for subjects.", () => {
    cy.visit("/");
    cy.get('.btns-email > .light').click();
    cy.get('[label="Email"] > .input').type('zarintaufique@gmail.com')
    cy.get('[label="Password"] > .input').type('dummy123')
    cy.get('footer > .btn').click()
    cy.get('.icon-task').click()
    cy.get('.zero > .btn').click()
    cy.get('.select-wrap > .add-on').click()
  });
  
  //when statements
  When("when I enter correct name", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.name);
      AddSubject.elements.typename(row.name);
      AddSubject.elements.clickSave();
    });
  });

  //incorrect
  When("when I enter incorrect less name", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.name);
      AddSubject.elements.typename(row.name);
      AddSubject.elements.clickSave();
    });
  });

  Then("The error message {string} is displayed", (errorMessage) => {
    AddSubject.elements.CheckErrorless(errorMessage);
  });

  //

  When("when I enter incorrect more name", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.name);
      AddSubject.elements.typename(row.name);
      AddSubject.elements.clickSave();
    });
  });

  Then("The error message {string} is displayed", (errorMessage) => {
    AddSubject.elements.CheckErrormore(errorMessage);
  });

  //

  When("when I enter missing name", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.name);
      AddSubject.elements.clickSave();
    });
  });

  Then("The error message {string} is displayed", (errorMessage) => {
    AddSubject.elements.CheckErrorMissing(errorMessage);
  });

  
  