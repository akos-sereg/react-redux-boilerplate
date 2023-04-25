import 'babel-polyfill';
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects';
import { HashRouter } from 'react-router-dom';
import 'sanitize.css/sanitize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { reducers } from './utils/state/reducers';
import authorsPageSaga from './containers/AuthorsPage/saga';
import manageAuthorPageSaga from './containers/ManageAuthorPage/saga';
import { composeWithDevTools } from 'redux-devtools-extension'
import App from 'containers/App';
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
/* eslint-enable import/no-webpack-loader-syntax */
import 'styles/theme.scss';

export const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(...[sagaMiddleware]))
);

function* rootSaga () {
    yield [
        fork(authorsPageSaga),
        fork(manageAuthorPageSaga),
    ];
}
sagaMiddleware.run(rootSaga);

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      {/* <LanguageProvider messages={messages}> */}
      <HashRouter>
        <App />
      </HashRouter>
      {/* </LanguageProvider> */}
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
