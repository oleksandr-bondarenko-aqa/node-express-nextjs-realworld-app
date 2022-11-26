import homePage from './pages/HomePage'
import loginPage from './pages/LoginPage'
import user from '../fixtures/user.json'
import sessionData from '../fixtures/sessionData.json'
import registrationPage from './pages/RegistrationPage'
import settingsPage from './pages/SettingsPage'

export function login() {
  homePage.visit()
  homePage.clickLoginButton()

  loginPage.submitLoginForm(user.email, user.password)
}

export function loginViaAPI() {
  let requestBody = { user: { email: ' ', password: ' ' } }

  requestBody.user.email = user.email
  requestBody.user.password = user.password

  cy.request('POST', '/api/users/login', requestBody).then(response => {
    cy.setCookie('auth', response.body.user.token)

    sessionData.email = user.email
    sessionData.username = user.username
    sessionData.token = response.body.user.token

    window.localStorage.setItem('user', JSON.stringify(sessionData))
  })
}

export function generateRandomUsername() {
  const randomValue = Date.now()

  return `Alex_${randomValue}`;
}

export function generateRandomEmail() {
  const randomValue = Date.now()

  return `Alex_${randomValue}@test.email`;
}

export function registerUserOnUi() {
  user.username = generateRandomUsername();
  user.email = generateRandomEmail();

  registrationPage.visit();

  registrationPage.submitRegistrationForm(user.username, user.email, user.password);
}

export function addLikeOnUi() {
  registerUserOnUi();
  homePage.visit();
  homePage.clickGlobalFeedButton();
  homePage.clickLikeButton();

  settingsPage.visit();
  settingsPage.logout();
}

export function addMultipleLikesOnUi(likesQuantity) {
  for (let i = 0; i < likesQuantity; i++) {
    addLikeOnUi();
  }
}

export function checkLikesQuantityNotClicked(likes) {
  return cy.get('.btn.btn-sm.btn-outline-primary').should('contain', `${likes}`);
}

export function checkLikesQuantityClicked(likes) {
  return cy.get('.btn.btn-sm.btn-primary').should('contain', `${likes}`);
}
