/// <reference types="cypress" /> 

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

    describe('Cypress Basic', () => {
        //Hook criado
        beforeEach(() => {
            let pO = elemTelaCampoDeTrein()
            cy.visit(pO.baseUrl)
            cy.viewport(1440, 900)
            cy.waitUntil(() => cy.xpath(pO.xTitle))
        })

        it('New search tests', () => {
            let pO = elemTelaCampoDeTrein()
            cy.get(pO.btnList)
                .click()
            cy.get('#lista li').find('span')
                .should('contain', 'Item 1')
            cy.get(pO.btnList)
                .click()
            cy.get('#lista li').find('span')
                .should('contain', 'Item 2')
        })
    })