describe('Get Method Details', () => {
  it('should learn get() more details', () => {
    cy.visit('https://www.letskodeit.com/practice');
    cy.get('input', { log: false });
    cy.get('input', { timeout: 6000 });
  });
});
