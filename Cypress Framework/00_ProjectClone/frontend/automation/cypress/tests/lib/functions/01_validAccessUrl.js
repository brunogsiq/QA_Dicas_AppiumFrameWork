/// <reference types="cypress" />

import {  } from "../pageObjects/homePage_";

export function validAcessUrl_01 () {
  cy.visit(Cypress.env("baseUrl"));
  let pO = elemHomePage()
  cy.waitUntil(() => cy.get(pO.).should('be.visible'));
  