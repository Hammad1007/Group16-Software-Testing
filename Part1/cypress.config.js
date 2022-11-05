
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
    e2e: {
    async setupNodeEvents(on, config) {

        // implement node event listeners here
        const bundler = createBundler({
            plugins: [createEsBuildPlugin(config)],
        });
        baseUrl: 'https://app.mystudylife.com';
        on('file:preprocessor', bundler);
        await addCucumberPreprocessorPlugin(on, config);
        return config;
    },
    specPattern: 'cypress/e2e/features/*.feature'
    },
});