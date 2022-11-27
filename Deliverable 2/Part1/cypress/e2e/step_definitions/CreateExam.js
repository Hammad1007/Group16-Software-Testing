import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const CreateExam = require("../pages/CreateExam");

  Given(" I'm a signed in user and I click on create new Exam", () => {
    cy.visit("/");
    cy.get('.btns-email > .light').click();
    cy.get('[label="Email"] > .input').type('zarintaufique@gmail.com')
    cy.get('[label="Password"] > .input').type('dummy123')
    cy.get('footer > .btn').click()
    cy.get('.icon-exam').click()
    cy.get('.zero > .btn').click()
  });
  
  //when statements
  When("when I enter <module>, <duration>, <seat>, <room>", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.module);
      cy.log(row.duration);
      cy.log(row.seat);
      cy.log(row.room);
      cy.log(row.error);
      
      CreateExam.elements.typeModule(row.module);
      CreateExam.elements.typeDuration(row.duration);
      CreateExam.elements.typeSeat(row.seat);
      CreateExam.elements.typeRoom(row.room);

      CreateExam.elements.clickSave();
    });
  });


  Then("the <error> is displayed", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.module);
      cy.log(row.duration);
      cy.log(row.seat);
      cy.log(row.room);
      cy.log(row.error);
      
      CreateExam.elements.CheckErrorModule(row.error);
    });
    
  });

  