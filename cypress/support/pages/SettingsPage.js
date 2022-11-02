class SettingsPage {
  visit() {
    cy.visit('/settings');
  }

  logout() {
    cy.get('button.btn.btn-outline-danger').click();
  }
}

export default new SettingsPage();