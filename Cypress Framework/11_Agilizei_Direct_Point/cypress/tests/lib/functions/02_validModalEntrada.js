/// <reference types="cypress" />

import { validAcessUrl_01 } from "./01_validAccessUrl";
import { elemDevFinance } from "../pageObjects/devFinance";

export function validModalEnter_02() {
  validAcessUrl_01()
  let pO = elemDevFinance()
  cy.contains(pO.xTextBtnNovaTrans)
  .click()
  .contains(pO.xTextTitleModalNovaTrans)

  .reload()

  cy.xpath(pO.xBtnNovaTrans)
  .click()
  .xpath(pO.xTitleModalNovaTrans).should('have.text', pO.xTextTitleModalNovaTrans)
}
