import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
const loginPage = require("../../../page_objects/loginPage")
const generalConstants = require("../../../constants/GeneralConstants")

Given('{word} is a my store user', (actorName) => {
    cy.log('actorName')
    cy.visit('/')
})

When('He wants to acccess to my store platform', (loginData) => {
    loginPage.clickSignIn()
    loginPage.enterCredentials(loginData)
    loginPage.clickSignInLogin()
})

Then('He should see the my store platform main page', () => {
    loginPage.getHomePageLbl().should('have.text', generalConstants.HOME_PAGE_LBL_TEXT)
})