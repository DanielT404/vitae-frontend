const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "{YOUR_OWN_BASE_URL_TO_PREFIX_EVERY_CY_VISIT}"
  }
});
