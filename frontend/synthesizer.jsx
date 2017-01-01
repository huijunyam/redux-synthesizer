import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note';
import configureStore from './store/store';

// const App = () => {
//
// };

// window.Note = Note;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<h1> Synthesizer</h1>, root);
  window.store = store;
});
