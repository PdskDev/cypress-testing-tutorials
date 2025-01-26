describe('radio and checkbox demo', () => {
  it('should check and uncheck elements', () => {
    cy.visit('https://www.letskodeit.com/practice');

    /* cy.get("div#checkbox-example-div input[type='checkbox']").check('bmw');
    cy.get("div#checkbox-example-div input[type='checkbox']").uncheck();

    cy.get("input[type='checkbox'][name='cars']").check('bmw');
    cy.get("input[type='checkbox'][name='cars']").check('honda');

    cy.get("input[type='checkbox'][name='cars']").uncheck('bmw');
    cy.get("input[type='checkbox'][name='cars']").uncheck('honda');

    cy.get("div#checkbox-example-div input[type='checkbox']").check([
      'benz',
      'honda',
    ]);

    cy.get("div#checkbox-example-div input[type='checkbox']").uncheck();

    cy.get("input[type='checkbox'][name='cars']").check(['honda', 'bmw']); */

    cy.get("div#radio-btn-example input[type='radio']").check('benz');
  });
});
