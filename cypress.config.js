
      const { defineConfig } = require('cypress');
      module.exports = defineConfig({
          reporter: 'cypress-mochawesome-reporter',
          e2e: {
              baseUrl: process.env.CYPRESS_BASE_URL,
              watchForFileChanges: false,
              defaultCommandTimeout: 3000,
              viewportHeight: 800,
              viewportWidth: 1400,
              screenshotOnRunFailure: true,
              setupNodeEvents(on, config) {
                  require('cypress-mochawesome-reporter/plugin')(on);
                  // Prefer base URL from cypress.env.json (env.baseURL), then env var, then existing/default
                  config.baseUrl = config.env.baseURL || process.env.CYPRESS_BASE_URL || config.baseUrl 
                  return config;
              },
              experimentalSessionAndOrigin: true,
              specPattern: [
                'cypress/e2e/loginPageTest.cy.js',
                'cypress/e2e/bookingPageTest.cy.js'
              ]
          }
      });
    