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

  it("Combo box test", () =>
  {
    let pO = elemTelaCampoDeTrein();
      cy.get(pO.cBEsc)
        .select("2o grau completo")
        .should("have.value", "2graucomp")
        .contains("2o grau completo");
      cy.get(pO.cBEsc)
        .select("superior")
        .should("have.value", "superior")
        .contains("Superior");

      cy.get("[data-test=dataEscolaridade] option").should("have.length", 8);
      cy.get("[data-test=dataEscolaridade] option").then(($arr) => {
        const values = [];
        $arr.each(function () {
          values.push(this.innerHTML)
        });
        expect(values).to.include.members(["Superior", "Mestrado"])
    });
  });

  it("Combo Multiplo", () =>
  {
      cy.get("[data-testId=dataEsportes]").select(["natacao", "Corrida", "nada"]);
      cy.get("[data-testId=dataEsportes]").then($el => {
        expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
        expect($el.val()).to.have.length(3)
  })
      cy.get("[data-testId=dataEsportes]").invoke('val').should('eql', ['natacao', 'Corrida', 'nada'])
  });
});
