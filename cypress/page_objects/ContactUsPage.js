
class LoginPage {

    elements = {
        contactUsBtn: () => cy.get("#contact-link"),
        subjectCmb: () => cy.get("select#id_contact"),
        emailTxt: () => cy.get("input#email"),
        orderTxt: () => cy.get("input#id_order"),
        messageTxt: () => cy.get("textarea#message"),
        sendTicketBtn: () => cy.get("button#submitMessage"),
        alertSuccessLbl: () => cy.get(".alert-success")
    }

    clickContactUs() { this.elements.contactUsBtn().click() }

    addticketInformation(actorName, contactInformation) {
        contactInformation.hashes().forEach(data => {

            this.elements.subjectCmb().select(data.subject)
            this.elements.orderTxt().type(data.reference)
            this.elements.messageTxt().type(data.message)

            cy.fixture('../fixtures/actors.json').then((actors) => {
                this.elements.emailTxt().type(actors[actorName].email)
            })

        });
    }

    clickSendTicket() { this.elements.sendTicketBtn().click() }

    getAlertSuccessLbl() { return this.elements.alertSuccessLbl() }
}

module.exports = new LoginPage();

