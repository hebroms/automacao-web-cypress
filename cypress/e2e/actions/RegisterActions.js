import RegisterPage from '../pages/RegisterPage';

class RegisterActions {
    visit(route,title){
        RegisterPage.acessRoute(route)
        RegisterPage.validRoute(route)
        RegisterPage.validTitle(title)
    }

    register(email, password, confirmPassword) {
        RegisterPage.fillEmail(email);
        RegisterPage.fillPassword(password);
        RegisterPage.fillConfirmPassword(confirmPassword);
        RegisterPage.submit();
    }

    registerPasswords(password, confirmPassword) {
        RegisterPage.fillPassword(password);
        RegisterPage.fillConfirmPassword(confirmPassword);
        RegisterPage.submit();
    }

    registerEmailConfirmPasswords(email, confirmPassword) {
        RegisterPage.fillEmail(email);
        RegisterPage.fillConfirmPassword(confirmPassword);
        RegisterPage.submit();
    }

    registerEmailPasswords(email, password) {
        RegisterPage.fillEmail(email);
        RegisterPage.fillPassword(password);
        RegisterPage.submit();
    }

    validationEmailFilled(){
        RegisterPage.fillEmailNotFilled();
    }

    validationPasswordlNotFilled(){
        RegisterPage.fillPasswordNotFilled();
    }

    validationConfirmPasswordlNotFilled(){
        RegisterPage.fillConfirmPasswordlNotFilled();
    }
}

export default new RegisterActions();