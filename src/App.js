import React, { Component } from 'react';
import './App.css';

// Components Import
import SideBar from './components/SideBar';
import MainArea from './components/MainArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <MainArea />
      </div>
    );
  }
}

export default App;
