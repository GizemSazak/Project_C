import React from 'react'
import './Notities.css'
import Check from '../components/Menu/Check'
import '../App.css'
function Notities() {
    return (
        <div className="App">
            <h1 className='titleOefeningen'>Notities</h1>
            <div className="Toevoegen"><button type="button" onclick="alert('Hello world!')">Notities Toevoegen</button></div>
            <div className = "column1"></div>
            <Check />
        </div>
    );
}
export default Notities;