import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
);



ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

registerServiceWorker();
