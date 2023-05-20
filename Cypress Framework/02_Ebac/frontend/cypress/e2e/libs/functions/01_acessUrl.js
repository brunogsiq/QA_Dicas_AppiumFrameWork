/// <reference types="cypress" />

import { elemEbacShop } from "../page_Objects/ebacStore";

export function acessUrl() {
    let pO = elemEbacShop()
    cy.visit(Cypress.env("baseUrl"))
    cy.waitUntil(() => cy.get(pO.cLogo).should('be.visible'))
    cy.get(pO.cLogo)
        .should('be.visible')
}

export function acessLogin() {
    let pO2 = elemEbacShop()
    acessUrl()
    cy.get(pO2.cLogin)
        .should("be.visible")
        .click()
    cy.get(pO2.divForm)
        .should("be.visible")
        .should('contain', pO2.tLogin)
    cy.get(pO2.divForm)
        .should('contain', pO2.tRegister)
}


