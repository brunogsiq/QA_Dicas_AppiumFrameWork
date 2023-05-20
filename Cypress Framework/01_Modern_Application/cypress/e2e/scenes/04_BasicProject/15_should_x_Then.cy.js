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

  /*
    Should: Faz a busca e em seguida a verificação. 
        Outro detalhe, caso utilize um return dentro do meu test, ele será ignorado caso o elemento seja diferente do indicado no objeto
    ou 
    Then: Faz a busca e aguarda para que a verificação seja executada;
        caso utilize um return dentro do meu test, ele será ignorado caso não indique o objeto, se indicar, retornará o elemento

    ...Ambos podem realizar tratamentos de promises
*/
  //  No exemplo abaixo estamos realizando na aba console de inspeção, a impressão do título da página.

  it("Should x Then", () => {
    let pO = elemTelaCampoDeTrein();
    cy.get(pO.btnLiDom)
      .then(($el) => {
        expect($el).to.have.length(1);
      })
      .and('have.id', 'buttonListDOM');
  });
});
