/// <reference types="cypress" />

class LoginPage {

    enetURL() {
    
    cy.visit("http://automationpractice.com/");
    
    }
    
    enterUserNamePassword(username, password) {
    
    cy.contains("Sign in").click();
    
    cy.get("#email").clear();
    
    cy.get("#email").type(username);
    
    cy.get("#passwd").clear();
    
    cy.get("#passwd").type(password);
    
    return this;
    
    }
    
    clickOnSignInButton() {
    
    return cy.get("#SubmitLogin").click();
    
    }
    
    verifyPageTitle() {
    
    return cy.title().should("eq", "My account — My Store");
    
    }
    
    validateErrorMessage(errorMessage) {
    
    return cy.contains(errorMessage);
    
    }
    
    }
    
    const login = new LoginPage();
    
    export default login;