const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1300,
  viewportHeight: 800,
  videos: true,
  env: {
    baseUrl: "https://www.locaweb.com.br/registro-de-dominio/",
  },
  e2e: {
    experimentalRunAllSpecs: true,
    //Aqui ficarão todos os meus teste//
    specPattern: [
       "cypress/tests/scenes/01 - Validar acesso a tela de registro de dominio.cy.js",
       "cypress/tests/scenes/02 - Validar dominio nacional.cy.js",
       "cypress/tests/scenes/03 - Validar dominio internacional.cy.js",
       //"cypress/tests/scenes/04 - .cy.js",
    ],
  },
});