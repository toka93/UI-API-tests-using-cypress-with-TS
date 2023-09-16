import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    env: {
      webUrl: 'https://automationexercise.com/',
      apiUrl:'https://reqres.in/api'
      },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges:false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportFilename: "[status]_[datetime]-[name]-report",
      timestamp: "longDate"
    }
  },
});
