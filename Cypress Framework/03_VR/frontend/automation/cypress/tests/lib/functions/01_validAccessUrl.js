/// <reference types="cypress" />

import { elemHomePage } from "../pageObjects/homePage_"

/*
Dado que foi inserido a url padrão do projeto,
Quando houver o carregamento do site,
Então o sistema deve apresentar o logotipo da empresa, validando o acesso.
*/

export function validateUrl() {
  let pO = elemHomePage()
  //visiando a url padrão do projeto
  cy.visit(Cypress.env('baseUrl'));
  //validando que o logotipo está visível
  cy.waitUntil(() => cy.get(pO.logo).should('be.visible'));
}

/*
Dado que a home page está sendo visualizada,
E o alerta de termos de privacidade está visível pois não foi aceito,
Quando clicar na opção [Aceitar termo de privacidade],
Então o sistema deve fechar o alerta.
*/

export function validateAcceptTerms() {
  let pO = elemHomePage()
  //aceitando os termos de privacidade
  cy.get(pO.acceptPrivTerm).click()
  cy.get(pO.acceptPrivTerm).should('not.be.visible')
}