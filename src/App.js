import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';


class App extends Component {
  render() {
    const pages = ['item1', 'item2', 'item3', 'item4'];

    return (
      <div className="app">
        <NavBar pages={pages}/>
      </div>
    );
  }
}

export default App;
