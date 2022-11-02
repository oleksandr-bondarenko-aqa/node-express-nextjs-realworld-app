import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
