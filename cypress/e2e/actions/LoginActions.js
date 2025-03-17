import LoginPage from '../pages/LoginPage';

class LoginActions {

  visit(route,title){
    LoginPage.acessRoute(route)
    LoginPage.validRoute(route)
    LoginPage.validTitle(title)
  }

  login(email, password) {
    LoginPage.fillEmail(email);
    LoginPage.fillPassword(password);
    LoginPage.submit();
  }

  loginEmail(email) {
    LoginPage.fillEmail(email);
    LoginPage.submit();
  }

  loginPassword(password) {
    LoginPage.fillPassword(password);
    LoginPage.submit();
  }

  loginSubmit() {
    LoginPage.submit();
  }

  route(route){
    LoginPage.validRoute(route)
  }

  validationEmailFilled(){
    LoginPage.fillEmailNotFilled();
  }
  
  validationPasswordlNotFilled(){
    LoginPage.fillPasswordNotFilled();
  }

  validationDashboard(route,title){
    LoginPage.validRoute(route)
    LoginPage.validTitle(title)
  }

}

export default new LoginActions();
