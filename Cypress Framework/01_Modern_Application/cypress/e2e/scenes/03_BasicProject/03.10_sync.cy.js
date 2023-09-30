/// <reference types="cypress" /> 

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe('Cypress Basic', () =>
{
    //Hook criado
    beforeEach(() =>
    {
        let pO = elemTelaCampoDeTrein()
        cy.visit(pO.baseUrl)
        cy.viewport(1440, 900)
        cy.waitUntil(() => cy.xpath(pO.xTitle))
    })

    it('Sync test', () =>
    {
        let pO = elemTelaCampoDeTrein()
        cy.get(pO.nCamp)
            .should('not.exist')
        //.should('not.be.visible') //Não funcionou devido DOM
        cy.get(pO.btnDelay)
            .click()
        cy.waitUntil(() => cy.get(pO.nCamp))
            .type('Funcionando')
            .should('be.visible')
            .and('exist')
            .reload()

        cy.get(pO.btnDelay)
            .click()
        cy.waitUntil(() => cy.get(pO.nCamp))
            .type('Vai Corinthians')
            .should('be.visible')
            .and('exist')
    })
})