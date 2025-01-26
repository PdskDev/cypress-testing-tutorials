describe('Element list iteration demo', () => {
  it('should element list iteration', () => {
    cy.visit('https://www.letskodeit.com/practice');

    /* cy.get('[class^="btn-style class1"]').each(($el, index, $list) => {
      const itemText = $el.text().trim();

      cy.wrap($el).should('contain', itemText);

      if (itemText === 'Open Tab') {
        cy.wrap($el).click();
      }
    }); */

    cy.get('#autosuggest').then((autoListInput) => {
      cy.wrap(autoListInput).type('automation');

      cy.get('[class="ui-corner-all"]')
        .each(($el2, index, $list2) => {
          const itemText2 = $el2.text().trim();
          cy.wrap($el2).should('contain', itemText2);

          //const listeItem = $list2.get();

          /* for (let i = 0; i < listeItem.length; i++) {
          if (index === 1) {
            cy.wrap($el2).click();

            break;
          }
        } */

          if (index < 8) {
            cy.wrap($el2).should('have.class', 'ui-corner-all');
          }
        })
        .then(($list2) => {
          //assert.equal($list2.length, 8);
          expect($list2).to.have.length(8);
          //expect($list2).length(8);
        });
    });
  });
});
