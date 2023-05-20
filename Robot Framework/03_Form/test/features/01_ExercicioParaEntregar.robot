*** Comments ***
1 - Exercício Dicionário:    
        Exibir nome, idade, rua, numero, cep, bairro, cidade e estado no console a partir de um dicionário.


*** Settings ***
Library         SeleniumLibrary

Test Setup      Log to Console    _P X F_
Test Teardown   Log To Console    Finishing----------------------------------------------------------- |Status|

*** Variables ***
&{FORMULARIO_CADASTRO_ALUNO}    Nome=Bruno Goncalves Siqueira    Idade=36    Rua=Alexandre H.    Numero=1910    Cep=01091 910    Bairro=São Jorge    Cidade=Santos    Estado=SP


*** Test Cases ***
Caso de teste 01: Exibir Dados De Um Formulario De Cadastro
    [Tags]    @01CT
    Exibir ficha/formulario cadastral do aluno


*** Keywords ***
Exibir ficha/formulario cadastral do aluno
    Log To Console    Starting
    Log To Console    ${EMPTY}
    Log To Console    NOME: ${FORMULARIO_CADASTRO_ALUNO.Nome}
    Log To Console    IDADE: ${FORMULARIO_CADASTRO_ALUNO.Idade}
    Log To Console    RUA: ${FORMULARIO_CADASTRO_ALUNO.Rua}
    Log To Console    NUMERO: ${FORMULARIO_CADASTRO_ALUNO.Numero}
    Log To Console    CEP: ${FORMULARIO_CADASTRO_ALUNO.Cep}
    Log To Console    BAIRRO: ${FORMULARIO_CADASTRO_ALUNO.Bairro}
    Log To Console    CIDADE: ${FORMULARIO_CADASTRO_ALUNO.Cidade}
    Log To Console    ESTADO: ${FORMULARIO_CADASTRO_ALUNO.Estado}
    Log To Console    ${EMPTY}