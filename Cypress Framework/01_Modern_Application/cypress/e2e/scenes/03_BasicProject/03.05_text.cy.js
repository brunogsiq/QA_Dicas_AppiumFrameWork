/// <reference types="cypress"/>

import {elemTelaCampoDeTrein} from "../../libraries/pageObjects/campoDeTreinamento"

describe('Cypress Basic', () => {
    //Hook criado
    beforeEach(() => {
        let pO = elemTelaCampoDeTrein()
        cy.visit(pO.baseUrl)
        cy.viewport(1440, 900)
      cy.waitUntil(() => cy.xpath(pO.xTitle))
    })

    it('TextFields', () => {
        let pO = elemTelaCampoDeTrein()
        describe('', () =>
        {
            cy.get('#formNome')
                .type('Bruno')
                .should('have.value', 'Bruno')
            cy.get('[data-cy="dataSobrenome"]')
                .type('Siqueira')
                .should('have.value', 'Siqueira')
        // A utilização da "\" acaba sendo recurso do cypress, para utilizarmos um \ no codigo de elementos, será necessário inserir duas \
            cy.get(pO.formSugest)
                .type('Prática de teste com elementos utilizados estilo campos de texto')
                .should('have.value', 'Prática de teste com elementos utilizados estilo campos de texto')
            cy.get(pO.xIpOne)
                .type('ZERO ZERO')
                .should('have.value', 'ZERO ZERO')
            cy.get(':nth-child(2) > :nth-child(6) > input')
                .type('ZERO UM')
                .should('have.value', 'ZERO UM')
            cy.get(':nth-child(3) > :nth-child(6) > input')
                .type('ZERO DOIS')
                .should('have.value', 'ZERO DOIS')
            cy.get(':nth-child(4) > :nth-child(6) > input')
                .type('ZERO TRÊS')
                .should('have.value', 'ZERO TRÊS')
            cy.get(':nth-child(5) > :nth-child(6) > input')
                .type('ZERO QUATRO')
                .should('have.value', 'ZERO QUATRO')
            cy.reload()
            cy.waitUntil(() => cy.xpath(pO.xTitle))
            cy.get(pO.formSugest)
        //Utilizando o {backspace} iremos apagar uma letra, para apagar mais, é só repetir o comando.
                .type('Prática de teste{backspace}')
                .should('have.value', 'Prática de test')
            cy.get(pO.xIpOne)
                .type('ZERO ZERO{backspace}')
                .should('have.value', 'ZERO ZER')
            cy.get(':nth-child(2) > :nth-child(6) > input')
                .type('ZERO UM{backspace}{backspace}')
                .should('have.value', 'ZERO ')
            cy.get(':nth-child(3) > :nth-child(6) > input')
                .type('ZERO DOIS{backspace}{backspace}{backspace}')
                .should('have.value', 'ZERO D')
            cy.get(':nth-child(4) > :nth-child(6) > input')
                .type('ZERO TRÊS{backspace}{backspace}{backspace}{backspace}')
                .should('have.value', 'ZERO ')
            cy.get(':nth-child(5) > :nth-child(6) > input')
                .type('ZERO QUATRO{backspace}{backspace}{backspace}{backspace}{backspace}')
                .should('have.value', 'ZERO Q')
            cy.waitUntil(() => cy.xpath(pO.xTitle))
            cy.get(pO.formSugest)
        //Limpa o campo selecionado, isso ajudará na agilidade da limpeza de um campo.
                .clear()
        //Utilizando o {selectall} selecionamos o texto completo dentro de uma área
                .type('Erro{selectall}Prática de teste{backspace}{backspace}{backspace}')
                .should('have.value', 'Prática de te')
        })
    })
})