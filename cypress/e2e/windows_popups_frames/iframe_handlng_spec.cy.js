describe('Iframe handling Demo', () => {
  it('iframe element hanling Demo', () => {
    cy.visit('https://www.letskodeit.com/practice');

    cy.get('#courses-iframe').then(($iframe) => {
      const searchInput = $iframe.contents().find('#search');
      const buttonSearch = $iframe
        .contents()
        .find('button[class="find-course search-course"]');
      const result = $iframe.contents().find('h4[class="dynamic-heading"]');

      cy.wrap(searchInput).type('javascript');
      cy.wrap(buttonSearch).click();
      cy.wrap(result).should('contain', 'JavaScript for beginners');
    });
  });
});
