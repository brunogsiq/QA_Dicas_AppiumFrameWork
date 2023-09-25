/// <reference types="cypress" /> 



import { elemEbacShop } from "../page_Objects/ebacStore";
//var faker = require('faker');
const { faker } = require('@faker-js/faker');
const nPassword = faker.internet.password(12, false, /[\w\d\S]*[\w\d\S\?][\w\d\S]*/);

export function validateCadastro(testData) {
    let pO = elemEbacShop()

    //Validações da DIV do campo de Cadastro
    cy.get('[for="reg_email"]').should("contain", "Email address")
    cy.get('[for="reg_password"]').should("contain", "Password")
    cy.get(':nth-child(4) > .button').should("be.visible",)

    // switch (testData.username){
    //     case '':
    //         cy.get()
    //         .type(e)
    // }

    if (testData.email != '') {
        cy.get('#reg_email')
            .type(testData.email)
        cy.get('#reg_password')
            .type(testData.password)

        if (testData.password.length < 3) {
            cy.get(pO.cRegSenhaVazia)
                .should("contain", "Muito fraca - Digite uma senha segura.")
        }
        else if (testData.password.length == 11) {
            cy.get(pO.cRegSenhaVazia)
                .should("contain", "Fraca - Digite uma senha segura.")
        }
        else if (testData.password.length == 12) {
            if (!/\d/.test(testData.password)) {
                cy.get(pO.cRegSenhaVazia)
                    .should("contain", "Fraca - Digite uma senha segura.")
            }
        }
        if (testData.password.length > 12) {
            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{12,}$/.test(testData.password)) {
                cy.get(pO.cRegSenhaVazia)
                    .should("contain", "Médio")
            }
            else {
                cy.get(pO.cRegSenhaVazia)
                    .should("contain", "Forte")
            }
        }

    }
    cy.get(':nth-child(4) > .button')
        .click()
    if (testData.email == '') {
        cy.get('.woocommerce-error > li')
            .should("contain", "Informe um endereço de e-mail válido")
    }
    else if (testData.email == 'brunogsiq@gmail.com') {
        cy.get('.woocommerce-error > li')
            .should("contain", "Uma conta já está registrada com seu endereço de e-mail. Faça login.")
    }
    if (testData.testOk == true) {
        cy.get(pO.cIdentUser).should('contain', "Welcome")
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', "Olá")
        cy.get('.page-title').should('contain', "Minha conta")

        const fName = faker.name.firstName('male');
        const lName = faker.name.lastName('male');

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account')
            .click()
        cy.get('#account_first_name')
            .type(fName)
        cy.get('#account_last_name')
            .type(lName)
        cy.get('#account_display_name')
            .clear()
            .type(fName + " " + lName)
        cy.get('#password_current')
            .type(testData.password)
        cy.get('#password_1')
            .type(nPassword)
        cy.get('#password_2')
            .type(nPassword)
        cy.get('.woocommerce-Button')
            .click()
        cy.get('.woocommerce-message')
            .should('contain', "Detalhes da conta modificados com sucesso.")
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)')
            .should('contain', fName + " " + lName)
        cy.get('[href="http://lojaebac.ebaconline.art.br/minha-conta/"] > .hidden-xs')
            .should('contain', "Welcome" + " " + fName + " " + lName)
    }

}