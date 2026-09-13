
describe('Login test to Book An Appointment - Login Flow', () => {
let elements
let credentials

const baseUrl = Cypress.config('baseUrl');

beforeEach(() => {
    cy.visit('/');
    cy.log(`BaseUrl: ${baseUrl}`)
    cy.fixture("element").then((el) => {
        elements = el; })
    cy.env(['username', 'password']).then((env) => {
        credentials = env
    })
    cy.navigateToLoginPage()
    cy.assertTextIsVisible('p', 'Please login to make appointment.')
})
    
it('login with valid credentials', () => {
    cy.typeInAnyValue(elements.username, credentials.username)
    cy.typeInAnyValue(elements.password, credentials.password)
    cy.clickAnyButtonWithText('Login')
    cy.assertTextIsVisible('h2', 'Make Appointment')
})

it('login with invalid username', () => {
    cy.typeInAnyValue(elements.username, 'invaliduser')
    cy.typeInAnyValue(elements.password, credentials.password)
    cy.clickAnyButtonWithText('Login')
    cy.assertTextIsVisible('h2', 'Login') // Should stay on login page
    cy.assertTextIsVisible('p', 'Login failed! Please ensure the username and password are valid.')
})

it('login with invalid password', () => {
    cy.typeInAnyValue(elements.username, credentials.username)
    cy.typeInAnyValue(elements.password, 'wrongpassword')
    cy.clickAnyButtonWithText('Login')
    cy.assertTextIsVisible('h2', 'Login') // Should stay on login page
    cy.assertTextIsVisible('p', 'Login failed! Please ensure the username and password are valid.')
})

it('login with both invalid credentials', () => {
    cy.typeInAnyValue(elements.username, 'invaliduser')
    cy.typeInAnyValue(elements.password, 'wrongpassword')
    cy.clickAnyButtonWithText('Login')
    cy.assertTextIsVisible('h2', 'Login') // Should stay on login page
    cy.assertTextIsVisible('p', 'Login failed! Please ensure the username and password are valid.')
})

it('login with empty username field', () => {
    cy.typeInAnyValue(elements.password, credentials.password)
    cy.clickAnyButtonWithText('Login')
    cy.assertTextIsVisible('h2', 'Login') // Should stay on login page
    cy.assertTextIsVisible('p', 'Please login to make appointment.')
    cy.assertTextIsVisible('p', 'Login failed! Please ensure the username and password are valid.')
})

it('login with empty password field', () => {
    cy.typeInAnyValue(elements.username, credentials.username)
    cy.clickAnyButtonWithText('Login')
    cy.assertTextIsVisible('h2', 'Login') // Should stay on login page
    cy.assertTextIsVisible('p', 'Login failed! Please ensure the username and password are valid.')
})

it('login with both fields empty', () => {
    cy.clickAnyButtonWithText('Login')
    cy.assertTextIsVisible('h2', 'Login') // Should stay on login page
    cy.assertTextIsVisible('p', 'Login failed! Please ensure the username and password are valid.')
})

it('login with special characters in username', () => {
    cy.typeInAnyValue(elements.username, 'user@#$%')
    cy.typeInAnyValue(elements.password, credentials.password)
    cy.clickAnyButtonWithText('Login')
    cy.assertTextIsVisible('h2', 'Login') // Should stay on login page
    cy.assertTextIsVisible('p', 'Login failed! Please ensure the username and password are valid.')
})

it('login with SQL injection attempt', () => {
    cy.typeInAnyValue(elements.username, "admin'; DROP TABLE users; --")
    cy.typeInAnyValue(elements.password, credentials.password)
    cy.clickAnyButtonWithText('Login')
    cy.assertTextIsVisible('h2', 'Login') // Should stay on login page
    cy.assertTextIsVisible('p', 'Please login to make appointment.')
    cy.assertTextIsVisible('p', 'Login failed! Please ensure the username and password are valid.')
})


})


            