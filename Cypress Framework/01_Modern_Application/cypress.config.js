const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1400,
  viewportHeight: 900,
  video: true,
  e2e: {
    //defaultCommandTimeout: 9000,
    experimentalRunAllSpecs: true,
    hideXHRInCommandLog: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});