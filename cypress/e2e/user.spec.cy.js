import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/MenuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orang HMR tests', () => {

  const selectorList = {
    
    
  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkdashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.addDataMyInfo()
    
    // cy.get(selectorList.firstNameField).clear().type('firstNameTest')
    // cy.get(selectorList.lastNameField).clear().type('lastNameTest')
    // cy.get(selectorList.genericField).eq(3).clear().type('Test')
    // cy.get(selectorList.genericField).eq(4).clear().type('OtherIdTest')
    // cy.get(selectorList.genericField).eq(5).clear().type('123456')
    // cy.get(selectorList.dateField).eq(0).clear().type('2025-03-10')
    // cy.get(selectorList.dateCloseButton).click()
    // cy.get(selectorList.submitButton).eq(0).click()
    // cy.get('body').should('contain', 'Successfully Updated')
    // cy.get('.oxd-toast-close')
    // cy.get(selectorList.genericTwoField).eq(0).click({ force: true })
    // cy.get(selectorList.nationaltyField).click({ force: true })
    // cy.get(selectorList.genericTwoField).eq(1).click({ force: true })
    // cy.get(selectorList.maritalField).click({ force: true })
    

    //cy.get(selectorList.genericField).eq(6).clear().type('DriversTest')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})