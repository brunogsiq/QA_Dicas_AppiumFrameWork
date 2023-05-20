//Tem como objetivo trabalhar com as funções

/// <reference types="cypress" />

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe("Cypress Basic", () => {
  //Hook criado
  beforeEach(() => {
    let pO = elemTelaCampoDeTrein();
    cy.visit(pO.urlBase);
    cy.viewport(1440, 900);
    cy.waitUntil(() => cy.xpath(pO.xTitle));
  })

  it('its', () => {
    const getValue = () => 1;
    const soma = (a,b) => a+b;

    cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1)
    cy.wrap({fn: soma}).invoke('fn', 2, 5).should('be.equal', 7)

    cy.get('#formName').invoke('val','texto via invoke')
    cy.get('#resultado').invoke('html', '<input type="button" value="hached"')
    })
  })
