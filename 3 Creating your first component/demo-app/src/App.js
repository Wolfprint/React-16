import React, { Component } from 'react';
import './App.css';

//add Person component
import Person from './Person/Person';
import Movie from './Movie/Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I am a react App</h1>
        <Person name="Jorge" age="29"/>
        <Person name="Andrea" age="27"/>
        <Person name="Luis" age="28"/>
        <Movie name="Avenger" year="2011" studio="Marvel Studios"/>
      </div>
    );
  }
}

export default App;
