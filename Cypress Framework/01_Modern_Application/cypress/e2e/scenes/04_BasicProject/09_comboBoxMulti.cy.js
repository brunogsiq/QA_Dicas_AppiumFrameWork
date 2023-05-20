/// <reference types="cypress" /> 

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe('Cypress Basic', () => {
    //Hook criado
    beforeEach(() => {
        let pO = elemTelaCampoDeTrein()
        cy.visit(pO.urlBase)
        cy.viewport(1440, 900)
        cy.waitUntil(() => cy.xpath(pO.xTitle))
    })

    it('Combo box test', () => {
        let pO = elemTelaCampoDeTrein()
        let array = ['Futebol', 'Karate', 'Natação', 'Corrida', 'O que é esporte?'];
        cy.get(pO.formEsport)
        //Para realizar esta seleção é necessário utilizar a proprieda value do elemento
        .select('natacao', 'Corrida', 'nada') 
        // .expect([array])
        // .should('not.be.empty')
        // .contains('Corrida')
        // .contains('Karate')
        // .contains('Natação')
        // .contains('O que é esporte?')
    })
})