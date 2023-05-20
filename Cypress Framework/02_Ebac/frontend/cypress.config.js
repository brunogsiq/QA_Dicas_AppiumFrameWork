const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1300,
  viewportHeight: 800,
  video: true,
  env: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
  },
  e2e: {
    experimentalRunAllSpecs: true,
    //Aqui ficarão todos os meus testes:
    specPattern: [
       "cypress/e2e/tests/01 - Validar acesso a url padrão.cy.js",
       "cypress/e2e/tests/02 - Validar acesso a url login.cy.js",
       "cypress/e2e/tests/03 - Validar login.cy.js",
       "cypress/e2e/tests/04 - Validar cadastro.cy.js",
       "cypress/e2e/tests/05 - Validar acesso a url produtos.cy.js",
      // "cypress/tests/scenes/",
    ],
  },
});