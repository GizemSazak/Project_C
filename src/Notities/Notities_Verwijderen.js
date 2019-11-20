import React, { Component } from 'react'
import './Notities_toevoegen.css'
import '../App.css'
import trash from './trash.svg' // Tell Webpack this JS file uses this image
import Check from '../components/Menu/Check'
import axios from 'axios'

import { Link } from 'react-router-dom';
// import axios from 'axios'
 const Notities_Verwijderen = (props) => {
  function Verwijderen() {
    const request = new Request('http://localhost:3001/api/notities', {
    method: 'DELETE',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ 'id': parseInt(props.location.id),})
    });
    fetch(request)
    .then(response => {
        response.json().then(data => { });
    })
    .catch(err => {
        console.log(err);
    });
        }
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
                <button onClick="" className="opslaanbutton">Opslaan</button><img src={trash} onClick= {() => Verwijderen()} className="trashbutton"/>
                </a>
                <img src={trash} className="trash"/>

            </div>
            
            <Check />
        </div>
    );
    }

export default Notities_Verwijderen;
        