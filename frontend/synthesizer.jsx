import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note';
const App = () => {

};

window.Note = Note;
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App/>, root);
});
