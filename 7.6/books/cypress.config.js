const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "http://localhost:3000",
    "retries": 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    login: 'bropet@mail.ru',
    password: '123',
  },

  "viewportWidth": 1366,
  "viewportHeight": 768
});
