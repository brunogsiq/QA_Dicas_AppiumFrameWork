*** Settings ***
Documentation       Keywords relevantes para autoamão da home page do site

Resource            ../../config/package.robot


*** Keywords ***
Acessar a pagina do LP
    Go To    https://learningprime.com.br

Clicar no segundo produto
    Wait Until Element Is Visible    ${PRODUTO.segundo}
    Click Element    ${PRODUTO.segundo}

Tirar print
    Sleep    5s
    Capture Page Screenshot
