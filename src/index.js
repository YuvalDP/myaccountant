import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { initialState } from '../src/initialState';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={configureStore(initialState)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
