# react-redux-boilerplate

This project is a working standalone front-end app aiming to demonstrate best javascript practices and common usage of React / Redux.

## Usage
```
$ nvm install 10.0.0
$ nvm use 10.24.1
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
- React v17.0.2 - released 22nd of March 2021
- Redux v4.0.1 - released 13rd of Oct 2018

#### Development and Build
- Hot Reload
- Webpack
- Sourcemap
- Jest
- ESLint - ``npm run lint``

#### User Interface
- Bootstrap 3
- Toastr notifications

#### TODOs

- Upgrade Node version
- Upgrade react-router-dom to 5.3.4
- Use central saga, reducer collection
- Use { type, payload } in all actions
- AuthorApi to be async
- Generate .map files, make sure debugging is easy

## Testing

Run the following command

```
$ npm run test
``` 

It generates a coverage report as well. You can set coverage expectations in ``config/jest.config.js``
