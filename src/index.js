import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {stores, StoresProvider} from "./store/RootStore";
import "../node_modules/material-design-icons/iconfont/material-icons.css";

ReactDOM.render(
    <React.StrictMode>
        <StoresProvider value={stores}>
            <App/>
        </StoresProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
