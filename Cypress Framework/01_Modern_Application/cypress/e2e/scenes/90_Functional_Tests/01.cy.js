/// <reference types="cypress" />

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe("Real Application", () =>
{
    before(() =>
    {
        let pO = elemTelaCampoDeTrein()
        cy.visit(pO.baseUrl_3)
    });

    describe('01 - Web - BarrigaReact - Validar acesso', () =>
    {
        it('01.1 - Tela de Login', () =>
        {
            cy.get(".footer.text-center > p > small")
                .should("have.text", "Seu Barriga - Nunca mais esqueça de pagar o aluguel.")

            cy.get(".navbar-brand")
                .should("be.exist")
                .and("have.css", "color", "rgb(33, 37, 41)")
            cy.get(".navbar-brand > img")
                .and("be.visible")
            cy.get(".navbar-brand > img")
                .should("have.prop", "alt", "logo")

            cy.get(".navbar-nav")
                .should("be.exist")
                .and("be.visible")
            cy.get(".navbar-nav > li > a").eq(0)
                .should("be.exist")
            cy.get(".navbar-nav > li > a").eq(1)
                .should("be.exist")
        });
    });
    describe('02 - Web - BarrigaReact - Registrar conta inexistente', () =>
    {

    })
    describe('03 - Web - BarrigaReact - Alterar conta', () =>
    {
        
    })
    describe('04 - Web - BarrigaReact - Registrar conta existente', () =>
    {
        
    })
    describe('05 - Web - BarrigaReact - Realizar login', () =>
    {
        
    })
    
    describe('06 - Web - BarrigaReact - Inserir movimentação', () =>
    {
        
    })
    describe('07 - Web - BarrigaReact - Cálculo de saída', () =>
    {
        
    })
    describe('08 - Web - BarrigaReact - Remover movimentação', () =>
    {
        
    })
})

