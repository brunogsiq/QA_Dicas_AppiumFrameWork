/// <reference types="cypress" />

import {elemTelaCampoDeTrein} from "../../libraries/pageObjects/campoDeTreinamento"

describe('Work with basic elements', () => {
    it('02 Elements', () => {
        let pO = elemTelaCampoDeTrein()
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.viewport(1440, 900)
        cy.xpath(pO.xDivTextRodape)                                                //Pegamos e referenciamos toods corpo do html
        .should('contain', pO.divTextTabRodape)                                    //verificamos se há este texto em algum local do corpo
        cy.get('.facilAchar')                                                      //Pegamos e referenciamos a classe do elemento, para verificar por classe, coloca .nomeDaClasse
            .should('contain', 'Cuidado')                                          //verificamos se há este texto neste elemento a palavra.

        //Faremos agora a verificação do texto, por tanto, a frase tem que se exatamente igual, senão, falhará o teste
        cy.get('.facilAchar')
            .should('have.text', pO.divTextTabRodape)
    })
})