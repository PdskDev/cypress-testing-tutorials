describe('fixtures data demo', () => {
  /* before('before hook', function () {
    cy.fixture('credentials_demo').then((data) => {
      this.data = data;
    });
  });

  it('should display the data from fixture file', function () {
    cy.visit('https://www.letskodeit.com/login');
    cy.get('#email').type(this.data.username);
    cy.get('#login-password').type(this.data.password);
    cy.get('#login').click();
    cy.get('.error')
      .should('contain', 'The email must be a valid email address.')
      .and('be.visible');
  }); */

  let globalData;

  before('before hook', () => {
    cy.fixture('credentials_demo').then((data) => {
      globalData = data;
    });
  });

  it('should display the data from fixture file', () => {
    cy.visit('https://www.letskodeit.com/login');
    cy.get('#email').type(globalData.testuser1.username);
    cy.get('#login-password').type(globalData.testuser1.password);
    cy.get('#login').click();
    cy.get('.error')
      .should('contain', 'The email must be a valid email address.')
      .and('be.visible');
  });
});
