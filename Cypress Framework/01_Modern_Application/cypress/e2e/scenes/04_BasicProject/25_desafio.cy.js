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

  it('Validando mensagens', () => {
    const stub = cy.stub().as('alerta')
    cy.on('window:alert', stub)
    cy.get('#formCadastrar').click()
    .then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))

    cy.get('#formNome').type('Bruno')
    cy.get('#formCadastrar').click()
    .then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))
    
    cy.get('[data-cy=dataSobrenome]').type('Siqueira')
    cy.get('#formCadastrar').click()
    .then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))
    
    cy.get('#formSexoMasc').click()
    cy.get('#formCadastrar').click()
    
    cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
  })
})
