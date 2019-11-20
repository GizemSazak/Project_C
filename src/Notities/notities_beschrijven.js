// import React from 'react'
import Check from '../components/Menu/Check'
import './notities_beschrijven.css'
import axios from 'axios'
import '../App.css'
import trash from './trash.svg' // Tell Webpack this JS file uses this image
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
// import axios from 'axios'
 const notities_beschrijven = (props) => {
    return (
        <div className="App">
            <h1 className='titleOefeningen'>Notities</h1>
            <div className="uitslagBody">
                <div className="notitie">
                    <div id="Notitietitel">{props.location.titel}&emsp;&emsp;&emsp;</div>    
                    <div id="NotitieText">{props.location.notitie}<br></br>
                    </div>  
                </div>
                <a href = "./Notities_Updaten">
                <button className="wijzigenButton">Wijzigen</button>
                </a>
                <img src={trash} className="trash"/>

            </div>
            
            <Check />
        </div>
    );
    }

export default notities_beschrijven;
        