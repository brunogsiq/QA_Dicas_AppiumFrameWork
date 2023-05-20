/// <reference types="cypress" /> 

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento"

describe('Cypress Basic', () => {
    //Hook criado
    beforeEach(() => {
        let pO = elemTelaCampoDeTrein()
        cy.visit(pO.urlBase)
        cy.viewport(1440, 900)
        cy.waitUntil(() => cy.xpath(pO.xTitle))
    })

    it('Radio button test', () => {
        let pO = elemTelaCampoDeTrein()
        cy.get(pO.rdBtnMasc)
        .click()
        .should('be.checked')
        cy.get(pO.rdBtnFem)
        .click()
        .should('be.checked')
        cy.get(pO.rdBtnMasc)
        .should('not.be.checked')
        cy.get('[name=formSexo]') // Utiliznado colchetes, procuramos por elementos com determinadas Propriedades.
        .should('have.length', 2)   // Aqui verificamos que há dois elementos com a proprieda acima determinada.
    });
})