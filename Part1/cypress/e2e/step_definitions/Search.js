import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const Search = require("../pages/Search");

  Given("I'm a signed in user and I click on search bar.", () => {
    cy.visit("/");
    cy.get('.btns-email > .light').click();
    cy.get('[label="Email"] > .input').type('zarintaufique@gmail.com')
    cy.get('[label="Password"] > .input').type('dummy123')
    cy.get('footer > .btn').click()
    cy.get('.icon-search').click()
  });
  
  //when statements
  When("when I enter correct value", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.search);
      Search.elements.typeData(row.search);
    });
  });

  //incorrect
  When("when I enter incorrect less value", (table) => {
    table.hashes().forEach((row) => {
        cy.log(row.search);
        Search.elements.typeData(row.search);
    });
  });

  Then("The error message {string} is displayed", (errorMessage) => {
    AddSubject.elements.CheckError(errorMessage);
  });

  //

  When(" when I enter incorrect more value", (table) => {
    table.hashes().forEach((row) => {
        cy.log(row.search);
        Search.elements.typeData(row.search);
    });
  });

  Then("The error message {string} is displayed", (errorMessage) => {
    AddSubject.elements.CheckError(errorMessage);
  });

  //



  
  