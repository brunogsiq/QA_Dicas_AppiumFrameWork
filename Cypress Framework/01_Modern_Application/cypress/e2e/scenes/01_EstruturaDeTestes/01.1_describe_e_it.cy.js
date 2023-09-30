    /*
    Utilizando o comando abaixo o VsCode reconhece que estamos trabalhando com cypress, e nos ajudará;
    */
/// <reference types="cypress" />

    //1 - Agrupamento de teste.
    describe('Should group test...', () =>
    {
        //Servirá para agrupar testes.
    })

    //2 - Estrutura de um caso de teste.
    it('A external test...', () =>
    {
        //Aqui estarão os comandos que deverão fazer parte das etapas do teste.
    })

    /*
    Portanto, utilizando os conceitos acima, ficaria como no exemplo abaixo:
    */

    describe('Should group test...', () =>
    {
        /*
        Aqui é um grupo de testes..
            Diversas etapas de testes poderão estar aqui.
        */
        it('A external test...', () =>
        {
            //Aqui estarão os comandos que deverão fazer parte das etapas do teste
        })
    })

    //Dentro de um grupo de testes poderão haver outros grupos
    describe('Should group specific tests 01', () =>
    {
        describe('Should group test 01.1...', () =>
        {
            /*Aqui é um grupo de testes..
                Diversas etapas de testes poderão estar aqui.
            */
            it('A external test...', () => 
            {
                //Aqui estarão os comandos que deverão fazer parte das etapas do teste
            })
        })
    })