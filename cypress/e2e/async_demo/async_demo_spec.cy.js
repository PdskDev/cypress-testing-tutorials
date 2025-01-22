describe('Async cypress nature', () => {
  it('should async test step', () => {
    cy.visit('https://www.letskodeit.com/practice');

    cy.get('button');

    cy.get('#open-window-example-div');

    cy.get('#opentab');

    cy.get('#name');

    console.log('console ici');
  });
});
