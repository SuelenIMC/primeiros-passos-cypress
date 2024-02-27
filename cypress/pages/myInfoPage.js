class MyInfoPage{
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericTwoField: "[clear='false']",
            nationaltyField: ".oxd-select-dropdown > :nth-child(27)",
            maritalField: ".oxd-select-dropdown > :nth-child(3)"
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseDate) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)          
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    } 
    
    fillStatus() {
        cy.get(this.selectorsList().genericTwoField).eq(0).click({ force: true })
        cy.get(this.selectorsList().nationaltyField).click({ force: true })
        cy.get(this.selectorsList().genericTwoField).eq(1).click({ force: true })
        cy.get(this.selectorsList().maritalField).click({ force: true })
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(1).click( { force: true })
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }

}
export default MyInfoPage