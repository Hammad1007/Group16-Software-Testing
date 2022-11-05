class CreateExam {
    elements = {
      moduleField: () => cy.get(':nth-child(3) > :nth-child(1) > .ng-pristine'),
      roomField: () => cy.get(':nth-child(5) > :nth-child(2) > .ng-pristine'),
      durationField: () => cy.get('.labelled > .ng-pristine'),
      durationFieldCleared: () => cy.get('.labelled > .ng-valid-min'),
      seatField: () => cy.get(':nth-child(5) > :nth-child(1) > .ng-pristine'),
      errModule: () => cy.get(':nth-child(3) > :nth-child(1) > .error'),
      errRoom: () => cy.get(':nth-child(5) > :nth-child(2) > .error'),
      errDuration: () => cy.get(':nth-child(4) > :nth-child(2) > .error'),
      errSeat: () => cy.get(':nth-child(5) > :nth-child(1) > .error'),
      savebtn: () => cy.get('.save'),
    };
  
    typeModule(module) {
      this.elements.moduleField().type(module);
    };
    
    typeRoom(room){
        this.elements.roomField().type(room);
    };

    typeDuration(duration){
        this.elements.durationField().clear();
        this.elements.durationFieldCleared().type(duration);
    };

    typeSeat(seat){
        this.elements.seatField().type(seat);
    };

    CheckErrorModule(error) {
      this.elements.errModule().should('have.text', error);
    };

    CheckErrorRoom(error) {
        this.elements.errRoom().should('have.text', error);
      };

    CheckErrorduration(error) {
    this.elements.errDuration().should('have.text', error);
    };

    CheckErrorSeat(error) {
    this.elements.errSeat().should('have.text', error);
    };
  
    clickSave() {
      this.elements.savebtn().click();
    };

  };
  export default new CreateExam();