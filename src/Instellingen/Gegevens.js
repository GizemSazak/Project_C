import Menu from '../Menu/Menu'
import '../Notities/Notities.css'
import '../App.css'
import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, FormControl } from "react-bootstrap"

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
            trainer: this.props.location.trainer
        }
    }
 //Setting value of the inputs to the state
    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    //This function update the password, first and then redirect the user to Instellingen page
    Gegevens_Wijzigen() {
        const request = new Request('http://localhost:3001/api/registratie', {
            method: 'PUT',
            body: JSON.stringify({ 'id': parseInt(this.props.location.id), 'firstname': this.state.firstname, 'lastname': this.state.lastname, 'password': this.state.password, 'oudewachtwoord': this.state.oudewachtwoord }),
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
        console.log({ 'id': parseInt(this.props.location.id), 'firstname': this.state.firstname, 'lastname': this.state.lastname, 'password': this.state.password })
        window.location = './Instellingen';
    }

    render() {
        /*Check the local storage if it has not have the same local storage value when the user logged in.
        It will not allowed the user to go to the Gegevens page if he is not logged in. 
        Else it will allowed to the user to see the the Gegevens page if he is logged in.
        */
        if (!localStorage.getItem('Data') || localStorage === null) {
            window.location.href = '/';
        }
        else {
            return (
                <Container className="Background text-center">
                    <Row>
                        {/* Menu */}
                        <Col xs={3} sm={1} lg={1} className="p-0"><Menu trainer={this.state.trainer} /></Col>

                        <Col xs={9} sm={11} lg={11} className="d-flex flex-column justify-content-end text-white">
                            {/* Page Header */}
                            <Row>
                                <Col className="py-5"><h4>Gegevens</h4></Col>
                            </Row>
                            {/* Page Body */}
                            <Row className="Body pt-4 p-2 ">
                                <Col>
                                    <Form >
                                        <FormGroup >
                                            <label className="FormLabel" >Voornaam</label>
                                            <FormControl type="text" name="firstname" className="Inputfield" onChange={event => this.handleChange(event)} defaultValue={this.state.firstname} />
                                        </FormGroup>
                                        <FormGroup>
                                            <label className="FormLabel" >Achternaam</label>
                                            <FormControl type="text" name="lastname" className="Inputfield" onChange={event => this.handleChange(event)} defaultValue={this.state.lastname} />
                                        </FormGroup>
                                        <FormGroup>
                                            <label className="FormLabel">Oude Wachtwoord</label>
                                            <FormControl type="password" name="oudewachtwoord" className="Inputfield" onChange={event => this.handleChange(event)} value={this.state.oudewachtwoord} />
                                        </FormGroup>
                                        <FormGroup>
                                            <label className="FormLabel" >Nieuwe Wachtwoord</label>
                                            <FormControl type="password" name="password" className="Inputfield" onChange={event => this.handleChange(event)} />
                                        </FormGroup>
                                        <Link to="./Instellingen" onClick={this.forceUpdate}>
                                            <Button onClick={() => this.Gegevens_Wijzigen()} className="btn-success">Wijzigen</Button>
                                        </Link>
                                    </Form>
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