/// <reference types="cypress" /> 

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe('Commands tests', () => {
    beforeEach(() => {
        let pO = elemTelaCampoDeTrein()
        cy.visit(pO.baseUrl)
    });
    it('Alert on commands', () => {
        cy.clickAlert('#alert', 'Alert Simples')
    });
});