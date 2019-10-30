import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Route, Link } from 'react-router-dom'
import Oefeningen from './Oefeningen'
import Home from './Home'

function App() {

  return (
    <div >
      <Route exact path='/' component={Home}/>
      <Route exact path='/Oefeningen' component={Oefeningen}/>
    </div>
  );
}


export default App;

