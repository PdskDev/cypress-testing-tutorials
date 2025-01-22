describe('Promise cypress nature', () => {
  it('should async test step', () => {
    cy.visit('https://www.letskodeit.com/practice').then(() => {
      cy.get('button');
    });

    cy.get('#open-window-example-div');

    cy.get('#opentab');

    cy.get('#name').then(() => {
      console.log('console ici');
    });
  });
});
