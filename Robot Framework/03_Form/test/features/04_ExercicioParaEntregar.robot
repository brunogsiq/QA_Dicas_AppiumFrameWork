*** Comments ***
4 - Exercício If Inline + For in Range:
    Crie um loop que conte quantos números par existem entre 0 e 10, usando if inline;

    END
    END
    Log To Console    Os numero são: @{LISTA_NUMEROS_PARES}

    Log To Console    ${EMPTY}


*** Settings ***
Library             SeleniumLibrary
Library             Collections

Test Setup          Log to Console    _P X F_
Test Teardown       Log To Console    Finishing----------------------------------------------------------- |Status|


*** Test Cases ***
Cenário de teste 04: Crie um loop que conte quantos números par existem entre 0 e 10, usando if inline
    Crie um loop que conte e diga quantos números pares há entre 0 e 10 (6)


*** Keywords ***
Crie um loop que conte e diga quantos números pares há entre 0 e 10 (6)
    [Arguments]    ${CONTD}=0
    @{LISTA_DE_NUMEROS}    Create List
    ...    ${0}
    ...    ${1}
    ...    ${2}
    ...    ${3}
    ...    ${4}
    ...    ${5}
    ...    ${6}
    ...    ${7}
    ...    ${8}
    ...    ${9}
    ...    ${10}
    Log To Console    Starting
    Log To Console    ${EMPTY}
    Log To Console    Os numeros são:
    Log To Console    ${EMPTY}
    FOR    ${NUMERO}    IN    @{LISTA_DE_NUMEROS}
        IF    ${NUMERO} % 2 == 0
            @{LISTA_PARES}    Create List    ${NUMERO}
            Log To Console    @{LISTA_PARES}
            ${CONTD}    Evaluate    ${CONTD} + 1
            Log To Console    ${EMPTY}
        END
    END
    Log To Console    Totalizando um total de ${CONTD} números Pares.
    Log To Console    ${EMPTY}
