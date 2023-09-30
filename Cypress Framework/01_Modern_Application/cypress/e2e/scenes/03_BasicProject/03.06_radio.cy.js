/// <reference types="cypress" /> 

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento"

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

    /*
    Radio button é o tipo de campo, no estilo checkbox do qual só poderá escolher um especificamente, como no exemplo abaixo,
        escolhendo o sexo da pessoa.
    */
    it('Radio button test', () =>
    {
        let pO = elemTelaCampoDeTrein()
        cy.get(pO.rdBtnMasc)
            .click()
            .should('be.checked')
        cy.get(pO.rdBtnFem)
            .click()
            .should('be.checked')
        cy.get(pO.rdBtnMasc)
            .should('not.be.checked')
    // Utiliznado colchetes, procuramos por elementos com determinadas Propriedades.
        cy.get('[name=formSexo]') 
    // Aqui verificamos que há dois elementos com a proprieda acima determinada.
            .should('have.length', 2)   
    });
})