describe('alura busca cursos', () => {
    //
    beforeEach(() => {
        //Comando que deve ser executado antes de cada caso de teste, para manter independência entres estes.
        cy.visit('http://www.alura.com.br')
        // este comando faz com que um site seja visitado;
    })

    it('buscar curso de java 1', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Java');
        //Este comando vai buscar o elemento desejado.
        //Enquanto o type, vai digitar no campo desejado o texto;
        cy.get('.header-barraBusca-form-submit').click();
        // O comando click, fará o clique no elemento desejado.

        /*
        O raciocício é buscar sempre o elemento, e realizar uma ação.
        Um teste é composto pela ideologia dos 3 A´s:
            Arrange : Preparação do ambiente.
            Act     : Ação que desejo realizar.
            Assert  : O que desejo verificar.
        */
        cy.get(':nth-child(3) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome')
            .should('have.text', 'Formação Java e Orientação a Objetos');
        //A função do should é o assert. 

        /*Os comando accima digitados estão ok, porém podem causar algum transtorno, caso o elemento que se deseja verificar mudar de posição.
        O Subsituiremos pelos comandos abaixo (buscar curso de java 2)
        */
    })

    it('buscar curso de java 2', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome')
            .should('contain', 'Formação Java e Orientação a Objetos');
        //Comando contain não vai pegar por posição mas sim pelo elemento contido
    })

})