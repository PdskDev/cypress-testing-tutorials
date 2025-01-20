declare namespace Cypress {
  interface Chainable {
    /**
     * Login in via UI
     * @examplecy.login(username: string, password: string)
     */

    login(): Chainable<any>;
    /**
     * Log in via API
     * @example cy.apiLogin()
     */
    apiLogin(): Chainable<any>;
    /**
     * Wait for viewer to load
     * @example cy.waitForFirstLoad()
     */
    waitForFirstLoad(): Chainable<any>;
    /**
     * log out
     * @example cy.logout()
     */
    logout(): Chainable<any>;
  }
}
