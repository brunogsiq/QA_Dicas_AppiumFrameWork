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

  it("Wait and Timeout", () => {
    let pO = elemTelaCampoDeTrein();
    cy.get(pO.btnList).click();
    cy.get("#lista li")
      .find("span", { timeout: 5000 })
      .should("contain", "Item 2")
      .should('have.length', 2)
  });
});
