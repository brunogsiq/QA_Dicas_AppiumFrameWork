/// <reference types="cypress" />

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe("Cypress Basic", () => {
  //Hook criado
  beforeEach(() => {
    let pO = elemTelaCampoDeTrein();
    cy.visit(pO.urlBase);
    cy.viewport(1440, 900);
    cy.waitUntil(() => cy.xpath(pO.xTitle));
  })

  it('sync title', () => {
    let pO = elemTelaCampoDeTrein()
    cy.title()
    .should('be.equal', pO.textTitle)                             //pegamos o campo título, deve ser igual ao que desejo validar
    .and   ('contains', 'Campo')                                  //verificação que o campo título contém a palavra campo
    /*
    Should 
    ou 
    Then 
    ...Ambos podem realizar tratamentos de promises
    */
    //No exemplo abaixo estamos realizando na aba console de inspeção, a impressão do título da página.
    .then(title => {
        console.log(pO.textTitle)
    })
})

});
