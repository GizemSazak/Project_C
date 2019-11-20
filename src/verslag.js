import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Uitslagen.css';
import Check from './components/Menu/Check';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { tsAnyKeyword, tsPropertySignature } from '@babel/types';
import addbutton from './addbutton.png'



    const verslagen = (props) => {

    

    return (
        <div className="App">
            <h1 className='titleOefeningen'>Wedstrijduitslagen</h1>
            <div className="uitslagBody">
                <div className="verslagBody">
                    <div id="titlestand">{props.location.thuis}&emsp;{props.location.stand}&emsp;{props.location.uit}</div>    
                    <div id="titleverslag">Verslag</div>                    
                    <div id="tekstverslag">{props.location.verslag}<br></br>
 
  
                    </div>  
                </div>
                 
            </div>
            <Check />
        </div>
    );
    }

export default verslagen;
        



