//Wrap, é como se um objeto fosse encapsulado para ser utilizado pela API do cypress, trabalhando com as propriedades

/// <reference types="cypress" />

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe("Helpers...", () =>
{
    it("Wrap", () => {
      let pO = elemTelaCampoDeTrein();
      //criando um objeto js
      const obj = { nome: "User", idade: 17 };
      //Para assertivas em objetos é necessário a utilização do expect
        expect(obj).to.have.property("nome");
      //Assim, para trabalharmos com assertivas, necessário utilizar o comando wrap
      cy.wrap(obj).should("have.property", "nome");

      cy.visit(pO.baseUrl);
      cy.viewport(1440, 900);
      cy.waitUntil(() => cy.xpath(pO.xTitle))
      // $el vai continuar realizando assertivas no elemento que eu mapeei anteriormente, no caso, o #formNome
      cy.get('#formNome').then($el => {
        cy.wrap($el).type('Funcionando?!!?!')
      })

      const promise = new Promise((resolve, reject) =>
       {
        setTimeout(() => {
          resolve(10)
        }, 500)
      })
      cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botão'))
      cy.wrap(promise).then(ret => console.log(ret))
      cy.get('#buttonList').then(() => console.log('Encontrei o segundo botão'))

      cy.wrap(1).then(NUM =>
      {
          return 2
      })
        .should("be.equal", 2)
    })
})