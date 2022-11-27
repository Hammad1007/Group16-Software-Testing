class Schedule {
    elements = {
      startdatefield: () =>cy.get(':nth-child(1) > .pikaday > .ng-pristine'),
      startdatefieldCleared: () =>cy.get(':nth-child(1) > .pikaday > .ng-touched'),
      endDatefieldCleared: () =>cy.get(':nth-child(2) > .pikaday > .ng-valid-format'),
      endDatefield: () =>cy.get(':nth-child(2) > .pikaday > .ng-pristine'),
      errStartdate: () =>cy.get('.side-by-side > :nth-child(1) > .ng-binding'),
      errEnddate: () =>cy.get('.side-by-side > :nth-child(2) > .ng-binding'),
      errmissingstartdate: () => cy.get(':nth-child(2) > .pikaday > .ng-valid-format'),
      errmissingenddate: () => cy.get('[ng-show="vm.scheduleForm.endDate.$error.required"]'),
      savebtn: () => cy.get('.save'),
    };
  
    typeStartDate(module) {
      this.elements.startdatefield().clear();  
      this.elements.startdatefieldCleared().type(module);
    };
    
    typeEndDate(room){
        this.elements.endDatefield().clear();
        this.elements.endDatefieldCleared().type(room);
    };

    CheckErrorIncorrectStartDate(error) {
      this.elements.errStartdate().should('have.text', error);
    };

    CheckErrorIncorrectEndDate(error) {
        this.elements.errEnddate().should('have.text', error);
      };

    CheckErrorMissingStartDate(error) {
    this.elements.errmissingstartdate().should('have.text', error);
    };

    CheckErrorMissingEndDate(error) {
    this.elements.errmissingenddate().should('have.text', error);
    };
  
    clickSave() {
      cy.get('#scheduling-mode-fixed').click();
      this.elements.savebtn().click();
    };

  };
  export default new Schedule();