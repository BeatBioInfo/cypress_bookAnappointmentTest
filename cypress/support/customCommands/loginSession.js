let elements; 

before(()=>{
    cy.fixture("element").then((el) => {
      elements = el; 
    });
})

Cypress.Commands.add('loginSession', () => {
  cy.session('loginSession', () => {
    cy.visit('/');
    cy.navigateToLoginPage();
    cy.assertTextIsVisible('p', 'Please login to make appointment.');
    cy.typeInAnyValue(elements.username, Cypress.env('username'));
    cy.typeInAnyValue(elements.password, Cypress.env('password'));
    cy.clickAnyButtonWithText('Login');
    cy.assertTextIsVisible('h2', 'Make Appointment');
    cy.get('[id="btn-make-appointment"]').should('be.visible').click()
  }, {
    validate() {
      cy.visit('/');
      cy.assertTextIsVisible('h2', 'Make Appointment');
    },
    cacheAcrossSpecs: true
  });
  cy.visit('/');

});

Cypress.Commands.add('login', () => {
    cy.visit('/');
    cy.navigateToLoginPage();
    cy.assertTextIsVisible('p', 'Please login to make appointment.');
    cy.typeInAnyValue(elements.username, Cypress.env('username'));
    cy.typeInAnyValue(elements.password, Cypress.env('password'));
    cy.clickAnyButtonWithText('Login');
    cy.assertTextIsVisible('h2', 'Make Appointment');
    cy.get('[id="btn-make-appointment"]').should('be.visible').click()
  })





























