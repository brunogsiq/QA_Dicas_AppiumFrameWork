const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 800,
  viewportHeight: 1300,
  video: true,
  env: {
    baseUrl: "https://dev-finance.netlify.app/",
  },
  e2e: {
    experimentalRunAllSpecs: true,
    //Aqui ficarão todos os meus testes:
    specPattern: [
      "cypress/tests/scenes/01 - Validar acesso a url padrao do projeto.cy.js",
      "cypress/tests/scenes/01_1 - Validar criterios de aceite.cy.js",
      "cypress/tests/scenes/02 - Validar visualização do modal de cadastro de nova transacao.cy.js",
      "cypress/tests/scenes/03 - Validar cadastro de nova transacao.cy.js",
      "cypress/tests/scenes/04 - Validar cadastro de nova saída.cy.js",
      "cypress/tests/scenes/05 - Validar exclusao de entrada e saída.cy.js",
    ],
  },
});