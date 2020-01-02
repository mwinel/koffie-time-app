![Workflow Status Badge](https://github.com/mwinel/koffie-time-app/workflows/Koffietime%20App%20CI/badge.svg)

# KOFFIE TIME APP

Koffietime is an open source blogging platform. See [demo](https://koffietime.netlify.com/).

## Requirements

For development, you will only need Node.js installed on your environement. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can also go an extra mile to use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install. Visit the [official Node.js website](http://nodejs.org/) & and follow installation guidelines for you appropriate development enviromrnt. You should be able to run the following commands after the installation procedure below to confirm that you have node installed on your computer.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

---

## Install

    $ git clone https://github.com/mwinel/koffie-time-app.git
    $ cd koffie-time-app
    $ npm install

## Start & watch

    $ npm start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Running Unit Tests

    $ npm test

Launches the test runner in the interactive watch mode.<br />

    $ npm test -- --coverage --watchAll=false

Launches the test runner in the interactive watch mode with test code coverage.<br />

## Simple build for production

    $ npm run build

Builds the app for production to the `build` folder.<br />
It correctly bundles the Koffie-time-app in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

---

## Changes

See [CHANGELOG.md]() for detailed list of changes between releases.

## Upgrade

See [UPGRADE.md]() for information about actions needed when upgrading. For production use we recommend you to upgrade only when new version is released and not to follow the master branch.

## Contribute

Would you like to make koffietime better?

See [CONTRIBUTING.md]() for the steps to contribute.

## Release

See [RELEASE.md]() for information about how to make a new release.
