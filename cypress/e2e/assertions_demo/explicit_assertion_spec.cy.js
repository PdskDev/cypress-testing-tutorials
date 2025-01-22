describe('Explicit Assertions cypress', () => {
  it('should be explicit assertion', () => {
    cy.visit('https://www.letskodeit.com/practice');

    let firstText;
    let secondText;

    cy.get('#product')
      .find('tbody tr:nth-child(2)')
      .find('td')
      .first()
      .then(($first) => {
        firstText = $first.text();
      });

    cy.get('#product')
      .find('tbody tr:nth-child(3)')
      .find('td')
      .first()
      .then(($second) => {
        secondText = $second.text();
        expect(firstText, 'Verifiy first and second text').to.equal(secondText);
      });
  });
});
