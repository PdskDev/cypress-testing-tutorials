describe('Implicit Assertions cypress', () => {
  it('should be implicit assertion', () => {
    cy.visit('https://www.letskodeit.com/practice');

    //cy.get('#opentab').click('top');

    //cy.get('#opentab').click();

    //cy.get('#hide-textbox').click();

    //cy.get('#displayed-text').click({ force: false });

    //cy.get('input[type="checkbox"][name="cars"][value="bmw"]')
    //  .click()
    //  .should('be.checked');
    //cy.get('input[type="checkbox"][name="cars"]')
    //  .click({ multiple: true })
    //  .should('be.checked');
    //cy.get('#mousehover').click({ scrollBehavior: 'top' });

    // cy.get('input[type="checkbox"][name="cars"][value="bmw"]')
    //   .dblclick()
    //   .should('not.be.checked');

    /* cy.get('input[type="checkbox"][name="cars"]')
      .dblclick({ multiple: true })
      .should('not.be.checked'); */

    //cy.get('#opentab').rightclick();
  });
});
