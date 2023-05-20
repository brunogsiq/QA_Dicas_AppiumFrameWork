///<reference types="cypress"/>

describe('Amazon - Home Page', () => {

    //Este comando é utilizado para que a página aberta do navegador abra em um tamanho diferente, definido pelo Q.A.
    //    cy.viewport(1024, 768)

    /*Neste primeiro comando é definido o que deve acontecer antes de cada caso de teste. O que foi pedido é que seja visitada a URL padrão para o projeto
        o comando cy.vist foi utilizado para isto.*/
    beforeEach(() => {
        cy.visit('https://www.amazon.com.br/')
        cy.viewport(1440, 900)
    })

    /*Aqui será escrito nosso primeiro caso de teste, Utiliznado o comando abaixo*/
    it('Validar acesso a url padrão do projeto', () => {
        cy.waitUntil()
        cy.get('#nav-logo-sprites').should('be.visible')
    })

    it('Validar visualização do menu principal', () => {
        cy.wait(10)
        cy.get('#nav-hamburger-menu').contains('Todos')
        cy.get('#nav-hamburger-menu').contains('Venda na Amazon')
        cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').contains('Mais Vendidos')
    })

})