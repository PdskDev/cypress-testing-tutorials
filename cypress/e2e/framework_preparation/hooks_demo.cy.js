describe('Hooks Demo', () => {
  //Before() Hook
  before('This is before hook', () => {
    cy.log('before all tests');
  });
  //After() Hook
  after('This is after hook', () => {
    cy.log('after all tests');
  });
  // beforeEach() Hook
  beforeEach('This is before each hook', () => {
    cy.log('before each test');
  });
  // afterEach() Hook
  afterEach('This is after each hook', () => {
    cy.log('after each test');
  });

  it('test 1', () => {
    cy.log('test 1');
  });

  it('test 2', () => {
    cy.log('test 2');
  });
});
