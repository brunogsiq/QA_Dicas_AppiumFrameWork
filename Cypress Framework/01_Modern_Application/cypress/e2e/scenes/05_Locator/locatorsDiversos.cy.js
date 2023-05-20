/// <reference types="cypress" /> 

/*Caso deseje enteder mais sobre a ordem de priorização do cypress sobre locator, posso buscar na documentação.
Através do código que será utilizado no teste, posso mudar a ordem de priorização da ferramenta.
Para modificar, deve inserir o mesmo no arquivo support/e2e.js

Cypress.SelectorPlayground.defaults({
    selectorPriority: ['id', 'class', 'attributes', 'data-cy', 'data-test', 'data-testid', 'tag', 'nth-child']
})

Para realizar esta parte do curso, foi inserido o mesmo, assim o cypress já fará suas prioridades de forma diferente*/

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe('Work with basic elements - Create Locators', () => {
    let pO = elemTelaCampoDeTrein()
    beforeEach(() => {
        cy.visit(pO.baseUrl)
    });

    beforeEach(() => {
        cy.reload()
    });


    it('Using JQuery selectors', () => { 
        //EL1
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        //EL 2 - FORMA 1
        cy.get("table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input").click()
        //EL 2 - FORMA 3
        cy.get("[onclick*='Francisco']")

        //EL 3 - Forma 1
        cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0) ~ td:eq(3) > input')
        //EL 3 - Forma 2
        cy.get('#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) > input')
    })

    it('Using Xpath', () => {
        cy.xpath('//input')
    });
});