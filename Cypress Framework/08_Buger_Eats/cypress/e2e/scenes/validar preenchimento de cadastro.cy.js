import { visitarCadastre_se } from "../functions/visitar";

var cpf = require("gerador-validador-cpf");

describe("02 -Formulário de Cadastro", () => 
{
    beforeEach(() =>
    {
        visitarCadastre_se();
    });
    context("02.1 - Validar cadastro completo e com dados válidos.", () =>
    {
        it('02.1.1 - Validar visualização do alerta de sucessp', () => {
            cy.get(".field")
                .eq(0)
                .should("be.visible")
                .type("Regiane");

            cy.get(".field")
                .eq(1)
                .should("be.visible")
                .type(cpf.generate());

            cy.get(".field")
                .eq(2)
                .should("be.visible")
                .type("meuEmail@gmail.com");;

            cy.get(".field")
                .eq(3)
                .should("be.visible")
                .type("11912345678");;

            cy.get(".field")
                .eq(4)
                .should("be.visible")
                .type("18273420");;

            cy.get(".field")
                .eq(5)
                .should("be.visible")
            cy.get(".field > input")
                .eq(5)
                .click();

            cy.get(".field")
                .eq(6)
            cy.get(".field > input")
                .eq(6)
                .should("be.visible")
                .should("have.value", "Rua D")

            cy.get(".field")
                .eq(7)
                .should("be.visible")
                .type(10);

            cy.get(".field")
                .eq(8)
                .should("be.visible")
                .type("Casa");

            cy.get(".field")
                .eq(9)
            cy.get(".field > input")
                .eq(9)
                .should("be.visible")
                .should("have.value", "Jardim Primavera")

            cy.get(".field")
                .eq(10)
            cy.get(".field > input")
                .eq(10)
                .should("be.visible")
                .should("have.value", "Tatuí/SP")

            cy.get("ul > li")
                .eq(0)
                .click();

            cy.get('input[accept^="image"]').attachFile('/Img/' + 'cnh-3.jpg');

            cy.get(".button-success")
                .click();

            cy.waitUntil(() => 
                cy.get("div > .swal2-title")
                    .should("be.visible")
            );

            cy.get("div > .swal2-title")
                .should("have.text", "Aí Sim...");
        });
    });
});