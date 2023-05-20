// home.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

//Definição da suíte de testes
describe('home page', () => {
    //Caso de teste
    it('01 - App deve estar on line', () => {
        //Para mudar a visualização da página quando o cypress é aberto
        cy.viewport(1440, 900)
        // Comando para realizar a visitação da página
        cy.visit('https://buger-eats.vercel.app')
        /*
        get - irá buscar um elemento da págiana.
        should - é um asert, é uma expectativa de validação.
        */
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})