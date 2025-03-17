Feature: Login

  Scenario: Login com sucesso
    Given acesso a página de login
    When tenho dados de login validos
    When submeto ao formulário de login
    Then devo ver entrar na Dashboard

  Scenario: Informar senha incorreta
    Given acesso a página de login
    When submeto ao formulário de login com uma senha incorreta
    Then devo permanecer na tela de login

  Scenario: Informar email incorreto
    Given acesso a página de login
    When submeto ao formulário de login com um email incorreto
    Then devo permanecer na tela de login

  Scenario: Campos não preenchidos
    Given acesso a página de login
    When submeto ao formulário de login não preenchendo os campos
    Then devo receber um aviso para preenchimento de campo
    And devo permanecer na tela de login

  Scenario: Campo email não preenchido
    Given acesso a página de login
    When submeto ao formulário de login não preenchendo o campo email
    Then devo receber um aviso para preenchimento de campo
    And devo permanecer na tela de login

  Scenario: Campo senha não preenchido
    Given acesso a página de login
    When submeto ao formulário de login não preenchendo o campo senha
    Then devo receber um aviso para preenchimento de campo
    And devo permanecer na tela de login