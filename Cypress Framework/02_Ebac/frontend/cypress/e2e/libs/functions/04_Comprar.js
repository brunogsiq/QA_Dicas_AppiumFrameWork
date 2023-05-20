/// <reference types="cypress" /> 

import { elemEbacShop } from "../page_Objects/ebacStore";

export function validateComprar() {
    let pO = elemEbacShop()
    cy.get(pO.btnComprar)
        .click()
    cy.get(pO.cTitleComprar)
        .should('contain', "Produtos")
}