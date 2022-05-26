import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
const loginPage = require("../../../page_objects/loginPage")
const generalConstants = require("../../../constants/GeneralConstants")

Given('He is a my store user', () => {
    cy.visit('/')
})

When('{string} wants to acccess to my store platform', (actorName) => {
    loginPage.clickSignIn()
    loginPage.enterCredentials(actorName)
    loginPage.clickSignInLogin()
})

Then('He should see the my store platform main page', () => {
    loginPage.getHomePageLbl().should('have.text', generalConstants.HOME_PAGE_LBL_TEXT)
})

Then('He should see that He is not logged in my store platform by invalid credentials', () => {
    loginPage.getCredentialsErrorLbl().should('to.be.visible', generalConstants.HOME_PAGE_LBL_TEXT)
})