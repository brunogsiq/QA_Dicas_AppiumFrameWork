/// <reference types="cypress" />

import { elemPageRegistreDomain } from "../pageObjects/registreDomain";

export function validate_Domains_Br(testData) {
  const pO = elemPageRegistreDomain();

  if (testData.domain != '') {
    cy.xpath(pO.xChoiceDomain).click();
    cy.waitUntil(() => cy.get(pO.xInputDomain).should('be.visible'))
    cy.get(pO.xInputDomain)
      .click()
      .type(testData.domain);
    cy.xpath(pO.xBtnSearch).click();
  }
}
export function validate_Alerts(testData) {
  const pO = elemPageRegistreDomain();
  cy.get(pO.xAlert)
  switch (testData.domain) {
    case ' ':
      cy.waitUntil(() => cy.get(pO.xAlert));
      cy.get(pO.xAlert).contains(pO.xTextAlertInv);
      break;
    case '!@#$%':
      cy.waitUntil(() => cy.get(pO.xAlert));
      cy.get(pO.xAlert).contains(pO.xTextAlertInv);
      break;
    case '123456':
      cy.waitUntil(() => cy.get(pO.xAlert));
      cy.get(pO.xAlert).contains(pO.xTextAlertErr);
      break;
    case 'teste':
      cy.waitUntil(() => cy.get(pO.xAlert));
      cy.get(pO.xAlert).contains(pO.xTextAlertExt);
      break;
    case 'testevalido':
      cy.waitUntil(() => cy.get(pO.xAlert));
      cy.get(pO.xAlert).contains(pO.xTextAlertVal);
      break;
    default:
      break;
  }
}