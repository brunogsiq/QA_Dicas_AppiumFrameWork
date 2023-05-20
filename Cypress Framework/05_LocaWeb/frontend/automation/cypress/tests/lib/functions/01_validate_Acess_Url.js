/// <reference types="cypress" />

import { elemPageRegistreDomain } from "../pageObjects/registreDomain"

export function validate_Acess_Url() {
  let pO = elemPageRegistreDomain()
  cy.get(pO.xLogo)
    .contains(pO.xTextLogo)
  cy.get(pO.xPubRegDomainOne)
    .contains(pO.xTextPubRegDomainOne)
  cy.get(pO.xPubRegDomainOne)
    .should('have.text', pO.xTextPubRegDomainOne)
  cy.get(pO.xPubRegDomainTwo)
    .contains(pO.xTextPubRegDomainTwo)
  cy.get(pO.xPubRegDomainTwo)
    .should('have.text', pO.xTextPubRegDomainTwo)
}