/// <reference types="cypress" />

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe("Cypress Basic", () => {
  //Hook criado
  beforeEach(() => {
    let pO = elemTelaCampoDeTrein();
    cy.visit(pO.baseUrl);
    cy.viewport(1440, 900);
    cy.waitUntil(() => cy.xpath(pO.xTitle));
  });

  it('Its...', () =>
  {
      const obj = {nome: "Bruno", idade: 36}
      cy.wrap(obj).should("have.property", "nome", "Bruno")
      //Utilizamos o Its quando queremos validar o valor de uma propriedade
      cy.wrap(obj).its("nome").should("be.equal", "Bruno")

      const obj02 = {nome: "Bruno", idade: 36, endereco: {rua: "Sao Jorge"}}
      cy.wrap(obj02).its("endereco").should("have.property", "rua")
      cy.wrap(obj02).its("endereco.rua").should("contain", "Sao Jorge")
      cy.wrap(obj02).its("endereco").should("contain", "Sao Jorge")
  });
});
