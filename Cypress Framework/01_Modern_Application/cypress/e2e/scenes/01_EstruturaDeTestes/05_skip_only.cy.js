/*Utilizando o comando abaixo o VsCode reconhece que estamos trabalhando com cypress, e nos ajudará*/
/// <reference types="cypress" />


describe('Should group test...', () => {

    //Irá escapar da execução deste teste
    it.skip('01', () => {

    })

    //Executará apenas este teste
    it.only('02', () => {

    })
})

//Podemos escapar de um suíte completa de testes
describe.skip('Should group test...', () => {

    //Irá escapar da execução deste teste
    it('03', () => {

    })

    //Executará apenas este teste
    it('04', () => {

    })
})


