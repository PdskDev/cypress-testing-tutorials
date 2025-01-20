describe('get method demo', () => {
  it('should learn get() method and some CSS examples', () => {
    cy.visit('https://www.letskodeit.com/practice');

    // Tag name
    cy.get('button:visible');

    // Id
    cy.get('#name');

    //Class Name
    cy.get('.inputs');

    //Tag name and attribue value
    cy.get('input[id="name"]:visible');

    //Attribute value
    cy.get('[placeholder="Enter Your Name"]');

    //class value
    cy.get('[class="inputs displayed-class"]');

    // Tag name and multiple attributes values
    cy.get('input[id="name"][placeholder="Enter Your Name"]');

    //Should attr/ invoke alternative
  });
});
