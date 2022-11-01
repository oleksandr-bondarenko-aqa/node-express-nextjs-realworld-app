import loginPage from '../support/pages/LoginPage'
import user from '../fixtures/user.json'
import {login, loginViaAPI} from '../support/helper'
import homePage from '../support/pages/HomePage'

beforeEach('Login', () => {
  loginViaAPI(user)
})

it('Verify login helper', () => {
  homePage.visit()
  homePage.getProfileButton().should('be.visible')
})