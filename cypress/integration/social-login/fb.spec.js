/// <reference types="cypress" />

describe('fb social login', () => {
  it('should be able to login with fb', () => {
    cy.find('[data-test-id="fb-login-button"]')
      .should('be.enabled')
      .click();
  });
});
