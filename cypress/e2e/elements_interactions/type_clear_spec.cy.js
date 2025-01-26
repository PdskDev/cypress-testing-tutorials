describe('Type and clear demo', () => {
  it('should type and clear elements', () => {
    cy.visit('https://www.letskodeit.com/practice');

    cy.get('#name').type('Hello, World!');
    cy.get('#disabled-button').click({ force: true });
    cy.get('#enabled-example-input').type('Hello, World!', { force: true });
    //cy.get('#enabled-button').click();
    // cy.get('#enabled-example-input').type('Hello, World!');
    //cy.get('#name').clear();
    //cy.get('#name').type('Hello, World!', { delay: 100 });

    cy.get('#name').clear();
    cy.get('#name').type('#Spécial@{nadet}*', {
      parseSpecialCharSequences: false,
    });
    cy.wait(2000);
    cy.get('#name').type('Spécial@{nadet}', {
      delay: 30,
      parseSpecialCharSequences: false,
    });
  });
});
