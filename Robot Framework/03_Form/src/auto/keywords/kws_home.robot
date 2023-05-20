*** Settings ***
Documentation       Keywords relevantes para autoamão da home page do site

Resource            ../../config/package.robot


*** Keywords ***
Imprimir ficha cadastral do aluno
    Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Nome}
    Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Idade}
    Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Rua}
    Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Numero}
    Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Cep}
    Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Bairro}
    Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Cidade}
    Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Estado}
