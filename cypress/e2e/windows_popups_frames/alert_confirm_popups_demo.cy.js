describe('Alert, Confirm, and Prompt Popups Demo', () => {
  it.skip('handle alert popup', () => {
    cy.visit('https://www.letskodeit.com/practice');

    cy.get('#alertbtn').click();

    cy.on('window:alert', (message) => {
      expect(message).to.equal(
        'Hello , share this practice page and share your knowledge'
      );
    });
  });

  it.skip('handle confirm popup accept', () => {
    cy.visit('https://www.letskodeit.com/practice');

    cy.get('#confirmbtn').click();

    cy.on('window:confirm', (message) => {
      expect(message).to.equal('Hello , Are you sure you want to confirm?');
      return true;
    });
  });

  it.skip('handle confirm popup cancel', () => {
    cy.visit('https://www.letskodeit.com/practice');

    cy.get('#confirmbtn').click();

    cy.on('window:confirm', (message) => {
      expect(message).to.equal('Hello , Are you sure you want to confirm?');
      return false;
    });
  });

  it.skip('handle new tab #1', () => {
    cy.visit('https://www.letskodeit.com/practice');

    cy.get('#opentab').should('have.attr', 'href').and('include', '/courses');
  });

  it.skip('handle new tab #2', () => {
    cy.visit('https://www.letskodeit.com/practice');

    cy.get('#opentab').invoke('removeAttr', 'target').click();
    cy.url().should('include', '/courses');

    cy.get('input[id="search"]').type('javascript');
    cy.get('button[class="find-course search-course"]').click();

    cy.get('h4[class="dynamic-heading"]').should(
      'contain',
      'JavaScript for beginners'
    );
  });

  it.skip('handle new tab #3', () => {
    cy.visit('https://www.letskodeit.com/practice');

    cy.get('#opentab').then((newTab) => {
      const hrefTab = newTab.prop('href');

      cy.visit(hrefTab);

      cy.url().should('include', '/courses');

      cy.get('input[id="search"]').type('javascript');
      cy.get('button[class="find-course search-course"]').click();

      cy.get('h4[class="dynamic-heading"]').should(
        'contain',
        'JavaScript for beginners'
      );

      cy.go('back');
      cy.url().should('include', '/practice');
    });
  });
});
