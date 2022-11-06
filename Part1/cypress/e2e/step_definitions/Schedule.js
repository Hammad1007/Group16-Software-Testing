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

  //when statements
  When("when I enter <startdate>, and <enddate>", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.startate);
      cy.log(row.enddate);
      cy.log(row.error);

      Schedule.typeStartDate(row.startdate);
      Schedule.typeEndDate(row.enddate);
      Schedule.clickSave();
    });
  });
  
  Then("the <error> is displayed", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.startate);
      cy.log(row.enddate);
      cy.log(row.error);

      Schedule.elements.CheckErrorIncorrectStartDate(row.error);
      
    });
    
  });
  
