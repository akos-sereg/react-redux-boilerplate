# react-redux-boilerplate

This project is a working standalone front-end app aiming to demonstrate best javascript practices and common usage of React / Redux.

## Usage
```
$ nvm install 14.21.2
$ nvm use 14.21.2
$ npm install
$ npm start
```

Then open http://localhost:3000/

For production build, run the following command:

```
$ npm run build
```

This will produce artifacts under ``build`` folder

## Stack and Features

#### Language
- ES6
- SCSS
- Typescript

#### Stack
- Node v10.0.0 - released 24th of April 2018
- React v18.2.0 - released 14th of June 2022
- Redux v4.2.1 - released 28th of Jan 2023

#### Development and Build
- Hot Reload
- Webpack
- Sourcemap
- Jest
- ESLint
  - check: ``npm run lint``
  - fix: ``eslint --fix --ext .ts,.tsx . eol=lf``

#### User Interface
- Bootstrap 3
- Toastr notifications

#### TODOs

- Upgrade Node version
- Add tests
- eslint to be aligned with editorconfig

## Testing

Run the following command

```
$ npm run test
``` 

It generates a coverage report as well. You can set coverage expectations in ``config/jest.config.js``
