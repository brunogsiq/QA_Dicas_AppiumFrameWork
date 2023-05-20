/// <reference types="cypress" />

import { validModalEnter_02 } from "./02_validModalEntrada";
import { validarCadExit_04 } from "./04_validarCadExit";
import { elemDevFinance } from "../pageObjects/devFinance";

export function validarExcEntExit_05() {
  let pO = elemDevFinance()
  validModalEnter_02()
  validarCadExit_04()

  //Utiliznado o comando .parent, consigo navegar na coluna para o elemento "pai", já que a asserção da imagem foi inválida.
  cy.xpath(pO.xEntrada).contains("Mercado").parent().find('img').click()
  cy.xpath(pO.xEntrada).contains("Cinema").parent().find('img').click()

  //Com este comando, a validção é que após a exclusão o total de linhas é zero.
  cy.get('tbody tr').should("have.length", 0)
}

/*
Uma segunda alternativa para a asserção do img de clique para exclusão seria:

cy.xpath(pO.xEntrada).contains("Mercado").siblings().children('img').click()

Neste caso, eu estou fazendo uma asserção nos elementos "irmãos", e não pai, como em .parent()

*/
