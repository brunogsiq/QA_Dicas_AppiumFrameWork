/// <reference types="cypress" />
import { elemDevFinance } from "../pageObjects/devFinance"
import { validAcessUrl_01 } from "./01_validAccessUrl"

export function validACrit_01x1() {
  let pO = elemDevFinance()
  validAcessUrl_01()
  cy.xpath(pO.xDivEntr).should('be.visible')
  cy.xpath(pO.xDivSaida).should('be.visible')
  cy.xpath(pO.xDivTotal).should('be.visible')
  cy.xpath(pO.xBtnNovaTrans).should('be.visible')
  cy.xpath(pO.xColDes).should('be.visible')
  cy.xpath(pO.xColValor).should('be.visible')
  cy.xpath(pO.xColData).should('be.visible')
  cy.xpath(pO.xColDelete).should('be.visible')
  cy.xpath(pO.xRodape).should('be.visible').contains('dev.finance').should('have.text', pO.xTextRodape)
 
}
