import React, { Component } from 'react';
import './App.css';

// Components Import
import Header from './components/Header/Header';
import MainArea from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainArea />
      </div>
    );
  }
}

export default App;
