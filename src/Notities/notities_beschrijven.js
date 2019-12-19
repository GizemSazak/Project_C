// import React from 'react'
import Menu from '../Menu/Menu'
import './notities_beschrijven.css'
import '../App.css'
import trash from './trash.svg' // Tell Webpack this JS file uses this image
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
class notities_beschrijven extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.id,
            notitie: this.props.location.notitie,
            titel: this.props.location.titel

        }
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    Notities_Verwijderen() {
        const request = new Request('http://localhost:3001/api/notities', {
            method: 'DELETE',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ 'id': parseInt(this.props.location.id), })
        });
        fetch(request)
            .then(response => {
                response.json().then(data => { });
            })
            .catch(err => {
                console.log(err);
            });
        window.location = './Notities';
    }

    Notities_Wijzigen() {
        const request = new Request('http://localhost:3001/api/notities', {
            method: 'PUT',
            body: JSON.stringify({ 'id': parseInt(this.props.location.id), 'notitie': this.state.notitie, 'titel': this.state.titel }),
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
        console.log({ 'id': parseInt(this.props.location.id), 'notitie': this.state.notitie, 'titel': this.state.titel })
        window.location = './Notities';
    }

    render() {
        return (
            <div className="App">
                <h1 className='titleOefeningen'>Notities</h1>
                <div className="uitslagBody">
                    <textarea id="Notitietitel" col="200" type="text" name="titel" onChange={event => this.handleChange(event)}
                        defaultValue={this.state.titel} />
                    <textarea className="notitie" col="200" type="text" name="notitie" onChange={event => this.handleChange(event)}
                        defaultValue={this.state.notitie} />
                    <Link to="./Notities" onClick={this.forceUpdate}><button tye="button" onClick={() => this.Notities_Wijzigen()} className="wijzigenButton">Wijzigen</button>
                    </Link>
                </div>
                <Link to="./Notities" onClick={this.forceUpdate}><img src={trash} onClick={() => this.Notities_Verwijderen()} className="trash" alt='' /></Link>
                <Menu />
            </div>
        );
    }
}


export default notities_beschrijven;
