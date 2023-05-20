/// <reference types="cypress" />

import { elemHomePage } from "../pageObjects/homePage_";

export function validAcessUrl_01 () {
  cy.visit(Cypress.env("baseUrl"));
  let pO = elemHomePage()
  cy.waitUntil(() => cy.get(pO.xDivCookie).should('be.visible'));
  cy.waitUntil(() => cy.get(pO.xModalPublicSup).should('be.visible'));
  cy.waitUntil(() => cy.get(pO.xModalReportagensPrinc).should('be.visible'));
  cy.getCookie(pO.xProsseguirAutorizaCookie).click();
}
