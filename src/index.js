import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import state from './redux/state.js'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
  </React.StrictMode>
);
