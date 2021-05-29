import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {stores, StoresProvider} from "./store/RootStore";

ReactDOM.render(
  <React.StrictMode>
      <StoresProvider value={stores}>
        <App />
      </StoresProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);
