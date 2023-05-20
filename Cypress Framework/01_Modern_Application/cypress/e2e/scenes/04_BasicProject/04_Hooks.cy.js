/* Utilizando os exemplos 01 e 02 e 03 vamos fazer o Hook, ou seja, um retorno de chamada para evitar má codificação
    e melhores práticas.

    Hook pode ser algo que aconteça antes da suíte de test dar início, como a visita há um site, assim evitando a necessidade
        de se escrever o código a cada it.
*/

/// <reference types="cypress"/>

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";

describe("04 Hooks", () => {
  //HOOK - Isto é um hook, ou seja, antes da execução de cada teste, será realizado isto primeiro, podemos usar uma outra estratégia, que é antes de tudo,
  //ou seja, apenas Before, assim, antes de tudo, ele irá executar algo que não será reexecutado antes de cada teste, como é o caso do beforeEach
  //Mais um detalhe para ficar atendo, é que o mesmo será executado apenas no grupo de testes dentro do describe.
  beforeEach(() => {
    let pO = elemTelaCampoDeTrein();
    cy.visit(pO.urlBase); //visitamos o site
    cy.viewport(1440, 900); //abrimos o navegador no tamanho referenciado
    //cy.pause()                                                //pausa a execução
    //cy.debug()                                                //detalhar visualização de algum momento do teste, deverá vir antes de algum comando
    cy.waitUntil(() => cy.xpath(pO.xTitle)); //pedimos para aguardar alguns segundos - 10 neste exemplo
  });

  //Este trecho era um test individual, que foi transformado em Hook.
  // it('Should visit a page and assert a title page', () => {
  //     cy.visit('https://wcaquino.me/cypress/componentes.html')   //visitamos o site
  //     cy.viewport(1440, 900)                                     //abrimos o navegador no tamanho referenciado
  //     //cy.pause()                                               //pausa a execução
  //     //cy.debug()                                               //detalhar visualização de algum momento do teste, deverá vir antes de algum comando
  //     cy.wait(10)                                                //pedimos para aguardar alguns segundos - 10 neste exemplo
  //})

  it("Assert a title page", () => {
    let pO = elemTelaCampoDeTrein();
    cy.visit("https://wcaquino.me/cypress/componentes.html");
    cy.viewport(1440, 900);
    cy.title()
      .should("be.equal", pO.textTitle) //pegamos o campo título, deve ser igual ao que desejo validar
      .and("contains", "Campo"); //verificação que o campo título contém a palavra campo
  });

  it("Should find and interact with a element", () => {
    let pO = elemTelaCampoDeTrein();
    cy.visit("https://wcaquino.me/cypress/componentes.html");
    cy.viewport(1440, 900);
    cy.get(pO.buttonClique)
      .should("have.value", pO.textClique) //verificação de posso do valor ''
      .click() //click no elemento
      .should("have.value", pO.textObrigado); //verificação de posso do valor ''
  });

  it('Texto do Rodape', () => {
        let pO = elemTelaCampoDeTrein()
        cy.xpath(pO.xDivTextRodape)                                                //Pegamos e referenciamos toods corpo do html
        .should('contain', pO.divTextTabRodape)                                    //verificamos se há este texto em algum local do corpo
        cy.get('.facilAchar')                                                      //Pegamos e referenciamos a classe do elemento, para verificar por classe, coloca .nomeDaClasse
            .should('contain', 'Cuidado')                                          //verificamos se há este texto neste elemento a palavra.
        //Faremos agora a verificação do texto, por tanto, a frase tem que se exatamente igual, senão, falhará o teste
        cy.get('.facilAchar')
            .should('have.text', pO.divTextTabRodape)
    })

    it('Texto Botões', () => {
        let pO = elemTelaCampoDeTrein()
        cy.get(pO.divResult)
            .should('have.text', 'Status: Nao cadastrado')
        cy.get('[href="#"]')
            .should('have.text', 'Voltar')                          //Aqui tentei o comando have.value, mas link possuem textos não valores.
            .click()
        cy.get(pO.divResult)                                        //busca realizada com # pois é um elemento com ID
            .should('have.text', 'Voltou!')
            .reload()                                               //realizará um recarregamento na págima
        cy.get(pO.divResult)
            .should('have.text', 'Status: Nao cadastrado')
            .should('not.have.text', 'Voltou!')                     // Verificando que não há mais o texto
    })
});

describe("Cypress Basic", () => {

    it('Teste Fora do Before each', () => {
      let pO = elemTelaCampoDeTrein();
      cy.visit(pO.urlBase2); 
    });
})
