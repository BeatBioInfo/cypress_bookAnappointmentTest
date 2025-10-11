describe('Book Appointment - Complete Booking Flow', () => {
    let elements

    const baseUrl = Cypress.config('baseUrl');

    beforeEach(() => {
        cy.fixture("element").then((el) => {
            elements = el; 
        })
        // cy.loginSession()
        cy.login()
    })


    it('book appointment - Hongkong facility with Medicare program', () => {
        // Fill complete appointment form
        cy.selectFacilityOptionsFromDropDown('Hongkong CURA Healthcare Center')
        cy.get(elements.readmissionCheckBox).check()
        
        // Select healthcare program
        cy.selectPreferredHealthCareProgram('Medicare')
        
        // Select visit date
        cy.pickADate('25/12/2025')
        cy.get(elements.commentArea).type('Regular checkup appointment')
        
        // Book appointment
        cy.clickAnyButtonWithText('Book Appointment')
        
        // Verify confirmation
        cy.assertTextIsVisible('h2', 'Appointment Confirmation')
        cy.assertTextIsVisible('p', 'Please be informed that your appointment has been booked as following:')
        
        // Verify appointment details
        cy.get('#facility').should('contain.text', 'Hongkong CURA Healthcare Center')
        cy.get('#program').should('contain.text', 'Medicare')
        
        // Navigate to history
        cy.menuOptions('History')

        cy.get('[id="btn-make-appointment"]').should('be.visible').click()


        // cy.contains('Go to Homepage').click()
        // cy.menuOptions('Home')
    })

    it('book appointment - Tokyo facility with Medicaid program', () => {
        cy.selectFacilityOptionsFromDropDown('Tokyo CURA Healthcare Center')
        cy.get(elements.readmissionCheckBox).check()
        cy.selectPreferredHealthCareProgram('Medicaid')
        cy.pickADate('30/12/2025')
        cy.get(elements.commentArea).type('Emergency consultation')
        
        cy.clickAnyButtonWithText('Book Appointment')
        
        cy.assertTextIsVisible('h2', 'Appointment Confirmation')
        cy.get('#facility').should('contain.text', 'Tokyo CURA Healthcare Center')
        cy.get('#program').should('contain.text', 'Medicaid')
        // Navigate to history
        cy.menuOptions('History')
        cy.contains('Go to Homepage').click()

    })

    it('book appointment - Seoul facility with None program', () => {
        cy.selectFacilityOptionsFromDropDown('Seoul CURA Healthcare Center')
        cy.selectPreferredHealthCareProgram('none')
        cy.pickADate('15/01/2026')
        cy.get(elements.commentArea).type('First time visit')
        cy.clickAnyButtonWithText('Book Appointment')
        cy.assertTextIsVisible('h2', 'Appointment Confirmation')
        cy.get('#facility').should('contain.text', 'Seoul CURA Healthcare Center')
        cy.get('#program').should('contain.text', 'None')
        cy.menuOptions('History')
        cy.contains('Go to Homepage').click()

    })

    it('book appointment - Hongkong facility with None program (no readmission)', () => {
        cy.selectFacilityOptionsFromDropDown('Hongkong CURA Healthcare Center')
        // Skip readmission checkbox
        cy.selectPreferredHealthCareProgram('none')
        cy.pickADate('20/01/2026')
        cy.get(elements.commentArea).type('Follow-up appointment')
        
        cy.clickAnyButtonWithText('Book Appointment')
        
        cy.assertTextIsVisible('h2', 'Appointment Confirmation')
        cy.get('#facility').should('contain.text', 'Hongkong CURA Healthcare Center')
        cy.get('#program').should('contain.text', 'None')
        cy.menuOptions('History')
        cy.contains('Go to Homepage').click()
    })

    it('book appointment - Tokyo facility with Medicare program (no readmission)', () => {
        cy.selectFacilityOptionsFromDropDown('Tokyo CURA Healthcare Center')
        // Skip readmission checkbox
        cy.selectPreferredHealthCareProgram('Medicare')
        cy.pickADate('28/01/2026')
        cy.get(elements.commentArea).type('Annual checkup')
        
        cy.clickAnyButtonWithText('Book Appointment')
        
        cy.assertTextIsVisible('h2', 'Appointment Confirmation')
        cy.get('#facility').should('contain.text', 'Tokyo CURA Healthcare Center')
        cy.get('#program').should('contain.text', 'Medicare')
        cy.menuOptions('History')
        cy.contains('Go to Homepage').click()
    })

    it('book appointment - Seoul facility with Medicaid program', () => {
        cy.selectFacilityOptionsFromDropDown('Seoul CURA Healthcare Center')
        cy.get(elements.readmissionCheckBox).check()
        cy.selectPreferredHealthCareProgram('Medicaid')
        cy.pickADate('05/02/2026')
        cy.get(elements.commentArea).type('Specialist consultation')
        
        cy.clickAnyButtonWithText('Book Appointment')
        
        cy.assertTextIsVisible('h2', 'Appointment Confirmation')
        cy.get('#facility').should('contain.text', 'Seoul CURA Healthcare Center')
        cy.get('#program').should('contain.text', 'Medicaid')
        cy.menuOptions('History')
        cy.contains('Go to Homepage').click()
    })

    // Negative Test Case => 
    it('negative test - book appointment without selecting date', () => {
        cy.selectFacilityOptionsFromDropDown('Hongkong CURA Healthcare Center')
        cy.selectPreferredHealthCareProgram('Medicaid')
        cy.clickAnyButtonWithText('Book Appointment')
        
        // Should stay on appointment page (date is required)
        cy.assertTextIsVisible('h2', 'Make Appointment')
        cy.get(elements.appointmentForm).should('be.visible')
    })      
    
    it.skip('visit the profile page', () => {
        cy.menuOptions('Profile')
        cy.menuOptions('Logout')
    })

    
    // after(() => {
        // cy.log('All tests completed - Running cleanup')
        // Simple logout without going to Profile page
        // cy.menuOptions('Logout')
    //  })

       
})
