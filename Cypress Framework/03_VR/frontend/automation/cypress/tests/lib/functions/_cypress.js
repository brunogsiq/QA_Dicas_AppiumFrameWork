
// ----------------------------------------------------------
// arquivo de comandos básicos do cypress
// ----------------------------------------------------------
import { elemHomePage } from "../pageObjects/homePage_";

export function validateUrlCookie() {
    let pO = elemHomePage()
    //visiando a url padrão do projeto
    cy.visit(Cypress.env('baseUrl'));
    //blockRoutes()
    //validando que o logotipo está visível
    cy.waitUntil(() => cy.get(pO.logo).should('be.visible'))
    //aceitando os termos de privacidade
    cy.get(pO.acceptPrivTerm).click()
    cy.get(pO.acceptPrivTerm).should('not.be.visible')
  }