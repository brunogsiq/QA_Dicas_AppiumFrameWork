*** Settings ***

Documentation    Este é um projeto do curso da Chronos Academy

Library          SeleniumLibrary
Library          FakerLibrary    locale=pt_BR

Suite Setup      Log To Console      Início da execução.____________________________________________________P X F_
Test Setup       Open Browser        ${urlPadrao}    ${navegador}
Test Teardown    Close Browser
Suite Teardown   Log To Console      Execução Finalizada. Resultado(s) do(s) Teste(s).______________________P X F_

*** Variables ***
${urlPadrao}                         https://www.demoblaze.com
${navegador}                         chrome

*** Test Cases ***

01 - Pesquisa de item
    Navegador maximizado 01
    1 Aguarde elemento aparecer
    Clica no link01
    2 Aguarde elemento aparecer
    Click link02 
    3 Aguarde elemento aparecer
    Click Elemento 01
    Validar alerta de adição ao carrinho

02 - Adicionar item ao carrinho
    Navegador maximizado 02
    Adicionar item ao carrinho de compra
    Clicar no botão
    Aguarde elemento aparecer = nome
    Preencha o nome
    Preencha o país
    Preencha a cidade
    Preencha o cartão
    Preencha o mês de vencimento
    Preencha o ano de vencimento
    Clique na opção Purchase
    Visualize o alerta de confirmação
    Clique na opção confirmar


*** Keywords ***
Navegador maximizado 01
    Maximize Browser Window
1 Aguarde elemento aparecer
    Wait Until Element Is Visible    link=Laptops
Clica no link01
    Click Link                       Laptops
2 Aguarde elemento aparecer
    Wait Until Element Is Visible    link=MacBook Pro
Click link02
    Click Link                       MacBook Pro
3 Aguarde elemento aparecer
    Wait Until Element Is Visible    xpath=//div[2]//a
Click Elemento 01
    Click Element                    xpath=//div[2]//a
Validar alerta de adição ao carrinho
    Alert Should Be Present          

Navegador maximizado 02
    Maximize Browser Window
Adicionar item ao carrinho de compra
    Click Link                       Cart
Clicar no botão
    Click Button                     css=.btn-success
Aguarde elemento aparecer = nome
    Wait Until Element Is Visible    id=name
Preencha o nome
    Input Text                       id=name    Bruno Siqueira
Preencha o país
    Input Text                       id=country    Brasil
Preencha a cidade
    Input Text                       id=city    Santos
Preencha o cartão
    Input Text                       id=card    12345678910
Preencha o mês de vencimento
    Input Text                       id=month   Novembro
Preencha o ano de vencimento
    Input Text                       id=year    2027
Clique na opção Purchase
    Click Button                     xpath=//button[text()="Purchase"]
Visualize o alerta de confirmação
    Element Text Should Be           css=.sweet-alert > h2    Thank you for your purchase!
Clique na opção confirmar
    Click Button                     css=.confirm