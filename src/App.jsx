import React , { useState } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';

import './App.css';

// Components Import
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';

//Routed Components
import Users from './components/Users/Users';
import Groups from './components/Groups/Groups';
import Computers from './components/Computers/Computers';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <SideBar />
          <div className="App-Routes-Display">
            <Route exact path='/' component={Main}/>
            <Route path='/users' component={Users}/>
            <Route path='/groups' component={Groups}/>
            <Route path='/computers' component={Computers}/>
          </div>
      </div>
    </Router>
  );
}

export default App;
