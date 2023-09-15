import state, { subscribe, addPost, updateNewPostText } from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    // <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </BrowserRouter>
    // </React.StrictMode>
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
