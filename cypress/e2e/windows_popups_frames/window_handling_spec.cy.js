describe('javascript window opening Demo', () => {
  it.skip('javascript window opening Demo', () => {
    cy.visit('https://www.letskodeit.com/practice');

    cy.window().then((newWindow) => {
      cy.stub(newWindow, 'open')
        .callsFake(() => {
          newWindow.location.href = 'https://www.letskodeit.com/courses';
        })
        .as('windowOpen');
    });

    cy.get('#openwindow').click();
    cy.get('@windowOpen').should(
      'be.calledWith',
      'https://www.letskodeit.com/courses'
    );

    cy.get('input[id="search"]').type('javascript');
    cy.get('button[class="find-course search-course"]').click();

    cy.get('h4[class="dynamic-heading"]').should(
      'contain',
      'JavaScript for beginners'
    );

    cy.go('back');
    cy.url().should('include', '/practice');
  });

  it('iframe element hanling Demo', () => {
    cy.visit('https://www.letskodeit.com/practice');

    cy.get('#search').type('javascript').type('{enter}');
  });
});
