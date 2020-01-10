import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const _store = createStore(reducer);

ReactDOM.render(
    <Provider
        store={_store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById( 'root' ) );
    
registerServiceWorker();
