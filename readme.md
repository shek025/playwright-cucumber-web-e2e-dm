# Playwright + Cucumber (BDD) Using Typescript
Playwright is a Microsoft funded Open source automation tool used for E2E testing of web applications
Cucumber is a popular behavior-driven development (BDD) Library which uses Gherkin as a language designed to be non-technical and human readable, and collectively describes use cases relating to a software system. The purpose behind Gherkin's syntax is to promote behavior-driven development practices across an entire development team, including business analysts and managers. It seeks to enforce firm, unambiguous requirements starting in the initial phases of requirements definition by business management and in other stages of the development lifecycle.

## Features

1. Verify Video functionalities and verify premier league points table of https://www.dailymail.co.uk 


## Project structure

- .github -> yml file to execute the tests in GitHub Actions
- e2e -> Contains all the source code and feature files
    - features -> Contains all feature files.
    - pages -> class files for each page
    - steps -> step defination(implementation) for the cucumber step
    - support -> hooks.js file which is used before and after test execution
- test-results -> Contains cucumber-report.html report and video test evidences.

## Reports


## Get Started

### Setup:

1. Clone or download the project
2. Extract and open in the Vs-Code
3. Open terminal and run `cmd`
4. `npm i` to install the dependencies
5. `npx playwright install` to install the browsers
6. `npm run e2etest -- --tags @sport` to execute the tests from the feature file

### Running the tests on docker
docker build -t playwright-cucumber-docker .

##all tests with given tagname
docker run -p 8080:8080 -it playwright-cucumber-docker:latest  node_modules/@cucumber/cucumber/bin/cucumber-js e2e/features/*.feature --require e2e/steps/*.ts --require e2e/pages/*.ts --require e2e/support/*.ts




