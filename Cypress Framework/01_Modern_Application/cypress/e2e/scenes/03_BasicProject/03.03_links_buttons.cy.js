/// <reference types="cypress" />

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento"

describe('Work with basic elements', () => {
    it('03 Link Buttons', () => {
        let pO = elemTelaCampoDeTrein()
        cy.visit(pO.baseUrl)
        cy.viewport(1440, 900)
        cy.get(pO.divResult)
            .should('have.text', 'Status: Nao cadastrado')
        cy.get('[href="#"]')
            .should('have.text', 'Voltar')                          //Aqui tentei o comando have.value, mas link possuem textos não valores.
            .click()
        cy.get(pO.divResult)                                        //busca realizada com # pois é um elemento com ID
            .should('have.text', 'Voltou!')
            .reload()                                               //realizará um recarregamento na págima
        cy.get(pO.divResult)
            .should('have.text', 'Status: Nao cadastrado')
            .and('not.have.text', 'Voltou!')                     // Verificando que não há mais o texto
    })
})