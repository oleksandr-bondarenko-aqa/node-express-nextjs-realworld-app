import registrationPage from '../support/pages/RegistrationPage';
import user from '../fixtures/user.json';
import { generateRandomEmail, generateRandomUsername } from '../support/helper';
import homePage from '../support/pages/HomePage';
import settingsPage from '../support/pages/SettingsPage';

function addLike() {
  user.username = generateRandomUsername();
  user.email = generateRandomEmail();

  registrationPage.visit();

  registrationPage.submitRegistrationForm(user.username, user.email, user.password);

  homePage.visit();
  homePage.clickGlobalFeedButton();
  homePage.clickLikeButton();

  settingsPage.visit();
  settingsPage.logout();
}

function addMultipleLikes(likesQuantity) {
  for (let i = 0; i < likesQuantity; i++) {
    addLike();
  }
}

it('Add multiple likes to article', () => {
  addMultipleLikes(10);
})