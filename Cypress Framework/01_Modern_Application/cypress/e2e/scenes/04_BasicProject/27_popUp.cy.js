/// <reference types="cypress" /> 

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe("Cypress Basic", () => {
    //Hook criado
    before(() => {
        let pO = elemTelaCampoDeTrein();
        cy.visit(pO.baseUrl);
        cy.viewport(1440, 900);
        cy.waitUntil(() => cy.xpath(pO.xTitle));
    });

    it("Deve testar Pop Up", () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        });
    });

    it("Deve verificar se o Popup foi invocado", () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get("#buttonPopUp").click()
        //É utilizado o @ para indicar que está sendo usado em um stub, e não uma tag do código
        cy.get('@winOpen').should('be.called') //serve para verificar se houve invocação do elemento
    })

    it("Check Popup url", () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.contains('Popup2')
            .should("have.prop", "href")
            .and('equal', 'https://wcaquino.me/cypress/frame.html')
    })

    it("Should Acess popup dinamically", () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.contains('Popup2').then($a => {
            const href = $a.prop('href')
            cy.visit(href)
            .get('#tfield')
            .type('Corinthians')
        })
    })

    it("Should force link on same page", () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.contains('Popup2')
        //Realiza a remoção do atributo mencionado
            .invoke('removeAttr', 'target')
            .click()
            .get('#tfield')
            .type('Corinthians')
    })
})