*** Settings ***
Documentation    Página de dashboard
Library          Browser


*** Keywords ***

User Logged In
    Log To Console    ${EMPTY}
    ${SLOGAN2}      Set Variable   Aquela figurinha incrível a um clique de distância.
    Get Text                       css=.header-content strong    equal    ${SLOGAN2}


Search User
    [Arguments]      ${target}
    Fill Text        input[placeholder^=Busque]    ${target}
    Click            css=button >> text=Buscar

Without nothing
    Get Text         css=.notice-container strong >> text=Essa busca não retornou dados!
    Click    css=button >> text=Voltar

Search User Aleatory
    [Arguments]    ${name_User}
    Click    css=button >> text=Buscar
    Get Text     css=.user-item strong >> text=${name_User}
    Get Text     css=.user-item strong >> text=${name_User}
    Get Text     css=.user-item strong >> text=${name_User}

Search User Aleatory Two
    Click    css=button >> text=Buscar

Select Sticker
    [Arguments]    ${name}
    Click    xpath=//img[@alt="${name}"]

Get In Touch
    Click    css=button >> text=Entrar em contato

Whatsapp Sticker Message
    Log To Console    ${EMPTY}
    [Arguments]    ${sticker_name}
    ${expected_message}    Set Variable
    ...    Oi, achei o seu contato no Trade Sticker. Estou interessado(a) na figurinha do ${sticker_name}, bora negociar?
    Switch Page    NEW
    Wait For Elements State    css=p >> text=${expected_message}    visible    05