const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  waitForAnimations: false,
  animationDistanceThreshold: 50,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true;
       require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

  // waitForAnimations: false,
  // animationDistanceThreshold: 50,