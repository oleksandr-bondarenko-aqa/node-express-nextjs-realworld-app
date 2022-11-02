class LoginPage {

  visit() {
    cy.log('**Open Login page**')
    cy.visit('/user/login')
  }

  getEmailField() {
    return cy.get('input[type="email"]')
  }

  getPasswordField() {
    return cy.get('input[type="password"]')
  }

  getSignInButton() {
    return cy.get('button[type="submit"]')
  }

  getProfileButton() {
    return cy.get('a.nav-link')
  }

  submitLoginForm(userEmail, userPassword) {
    cy.log('**Fill login form**')
    this.getEmailField().type(userEmail)
    this.getPasswordField().type(userPassword)

    cy.log('**Click Sign In button**')
    this.getSignInButton().click()
  }

  verifyUserLogin(userName) {
    cy.get(`a[href="/profile/${userName}"]`).should('contain.text', userName)
  }
}

export default new LoginPage()