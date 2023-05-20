*** Settings ***

Library    SeleniumLibrary

*** Variables ***

${URLPADRAO}         https://robotizandotestes.blogspot.com
${BROWSER}           chrome
${BTN_SEARCH}        css=button.search-expand.touch-icon-button
${INPUT_SEARCH}      name=q
${TEXT_SEARCH_01}    Introdução ao robot framework
${TEXT_SEARCH_02}    Corinthians
${SUBMIT_SEARCH}     css=input.search-action.flat-button
${MSG_SEARCH_01}     Introdução ao Robot Framework
${MSG_SEARCH_02}     Nenhum resultado encontrado
${LINK_POST}         xpath=//a[contains(text(), 'Season Premiere: Introdução ao Robot Framework')]
${IMG_ROBO}          xpath=//img[contains(@src, 'if_Robot_18_385830_grande')]
${TEXT_POST}        O que é Robot Framework?

*** Keywords ***

Dado que foi acessada a url padrão do projeto
    Maximize Browser Window
    Title Should Be    Robotizando Testes
Quando realizar uma pesquisa válida de conteúdo através do campo Pesquisar,
    Wait Until Element Is Visible    ${BTN_SEARCH}
    Click Button                     ${BTN_SEARCH}
    Input Text                       ${INPUT_SEARCH}    ${TEXT_SEARCH_01}
    Click Element                    ${SUBMIT_SEARCH}
 Então o sistema deve retornar resultado(s) de acordo o assunto.
     Page Should Contain    ${MSG_SEARCH_01}    

Quando realizar uma pesquisa inválida de conteúdo através do campo Pesquisar,
    Click Button     ${BTN_SEARCH}
    Input Text       ${INPUT_SEARCH}    ${TEXT_SEARCH_02}
    Click Element    ${SUBMIT_SEARCH}
 Então o sistema deve retornar nenhuma resultado(s) de acordo o assunto.
     Page Should Contain                ${MSG_SEARCH_02}

Quando realizar pesquisa: "${TEXT_SEARCH_01}",
    Quando realizar uma pesquisa válida de conteúdo através do campo Pesquisar,
    Click Element    ${LINK_POST}
    Wait Until Page Contains    ${TEXT_POST}
Então o sistema deve validar a imagem do robô é visível,
    Page Should Contain Image    ${IMG_ROBO}
E apresentar: "${TEXT_SEARCH_01}"
    Page Should Contain    ${TEXT_SEARCH_01}