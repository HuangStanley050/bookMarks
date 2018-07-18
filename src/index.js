import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Reducer from "./store/reducers/reducer";
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const Store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={Store}><BrowserRouter><App /></BrowserRouter></Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
