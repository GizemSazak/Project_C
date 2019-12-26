import React, { useState, useEffect, Component } from 'react';
// import '../Notities/Notities.css';
import Check from '../Menu/Check'
import { Link } from 'react-router-dom';
import axios from 'axios'
class Teamcode extends Component {
    constructor(props) {
        super(props);
      }

    render(){
    if(!localStorage.getItem('Data') || localStorage === null){
        window.location.href = '/';
      }
    else{ 
    return (
        <div className="Notitiebody">
            <h1 className='titleNotitiel'>Teamcode</h1>
            <div className="column1"></div>
            <div className="tablerow" >
                        <button id="rowss" >
                            {this.props.location.teamcode}
                        </button>
    
                

            </div>
            <Check />
        </div>
    );
     }}
}
export default Teamcode;
