 const { defineConfig } = require("cypress");

 module.exports = defineConfig({
   reporter: 'cypress-mochawesome-reporter',
   reportDir: 'cypress/reports',
   overwrite: false,
   html: false,
   json: true,
    waitForAnimations: false,
   animationDistanceThreshold: 50,
   defaultCommandTimeout: 10000,
  
   e2e: {
     setupNodeEvents(on, config) {
       // implement node event listeners here
       on('task',{
        log(message){
          console.log(message)
          return null
        }
       }
       )
       screenshotOnRunFailure=true;

        require('cypress-mochawesome-reporter/plugin')(on);

       // return require('./cypress/plugins/index.js')(on, config);
     },
   },
 });

  // waitForAnimations: false,
  // animationDistanceThreshold: 50,
