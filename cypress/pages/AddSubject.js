class AddSubject {
    elements = {
      nameField: () => cy.get('.with-color-picker > :nth-child(1) > .ng-pristine'),
      errrLess: () => cy.get('[ng-show="subjectForm.name.$error.minlength"]'),
      errmore: () => cy.get('[ng-show="subjectForm.name.$error.maxlength"]'),
      errmissing: () => cy.get('[ng-show="subjectForm.name.$error.required"]'),
      savebutton: () => cy.get('.input > .submit > .save'),
    };
  
    typename(name) {
      this.elements.nameField().type(name);
    };
  
    CheckErrorless(error) {
      this.elements.errrLess().should('have.text', error);
    };

    CheckErrormore(error) {
        this.elements.errmore().should('have.text', error);
    };

    CheckErrorMissing(error) {
        this.elements.errmissing().should('have.text', error);
    };
  
    clickSave() {
      this.elements.savebutton().click();
    };

  };
  export default new AddSubject();