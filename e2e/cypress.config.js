const { defineConfig } = require("cypress");
module.exports = defineConfig({
    chromeWebSecurity: false,
    e2e: {
        baseUrl: 'http://frontend-cypress:8081',
    },
    video: false,
    reporter: "json",
    reporterOptions: {
        output: "cypress/results/tests-result.json"
    }
});
