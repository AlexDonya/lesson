import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const dialogs = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Viktor" },
  { id: 6, name: "Valera" }
];

const messages = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Yo!" },
  { id: 4, message: "Cool!" },
  { id: 5, message: "Fine!" },
  { id: 6, message: "Go play basketball!" }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);
