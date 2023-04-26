import 'babel-polyfill';
import React from 'react';
import App from 'containers/App.tsx';
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
/* eslint-enable import/no-webpack-loader-syntax */
import 'styles/theme.scss';
import { combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { HashRouter } from 'react-router-dom';
import 'sanitize.css/sanitize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import reducers from './utils/state/reducers.ts';
import rootSaga from './utils/state/sagas.ts';
import initialState from "./utils/state/initialState";

export const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    middleware: [sagaMiddleware],
    reducer: combineReducers(reducers),
    initialState
});

sagaMiddleware.run(rootSaga);

const MOUNT_NODE = document.getElementById('app');

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
          <HashRouter>
            <App />
          </HashRouter>
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
