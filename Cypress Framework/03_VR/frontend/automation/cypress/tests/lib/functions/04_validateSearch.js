/// <reference types="cypress" />

import { elemHomePage } from "../pageObjects/homePage_"
import { validateAccessOUC } from "./03_validateAcessOUC"


/*
Dado que a foi clicado na opção [Onde Usar o meu cartão],
Quando o sistema apresentar a publicidade,
Então o ssitema deve apresentar: 
    O campo input para inserir uma cidade
    O ícone de lupa
    A opção para seleção de um cartão VR
    A opção Bsucar
    O Mapa do continente da América do Sul enfatizando o Brasil.
    A opção para fechar o modal de busca.
*/

export function validateSearch (){
    let pO = elemHomePage()
    validateAccessOUC()
    cy.waitUntil(() => cy.get(pO.inpDigite))
    cy.get(pO.inpDigite)
         .should('be.visible')
    // cy.get(pO.inpGetDigite)
    //     .should('have.text', pO.txtDigite)
    cy.get(pO.iconSearch)
        .should('be.visible')
    cy.get(pO.btnSelecioneVR)
        .contains(pO.txtSelecioneVR)
        .should('be.visible')
    cy.get(pO.optSearch)
        .contains(pO.txtSearch)
        .should('be.visible')
    cy.get(pO.optClose)
        .should('be.visible')
}