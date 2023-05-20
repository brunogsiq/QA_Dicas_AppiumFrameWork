/// <reference types="cypress" />

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe("Cypress Basic", () => {
  //Hook criado
  beforeEach(() => {
    let pO = elemTelaCampoDeTrein();
    cy.visit(pO.urlBase);
    cy.viewport(1440, 900);
    cy.waitUntil(() => cy.xpath(pO.xTitle));
  });
  beforeEach(() => {
    cy.reload();
  });

  it('Confirm', () => {
    //Para buscar eventos que ocorrem na tela
    cy.on('window:confirm', msg => {
      expect(msg).to.be.equal('Confirm Simples')
      expect(msg).contains('Confirm Simples')
    })
    cy.on('window:alert', msg => {
      expect(msg).to.be.equal('Confirmado')
      expect(msg).contains('Confirmado')
    })
    cy.get('#confirm').click()
  })

  it('Deny', () => {
    //Para buscar eventos que ocorrem na tela
    cy.on('window:confirm', msg => {
      expect(msg).to.be.equal('Confirm Simples')
      expect(msg).contains('Confirm Simples')
      return false
    })
    cy.on('window:alert', msg => {
      expect(msg).to.be.equal('Negado')
      expect(msg).contains('Negado')
    })
    cy.get('#confirm').click()
  })
})
