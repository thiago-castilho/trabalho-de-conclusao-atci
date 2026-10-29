const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: {
    runMode: 1,
    openMode: 0,
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://www.automationexercise.com/',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
