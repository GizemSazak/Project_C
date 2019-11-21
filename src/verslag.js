import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import './Uitslagen.css';
import Check from './components/Menu/Check';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { tsAnyKeyword, tsPropertySignature } from '@babel/types';
import addbutton from './addbutton.png'
import trashimg from './trash.png'


class verslagen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: this.props.location.id,
        verslag: this.props.location.verslag
      }
    }

    handleChange (event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }



    Verwijderen() {
        const request = new Request('http://localhost:3001/api/wedstrijduitslag', {
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
            window.location = './Uitslagen';
                }

    

    Opslaan() {
        const request = new Request('http://localhost:3001/api/wedstrijduitslag',{
        method: 'PUT',
        body: JSON.stringify({ 'id': parseInt(this.props.location.id),'verslag': this.state.verslag}),
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
          console.log({ 'id': parseInt(this.props.location.id),'verslag': this.state.verslag})
          window.location = './Uitslagen';
              }

    
          
      
    render(){
    return (
        <div className="App">
            <h1 className='titleOefeningen'>Wedstrijduitslagen</h1>
            <div className="uitslagBody">
                <div className="verslagBody">
                    <div id="titlestand">{this.props.location.thuis}&emsp;&emsp;&emsp;{this.props.location.stand}&emsp;&emsp;&emsp;{this.props.location.uit}</div>    
                    <div id="titleverslag">Verslag</div>          
                    <textarea id="editverslag" col="200" type="text" name="verslag"  onChange={event => this.handleChange(event)} 
                   defaultValue={this.state.verslag}/>
 
  
                      
                </div>
                <Link to="./Uitslagen" onClick={this.forceUpdate}><button onClick={() => this.Opslaan()} className="opslaanbutton">Opslaan</button><img src={trashimg} onClick= {() => this.Verwijderen()} className="trashbutton"/></Link>
            </div>
            
            <Check />
        </div>
    );
    }
}
    

export default verslagen;
        



