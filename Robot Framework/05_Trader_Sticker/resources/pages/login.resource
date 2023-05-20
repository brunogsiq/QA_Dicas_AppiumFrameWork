*** Settings ***
Documentation    Página de login

Library          Browser

*** Keywords ***

Go to login Page
    New Page                      http://trade-sticker-dev.vercel.app

Submit Credentials
    [Arguments]                   ${email}    ${password}
    Fill Text                     input[name=email]        ${email}
    Fill Text                     input[name=password]     ${password}
    Click                         css=button >> text=Entrar
    Log To Console                ${EMPTY}

Submit Credentials White Space Username
    [Arguments]                   ${password}
    Fill Text                     input[name=password]     ${password}
    Click                         css=button >> text=Entrar
    Log To Console                ${EMPTY}

Submit Credentials White Space Password
    [Arguments]                   ${email}
    Fill Text                     input[name=email]        ${email}
    Click                         css=button >> text=Entrar
    Log To Console                ${EMPTY}

Submit Credentials White Space All
    Click                         css=button >> text=Entrar
    Log To Console                ${EMPTY}

Toast Message Should Be 
    [Arguments]                    ${expected_message}
    ${locator}      Set Variable   css=.Toastify__toast-body div >> text=${expected_message}
    Wait For Elements State        ${locator}    visible    05
    #Até que um elemento esteja visível em um determinado periodo de tempo
    Log To Console    ${EMPTY}