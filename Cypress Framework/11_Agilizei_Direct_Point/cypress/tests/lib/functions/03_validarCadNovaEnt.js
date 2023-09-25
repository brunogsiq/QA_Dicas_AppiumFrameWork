/// <reference types="cypress" />

import { validModalEnter_02 } from "./02_validModalEntrada";
import { elemDevFinance } from "../pageObjects/devFinance";

export function validarCadNovaEnt_03() {
  validModalEnter_02()
  let pO = elemDevFinance()

  cy.xpath(pO.xDesc).click().type("Freela");
  cy.xpath(pO.xValorEnt).type(1910);
  cy.xpath(pO.xDatas).type("1910-09-01"); //Aqui tem que seguir a regra yyyy-mm-dd
  cy.xpath(pO.xBtnSave).should('have.text', pO.xTextBtnSave)
    .click()
    .waitUntil(() => cy.xpath(pO.xTabela))

    .reload()

  validModalEnter_02()
  let pO2 = elemDevFinance()

  cy.get(pO2.iDesc).click().type("Freela");
  cy.get(pO2.iValorEnt).type(777);
  cy.get(pO2.iDatas).type("2012-06-04"); //Aqui tem que seguir a regra yyyy-mm-dd
  cy.contains(pO2.xTextBtnSave)
    .click()
    .waitUntil(() => cy.get(pO.iTabela))
}

/*
Outra forma de realizar a função
export function validarCadExit_04(desc, valor) {
  validModalEnter_02()
  let pO = elemDevFinance()
    cy.xpath(pO.xDesc).click().type(desc);
    cy.xpath(pO.xValorEnt).type(valor);
    cy.xpath(pO.xDatas).type("2023-03-20"); //Aqui tem que seguir a regra yyyy-mm-dd
    cy.xpath(pO.xBtnSave).should('have.text', pO.xTextBtnSave)
      .click()
      .waitUntil(() => cy.xpath(pO.xTabela))

      no código iria inserir
    validarCadExit_04("Freela", 30)
*/

