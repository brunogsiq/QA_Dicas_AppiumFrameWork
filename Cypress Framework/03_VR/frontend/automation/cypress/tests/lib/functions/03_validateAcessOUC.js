/// <reference types="cypress" />

import { elemHomePage } from "../pageObjects/homePage_"
import { validateAccessPV } from "./02_validateAcessPV"


/*
Dado que a foi clicado na opção [Onde Usar o meu cartão],
Quando o sistema apresentar a publicidade,
Então o ssitema deve apresentar: 
    O campo input para inserir uma cidade
    O ícone de lupa
    A opção para seleção de um tipo de cartão VR
    A opção Buscar
    O Mapa do continente da América do Sul enfatizando o Brasil.
    A opção para fechar o modal de busca.
*/

export function validateAccessOUC (){
    let pO = elemHomePage()
    validateAccessPV()
    cy.get(pO.aRedeCred).contains(pO.txtRedeCred)
    cy.get(pO.aRedeCred).click()
}