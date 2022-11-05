class CreateTask {
    elements = {
      duedateField: () => cy.get(".pikaday > .ng-pristine"),
      duedateCleared: () =>  cy.get('.pikaday > .ng-valid-format'),
      TitleField: () => cy.get('.single > .ng-pristine'),
      SaveButton: () => cy.get('.save'),
      dderrorMessage1: () => cy.get('[ng-transclude=""] > :nth-child(3) > :nth-child(1) > .ng-binding'),
      dderrorMessage2: () => cy.get('[ng-show="taskForm.dueDate.$error.required"]'),
      TitleLessErrr: () => cy.get('[ng-show="taskForm.title.$error.minlength"]'),
      TitleextraErr: () => cy.get('[ng-show="taskForm.title.$error.maxlength"]'),
      Titlemissing: () => cy.get('[ng-show="taskForm.title.$error.required"]'),
    };
  
    typeduedate(duedate) {
      this.elements.duedateField().clear();
      this.elements.duedateCleared().type(duedate);
    };
  
    typeTitle(title) {
      this.elements.TitleField().type(title);
    };
  
    clickSave() {
      this.elements.SaveButton().click();
    };

  }
  
  module.exports = new CreateTask();
  