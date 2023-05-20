*** Settings ***

Resource         ../Keywords/Resources.robot
Resource         ../pageObjects/Variables.robot

Suite Setup      Log To Console      Início da execução.____________________________________________________P X F_
Test Setup       Open Browser        ${urlProjeto}    ${navegador}
Test Teardown    Close Browser
Suite Teardown   Log To Console      Execução Finalizada. Resultado(s) do(s) Teste(s).______________________P X F_

*** Test Cases ***

03.0 - [Web] - [Home Page] - Pesquisa de produto válido.
    [Documentation]    Este teste verifica a busca de busca_produtos.
    ...                Especificamente nosso teste foi realizado com a palavra chave Xbox Series S.
    [Tags]             buscar_produto    lista_busca
    Dado que desejo a realizar a pesquisa por um produto,
    E inseri um dado no campo para realização de busca de produto "Xbox Series S",
    Quando clicar na opção Pesquisar identificada pelo ícone de Lupa,
    Então o sistema deve retornar uma pesquisa condizente com as informações inseridas sobre "Console Xbox Series S".

03.1 - [Web] - [Home Page] - Pesquisa de produto inválido.
    [Documentation]    Este teste verifica a busca de busca_produtos.
    ...                Especificamente nosso teste foi realizado com a palavra chave Xbox Series S.
    [Tags]             buscar_produto    lista_busca
    Dado que desejo a realizar a pesquisa por um produto,
    E inseri um dado no campo para realização de busca de produto "Xbox Series S",
    Quando clicar na opção Pesquisar identificada pelo ícone de Lupa,
    Então o sistema deve retornar uma pesquisa condizente com as informações inseridas sobre "@#$%".
