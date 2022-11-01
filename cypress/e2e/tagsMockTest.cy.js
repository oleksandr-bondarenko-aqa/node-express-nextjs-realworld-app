import loginPage from '../support/pages/LoginPage'
import user from '../fixtures/user.json'
import {login, loginViaAPI} from '../support/helper'
import homePage from '../support/pages/HomePage'
import tags from '../fixtures/tagsMock.json'
import tagsArray from '../fixtures/tagsMock.json'
import {faker} from '@faker-js/faker'

beforeEach('Login', () => {
  tagsArray.tags = [`${faker.animal.bear.name}`, `${faker.animal.cow.name}`]

  cy.intercept('GET', '**/tags', tagsArray)
  loginViaAPI(user)
})

it('Verify login helper', () => {
  homePage.visit()
  homePage.getProfileButton().should('be.visible')
  homePage.getTagChip().should('contain', tagsArray.tags[0])
  homePage.getTagChip().should('contain', tagsArray.tags[1])
})