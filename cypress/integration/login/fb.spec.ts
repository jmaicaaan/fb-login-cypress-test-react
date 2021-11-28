// type definitions for Cypress object "cy"
// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

describe('fb social login', () => {
  it('should be able to login with fb', () => {
    cy.visit('http://localhost:3000');

    return cy.loginByFacebook().then(() => {
      cy.get('[data-testid="fb-login-button"]')
        .should('be.enabled')
        .click();
      cy.location('pathname').should('eq', '/home');
    });
  });

  it('should fail to login with fb', () => {
    cy.visit('http://localhost:3000');

    return cy.loginByFacebook('not_authorized').then(() => {
      cy.get('[data-testid="fb-login-button"]')
        .should('be.enabled')
        .click();
      cy.location('pathname').should('eq', '/');
    });
  });
});
