/// <reference types="cypress" />

import { elemHomePage } from "../pageObjects/homePage_"
import { validateSearch } from "./04_validateSearch"


/*
Dado que o modal de buscas está sendo visualizado,
E após inserir um dado em cidade,
E confirmar posteriormente ao escolher o tipo de cartão VR,
Quando clicar na opção buscar,
Então o ssitema deve apresentar uma busca coerente a realizada.

*/

export function validateInput() {
    let pO = elemHomePage()
    validateSearch()
    cy.get(pO.iframe).then($iframe => {
        const iframe = $iframe.contents();
        cy.get('#endereco')
            .click()
            .type('São P');
        cy.get('[data-place-id="ChIJ0WGkg4FEzpQRrlsz_whLqZs"] > .autocomplete-text')
            .click()
        cy.get(pO.btnSelecioneVR)
            .click()
        cy.get(':nth-child(1) > .vr-map__card--title')
            .click()
        cy.get(pO.confirmar)
            .click()
        cy.get(pO.optSearch)
            .click()
        cy.get('.vr-map__box-results > p')
            .contains('resultado')
        })
}