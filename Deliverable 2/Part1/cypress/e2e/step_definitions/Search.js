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


  When("when I enter <search> value", (table) => {
    table.hashes().forEach((row) => {
        cy.log(row.search);
        cy.log(row.error);
        Search.elements.typeData(row.search);
    });
  });

  Then("Error message <error> is displayed", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.search);
      cy.log(row.error);
      AddSubject.elements.CheckError(row.error);
  });
  });

  



  
  