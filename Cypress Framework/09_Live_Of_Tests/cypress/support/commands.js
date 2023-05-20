// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('setToken', function () {
    cy.api({
        method: 'POST',
        url: '/sessions',
        body: {
            email: 'brunogsiq@qacademy.io',
            password: 'qa-cademy'
        }
    }).then(function (response) {
        expect(response.status).to.eql(200)
        Cypress.env('token', response.body.token)
    })

})

Cypress.Commands.add('back2ThePast', function () {
    cy.api({
        method: 'DELETE',
        url: '/back2thepast/62a02ed4b1513a001608c999'
    }).then(function (response) {
        expect(response.status).to.eql(200)
    })
})

// POST  /character - Requisição que testa cadastro de personagem
Cypress.Commands.add('postCharacter', function (payload) {
    cy.api({
        method: 'POST',
        /* Url fica com este caminho, 
        pois foi cadastro no arquivo cypress.json
        a url base, para acesso da requisição POST.*/
        url: '/characters',
        body: character,
        headers: {
            Authorization: Cypress.env('token'),
        },
        failOnStatusCode: false
    }).then(function (response) /*callback da função request.*/ {
        //Validar primeiro o status code
        expect(response.status).to.eql(400)
        expect(response.body.error).to.eql('Duplicate character')
    })
})