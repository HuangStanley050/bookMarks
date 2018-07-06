import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./store/reducers/reducer";
import registerServiceWorker from './registerServiceWorker';

const Store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const app = (
    <Provider store={Store}><BrowserRouter><App /></BrowserRouter></Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
