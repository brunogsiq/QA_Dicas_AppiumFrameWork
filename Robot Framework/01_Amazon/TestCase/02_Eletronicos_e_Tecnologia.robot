*** Comments ***

    Os teste serão escritos utilizando o seguinte padrão de idenficação:
        #Nº  - Sistema - Tela - Cenáro de Teste - Caso de Teste (Objetivo do mesmo)

*** Settings ***

Resource         ../Keywords/Resources.robot
Resource         ../pageObjects/Variables.robot

Suite Setup      Log To Console      Início da execução.____________________________________________________P X F_
Test Setup       Open Browser        ${urlProjeto}    ${navegador}
Test Teardown    Close Browser
Suite Teardown   Log To Console      Execução Finalizada. Resultado(s) do(s) Teste(s).______________________P X F_

*** Test Cases ***

02.1 - [Web] - [Mn. Eletrônicos] - Acesso ao menu de eletrônicos - Visualizar seção para pesquisa de produto (Computadores e informática).
    [Documentation]    Este teste realizar a verificação de busca de um produto.
    [Tags]             busca_produtos    lista_busca
    Dado que desejo pesquisar um produto na seção de Computadores e informática,
    Quando estiver acessando a seção correta,
    Então o sistema deve exibir a opção "Computadores e Informática".
    Então o sistema deve exibir a opção "Tablets".