
class LoginPage {

    elements = {
        contactUsBtn: () => cy.get("#contact-link"),
        subjectCmb: () => cy.get("select#id_contact"),
        emailTxt: () => cy.get("input#email"),
        orderTxt: () => cy.get("input#id_order"),
        messageTxt: () => cy.get("textarea#message"),
        sendTicketBtn: () => cy.get("button#submitMessage"),
        alertSuccessLbl: () => cy.get(".alert-success"),
        alertErrorLbl: () => cy.get("div#center_column li")
    }

    clickContactUs() { this.elements.contactUsBtn().click() }

    addticketInformation(actorName, contactInformation) {
        contactInformation.hashes().forEach(data => {
            cy.log("data.subject")
            cy.log(data.subject)
            if (data.subject) this.elements.subjectCmb().select(data.subject)
            if (data.reference) this.elements.orderTxt().type(data.reference)
            if (data.message) this.elements.messageTxt().type(data.message)

            cy.fixture('../fixtures/actors.json').then((actors) => {
                if (actors[actorName].email) this.elements.emailTxt().type(actors[actorName].email)
            })

        });
    }

    clickSendTicket() { this.elements.sendTicketBtn().click() }

    getAlertSuccessLbl() { return this.elements.alertSuccessLbl() }

    getAlertErrorLbl() { return this.elements.alertErrorLbl() }
}

module.exports = new LoginPage();

