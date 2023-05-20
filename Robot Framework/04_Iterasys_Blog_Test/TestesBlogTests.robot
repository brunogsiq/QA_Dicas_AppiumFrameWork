*** Settings ***

Resource         ResourceBlogTests.robot

Suite Setup      Log To Console      Início da execução.____________________________________________________P X F_
Test Setup       Open Browser        ${URLPADRAO}    ${BROWSER}
Test Teardown    Close Browser
Suite Teardown   Log To Console      Execução Finalizada. Resultado(s) do(s) Teste(s).______________________P X F_

*** Test Cases ***
01 - Validar pesquisa de conteúdo - Pesquisa válida "Introdução ao Robot Framework"
    Dado que foi acessada a url padrão do projeto
    Quando realizar uma pesquisa válida de conteúdo através do campo Pesquisar,
    Então o sistema deve retornar resultado(s) de acordo o assunto.

 02 - Validar pesquisa de conteúdo - Pesquisa inválida "Corinthians"
    Dado que foi acessada a url padrão do projeto
    Quando realizar uma pesquisa inválida de conteúdo através do campo Pesquisar,
    Então o sistema deve retornar nenhuma resultado(s) de acordo o assunto.

03 - Validar leitura de um post do blogspot - Season Premiere: Introdução ao Robot Framework
    Dado que foi acessada a url padrão do projeto
    Quando realizar pesquisa: "Season Premiere: Introdução ao Robot Framework",
    Então o sistema deve validar a imagem do robô é visível,
    E apresentar: "nesse post vou apresentar-lhes o astro deste blog"

