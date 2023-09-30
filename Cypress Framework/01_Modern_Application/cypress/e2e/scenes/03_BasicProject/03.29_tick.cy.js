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

    it('Viajando ao futuro 01', () =>
    {
        cy.get("#buttonTimePassed")
            .click()
        cy.get("#resultado > span")
            .should("contain", "16")
        cy.get("#resultado > span")
            .invoke("text")
            .should("gt", 16)

        cy.clock()
        cy.get("#buttonTimePassed")
            .click()
        cy.get("#resultado > span")
            .should("contain", "0")
        cy.get("#resultado > span")
            .invoke("text")
            .should("lte", 0)
        cy.wait(5000)
        cy.get("#resultado > span")
            .invoke("text")
            .should("gte", 5000)

        cy.clock()
        cy.get("#buttonTimePassed")
            .click()
        cy.get("#resultado > span")
            .should("contain", "0")
        cy.get("#resultado > span")
            .invoke("text")
            .should("lte", 0)
        cy.wait(5000)
        cy.get("#resultado > span")
            .invoke("text")
            .should("gte", 5000)

        //Forma correta de aplicar o tick
        cy.tick(5000)
        cy.get("#buttonTimePassed")
            .click()
        cy.get("#resultado > span")
            .invoke("text")
            .should("gte", 5000)
    });
})