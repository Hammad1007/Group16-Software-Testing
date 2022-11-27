class Search {
    elements = {
      searchfield: () => cy.get('[ng-model="searchQuery"]'),
      err: () => cy.get('lonely ng-binding'),
    };
  
    typeData(value) {
      this.elements.searchfield().type(value);
    };
   
    CheckError(error) {
      this.elements.err().should('have.text', error);
    };

  };
  export default new Search();