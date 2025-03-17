Feature: Registro de Usuário

  Scenario: Exibir erro ao enviar o formulário sem preencher os campos obrigatórios
    Given acesso a página de registro
    When clico em registrar
    Then devo ver a mensagem um alerta de campos obrigatórios

  Scenario: Exibir erro ao enviar o formulário sem preencher o campo email
    Given acesso a página de registro
    And preencho os campos de senhas
    When clico em registrar
    Then devo ver a mensagem um alerta de campos obrigatórios

  Scenario: Exibir erro ao enviar o formulário sem preencher o campo senha
    Given acesso a página de registro
    And preencho os campos de email e confirmar senha
    When clico em registrar
    Then devo ver a mensagem um alerta de campos obrigatórios

  Scenario: Exibir erro ao enviar o formulário sem preencher o campo confirmar senha
    Given acesso a página de registro
    And preencho os campos de email e senha
    When clico em registrar
    Then devo ver a mensagem um alerta de campos obrigatórios

  Scenario: Exibir erro quando as senhas não coincidem
    Given acesso a página de registro
    When preencho formulário com senhas diferentes
    Then devo ver a mensagem de erro senhas não coincidem

  Scenario: Registro de um novo usuário com sucesso
    Given acesso a página de registro
    When preencho formulário corretamente
    Then devo ser redirecionado para a página de login

  Scenario: Exibir erro ao tentar registrar com um e-mail já utilizado
    Given acesso a página de registro
    When preencho formulário com email já cadastrado
    Then devo ver a mensagem de erro de email já cadastrado
