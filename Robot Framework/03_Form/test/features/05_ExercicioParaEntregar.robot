*** Comments ***
5- Exercício Try + Except + Finally:
    A partir da lista ["A", 1, "B", 2, "C" e 3], adicionar somente os números numa nova lista,
    tratar os caracteres como exceção e exibir a nova lista a cada iteração usando Finally.


*** Settings ***
Library             SeleniumLibrary
Library             OperatingSystem
Library    Collections

Test Setup          Log to Console    _P X F_
Test Teardown       Log To Console    Finishing----------------------------------------------------------- |Status|


*** Variables ***
@{LISTA_TOTAL}      "A"    1    "B"    2    "C"    3


*** Test Cases ***
Caso de teste 04: Exibir nova lista somente com números
    Selecionar e exibir apenas itens inteiros de uma lista


*** Keywords ***
Selecionar e exibir apenas itens inteiros de uma lista
    Log To Console    ${EMPTY}

    FOR    ${ITEM}    IN    @{LISTA_TOTAL}
        TRY 
            ${VALIDACAO}    Run keyword And Return Status    Evaluate    ${ITEM} + 1   
            ${RESULTADO}    Set Variable    ${VALIDACAO}
            IF    ${RESULTADO} == True
            @{LISTA_TOTAL2}    Create List    ${ITEM}
            Log To Console     @{LISTA_TOTAL2}
            END       
        EXCEPT
            Log To Console    ${EMPTY}   
        FINALLY
            Log To Console    ${EMPTY} 
        END
    END
    Log to Console    Embora eu quase fique louco consegui!