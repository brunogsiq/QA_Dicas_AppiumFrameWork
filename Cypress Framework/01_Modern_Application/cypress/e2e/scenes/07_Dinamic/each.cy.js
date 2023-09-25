/// <reference types="cypress" /> 

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe('Commands tests', () => {
    beforeEach(() => {
        let pO = elemTelaCampoDeTrein()
        cy.visit(pO.baseUrl)
    });

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']
    const esportes = ['Natação', 'Futebol', 'Corrida', 'Karate']

    foods.forEach(food => {
        it(`Deve selecinar todos usando o each`, () => {
            let pO = elemTelaCampoDeTrein()
            cy.get('#formNome').type('Tony')
            cy.get('#formSobrenome').type('Stark')
            cy.get(`[name=formSexo][value=M]`).click()
            cy.xpath("[name=formComidaFavorita]").click({multiple: true})
            cy.get('#formEscolaridade').select('Mestrado')
            cy.get('#formEsportes').select('Futebol')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').contains('Cadastrado!')
            cy.clickAlery("#formCadastrar", "Tem certeza que você eh vegetariano?")
        })
    });

});
