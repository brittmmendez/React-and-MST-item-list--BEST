import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "mobx-react";

import { onPatch } from "mobx-state-tree"
import makeInspectable from 'mobx-devtools-mst';

import Invoice from './models/Invoice.js';

const store = Invoice.create({
    currency: 'US',
});

onPatch(store, patch => {
    console.log(patch)
})

makeInspectable(store);

const mainApp = (
    <Provider invoice={store}>
        <App></App>
    </Provider>
);

ReactDOM.render(
    mainApp, 
    document.getElementById('root')
);

registerServiceWorker();
