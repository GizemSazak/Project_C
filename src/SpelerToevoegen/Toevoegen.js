import React, { Component } from 'react'
import './Toevoegen.css'
import Menu from '../Menu/Menu'
import { Container, Row, Col, Form, FormGroup, FormControl } from "react-bootstrap"

class Toevoegen extends Component {
    constructor(props) {
        super(props);

        this.state = { spelernummer: '' }
        this.state = { voornaam: '' }
        this.state = { achternaam: '' }
        this.state = { email: '' }

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event) {
        this.setState({ [event.target.placeholder]: event.target.value })
        console.log('Your voornaam is: ' + this.state.voornaam)
    }

    handleSubmit() {
        //Send state to the server code
        const request = new Request('http://localhost:3001/api/speler', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ 'spelernummer': this.state.spelernummer, 'voornaam': this.state.voornaam, 'achternaam': this.state.achternaam, 'email': this.state.email })
        });
        fetch(request)
            .then(response => {
                response.json().then(data => { });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <Container className="Page">
                <Row>
                    <Col xs={3} sm={1} lg={1} className="bg-primary p-0"><Menu /></Col>

                    <Col xs={9} sm={11} lg={11}>
                        <Row>
                            <Col className="text-center text-white my-5">
                                <h3>Speler Toevoegen</h3>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form className="text-center text-white">
                                    <FormGroup >
                                        <label >Voornaam</label>
                                        <FormControl type="text" placeholder="voornaam" className="text-center Inputfield" onChange={this.updateInput} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label >Achternaam</label>
                                        <FormControl type="text" placeholder="achternaam" className="text-center Inputfield" onChange={this.updateInput} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label >Email</label>
                                        <FormControl type="email" placeholder="email" className="text-center Inputfield" onChange={this.updateInput} />
                                    </FormGroup>
                                    <FormGroup>
                                        <label >Spelernummer</label>
                                        <FormControl type="number" placeholder="spelernummer" className="text-center Inputfield" onChange={this.updateInput} />
                                    </FormGroup>
                                    <input type="submit" value="Opslaan" className="btn btn-success py-2 px-5 my-2" onClick={this.handleSubmit} />
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Toevoegen;
