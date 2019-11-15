import React from 'react'
import './Notities_toevoegen.css'
import '../App.css'
import trash from './trash.svg' // Tell Webpack this JS file uses this image
import Check from '../components/Menu/Check'

function Notities_toevoegen() {
  return (
    <div className="App">
     <h1 className='titleOefeningen'>Notities</h1>
     <input id = "title" type="text" placeholder="Title"/>
     <input id = "beschrijven" type="text" placeholder="Beschrijven"/> 
     <button id="opslaan" type="button">Opslaan</button>
     <div className = "column1"> </div> 
      return <img  id = "trash" src={trash} alt="Logo" />;
     <Check/>
     
    </div>
    
  );
  
}


export default Notities_toevoegen;     
