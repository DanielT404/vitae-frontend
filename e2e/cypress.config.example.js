const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "{YOUR_OWN_BASE_URL_TO_PREFIX_EVERY_CY_VISIT}" // this base url will be used by Cypress during tests. Read more about it here: https://docs.cypress.io/guides/references/configuration#e2e
  }
});
