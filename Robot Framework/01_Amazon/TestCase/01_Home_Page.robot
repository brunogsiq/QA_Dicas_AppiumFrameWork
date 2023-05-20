*** Comments ***

    Os teste serão escritos utilizando o seguinte padrão de idenficação:
        #Nº  - Sistema - Tela - Cenáro de Teste - Caso de Teste (Objetivo do mesmo)
    Os cenários de teste serão escritos em Gherkin.

*** Settings ***

Resource         ../Keywords/Resources.robot
Resource         ../pageObjects/Variables.robot

Suite Setup      Log To Console      Início da execução.____________________________________________________P X F_
Test Setup       Open Browser        ${urlProjeto}    ${navegador}
Test Teardown    Close Browser
Suite Teardown   Log To Console      Execução Finalizada. Resultado(s) do(s) Teste(s).______________________P X F_

*** Test Cases ***

#Nº  - Sistema - Tela - Cenáro de Teste - Caso de Teste (Objetivo do mesmo)
01.0 - [Web] - [Home Page] - Acesso a url padrão do projeto - Validar acesso ao link.
    Dado que desejo a acessar a url padrão do projeto,
    Quando inserir o link disponibilizado,
    Então o sistema deve apresentar a tela home page.

01-1 - [Web] - [Home Page] - Acesso a url padrão do projeto - Validar visualização de menus superiores.
    Dado que desejo visualizar os menu da tela home page,
    Quando acessar a url padrão do projeto,
    Então devo conseguir visualizar o menu superior: Todos, Venda na amazon, Mais vendidos, Oferta do Dia, Música, Atendimento ao Cliente, Prime, Livros, Eletrônicos, Amazon Echo, Conheça os dispositivos Echo.

02.0 - [Web] - [Home Page] - Acesso ao menu de eletrônicos.
    [Documentation]    Este teste realiza a verificação do menu eletrônicos do site "https://www.amazon.com.br",
    ...                e também realizar a verificação da categoaria "Computadores e Informática".
    [Tags]        menus    categorias
    Log to console    ${EMPTY}
    Dado que desejo acessar o menu eletrônicos,
    Quando clicar na opção Eletrônicos do menu,
    Então o sistema deve redirecionar para a página de eletrônicos e tecnologia.

