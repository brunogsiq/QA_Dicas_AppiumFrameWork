*** Comments ***
3 - Exercício For Simples + Lista:
        Exiba cada uma das frutas de uma lista usando um For Simples.


*** Settings ***
Library         SeleniumLibrary

Test Setup      Log to Console    _P X F_
Test Teardown   Log To Console    Finishing----------------------------------------------------------- |Status|

*** Variables ***
@{LISTA_DE_FRUTAS}      01-PERA    02-UVA    03-MAÇÃ    04-BANANA    05-ACAI    06-MELÃO    07-MELÂNCIA    08-CAQUI    09-MANGA    10-MAMÃO    11-MORANGO


*** Test Cases ***
Caso de teste 03: Exiba cada uma das frutas de uma lista usando um For Simples
    [Tags]    @03CT
    Exibir lista de compras a ser realizada (Frutas)


*** Keywords ***
Exibir lista de compras a ser realizada (Frutas)
    Log To Console    Starting
    Log To Console    ${EMPTY}
    FOR    ${FRUTA}    IN    @{LISTA_DE_FRUTAS}
        Log To Console    ${FRUTA}
    END
    Log To Console    ${EMPTY}
