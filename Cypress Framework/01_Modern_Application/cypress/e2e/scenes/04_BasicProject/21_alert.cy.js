/// <reference types="cypress" />

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe("Cypress Basic", () => {
  //Hook criado
  beforeEach(() => {
    let pO = elemTelaCampoDeTrein();
    cy.visit(pO.urlBase)
    cy.viewport(1440, 900)
    cy.waitUntil(() => cy.xpath(pO.xTitle))
  })
  beforeEach(() => {
    cy.reload()
  });

  it('Alert', () => {
    cy.get('#alert').click()
    //Para buscar eventos que ocorrem na tela
    cy.on('window:alert', msg => {
      console.log(msg)
      expect(msg).to.be.equal('Alert Simples')
      expect(msg).contains('Alert Simples')
      // errado: expect(msg).should('have.text', 'Alert Simples')
    })
  })
})