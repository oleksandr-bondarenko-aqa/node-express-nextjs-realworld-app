class HomePage {

  visit() {
    cy.visit('/')
  }

  getLoginButton(){
    return cy.get('[href="/user/login"]')
  }

  clickLoginButton(){
    this.getLoginButton().click();
  }

  getProfileButton(){
    return cy.get('[href*="/profile/"]')
  }

  clickProfileButton(){
    this.getProfileButton().click();
  }

  getTagChip() {
    return cy.get('.link.tag-default.tag-pill')
  }

  getGlobalFeedButton() {
    return cy.get('a').contains("Global Feed");
  }

  clickGlobalFeedButton() {
    this.getGlobalFeedButton().click();
  }

  getLikeButton() {
    return cy.get('i.ion-heart')
  }

  clickLikeButton() {
    this.getLikeButton().click();
  }
}

export default new HomePage()