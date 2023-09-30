/// <reference types="cypress" /> 

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";
import { clickAlert } from "../../../support/commands";

//Criando os próprios Locators
describe('Commands tests', () =>
{
    beforeEach(() =>
    {
        let pO = elemTelaCampoDeTrein()
        cy.visit(pO.baseUrl)
    });

    //No arquivo commands.js teremos o seguinte 
    /*
        Cypress.Commands.add('clickAlert.', (locator, message) =>
        {
            cy.get(locator).click()
            cy.on('window:alert', msg =>
            {
                expect(msg).to.be.equal(message)
            })
        })
    */
    it('Alert on commands', () =>
    {
        cy.clickAlert('#alert', 'Alert Simples')
    });
});