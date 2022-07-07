module.exports = {
  // The rest of the Cypress config options go here...
  projectId: 'qo55ed',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    cypressReactSelector: {
      root: '#root'
    }
  }
};
