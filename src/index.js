import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import bookMarkReducer from "./store/reducers/reducer";
import authReducer from "./store/reducers/auth";
import fetchReducer from "./store/reducers/fetched";
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    book: bookMarkReducer,
    auth: authReducer,
    fetch: fetchReducer
});

const Store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={Store}><BrowserRouter><App /></BrowserRouter></Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
