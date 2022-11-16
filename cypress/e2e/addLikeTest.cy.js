import registrationPage from '../support/pages/RegistrationPage';
import user from '../fixtures/user.json';
import {
    checkLikesQuantity,
    checkLikesQuantityClicked,
    checkLikesQuantityNotClicked,
    loginViaAPI
} from '../support/helper'
import homePage from '../support/pages/HomePage';
import likes from '../fixtures/articlesMock.json'

let likesCount;

beforeEach('Login', () => {
    likesCount = likes.articles[0].favoritesCount;
    cy.intercept('GET', '**/articles?limit=10&offset=0', likes)
    loginViaAPI(user);
})

it('Add like to article', () => {
    homePage.visit();
    homePage.getProfileButton().should('be.visible');
    homePage.clickGlobalFeedButton();
    checkLikesQuantityNotClicked(likesCount);

    homePage.clickLikeButton();
    checkLikesQuantityClicked(likesCount + 1);

    homePage.clickLikeButton();
    checkLikesQuantityNotClicked(likesCount);

})