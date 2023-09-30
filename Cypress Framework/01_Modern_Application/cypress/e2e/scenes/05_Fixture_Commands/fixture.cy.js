/// <reference types="cypress" /> 

import {elemTelaCampoDeTrein} from "../../libraries/pageObjects/campoDeTreinamento"

//Na pasta fixture foi criado um arquivo chamado userData.jason

//Hook criado
    before(() => {
        let pO = elemTelaCampoDeTrein();
        cy.visit(pO.baseUrl);
        cy.viewport(1440, 900);
        cy.waitUntil(() => cy.xpath(pO.xTitle));
    });
    describe('Fixtures tests', () => {
        it('Get data form fixture file', function() {
            let pO = elemTelaCampoDeTrein()
            cy.fixture('userData').as('usuario').then(() =>
            {
                cy.get('#formNome')
                    .type(this.usuario.nome)
                cy.get('#formSobrenome')
                    .type(this.usuario.sobrenome)
                cy.get(`[name=formSexo][value=${this.usuario.sexo}]`)
                    .click()
                cy.get(`[name=formComidaFavorita][value=${this.usuario.comida}]`)
                    .click()
                cy.get('#formEscolaridade')
                    .select(this.usuario.escolaridade)
                cy.get('#formEsportes')
                    .select(this.usuario.esportes)
            })
            cy.get('#formCadastrar')
            .click()
            cy.get('#resultado > :nth-child(1)')
                .contains('Cadastrado!')
            cy.contains("Popup2")
                .scrollIntoView() 
        });
    });
