*** Settings ***
Library             SeleniumLibrary
Resource            ../../src/config/package.robot

Test Setup          Abrir navegador
Task Teardown       Fechar navegador


*** Test Cases ***
Caso de teste 01
    [Tags]    tc1
    Acessar a pagina do LP
    Clicar no segundo produto
    Tirar print
