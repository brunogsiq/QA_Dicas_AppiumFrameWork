/// <reference types="cypress"/>

import { elemPageRegistreDomain } from "../pageObjects/registreDomain";

export function visit_Url() {
  let pO = elemPageRegistreDomain()
  cy.visit(Cypress.env("baseUrl"))
  cy.waitUntil(() => cy.get(pO.xLogo).should('be.visible'))
  cy.waitUntil(() => cy.get(pO.xPubRegDomainOne).should('be.visible'))
}

export function accept_Cookie() {
  let pO = elemPageRegistreDomain()
  cy.get(pO.xCookie).click()
}

export function visit_With_Cookie() {
  let pO = elemPageRegistreDomain()
  cy.visit(Cypress.env("baseUrl"))
  cy.waitUntil(() => cy.get(pO.xLogo).should('be.visible'))
  cy.waitUntil(() => cy.get(pO.xPubRegDomainOne).should('be.visible'))
  cy.get(pO.xCookie).click()
}

