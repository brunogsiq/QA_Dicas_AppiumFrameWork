*** Settings ***
Documentation        Conteúdos da tela home

Resource            ../resources/main.resource

Test Setup          Star tests
Test Teardown       Finish tests

*** Variables ***
${SLOGAN}       Conectando colecionadores de figurinhas da copa.
${TITLE1}       Acesse sua conta
${TITLE2}       Seu email
${TITLE3}       Senha secreta


*** Test Cases ***
Validar conteúdo: Slogan
    Go to login Page
    Set Browser Timeout    02
    Get Text    .logo-container h2    contains    ${SLOGAN}
    Take Screenshot


Validar conteúdo: Acesse sua conta
    Go to login Page
    Set Browser Timeout    02
    Get Text    .form-container h2    contains    ${TITLE1}
    Take Screenshot


Validar conteúdo: Seu email
    [Tags]    01
    Go to login Page
    Set Browser Timeout    02
    Get Attribute    css=input[name=email]    placeholder    ==    Seu email
    Take Screenshot


Validar conteúdo: Senha secreta
    [Tags]    02
    Go to login Page
    Set Browser Timeout    02
    Get Attribute    css=input[name=password]    placeholder    ==    Senha secreta
    Take Screenshot

