import homePage from './pages/HomePage'
import loginPage from './pages/LoginPage'
import user from '../fixtures/user.json'
import sessionData from '../fixtures/sessionData.json'

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