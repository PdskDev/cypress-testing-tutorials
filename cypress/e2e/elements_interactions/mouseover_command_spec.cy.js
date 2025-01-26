describe('Trigger Demo invoke command', () => {
  it('should invoke command', () => {
    cy.visit('https://www.letskodeit.com/practice');

    cy.get('div[class="mouse-hover-content"]').invoke('show');
    cy.get('div[class="mouse-hover-content"] a[href="#top"]').click();
  });
});
