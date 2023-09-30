/// <reference types="cypress" /> 

    import {elemTelaCampoDeTrein} from "../../libraries/pageObjects/campoDeTreinamento"
    describe("Cypress Basic", () =>
    {
        it("Should visit a page and assert a title page", () =>
        {
            let pO = elemTelaCampoDeTrein()
            cy.visit(pO.baseUrl)                                          //visitamos o site.
            cy.viewport(1440, 900)                                        //abrimos o navegador no tamanho referenciado.
            //cy.pause()                                                  //pausa a execução.
            //cy.debug()                                                  //detalhar visualização de algum momento do teste, deverá vir antes de algum comando.
            cy.waitUntil(() => cy.xpath(pO.xTitle).should("be.visible"))  //pedimos para aguardar alguns segundos - 10 neste exemplo.
        })
        it("Assert a title page", () =>
        {
            let pO = elemTelaCampoDeTrein()
            cy.visit("https://wcaquino.me/cypress/componentes.html")
            cy.viewport(1440, 900)
            cy.title()
                .should("be.equal", pO.textTitle)                          //pegamos o campo título, deve ser igual ao que desejo validar.
                .and("not.be.equal", "campo de treinamento")               //pegamos o campo título, não deve ser igual ao que desejo validar.
                .and("contains", "Campo")                                  //verificação que o campo título contém a palavra campo.
                .and("not.contains", "Corinthians")                        //verificação que o campo título não contém a palavra campo.
        })
        it("Should find and interact with a element", () =>
        {
            let pO = elemTelaCampoDeTrein()
            cy.visit("https://wcaquino.me/cypress/componentes.html")
            cy.viewport(1440, 900)
            cy.get(pO.buttonClique)
                .should("have.value", pO.textClique)                          //verificação de posso do valor "".
                .click()                                                      //click no elemento.
                .and("have.value", pO.textObrigado)                          //verificação de posso do valor "".
        })
    })