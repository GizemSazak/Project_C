import Check from '../Menu/Check'
import '../Notities/notities_beschrijven.css'
import axios from 'axios'
import '../App.css'
import './Gegevens.css';
import React, { Component, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
class Gegevens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.id,
            firstname: this.props.location.firstname,
            lastname: this.props.location.lastname,
            

        }
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    Gegevens_Wijzigen() {
        const request = new Request('http://localhost:3001/api/registratie', {
            method: 'PUT',
            body: JSON.stringify({ 'id': parseInt(this.props.location.id), 'firstname': this.state.firstname, 'lastname': this.state.lastname }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        fetch(request)
            .then(response => {
                response.json().then(data => { });
            })
            .catch(err => {
                console.log(err);
            });
        console.log({ 'id': parseInt(this.props.location.id), 'firstname': this.state.firstname, 'lastname': this.state.lastname })
        window.location = './Instellingen';
    }

    render() {
        if(!localStorage.getItem('Data') || localStorage === null){
            window.location.href = '/';
          }
        else{ 
        return (
            <div className="App">
                <h1 className='titleOefeningen'>Gegevens</h1>
                <div className="uitslagBody">
                    <div className="Voornaam">
                    <label id="Voornaam">Voornaam</label>
                    <br></br>
                    <input id="firstname_wijzigen" type="text" name="firstname" onChange={event => this.handleChange(event)}
                        defaultValue={this.state.firstname} />
                     </div>
                    <div className="Achternaam">
                    <br></br>  
                     <label id="Achternaam">Achternaam</label>
                     <br></br>
                    <input type="text" name="lastname" onChange={event => this.handleChange(event)}
                        defaultValue={this.state.lastname} />
                    </div>
                    <div className="Oudewachtwoord">
                          <br></br>  
                     <label id="Oudewachtwoord">Oude Wachtwoord</label>
                     <br></br>
                    <input type="password" name="oudewachtwoord" onChange={event => this.handleChange(event)}
                        defaultValue={this.state.password} />
                    </div>
                    <div className="Nieuwewachtwoord">
                          <br></br>  
                     <label id="Nieuwewachtwoord">Nieuwe Wachtwoord</label>
                     <br></br>
                    <input type="text" name="nieuwewachtwoord" onChange={event => this.handleChange(event)}
                        defaultValue={this.state.password} />
                    </div>
                    <Link to="./Instellingen" onClick={this.forceUpdate}><button tye="button" onClick={() => this.Gegevens_Wijzigen()} className="wijzigenButton">Wijzigen</button>
                    </Link>
                </div>
                <Check />
            </div>
        );
    }
}
}


export default Gegevens;