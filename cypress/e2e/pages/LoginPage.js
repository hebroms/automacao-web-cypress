import { ELEMENTS } from '../elements/LoginElements';

class LoginPage {

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
        cy.get(ELEMENTS.emailInput).type(email);
    }
  
    fillPassword(password) {
        cy.get(ELEMENTS.passwordInput).type(password);
    }
  
    submit() {
        cy.get(ELEMENTS.submitButton).click();
    }
  
    navigateToRegister() {
        cy.get(ELEMENTS.register).click();
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
}
  
export default new LoginPage();  