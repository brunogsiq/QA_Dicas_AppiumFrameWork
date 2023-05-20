/// <reference types="cypress" />

import { elemHomePage } from "../pageObjects/homePage_"
import { validateUrlCookie } from "./_cypress"

/*
Dado que a tela Home page está sendo visualizada,
Quando clicar na opção [Pra Você],
Então o sistema apresentar a publicidade onde está continda a opção [Onde usar o meu cartão].
*/

export function validateAccessPV (){
    let pO = elemHomePage()
    validateUrlCookie()
    cy.get(pO.aPraVc)
        .contains('Pra Você')
        .click()
    cy.waitUntil(() =>  cy.get(pO.aRedeCred).should('be.visible'))
    cy.get(pO.aRedeCred)
        .contains(pO.txtRedeCred)
}