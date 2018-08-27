import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';

var person = {
  personName: "Bibek",
  personAge:30,
  favorites: [
   "capybaras",
   "Tigers",
   "Dinosaurs count!"
 ]
}

ReactDOM.render(
  <Hello name={person.personName} age={person.personAge}favs={person.favorites}
  />,
  document.getElementById('root')
)
