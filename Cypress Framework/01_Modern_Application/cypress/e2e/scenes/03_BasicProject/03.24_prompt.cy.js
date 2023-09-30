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


  it('Prompt', () =>
  {
      cy.window().then(win =>
      {
        cy.stub(win, 'prompt').returns('42')
      })
      //Para buscar eventos que ocorrem na tela
      cy.on('window:prompt', msg => {
        expect(msg).to.be.equal('Era 42?')
        expect(msg).contains('Era 42?')
      })
      cy.on('window:alert', msg =>
      {
        expect(msg).to.be.equal(':D')
        expect(msg).contains(':D')
      })
      cy.get('#prompt').click()
  })
})
