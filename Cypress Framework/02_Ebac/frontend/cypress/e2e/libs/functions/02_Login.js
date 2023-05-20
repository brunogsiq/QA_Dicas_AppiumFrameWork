/// <reference types="cypress" /> 

import { elemEbacShop } from "../page_Objects/ebacStore";

export function validateLogin(testData) {
    let pO = elemEbacShop()
    cy.get(pO.cIdentUsername)
        .should("be.visible", pO.tUsername)
        .contains(pO.tUsername)
    cy.get(pO.cIdentPass)
        .should("be.visible", pO.tPassword)
        .should('contain', pO.tPassword)

    if (testData.username != '') {
        //Inserindo usuário, dado no cenário.
        cy.get(pO.iUsername)
            .type(testData.username)
    }
    if (testData.password != '') {
        //Inserindo senha, dado no cenário.
        cy.get(pO.iPassword)
            .type(testData.password)
    }

    if (testData.username == '') {
        cy.get(pO.btnLogin)
            .click()
        cy.waitUntil(() => cy.get(pO.cError).should('be.visible'))
        cy.get(pO.cError)
            .should('contain', pO.tLoginVazio)
    }
    if (testData.username != '' && testData.password == '') {
        cy.get(pO.btnLogin)
            .click()
        cy.waitUntil(() => cy.get(pO.cError).should('be.visible'))
        cy.get(pO.cError)
            .should('contain', pO.tPassVazio)
    }

    if (testData.testOk == true) {
        cy.get(pO.btnLogin)
            .click()
        cy.get(pO.cIdentUser).should('contain', "Welcome")
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', "Olá")
        cy.get('.page-title').should('contain', "Minha conta")
    }
}
