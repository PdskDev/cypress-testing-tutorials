describe('Element list iteration demo', () => {
  it('should element list iteration', () => {
    cy.visit('https://www.letskodeit.com/practice');

    /* cy.get('#autosuggest').then((autoListInput) => {
      cy.wrap(autoListInput).type('automation');

      cy.get('[class^="ui-corner-all"]').each((el, index, $list) => {
        const elementText = el.text();

        if (elementText == 'RestAPI Automation') {
          cy.wrap(el).click();
        }
      });
    }); */

    cy.get('#autosuggest').type('automation');
    cy.get('[class^="ui-corner-all"]').contains('RestAPI Automation').click();
  });
});
