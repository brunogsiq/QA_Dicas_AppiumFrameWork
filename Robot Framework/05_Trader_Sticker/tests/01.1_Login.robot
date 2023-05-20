*** Settings ***
Documentation       Login tests

Resource            ../resources/main.resource

Test Setup          Star tests
Test Teardown       Finish tests

*** Test Cases ***
Validar Login - Usuário V && Senha V
    [Tags]    s_crt
    Go to login Page
    Submit Credentials           papito@gmail.com    vaibrasil
    User Logged In


Validar Login - Usuário V && Senha X
    [Tags]    s_inc
    Go to login Page
    Submit Credentials            papito@gmail.com    abc123
    Toast Message Should Be       Credenciais inválidas, tente novamente!
    #Thinking Time: técnica baseado no comportamente de pensamento do usuário
    Sleep    1.5

Validar Login - Usuário X && Senha V 
    Go to login Page
    Submit Credentials           corinthians@gmail.com    vaibrasil
    Toast Message Should Be      Credenciais inválidas, tente novamente!
    Sleep    1.5

Validar Login - Usuário X && Senha X
    Go to login Page
    Submit Credentials                                   corinthians@gmail.com    vaicorinthians
    Toast Message Should Be                              Credenciais inválidas, tente novamente!
    Sleep    1.5

Validar Login - Usuário W && Senha V
    Go to login Page
    Submit Credentials White Space Username               vaibrasil
    Toast Message Should Be                               Por favor, informe o seu email!
    Sleep    1.5

Validar Login - Usuário V && Senha W
    Go to login Page
    Submit Credentials White Space Password                papito@gmail.com
    Toast Message Should Be                                Por favor, informe a sua senha secreta!
    Sleep    1.5

Validar Login - Usuário W && Senha W
    Go to login Page
    Submit Credentials White Space All
    Toast Message Should Be                               Por favor, informe suas credenciais!
    Sleep    1.5