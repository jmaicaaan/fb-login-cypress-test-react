/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable
    extends
      LoginCommands {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    dataCy(value: string): Chainable<Element>;
  }
}

interface LoginCommands {
  /**
   * Mocks the global `FB` object `login` function return
   * @example cy.loginByFacebook()
   */
   loginByFacebook(status?: 'connected' | 'not_authorized' | 'unknown'): Promise<void>;
}
