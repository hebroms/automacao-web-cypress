import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import RegisterPage from "../pages/RegisterPage";
import { ROUTES } from '../../support/routes';
import { texts } from '../../support/text';
import { FakeUserGenerator } from '../../support/generators/UserGenerator'
import RegisterActions from "../actions/RegisterActions";

const user = FakeUserGenerator.generate();

Given('acesso a página de registro', () => {
  RegisterActions.visit(ROUTES.REGISTER,texts.register);
});

Given('preencho os campos de senhas', () => {
  RegisterActions.registerPasswords(user.password, user.password);
});

Given('preencho os campos de email e confirmar senha', () => {
  RegisterActions.registerEmailConfirmPasswords(user.email, user.password);
});

Given('preencho os campos de email e senha', () => {
  RegisterActions.registerEmailPasswords(user.email, user.password);
});

When('preencho formulário com senhas diferentes', () => {
  RegisterActions.register(user.email, user.password, user.email);
});

When('preencho formulário com email já cadastrado', () => {
  RegisterActions.register(user.email, user.password, user.password);
});

When('preencho formulário corretamente', () => {
  RegisterActions.register(user.email, user.password, user.password);
});

When('clico em registrar', () => {
  RegisterPage.submit();
});

Then('devo ver a mensagem um alerta de campos obrigatórios', () => {
  cy.get('input[name="email"]')
  .then(($input) => {
    expect($input[0].validationMessage).to.exist;
  });
});

Then('devo ver a mensagem de erro senhas não coincidem', () => {
  RegisterPage.errorMessage().should('contain', texts.errorPasswordMismatch);
});

Then('devo ver a mensagem de erro de email já cadastrado', () => {
  RegisterPage.errorMessage().should('contain', texts.errorEmailExist);
});

Then('devo ser redirecionado para a página de login', () => {
  cy.url().should('include', ROUTES.LOGIN);
});