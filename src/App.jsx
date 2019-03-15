import React from 'react';
import './App.css';

// Components Import
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
