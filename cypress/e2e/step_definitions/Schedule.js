import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const Schedule = require("../pages/Schedule");
  
  
  //given statements
  Given("I'm a signed in user and I click on create new schedule", () => {
    cy.visit("/");
    cy.get('.btns-email > .light').click();
    cy.get('[label="Email"] > .input').type('zarintaufique@gmail.com')
    cy.get('[label="Password"] > .input').type('dummy123')
    cy.get('footer > .btn').click()
    cy.get('.icon-schedule').click()
    cy.get('.app-bar > .btns > .btn').click()
  });
  
  When("when I enter correct data", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.startate);
      cy.log(row.enddate);
      Schedule.typeStartDate(row.startdate);
      Schedule.typeEndDate(row.enddate);
      Schedule.clickSave();
    });
  });


  //when statements
  When("when I enter incorrect start date", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.startate);
      cy.log(row.enddate);
      Schedule.typeStartDate(row.startdate);
      Schedule.typeEndDate(row.enddate);
      Schedule.clickSave();
    });
  });
  
  Then("The error message {string} is displayed", (errorMessage) => {
    Schedule.elements.CheckErrorIncorrectStartDate(errorMessage);
  });
  
  When("when I enter incorrect end date", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.startate);
      cy.log(row.enddate);
      Schedule.typeStartDate(row.startdate);
      Schedule.typeEndDate(row.enddate);
      Schedule.clickSave();
  
    });
  });
  
  Then("The error message {string} is displayed", (errorMessage) => {
    Schedule.elements.CheckErrorIncorrectEndDate(errorMessage);
  });
  
  When("when I enter missing start date", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.startate);
      cy.log(row.enddate);
      Schedule.typeStartDate(row.startdate);
      Schedule.typeEndDate(row.enddate);
      Schedule.clickSave();
  
    });
  });
  
  Then("The error message {string} is displayed", (errorMessage) => {
    Schedule.elements.CheckErrorMissingStartDate(errorMessage);
  });
  
  When("when I enter missing end date", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.startate);
      cy.log(row.enddate);
      Schedule.typeStartDate(row.startdate);
      Schedule.typeEndDate(row.enddate);
      Schedule.clickSave();
  
    });
  });
  
  Then("The error message {string} is displayed", (errorMessage) => {
    Schedule.elements.CheckErrorMissingEndDate(errorMessage);
  });
  
