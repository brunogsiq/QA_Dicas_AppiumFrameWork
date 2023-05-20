const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1300,
  viewportHeight: 800,
    //Habilitando downloads
  //downloadsFolder: true,
    //Habilitando screenshot
  //screenshotOnRunFailure: true,
  //screenshotsFolder: true,
  //Habilitando videos
  video: true,
  //videoCompression: 0,
  //videosFolder: true,
    //Deletando tudo que foi gerado
  //trashAssetsBeforeRuns: true,
  env: {
    baseUrl: "https://www.textecnologia.com.br/testes/qa",
  },
  e2e: {
    experimentalRunAllSpecs: true,
    //Aqui ficarão todos os meus testes:
    specPattern: [
       "cypress/tests/scenes/01 - Validar.cy.js",
      // "cypress/tests/scenes/",
    ],
  },
});

