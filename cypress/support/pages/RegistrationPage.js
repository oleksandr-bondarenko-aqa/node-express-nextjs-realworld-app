class RegistrationPage {
  visit() {
    cy.visit('/user/register');
  }

  getUsernameField() {
    return cy.get('input[placeholder="Username"]');
  }

  getEmailField() {
    return cy.get('input[placeholder="Email"]');
  }

  getPasswordField() {
    return cy.get('input[placeholder="Password"]');
  }

  getSignUpButton() {
    return cy.get('button[type="submit"]');
  }

  submitRegistrationForm(name, email, password) {
    this.getUsernameField().type(name);
    this.getEmailField().type(email);
    this.getPasswordField().type(password);

    this.getSignUpButton().click();
  }

  verifyUserRegistered(user) {
    cy.get(`a[href="/profile/${user}"]`).should('contain.text', user);
  }
}

export default new RegistrationPage();