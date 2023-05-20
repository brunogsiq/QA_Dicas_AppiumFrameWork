
describe('Login de Usuário de Alura Pic', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Fazer login com usuário invalido_Teste_1', () => {
        cy.get('input[formcontrolname = "userName"]').type('b');
        cy.get('input[formcontrolname = "password"]').type('b');
        cy.get('button[type ="submit"]').click();
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    })

    it('Fazer login com usuário Inválido_Teste_2', () => {
        cy.login('brunog', '123');
    })

    it('Fazer login com usuário Válido_Teste_1', () => {
        cy.get('input[formcontrolname = "userName"]').type('flavio');
        cy.get('input[formcontrolname = "password"]').type('123');
        cy.get('button[type ="submit"]').click();
        cy.contains('a', '(Logout)').should('be.visible').click();
    })

    it('Fazer login com usuário Válido_Teste_2', () => {
        cy.login(Cypress.env('userName1'), Cypress.env('password1'));
        cy.contains('a', '(Logout)').should('be.visible').click();
    })

})