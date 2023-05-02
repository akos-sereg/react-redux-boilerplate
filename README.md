# react-redux-boilerplate

This project is a working standalone front-end app aiming to demonstrate best javascript practices and common usage of React / Redux.

## Stack

|Package        | Version       | Date of Release       |
| ------------- | ------------- | --------------------- |
| Node          | 14.21.2       | 13th of December 2022 |
| React         | 18.2.0        | 14th of June 2022     |
| Redux         | 4.2.1         | 28th of Jan 2023      |
| Typescript    | 5.0.4         | 7th of April 2023     |


## Usage

### Pre-requisites

```
$ nvm install 14.21.2
$ nvm use 14.21.2
```

### Start

```
$ npm install
$ npm start
```

Then open http://localhost:3000/

Any modification in the code will trigger a rebuild cycle, and the browser will refresh the app automatically.

### Production Build

For production build, run the following command:

```
$ npm run build
```

This will produce artifacts under ``build`` folder

## Features

### Language
- ES6
- SCSS
- Typescript

### Development tech-stack
- Hot Reload
- Webpack
- Sourcemap
- Emotion
- Jest - for Unit Testing
- Cypress - for E2E Testing (you can install "Cypress Support" WebStorm plugin as well)
- ESLint
  - check: ``npm run lint``
  - fix: ``eslint --fix --ext .ts,.tsx . eol=lf``

### User Interface
- Bootstrap 3
- Toastr notifications

### TODOs

- Add tests
- Introduce react-error-boundary
- eslint to be aligned with editorconfig

## Testing

Run the following command

```
$ npm run test
``` 

It generates a coverage report as well. You can set coverage expectations in ``config/jest.config.js``

## E2E Testing

Make sure that the application is running (`npm start`), and you are using `InMemory` backend (`app/services/ConfigService.ts`), as E2E tests
are running against your local instance.

Then run the following command

```
$ npm run cypress:open
```

For headless run (eg. on CI/CD, like Jenkins) you can execute `npm run cypress:run`

For more information, read `cypress/Readme.md`