import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const ContactUsPage = require("../../../page_objects/ContactUsPage")
const generalConstants = require("../../../constants/GeneralConstants")

Given('He is a my store user', () => {
    cy.visit('/')
})

When('{string} wants create a new ticket in the contact us module', (actorName, contactInformation) => {
    ContactUsPage.clickContactUs()
    ContactUsPage.addticketInformation(actorName, contactInformation)
    ContactUsPage.clickSendTicket()
})

Then('He should see his suggestions or questions had been sent', () => {
    ContactUsPage.getAlertSuccessLbl().should('to.be.visible').and('have.text', generalConstants.TICKET_SENT_SUCCESSFUL)
})