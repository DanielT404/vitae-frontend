const { defineConfig } = require("cypress");

// This base url will be used by Cypress during tests. Read more about it here: https://docs.cypress.io/guides/references/configuration#e2e
module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:8080'
    }
});
