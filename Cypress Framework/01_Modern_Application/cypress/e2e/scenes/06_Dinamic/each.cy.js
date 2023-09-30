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
        it(`Deve selecinar todos usando o each 01`, () =>
        {
            let pO = elemTelaCampoDeTrein()
            cy.get("#formNome")
                .type("Tony")
            cy.get("#formSobrenome")
                .type("Stark")
            cy.get(`[name=formSexo][value=M]`)
                .click()
            cy.get("[name=formComidaFavorita]")
                .each($el =>
                    {
                        cy.wrap($el).click()
                    })
                //.click({multiple: true})
            cy.get("#formEscolaridade")
                .select("Mestrado")
            cy.get("#formEsportes")
                .select("Futebol")
            cy.get("#formCadastrar")
                .click()
            cy.clickAlert("#formCadastrar", "Tem certeza que voce eh vegetariano?")
        })
        it(`Deve selecinar todos usando o each 02`, () =>
        {
            let pO = elemTelaCampoDeTrein()
            cy.get("#formNome")
                .type("Tony")
            cy.get("#formSobrenome")
                .type("Stark")
            cy.get(`[name=formSexo][value=M]`)
                .click()
            cy.get("[name=formComidaFavorita]")
                .each($el =>
                    {
                        //Condição diferente do primeiro teste que fará não clicar em vegetariano
                        if($el.val()!= "vegetariano")
                        cy.wrap($el).click()
                    })
                //.click({multiple: true})
            cy.get("#formEscolaridade")
                .select("Mestrado")
            cy.get("#formEsportes")
                .select("Futebol")
            cy.get("#formCadastrar")
                .click()
            cy.get("#resultado > :nth-child(1)")
                .should("contain",  "Cadastrado!")
        })
    })
});
