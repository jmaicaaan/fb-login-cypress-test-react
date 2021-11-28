// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// @ts-ignore
Cypress.Commands.add('loginByFacebook', (
  status: 'connected' | 'not_authorized' | 'unknown' = 'connected'
) => {
  return cy.window().then((win) => {
    const callbackResult = {
      ...status === 'connected' && {
        status: 'connected',
        authResponse: {
          accessToken: 'test_fbAccessToken',
        },
      },
      ...status === 'not_authorized' && {
        status: 'not_authorized',
      },
      ...status === 'unknown' && {
        status: 'unknown',
      },
    };
    // @ts-ignore
    if (!win.FB) {
      return;
    }

    // @ts-ignore
    win.FB = {
      // @ts-ignore
      ...win.FB,
      login: (callback: (response: unknown) => {}) => {
        /**
         * Customized delay to fake the execution of this function
         * Make it look like it is requesting from a third party
         */
        setTimeout(() => {
          callback(callbackResult);
        }, 3000);
      },
    }
  });
});
