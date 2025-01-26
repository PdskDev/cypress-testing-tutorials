describe('select demo', () => {
  it('should select elements', () => {
    cy.visit('https://www.letskodeit.com/practice');

    cy.get('select[id="carselect"]').select('benz');

    cy.get('select[id="multiple-select-example"]').select(['apple', 'orange']);

    cy.get('#carselect').select('honda');

    cy.get('#multiple-select-example').select(['peach', 'apple']);
  });
});
