# react-redux-boilerplate

This project is a working standalone front-end app aiming to demonstrate best javascript practices and common usage of React / Redux.

## Stack
- Node v14.21.2 - released 13th of December 2022
- React v18.2.0 - released 14th of June 2022
- Redux v4.2.1 - released 28th of Jan 2023

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

### Development and Build
- Hot Reload
- Webpack
- Sourcemap
- Jest
- ESLint
  - check: ``npm run lint``
  - fix: ``eslint --fix --ext .ts,.tsx . eol=lf``

### User Interface
- Bootstrap 3
- Toastr notifications

### TODOs

- Upgrade Node version
- Add tests
- introduce styled-components
- eslint to be aligned with editorconfig

## Testing

Run the following command

```
$ npm run test
``` 

It generates a coverage report as well. You can set coverage expectations in ``config/jest.config.js``