/*
import { acessoModal } from "./funcaoVisita"

export function formValid() {
    acessoModal()
    cy.get('#description').type('Parcela do carro')
    cy.get('#amount').type('687.59')
    cy.get('#date').click().type('1910-09-01')
    cy.get('.input-group.actions > button').click()
    cy.get("footer > p").should("be.visible")
    cy.get("tbody").should("be.visible")
    cy.get("tbody > tr").should("be.exist")
    acessoModal()
    cy.get('#description').type('Parcela do carro')
    cy.get('#amount').type('687.59')
    cy.get('#date').click().type('1910-09-01')
    cy.get('.input-group.actions > button').click()
    cy.get("footer > p").should("be.visible")
    cy.get("tbody").should("be.visible")
    cy.get("tbody > tr").should("be.exist")
    cy.get("tbody > tr > td > img").eq(1).click()
    cy.get("tbody > tr").eq(1).should("be.not.exist")
}

export function formValid_02() {
    acessoModal()
    cy.get('#description').type('Parcela do carro')
    cy.get('#amount').type('1000.00')
    cy.get('#date').click().type('1910-09-01')
    cy.get('.input-group.actions > button').click()
    cy.get("footer > p").should("be.visible")
    cy.get("tbody").should("be.visible")
    cy.get("tbody > tr").should("be.exist")
    acessoModal()
    cy.get('#description').type('Parcela do Apartamento')
    cy.get('#amount').type('1500.00')
    cy.get('#date').click().type('1910-09-01')
    cy.get('.input-group.actions > button').click()
    cy.get("footer > p").should("be.visible")
    cy.get("tbody").should("be.visible")
    cy.get("tbody > tr").should("be.exist")
    acessoModal()
    cy.get('#description').type('Outros')
    cy.get('#amount').type('-750.00')
    cy.get('#date').click().type('1910-09-01')
    cy.get('.input-group.actions > button').click()
    cy.get("footer > p").should("be.visible")
    cy.get("tbody").should("be.visible")
    cy.get("tbody > tr").should("be.exist")
}

/// <reference types="cypress" /> 

import { acessoModal, visitaUrl } from "../library/function/funcaoVisita";
import { formValid, formValid_02 } from "../library/function/funcaoForm";

describe('Testes automatizando no site Dev.Finance', () => {
  
  it('01 - Visitando o site padrão e validando o acesso pelo título(logotipo)', () => {
    cy.visit("https://dev-finance.netlify.app/")
    cy.get("header > img").should("be.visible")
    //NÃO SERÁ POSSÍVEL VALIDAR O TEXTO, PQ O LOGOTIPO É UMA IMAGEM.
    //POR ESTE MOTIVO O CÓDIGO ABAIXO SERÁ COMENTADO E DESCARTADO
    //cy.get("").should("have.text", "...")
  });

  it('02 - Validando critério de aceite', () => {
    cy.visit("https://dev-finance.netlify.app/")
    cy.get("header > img").should("be.visible")
    cy.get(".card > h3 > span").eq(0).should("have.text", "Entradas")
    cy.get(".card > h3 > span").eq(1).should("have.text", "Saídas")
    cy.get(".card > h3 > span").eq(2).should("have.text", "Total")
    cy.get("#transaction > a").should("be.visible").and('have.text', '+ Nova Transação')
    cy.get("#data-table > thead > tr > th").eq(0).should("be.visible").and('have.text', 'Descrição')
    cy.get("#data-table > thead > tr > th").eq(1).should("be.visible").and('have.text', 'Valor')
    cy.get("#data-table > thead > tr > th").eq(2).should("be.visible").and('have.text', 'Data')
    cy.get("#data-table > thead > tr > th").eq(3).should("be.visible")
    cy.get("footer > p").should("be.visible").and("have.text", "dev.finance$")
  })

  it("03 - Validando acesso ao modal de transações", () => {
    //PRIMEIRO EXEMPLO DE FUNÇÃO. PARA UTILIZAR FUNÇÕES, COLOCO EM OUTRO ARQUIVO E IMPORTE PARA ESTE
    // ou seja, REALIZO A FUNÇÃO COM CAPACIDADE DE EXPORTAÇÃO PARA IMPORTAÇÃO
    visitaUrl()
    cy.get('#transaction > a').click()
    cy.get('#form').should('have.visible')
    cy.get('#form > h2').should('have.text', 'Nova Transação')
  })

  it('04 - Validar botão do formulário "cancelar"', () => {
    visitaUrl()
    acessoModal()
    cy.get('#description').type('Parcela do carro')
    cy.get('#amount').type('687,59')
    cy.get('#date').click().type('1910-09-01')
    cy.get('.input-group.actions > a').click()
    cy.get("footer > p").should("be.visible")
    cy.get("tbody").should("not.be.visible")
    cy.get("tbody > tr").should("be.not.exist")
  });

  it('05 - Validar botão do formulário "salvar"', () => {
    visitaUrl()
    acessoModal()
    cy.get('#description').type('Parcela do carro')
    cy.get('#amount').type('687.59')
    cy.get('#date').click().type('1910-09-01')
    cy.get('.input-group.actions > button').click()
    cy.get("footer > p").should("be.visible")
    cy.get("tbody").should("be.visible")
    cy.get("tbody > tr").should("be.exist")
  });

  
  it('06 - Validar botão remover transação', () => {
    visitaUrl()
    formValid()
    cy.get("tbody > tr").eq(0).should("have.length", 1)
    cy.get("tbody > tr").eq(1).should("have.length", 0)
  });

  it.only('07 - Validar visuaização dos displays', () => {
    visitaUrl()
    formValid_02()
    cy.get("#incomeDisplay").should('have.text', 'R$ '+'2.500,00')
    cy.get("#expenseDisplay").should('have.text', '-R$ '+'750,00')
  });
});
*/