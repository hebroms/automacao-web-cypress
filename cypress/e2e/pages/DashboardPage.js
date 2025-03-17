import { ELEMENTS } from '../elements/DashboardElements';

class DashboardPage {
    validRoute(route){
        cy.url().should('include', route);
    }

    navigateToList() {
        cy.get(ELEMENTS.listLink).click();
    }
}
export default new DashboardPage();  