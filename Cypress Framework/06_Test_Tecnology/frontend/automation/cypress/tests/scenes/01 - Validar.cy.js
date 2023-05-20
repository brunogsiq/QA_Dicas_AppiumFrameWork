///<reference types="cypress"/>

import { faker } from '@faker-js/faker';

const randomName = faker.name.fullName();
 
it("01 - Validar acesso a url padrão do projeto", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get('#_tex_nome').type(randomName);
});
