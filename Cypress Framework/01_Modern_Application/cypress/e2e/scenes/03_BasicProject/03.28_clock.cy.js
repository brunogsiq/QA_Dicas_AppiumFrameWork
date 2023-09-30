/// <reference types="cypress" />

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe("Cypress Basic", () =>
{
    //Hook criado
    beforeEach(() =>
    {
        let pO = elemTelaCampoDeTrein();
        cy.visit(pO.baseUrl);
        cy.viewport(1440, 900);
        cy.waitUntil(() => cy.xpath(pO.xTitle));
    });

    it('Voltando ao passado 01', () =>
    {
        cy.get("#buttonNow")
            .click()
        cy.get("#resultado > span")
            //Data do dia que realizei o teste
            .should("contain", "28/09/2023")
    })

    it('Voltando ao passado 02', () =>
    {
        cy.clock()
        cy.get("#buttonNow")
            .click()
        cy.get("#resultado > span")
            //Data errada propositalmente
            .should("contain", "31/12/1969")
    });

    it('Voltando ao passado 03', () =>
    {
        const date = new Date(2012,10,10,15,23,50)
        cy.clock(date.getTime())
        cy.get("#buttonNow")
            .click()
        cy.get("#resultado > span")
            //Data errada propositalmente
            .should("contain", "10/11/2012, 15:23:50")
    });

        it('Voltando ao passado 03', () =>
    {
        const date = new Date(2012,10,10,15,23,50)
        cy.clock(date.getTime())
        cy.get("#buttonNow")
            .click()
        cy.get("#resultado > span")
            //Data errada propositalmente
            .should("contain", "10/11/2012, 15:23:50")
    });
})