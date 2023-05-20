*** Settings ***

Resource         Resources.robot
Resource         Variables.robot

Suite Setup      Log To Console      Início da execução.____________________________________________________P X F_
Test Setup       Open Browser        ${urlProjeto}    ${navegador}
Test Teardown    Close Browser
Suite Teardown   Log To Console      Execução Finalizada. Resultado(s) do(s) Teste(s).______________________P X F_

*** Test Cases ***

04.0 - [Web] - [Home Page] - Acesso a tela de cadastro - Validar acesso a a tela de Login.
    [Tags]        Login     cadastro
    Dado que desejo acessar a tela de cadastro,
    E ao visualizar a opção para login,
    Quando clicar na opção de login,
    Entao o sistem deve redirecionar para tela de login.

04.1 - [Web] - [Home Page] - Acesso a tela de cadastro - Validar acesso a tela de cadastro.
    Dado que desejo acessar a tela de cadastro,
    Quando clicar na opção "Criar sua conta da Amazon",
    Então o sistema deve redirecionar para tela de cadastro de novo usuário.
