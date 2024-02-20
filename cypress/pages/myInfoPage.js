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

    addDataMyInfo() {
        cy.get(this.selectorsList().firstNameField).clear().type('firstNameTest')
        cy.get(this.selectorsList().lastNameField).clear().type('lastNameTest')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('Test')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('OtherIdTest')          
        cy.get(this.selectorsList().genericField).eq(5).clear().type('123456')
        cy.get(this.selectorsList().dateField).eq(0).clear().type('2025-03-10')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
        cy.get(this.selectorsList().genericTwoField).eq(0).click({ force: true })
        cy.get(this.selectorsList().nationaltyField).click({ force: true })
        cy.get(this.selectorsList().genericTwoField).eq(1).click({ force: true })
        cy.get(this.selectorsList().maritalField).click({ force: true })
    }

}
export default MyInfoPage