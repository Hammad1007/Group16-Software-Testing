import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const CreateClass = require("../pages/CreateClass");

  Given(" I'm a signed in user and I click on schedule option and add class button.", () => {
    cy.visit("/");
    cy.get('.btns-email > .light').click();
    cy.get('[label="Email"] > .input').type('zarintaufique@gmail.com')
    cy.get('[label="Password"] > .input').type('dummy123')
    cy.get('footer > .btn').click()
    cy.get('.icon-schedule').click()
    cy.get('.classes > .cf > .btns > .btn').click()
  });
  
  //when statements
  When("when I enter correct values", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.module);
      cy.log(row.room);
      cy.log(row.building);
      cy.log(row.teacher);
      
      CreateClass.elements.typeModule(row.module);
      CreateClass.elements.typeRoom(row.room);
      CreateClass.elements.typeBuilding(row.building);
      CreateClass.elements.typeTeacher(row.teacher);
      CreateClass.elements.clickSave();
    });
  });

  //incorrect
  When("when I enter incorrect module", (table) => {
    table.hashes().forEach((row) => {
        cy.log(row.module);
        cy.log(row.room);
        cy.log(row.building);
        cy.log(row.teacher);
        CreateClass.elements.typeModule(row.module);
        CreateClass.elements.typeRoom(row.room);
        CreateClass.elements.typeBuilding(row.building);
        CreateClass.elements.typeTeacher(row.teacher);
        CreateClass.elements.clickSave();
    });
  });

  Then("The error message {string} is displayed", (errorMessage) => {
    CreateClass.elements.CheckErrorModule(errorMessage);
  });

  //

  When("when I enter incorrect room", (table) => {
    table.hashes().forEach((row) => {
        cy.log(row.module);
        cy.log(row.room);
        cy.log(row.building);
        cy.log(row.teacher);
        CreateClass.elements.typeModule(row.module);
        CreateClass.elements.typeRoom(row.room);
        CreateClass.elements.typeBuilding(row.building);
        CreateClass.elements.typeTeacher(row.teacher);
        CreateClass.elements.clickSave();
    });
  });

  Then("The error message {string} is displayed", (errorMessage) => {
    CreateClass.elements.CheckErrorRoom(errorMessage);
  });

  //

  When("when I enter incorrect building", (table) => {
    table.hashes().forEach((row) => {
        cy.log(row.module);
        cy.log(row.room);
        cy.log(row.building);
        cy.log(row.teacher);
        CreateClass.elements.typeModule(row.module);
        CreateClass.elements.typeRoom(row.room);
        CreateClass.elements.typeBuilding(row.building);
        CreateClass.elements.typeTeacher(row.teacher);
        CreateClass.elements.clickSave();
    });
  });

  Then("The error message {string} is displayed", (errorMessage) => {
    CreateClass.elements.CheckErrorBuilding(errorMessage);
  });


  When(" when I enter incorrect teacher", (table) => {
    table.hashes().forEach((row) => {
        cy.log(row.module);
        cy.log(row.room);
        cy.log(row.building);
        cy.log(row.teacher);
        CreateClass.elements.typeModule(row.module);
        CreateClass.elements.typeRoom(row.room);
        CreateClass.elements.typeBuilding(row.building);
        CreateClass.elements.typeTeacher(row.teacher);
        CreateClass.elements.clickSave();
    });
  });

  Then("The error message {string} is displayed", (errorMessage) => {
    CreateClass.elements.CheckErrorTeacher(errorMessage);
  });

  
  