
// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-mochawesome-reporter/register';
import '@faker-js/faker';
import 'cypress-fill-command'
import './customCommands/commonActions'
import './customCommands/loginSession'



// Global fixture loading - makes elements available across all tests
let elements;

before(() => {
    cy.fixture('element').then((el) => {
        elements = el;
    });
});