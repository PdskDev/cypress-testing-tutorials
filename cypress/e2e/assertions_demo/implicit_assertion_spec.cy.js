describe('Implicit Assertions cypress', () => {
  it('should be implicit assertion', () => {
    cy.visit('https://www.letskodeit.com/practice');

    cy.get('#product')
      .should('have.class', 'table-display')
      .and('be.visible')
      .find('tbody tr:nth-child(2)')
      .find('td')
      .last()
      .should('have.text', '35')
      .and('contain', '35')
      .and('have.class', 'price');
  });
});
