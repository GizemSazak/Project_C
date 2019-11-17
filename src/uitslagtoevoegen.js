import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Uitslagen.css';
import Check from './components/Menu/Check';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { tsAnyKeyword } from '@babel/types';
import addbutton from './addbutton.png'





const id= 0;
const thuis = '';
const stand = '';
const uit = '';
const verslag = '';



function addUitslag() {

    const request =  new Request('http://localhost:3001/api/wedstrijduitslag', {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          body: JSON.stringify({'id': id, 'thuis': thuis, 'stand': stand, 'uit': uit, 'verslag': verslag })
        });
        fetch(request)
          .then(response => {
            response.json().then(data => {});
          })
          .catch(err => {
            console.log(err);
          });

        }


function uitslagtoevoegen() {




    return (
        <div className="App">
            <h1 className='titleOefeningen'>Wedstrijduitslagen</h1>
            <div className="uitslagBody">
                <div className="standtoevoegenBody">
         
        <form useRef="dataForm" className="standForm">
          <input id="formp1" type="text" placeholder="week" /><br></br>
          <input id="formp1" type="text"   placeholder="thuis" /><br></br>
          <input id="formp1" type="text"  placeholder="uit" /><br></br>
          <input id="formp1" type="text"  placeholder="stand" /><br></br>
          <textarea  cols="23" rows="20"  id="formp2" type="text"  placeholder="verslag"></textarea>
          <br></br>
          <button onClick={addUitslag()}>Toevoegen</button>
        </form>
        
                 </div>
            </div>
            <Check />
        </div>
    );
}

export default uitslagtoevoegen;

        



