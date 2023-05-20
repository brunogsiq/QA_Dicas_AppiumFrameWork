*** Comments ***
2 - Exercício Argumentos e Retornos + If Simples:
        Criar uma keyword que receba idade e retorne o ano de nascimento,
            Se o ano for menor que 2000, exibir mensagem dizendo que nasceu no século passado.


*** Settings ***
Library         SeleniumLibrary


Test Setup      Log to Console    _P X F_
Test Teardown   Log To Console    Finishing----------------------------------------------------------- |Status|

*** Variables ***
${MENSAGEM_MOTIVACIONAL}    Hmm...Você está se tornando vintage, NASCEU NO SÉCULO PASSADO.
${ANO_ATUAL}    2022
${ANO_FRASE}    2000

*** Test Cases ***
Caso de teste 02: Calcular ano de nascimento.
    [Tags]    @02CT
    Verificar ano de nascimento a partir da equacao


*** Keywords ***
Verificar ano de nascimento a partir da equacao
    [Arguments]    ${IDADE}=36    ${ANO_NASCIMENTO}=
    ${ANO_NASCIMENTO}    Evaluate    ${ANO_ATUAL} - ${IDADE}
    IF    ${ANO_NASCIMENTO} < ${ANO_FRASE}
        Log To Console    Starting
        Log To Console    ${EMPTY}
        Log To Console    Sua idade eh: ${IDADE}.
        Log To Console    Nascido em: ${ANO_NASCIMENTO}, ${MENSAGEM_MOTIVACIONAL}
        Log To Console    ${EMPTY}
    END
