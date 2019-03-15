import {ReactDOM, render} from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import '../assets/styles/style.scss';
import store from './store';
import React from 'react';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
