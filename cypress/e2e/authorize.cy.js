import loginPage from '../support/pages/LoginPage'
import user from "../fixtures/user.json"

it('Authorize', () => {
  loginPage.visit();
  loginPage.submitLoginForm(user.email, user.password);
  loginPage.verifyUserLogin(user.username);
})
