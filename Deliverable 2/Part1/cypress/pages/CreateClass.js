class CreateClass {
    elements = {
      moduleField: () => cy.get('.ng-scope > .ng-pristine'),
      roomField: () => cy.get(':nth-child(4) > :nth-child(1) > .ng-pristine'),
      buildingField: () => cy.get(':nth-child(4) > :nth-child(2) > .ng-pristine'),
      teacherField: () => cy.get('.student-only > div > .ng-pristine'),
      errModule: () => cy.get('[ng-show="classForm.module.$error.maxlength"]'),
      errRoom: () => cy.get(':nth-child(4) > :nth-child(1) > .error'),
      errBuilding: () =>cy.get(':nth-child(4) > :nth-child(2) > .error'),
      errTeacher: () =>cy.get('.student-only > div > .error'),
      timeSelect: () =>cy.get('[data-val="one_off"]'),
      savebtn: () => cy.get('.save'),
    };
  
    typeModule(module) {
      this.elements.moduleField().type(module);
    };
    
    typeRoom(room){
        this.elements.roomField().type(room);
    };

    typeBuilding(building){
        this.elements.buildingField().type(building);
    };

    typeTeacher(teacher){
        this.elements.teacherField().type(teacher);
    };

    CheckErrorModule(error) {
      this.elements.errModule().should('have.text', error);
    };

    CheckErrorRoom(error) {
        this.elements.errRoom().should('have.text', error);
      };

    CheckErrorBuilding(error) {
    this.elements.errBuilding().should('have.text', error);
    };

    CheckErrorTeacher(error) {
    this.elements.errTeacher().should('have.text', error);
    };
  
    clickSave() {
      this.elements.timeSelect().click();
      this.elements.savebtn().click();
    };

  };
  export default new CreateClass();