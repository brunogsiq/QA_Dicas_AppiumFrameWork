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

  let syncTitle;
  it("Reutilizando título", () => {
    let pO2 = elemTelaCampoDeTrein();
    cy.title().then((title) => {
      cy.get("#formNome").type(title);
      syncTitle = title;
    });
    cy.get("[data-cy=dataSobrenome]").then(($el) => {
      $el.val(syncTitle);
    });
    cy.get("#elementosForm\\:sugestoes").then(($el) => {
      $el.val(syncTitle);
    });
  });
});
