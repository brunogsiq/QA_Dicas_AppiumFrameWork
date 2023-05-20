*** Settings ***

Library     SeleniumLibrary
Resource         ../pageObjects/Variables.robot

*** Keywords ***

#01.0 - [Web] - [Home Page] - Acesso a url padrão do projeto - Validar acesso ao link.
Dado que desejo a acessar a url padrão do projeto,
    Maximize Browser Window
Quando inserir o link disponibilizado,
    Wait Until Element Is Visible    https://www.amazon.com.br    10s
Então o sistema deve apresentar a tela home page.
    Element Should Be Visible        ${LOGO_HOME}

#01-1 - [Web] - [Home Page] - Acesso a url padrão do projeto - Validar visualização de menus.
Dado que desejo visualizar os menu da tela home page,
    Dado que desejo a acessar a url padrão do projeto,
Quando acessar a url padrão do projeto,
    Quando inserir o link disponibilizado,
Então devo conseguir visualizar o menu superior: Todos, Venda na amazon, Mais vendidos, Oferta do Dia, Música, Atendimento ao Cliente, Prime, Livros, Eletrônicos, Amazon Echo, Conheça os dispositivos Echo.
    Element Should Be Visible    ${MN_Todos}
    Element Should Be Visible    ${MN_Venda_na_amazon}
    Element Should Be Visible    ${MN_Mais_vendidos}
    Element Should Be Visible    ${MN_Oferta_do_Dia} 
    Element Should Be Visible    ${MN_Música}
    Element Should Be Visible    ${MN_Atendimento_ao_Cliente}
    Element Should Be Visible    ${MN_Prime}
    Element Should Be Visible    ${MN_Livros}
    Element Should Be Visible    ${MN_Eletrônicos} 

#02.0 - [Web] - [Home Page] - Acesso ao menu de eletrônicos.
Dado que desejo acessar o menu eletrônicos,
    Dado que desejo a acessar a url padrão do projeto,
    Quando inserir o link disponibilizado,
    Então o sistema deve apresentar a tela home page.
Quando clicar na opção Eletrônicos do menu,
    Click Element                    ${MN_Eletrônicos}
    Wait Until Element Is Visible    ${TTL_MN_Eletronicos}
    Wait Until Page Contains         ${TXT_MN_Eletronicos}
Então o sistema deve redirecionar para a página de eletrônicos e tecnologia.
    Wait Until Element Is Visible    ${TTL_MN_Eletronicos}
    Element Text Should Be           ${TTL_MN_Eletronicos}    Eletrônicos e Tecnologia

#02.1 - [Web] - [Mn. Eletrônicos] - Acesso ao menu de eletrônicos - Visualizar seção para pesquisa de produto (Computadores e informática).
Dado que desejo pesquisar um produto na seção de Computadores e informática,
    Dado que desejo a acessar a url padrão do projeto,
    Quando inserir o link disponibilizado,
    Então o sistema deve apresentar a tela home page.
    Quando clicar na opção Eletrônicos do menu,
Quando estiver acessando a seção correta,
    Então o sistema deve redirecionar para a página de eletrônicos e tecnologia.
Então o sistema deve exibir a opção "${SÇ_ET_COMPINFO}".
    Element Should Be Visible           xpath=//span[@dir='auto'][contains(.,'${SÇ_ET_COMPINFO}')]

#03.0 - [Web] - [Home Page] - Pesquisa de produto válido.
Dado que desejo a realizar a pesquisa por um produto,
    Dado que desejo a acessar a url padrão do projeto,
    Quando inserir o link disponibilizado,
    Então o sistema deve apresentar a tela home page.
E inseri um dado no campo para realização de busca de produto "${SEARCH}",
    Click Element    ${CAMPO_PESQUISADEPRODUTO}
    Input Text       ${CAMPO_PESQUISADEPRODUTO}    ${SEARCH}
Quando clicar na opção Pesquisar identificada pelo ícone de Lupa,
    Click Element    ${BTN_PESQUISAR}
Então o sistema deve retornar uma pesquisa condizente com as informações inseridas sobre "${SEARCH}".
    Wait Until Element Is Visible    ${ELM_DEPARTAMENTO}
    Element Text Should Be           ${ELM_PESQ01}    ${SEARCH}

#03.1 - [Web] - [Home Page] - Pesquisa de produto inválido.
Dado que desejo a realizar a pesquisa por um produto,
    Dado que desejo a acessar a url padrão do projeto,
    Quando inserir o link disponibilizado,
    Então o sistema deve apresentar a tela home page.
E inseri um dado no campo para realização de busca de produto "${SEARCH}",
    Click Element    ${CAMPO_PESQUISADEPRODUTO}
    Input Text       ${CAMPO_PESQUISADEPRODUTO}    ${SEARCH}
    Quando clicar na opção Pesquisar identificada pelo ícone de Lupa,
    Então o sistema deve retornar uma pesquisa condizente com as informações inseridas sobre "${SEARCH}".

#04.0 - [Web] - [Home Page] - Acesso a tela de cadastro - Validar acesso a a tela de Login.
    [Tags]        Login     cadastro
Dado que desejo acessar a tela de cadastro,
    Dado que desejo a acessar a url padrão do projeto,
    Quando inserir o link disponibilizado,
    Então o sistema deve apresentar a tela home page.
E ao visualizar a opção para login,
    Wait Until Element Is Visible    ${ELM_LOGIN}
Quando clicar na opção de login,
    Click Element                    ${ELM_LOGIN}
    Wait Until Element Is Visible    ${LOGO_LOGIN}
    Wait Until Element Is Visible    ${OPC_CRTACC}
Entao o sistem deve redirecionar para tela de login.
    Element Should Be Visible        ${LOGO_LOGIN}
    Element Should Be Visible        ${OPC_CRTACC}

#04.1 - [Web] - [Home Page] - Acesso a tela de cadastro - Validar acesso a tela de cadastro.
    Dado que desejo acessar a tela de cadastro,
    E ao visualizar a opção para login,
Quando clicar na opção " Criar sua conta da Amazon ",
    Click Element                    ${ELM_LOGIN}
    Wait Until Element Is Visible    ${LOGO_LOGIN}    10s
    Wait Until Element Is Visible    ${OPC_CRTACC}    10s
    Click Element    ${BTN_CRTACC}
    Wait Until Element Is Visible    ${LOGO_CRTACC}    15S
Então o sistema deve redirecionar para tela de cadastro de novo usuário.
    Element Should Be Visible        ${LOGO_CRTACC}
