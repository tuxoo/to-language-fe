import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
