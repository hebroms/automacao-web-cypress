import { ELEMENTS } from '../elements/RegisterElements';

class RegisterPage {

  acessRoute(route){
    cy.visit(route)
  }

  validRoute(route){
    cy.url().should('include', route);
  }

  validTitle(title){
    cy.get(ELEMENTS.title).contains(title)
  }

  fillEmail(email) {
      cy.get(ELEMENTS.emailInput).clear().type(email);
  }
  
  fillPassword(password) {
    cy.get(ELEMENTS.passwordInput).clear().type(password);
  }

  fillConfirmPassword(password) {
    cy.get(ELEMENTS.confirmPasswordInput).clear().type(password);
  }

  submit() {
    cy.get(ELEMENTS.submitButton).click();
  }

  fillEmailNotFilled(){
    cy.get(ELEMENTS.emailInput).then(($input) => {
      expect(ELEMENTS.emailInput.validationMessage).to.exist;
    });
  }

  fillPasswordNotFilled(){
    cy.get(ELEMENTS.passwordInput).then(($input) => {
      expect(ELEMENTS.passwordInput.validationMessage).to.exist;
    });
  }

  fillConfirmPasswordlNotFilled(){
    cy.get(ELEMENTS.confirmPasswordInput).then(($input) => {
      expect(ELEMENTS.confirmPasswordInput.validationMessage).to.exist;
    });
  }

  errorMessage() {
    return cy.get('div[style="color: red;"] p');
  }
}

export default new RegisterPage();
  