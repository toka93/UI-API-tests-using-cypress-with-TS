## UI & API testscripts using Cypress and Typescript

 using pageobject deign pattern.
 The Solution generates date to test scenarios and apply cypress best practise, the solution is built to be easily maintained and has the ability to easily add new scope.


### setup
- npm install 
- npm install cypress --save-dev
- npm init
- To install report: npm i --save-dev cypress-mochawesome-reporter
- For more info, please check : https://docs.cypress.io/guides/getting-started/installing-cypress
- To install faker library :  npm install @faker-js/faker --save-devnpm install @faker-ts/faker --save-dev
- To install API plugin: npm i cypress-plugin-api  
- To install scema validator: npm install chai-json-schema



### Running tests locally
- To open Cypress' GUI run `npx cypress open`. The you will be able to run the tests from there
- To run in headless mode and generate report run : `npx cypress run --reporter mochawesome`

### Tests implemented:
- 2 specs(one for UI and another one for APIs).
- The page object pattern was used



### 
- After running `npx cypress run --reporter mochawesome` mochawesome-report folder will be created at the root directory contains html reports for every spec & cypress\screenshots folder contains screenshots for failed scripts. 

