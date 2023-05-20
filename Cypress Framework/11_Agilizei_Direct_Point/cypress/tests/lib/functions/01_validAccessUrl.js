/// <reference types="cypress" />
import { elemDevFinance } from "../pageObjects/devFinance"

export function validAcessUrl_01() {
  let pO = elemDevFinance()
  cy.visit(Cypress.env("baseUrl"))
  cy.xpath(pO.xLogo).should('be.visible')
}
