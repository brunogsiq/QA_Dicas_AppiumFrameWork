/// <reference types="cypress" /> 

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

    describe('Cypress Basic', () =>
    {
        //Hook criado
        beforeEach(() => {
            let pO = elemTelaCampoDeTrein()
            cy.visit(pO.baseUrl)
            cy.viewport(1440, 900)
            cy.waitUntil(() => cy.xpath(pO.xTitle))
        })

        it('Combo box test', () => {
            let pO = elemTelaCampoDeTrein()
            cy.get(pO.cBEsc)
                .select('2o grau completo')
                .should('have.value', '2graucomp')
                .contains('2o grau completo')
            cy.reload()
            cy.get(pO.cBEsc)
                .select('superior')
                .should('have.value', 'superior')
                .contains('Superior')
        })
    })