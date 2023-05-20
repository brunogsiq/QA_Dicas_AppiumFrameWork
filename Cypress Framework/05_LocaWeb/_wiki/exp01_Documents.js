/*
Identificar cenários e comportamento esperados, relevantes, para garantir e controlar o e2e da funcionalidade de Registrar Domínios.

    https://www.locaweb.com.br/registro-de-dominio/

Regras: 
1 - É possível registrar domínios 
        nacionais
        internacionais

2 - Clientes 
        podem registrar novos domínios

3 - Não-clientes podem registrar novos domínios
        podem registrar novos domínios

4 - possível registrar mais de um dominio na mesma contratação

5 - Só é possível contratar domínios que não estejam em uso (registrado por outras pessoas)

6 - Para dominios nacionais é preciso informar um documento válido:
        CPF 
        CNPJ

7 - Dominios .org.br precisam de documentação que comprovem a existencia da organização

Estruturação do Projeto:
    Proj_LocaçWeb
            _wiki/
                Documents.js 
            frontend/
                automation/
                    cypress/
                        fixtures/
                        support/
                        tests/
                            lib/
                                function/
                                    .js
                                pageObjects/
                                    .js
                            scenes/
                                .cy.test
                    node_modules/
                    cypress.config.js
                    package.json
                    package-lock.json
                    .gitignore
            Readme.md

Dependência utiizadas
    xpath
    waitUntil
    tab
    faker
*/