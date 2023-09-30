/// <reference types="cypress" /> 

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe('Commands tests', () => {
    beforeEach(() => {
        let pO = elemTelaCampoDeTrein()
        cy.visit(pO.baseUrl)
    });

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']
    const esportes = ['Natacao', 'Futebol', 'Corrida', 'Karate']

    foods.forEach(food => {
        it(`Cadastro com comida ${food}`, () => {
            let pO = elemTelaCampoDeTrein()
            cy.get('#formNome')
                .type('Tony')
            cy.get('#formSobrenome')
                .type('Stark')
            cy.get(`[name=formSexo][value=M]`)
                .click()
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`)
                .click()
            cy.get('#formEscolaridade')
                .select('Mestrado')
            cy.get('#formEsportes')
                .select('Futebol')
            cy.get('#formCadastrar')
                .click()
            cy.get('#resultado > :nth-child(1)')
                .contains('Cadastrado!')
        })
    });
    esportes.forEach(esporte => {
        it(`Cadastro com comida ${esporte}`, () => {
            let pO = elemTelaCampoDeTrein()
            cy.get('#formNome')
                .type('Tony')
            cy.get('#formSobrenome')
                .type('Stark')
            cy.get(`[name=formSexo][value=M]`)
                .click()
            cy.get("#formEsportes > option[value]`[contains(., '${esporte}')]/preceding-sibling::input`")
                .select({multiple: true})
            cy.get('#formEscolaridade')
                .select('Mestrado')
            cy.get('#formCadastrar')
                .click()
            cy.get('#resultado > :nth-child(1)')
                .contains('Cadastrado!')
        })
    });
});
