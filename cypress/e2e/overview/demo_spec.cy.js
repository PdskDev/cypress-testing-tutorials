/// <reference types="cypress" />

const { assert } = require('chai');

describe('Cypress basic test', () => {
  it('Should be true!', () => {
    expect(true).to.equal(true);
  });

  it('Verify true is false!', () => {
    expect(true).to.equal(false);
  });
});
