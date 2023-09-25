const cucumber = require("cypress-cucumber-preprocessor").default;
const resolve = require("resolve");

module.exports = {
  ...(on, config) => {
    on("file:preprocessor", cucumber());
    on("task", {
      resolveModule: (moduleName) => {
        return resolve.sync(moduleName, { baseDir: config.projectRoot });
      },
    });
  },
    "ignoreTestFiles": ["*.js"],
    "viewportWidth": 1366,
    "viewportHeight": 768,
    "defaultCommandTimeout": 10000,
    "requestTimeout": 5000,
    "responseTimeout": 8000,
    "pageLoadTimeout": 30000,
    "env": {
      "foo": "bar"
    },
    "envFile": ".env",
    "chromeWebSecurity": false,
    "retries": {
      "runMode": 2,
      "openMode": 0
    },
    "pluginsFile": "node_modules/cypress-plugin-file-upload/src/index.js",
    "videosFolder": "cypress/videos",
    "screenshotsFolder": "cypress/screenshots",
    "downloadsFolder": "cypress/downloads",
    e2e: {
      "excludeSpecPattern": "...",
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
};
