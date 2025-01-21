describe('Cypress XPath Demo', () => {
  it('should verify xpath capabilities', () => {
    cy.visit('https://www.letskodeit.com/courses');
    cy.xpath('//input[@id="search"]').type('javascript');
    cy.xpath('//div[@id="course-list"]')
      .xpath('./div')
      .should('have.length', 6);
  });
});
