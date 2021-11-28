// type definitions for Cypress object "cy"
// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

describe('login', () => {
  it('should be able to login', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="field-email"]')
      .type('johndoe@gmail.com');

    cy.get('[data-testid="field-password"]')
      .type('helloworld123!');

    cy.get('[data-testid="login-button"]')
      .click();

    cy.location('pathname').should('eq', '/home');
  });
});
