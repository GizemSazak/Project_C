// import React from 'react'
import Check from '../components/Menu/Check'
import './notities_beschrijven.css'
import axios from 'axios'
import '../App.css'
import trash from './trash.svg' // Tell Webpack this JS file uses this image
import React, { Component,useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
// import axios from 'axios'
class notities_beschrijven extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: this.props.location.id,
        notitie: this.props.location.notitie,
        titel: this.props.location.titel

      }
    }

    handleChange (event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    Notities_Verwijderen() {
        const request = new Request('http://localhost:3001/api/notities', {
        method: 'DELETE',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ 'id': parseInt(this.props.location.id),})
        });
        fetch(request)
          .then(response => {
                response.json().then(data => { });
            })
            .catch(err => {
                console.log(err);
            });
                }

    Notities_Wijzigen() {
        const request = new Request('http://localhost:3001/api/notities',{
        method: 'PUT',
        body: JSON.stringify({ 'id': parseInt(this.props.location.id),'notitie': this.state.notitie,'titel': this.state.titel}),
        headers: {
            'Content-Type': 'application/json'
        }});
        fetch(request)
        .then(response => {
              response.json().then(data => { });
          })
          .catch(err => {
              console.log(err);
          });
          console.log({ 'id': parseInt(this.props.location.id),'notitie': this.state.notitie,'titel': this.state.titel})
              }

    
          
      
    render(){
    return (
        <div className="App">
            <h1 className='titleOefeningen'>Notities</h1>
            <div className="uitslagBody">
                {/* <div className="notitie"> */}
                    {/* <div id="Notitietitel">{this.props.location.titel}&emsp;&emsp;&emsp;</div>    
                    <div id="NotitieText">{this.props.location.notitie}<br></br>
                    </div>   */}
                 {/* </div> */}
                <textarea id="Notitietitel" col="200" type="text" name="titel"  onChange={event => this.handleChange(event)} 
                   defaultValue={this.state.titel}/>
                <textarea className="notitie" col="200" type="text" name="notitie"  onChange={event => this.handleChange(event)} 
                   defaultValue={this.state.notitie}/>
                 <Link to="./Notities"><button onClick={() => this.Notities_Wijzigen()} className="wijzigenButton">Wijzigen</button>
             </Link>
            </div>
            <img src={trash} onClick= {() => this.Notities_Verwijderen()} className="trash"/>

            
            <Check />
        </div>
  );
}
}


export default notities_beschrijven;

// import React, { useState, useEffect, Component } from 'react';
// import ReactDOM from 'react-dom';
// import './notities_beschrijven.css'
//  import Check from '../components/Menu/Check'
// import { Link } from 'react-router-dom';
// import axios from 'axios'
// import { tsAnyKeyword, tsPropertySignature } from '@babel/types';
//  import trash from './trash.svg' // Tell Webpack this JS file uses this image


// class notities_beschrijven extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         id: this.props.location.id,
//         notitie: this.props.location.notitie
//       }
//     }

//     handleChange (event) {
//         let nam = event.target.name;
//         let val = event.target.value;
//         this.setState({[nam]: val});
//     }

//     Verwijderen() {
//         const request = new Request('http://localhost:3001/api/notities', {
//         method: 'DELETE',
//         headers: new Headers({ 'Content-Type': 'application/json' }),
//         body: JSON.stringify({ 'id': parseInt(this.props.location.id),})
//         });
//         fetch(request)
//           .then(response => {
//                 response.json().then(data => { });
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//                 }

//     Opslaan() {
//         const request = new Request('http://localhost:3001/api/notities',{
//         method: 'PUT',
//         body: JSON.stringify({ 'id': parseInt(this.props.location.id),'notitie': this.state.notities}),
//         headers: {
//             'Content-Type': 'application/json'
//         }});
//         fetch(request)
//         .then(response => {
//               response.json().then(data => { });
//           })
//           .catch(err => {
//               console.log(err);
//           });
//           console.log({ 'id': parseInt(this.props.location.id),'notities': this.state.notities})
//               }

    
          
      
//     render(){
//     return (
//         <div className="App">
//             <h1 className='titleOefeningen'>Wedstrijduitslagen</h1>
//             <div className="uitslagBody">
//                 <div className="verslagBody">
//                     <div id="titlestand">{this.props.location.thuis}&emsp;&emsp;&emsp;{this.props.location.stand}&emsp;&emsp;&emsp;{this.props.location.uit}</div>    
//                     <div id="titleverslag">Verslag</div>          
//                     <textarea id="editverslag" col="200" type="text" name="notities"  onChange={event => this.handleChange(event)} 
//                    defaultValue={this.state.verslag}/>
//                 </div>
//                 <Link to="./Notities"><button onClick={() => this.Opslaan()} className="opslaanbutton">Opslaan</button>
//             </Link>
//             <img src={trash} onClick= {() => this.Verwijderen()} className="trashbutton"/>
//             </div>
            
//             <Check />
//         </div>
//     );
//     }
// }
    

// export default notities_beschrijven;
                