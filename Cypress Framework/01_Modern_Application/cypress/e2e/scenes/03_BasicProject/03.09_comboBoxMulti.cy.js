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

    it('Combo box test', () =>
    {
        let pO = elemTelaCampoDeTrein()
        let array = ['Futebol', 'Karate', 'Natação', 'Corrida', 'O que é esporte?'];
        cy.get(pO.formEsport)
            //Para realizar esta seleção é necessário utilizar a proprieda value do elemento
            .select('natacao', 'Corrida', 'nada')
            expect(array).to.have.include.members(['Corrida', 'Karate'])
            expect(array).to.not.be.empty
    })
})