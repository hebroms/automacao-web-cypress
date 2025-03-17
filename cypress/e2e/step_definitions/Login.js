import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginActions from '../actions/LoginActions';
import RegisterActions from '../actions/RegisterActions';
import { ROUTES } from '../../support/routes';
import { texts } from '../../support/text';
import { FakeUserGenerator } from '../../support/generators/UserGenerator'

const user = FakeUserGenerator.generate();
const newUser = FakeUserGenerator.generate();

Given('acesso a página de login', () => {
  LoginActions.visit(ROUTES.LOGIN,texts.titleLogin)
});

When('tenho dados de login validos', () => {
  cy.visit(ROUTES.REGISTER);
  RegisterActions.register(user.email, user.password, user.password);
});

When('submeto ao formulário de login', () => {
    LoginActions.login(user.email, user.password);
});

When('submeto ao formulário de login com uma senha incorreta', () => { 
  LoginActions.login(user.email, newUser.email);
});

When('submeto ao formulário de login com um email incorreto', () => { 
  LoginActions.login(newUser.email, user.email);
});

When('submeto ao formulário de login não preenchendo os campos', () => { 
  LoginActions.loginSubmit();
});

When('submeto ao formulário de login não preenchendo o campo email', () => { 
  LoginActions.loginPassword(user.password);
});

When('submeto ao formulário de login não preenchendo o campo senha', () => { 
  LoginActions.loginEmail(user.email);
});

Then('devo receber um aviso para preenchimento de campo', () => { 
  LoginActions.route(ROUTES.LOGIN);
});

Then('devo permanecer na tela de login', () => { 
  cy.get('input[name="email"]')
  .then(($input) => {
    expect($input[0].validationMessage).to.exist;
  });
});

Then('devo ver entrar na Dashboard', () => {
  LoginActions.validationDashboard(ROUTES.DASHBOARD,texts.welcomeDashboard)
});