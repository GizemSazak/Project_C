import Menu from '../Menu/Menu'
import '../Notities/Notities.css'
import axios from 'axios'
import '../App.css'
import './Gegevens.css';
import React, { Component, useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap"

import { Link } from 'react-router-dom';
class Gegevens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.id,
            firstname: this.props.location.firstname,
            lastname: this.props.location.lastname,
            password: this.props.location.password,
            oudewachtwoord: this.props.location.oudewachtwoord,

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
            body: JSON.stringify({ 'id': parseInt(this.props.location.id), 'firstname': this.state.firstname, 'lastname': this.state.lastname, 'password': this.state.password,'oudewachtwoord': this.state.oudewachtwoord }),
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
        console.log({ 'id': parseInt(this.props.location.id), 'firstname': this.state.firstname, 'lastname': this.state.lastname, 'password': this.state.password  })
        window.location = './Instellingen';
    }

    render() {
        if (!localStorage.getItem('Data') || localStorage === null) {
            window.location.href = '/';
        }
        else {
            return (
                <Container className="Background text-center">
                    <Row>
                        {/* Menu */}
                        <Col xs={3} sm={1} lg={1} className="p-0"><Menu /></Col>

                        <Col xs={9} sm={11} lg={11} className="d-flex flex-column justify-content-end text-white">
                            {/* Page Header */}
                            <Row>
                                <Col className="py-5"><h4>Gegevens</h4></Col>
                            </Row>
                            {/* Page Body */}
                            <Row className="Body pt-4 p-2 ">
                                <Col>
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
                                               value = {this.state.oudewachtwoord}/>
                                        </div>
                                        <div className="Nieuwewachtwoord">
                                            <br></br>
                                            <label id="Nieuwewachtwoord">Nieuwe Wachtwoord</label>
                                            <br></br>
                                            <input type="password" name="password" onChange={event => this.handleChange(event)}
                                           />
                                        </div>
                                        <Link to="./Instellingen" onClick={this.forceUpdate}><button tye="button" onClick={() => this.Gegevens_Wijzigen()} className="wijzigenButton">Wijzigen</button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}

export default Gegevens;