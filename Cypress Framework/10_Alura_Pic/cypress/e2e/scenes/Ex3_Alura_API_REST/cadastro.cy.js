describe('Registro de Usuário de Alura Pic', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Verifica Mensagem de Validacao', () => {
        cy.contains('a', 'Register now').click();
        //Este comando vai procurar um texto dentro de um seletor, facilitando a busca por elementos.
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible'); // o be.visible foi inserido pois a mensagem que é esperada, tem que estar visível;
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('Verifica Mensagem de Dados Inválidos', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname = "email"]').type('Bruno');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname = "fullName"]').type('B');
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname = "userName"]').type('B');
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname = "password"]').type('B');
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('Verifica Mensagem de User Name Letra Minúscula', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname = "userName"]').type('B');
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
        cy.contains('button', 'Register').click();
    })

    it('Verifica Mensagem de UserName e PassWord Diferentes', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname = "userName"]').type('12345678');
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname = "password"]').type('12345678');
        cy.contains('ap-vmessage', 'Username and password must be different').should('be.visible');
        cy.contains('button', 'Register').click();
    })

    it('Registrar Usuário Valído', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname = "email"]').type('brunogsiq.freelancer@gmail.com');
        cy.get('input[formcontrolname = "fullName"]').type('Bruno Siqueira');
        cy.get('input[formcontrolname = "userName"]').type('brunogsiq');
        cy.get('input[formcontrolname = "password"]').type('Hunter17');
        cy.contains('button', 'Register').click();
        cy.contains('a', 'Sign In!').click();
    })

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {
        it(`Registrar Usuário Valído_Teste_Alura ${usuarios.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.get('input[formcontrolname = "email"]').type(usuario.email);
            cy.get('input[formcontrolname = "fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname = "userName"]').type(usuario.userName);
            cy.get('input[formcontrolname = "password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })
    })
})
