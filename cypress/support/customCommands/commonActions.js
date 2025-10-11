// Elements are now loaded globally in commands.js
let elements

before(()=>{
    cy.fixture("element").then((el) => {
      elements = el; 
    });
  
})
Cypress.Commands.add('clickAnyElementWithText', (element, text) => {
    cy.get(element).contains(text).should('be.visible').click()
})

Cypress.Commands.add('clickAnyButtonWithText', (text) => {
    cy.contains('button', text).click()
    // cy.get('button').contains(text).click()
})

Cypress.Commands.add('typeInAnyValue', (field, text) => {
    cy.get(field).clear().type(text)
})

Cypress.Commands.add('selectFacilityOptionsFromDropDown', (option) => {
    cy.get(elements.facilityCenterOptions).select(option)
})

Cypress.Commands.add('pickADate', (text) => {
    cy.get(elements.datePicker).clear().type(text)
     // Click outside the datepicker to close the calendar
    cy.get('body').click()
  
})

Cypress.Commands.add('assertTextIsVisible', (textType, text) => {
    switch(textType) {
        case 'h1':  
            cy.get('h1').contains(text).should('be.visible')
            break;
        case 'h2':
            cy.get('h2').contains(text).should('be.visible')
            break;
        case 'h3':
            cy.get('h3').contains(text).should('be.visible')
            break;
        case 'p':
            cy.get('p').contains(text).should('be.visible')
            break;
        default:
            throw new Error(`Unsupported text type: ${textType}. Supported types are: h1, h2, h3`)
    }
})

Cypress.Commands.add('navigateToLoginPage', () => {
    cy.assertTextIsVisible('h1', 'CURA Healthcare Service')
    cy.clickAnyElementWithText(elements.makeAppointmentButton, 'Make Appointment')
    cy.assertTextIsVisible('h2', 'Login')
})

Cypress.Commands.add('selectPreferredHealthCareProgram', (radioLabel) => {
    switch (radioLabel) {
        case 'Medicare':
            cy.get(elements.medicareRadioLabel).click()
            break;
        case 'Medicaid':
            cy.get(elements.medicaidRadioLabel).click()
            break;
        case 'none':
            cy.get(elements.noneRadioLabel).click()
            break;
        default:
            throw new Error("No preferred health care program found")
    }
})

Cypress.Commands.add('menuOptions', (sideBarNav) => {
    cy.get(elements.menuOption).click()
    switch (sideBarNav) {
        case 'Home':
            cy.clickAnyElementWithText(elements.homeMenu, 'Home') 
        break;
        case 'History':
            cy.clickAnyElementWithText(elements.historyMenu, 'History') 
            // cy.assertTextIsVisible('History')
            cy.contains('History')
            // cy.assertTextIsVisible('Go to Homepage')
        break;
        case 'Profile':
            cy.get(elements.profileMenu).click() 
            cy.assertTextIsVisible('Under construction.')
        break;
        case 'Logout':
            cy.clickAnyElementWithText(elements.logoutMenu, 'Logout')
        default:
            throw new Error(`Unknown side nav bar option: ${sideBarNav}`);
    }

})





