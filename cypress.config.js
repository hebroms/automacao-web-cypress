const { defineConfig } = require('cypress');
const createBundler  = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  video: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  e2e: {
    baseUrl: 'http://localhost:8080',
    env: {
      allure: true,
      stepDefinitions: 'cypress/e2e/step_definitions/*',
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    specPattern: 'cypress/e2e/features/*.feature',
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome, allure-mocha',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      overwrite: false,
      html: true,
      json: true
    },
    allureMochaReporterOptions: {
      resultsDir: 'allure-results'
    }
  }
});