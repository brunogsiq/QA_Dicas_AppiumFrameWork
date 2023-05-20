/// <reference types="cypress" />

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe("Cypress Basic", () => {
  //Hook criado
  before(() => {
    let pO = elemTelaCampoDeTrein();
    cy.visit(pO.urlBase);
    cy.viewport(1440, 900);
    cy.waitUntil(() => cy.xpath(pO.xTitle));
  });

  it("Preenchendo Iframe", () => {
    cy.get("#frame1").then((iframe) => {
      //Este comando trás os filhos dos elementos
      const body = iframe.contents().find("body");
      cy.wrap(body)
        .find("#tfield")
        .type("Funciona?")
        .should("have.value", "Funciona?");

      cy.on("window:alert", (msg) => {
        expect(msg).to.be.equal("Alerta Simples");
      });
      cy.wrap(body).find("#otherButton").click();
    });
  });

  it("Testando Iframe direto", () => {
    cy.visit('https://wcaquino.me/cypress/frame.html')
    cy.get('#otherButton').click()
    cy.on('window:alert', msg => {
      expect(msg).to.be.equal('Click OK!')
    });
  });


});

