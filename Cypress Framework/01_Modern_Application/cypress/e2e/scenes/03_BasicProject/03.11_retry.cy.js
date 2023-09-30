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

    it('Retry test', () => {
        //O conceito deste teste é refazer todas as assertivas até que as mesmas sejam todas verdadeiras
        let pO = elemTelaCampoDeTrein()
        cy.get(pO.btnDelay)
            .click()
        cy.get(pO.nCamp)
            //o should retornará validações do mesmo elemento, portanto validar não e sim, obteremos erro.
            //.should('not.exist')
            .should('exist')
            .type('Coringão')
    })
})

