/// <reference types="cypress" />

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe("Cypress Basic", () =>
{
    //Hook criado
    beforeEach(() => {
      let pO = elemTelaCampoDeTrein();
      cy.visit(pO.baseUrl);
      cy.viewport(1440, 900);
      cy.waitUntil(() => cy.xpath(pO.xTitle));
    });
    beforeEach(() =>
    {
      cy.reload();
    });

    it("Alert stub", () =>
    {
      //Utiliza-se o comando as para renomear algo, evento, operação
      const stub = cy.stub().as("alerta");
      cy.on("window:alert", stub);
      cy.get("#alert")
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        });
    });
});
