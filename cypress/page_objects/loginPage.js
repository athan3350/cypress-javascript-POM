
class LoginPage {

    elements = {
        signInBtn: () => cy.get(".header_user_info [rel]"),
        passwordTxt: () => cy.get("#passwd"),
        emailTxt: () => cy.get("#email"),
        logInBtn: () => cy.get("#login_form .submit span"),
        homePageLbl: () => cy.get(".info-account"),
    }

    enterCredentials(actorName) {
        cy.log(actorName)
        cy.fixture('../fixtures/actors.json').then((actors) => {
            this.elements.emailTxt().type(actors[actorName].email)
            this.elements.passwordTxt().type(actors[actorName].password)
        })
    }

    clickSignIn() {
        this.elements.signInBtn().click()
    }

    clickSignInLogin() {
        this.elements.logInBtn().click()
    }

    getHomePageLbl() {
        return this.elements.homePageLbl()
    }
}

module.exports = new LoginPage();

