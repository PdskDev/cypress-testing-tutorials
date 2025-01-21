describe('Within command demo', () => {
  it('should learn chain command', () => {
    cy.visit('https://www.letskodeit.com/practice');

    cy.get('button');

    cy.get('#open-window-example-div')
      .within(() => {
        cy.get('button').click();
      })
      .should('have.id', 'open-window-example-div');

    cy.get('#open-window-example-div')
      .find('button')
      .should('have.id', 'openwindow')
      .click();
  });
});
