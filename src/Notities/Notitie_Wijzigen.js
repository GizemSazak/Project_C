import Menu from '../Menu/Menu'
import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, FormControl } from "react-bootstrap"

import { Link } from 'react-router-dom';
class Notitie_Wijzigen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.id,
            notitie: this.props.location.notitie,
            titel: this.props.location.titel
        }
    }
    //Setting value of the inputs to the state
    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    //This function send delete state to the server and then redirect the user to the Notities page
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
    //This function update the notitie title and beschrijving and then redirect the user to Notitie page
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
            <Container className="Background">
                <Row >
                    {/* Menu */}
                    <Col xs={3} sm={1} lg={1} className="p-0"><Menu /></Col>

                    <Col xs={9} sm={11} lg={11} className="d-flex flex-column justify-content-end text-white text-center">
                        {/* Page Header */}
                        <Row>
                            <Col className="py-5"><h4>Notitie Wijzigen</h4></Col>
                        </Row>
                        {/* Page Body */}
                        <Row className="Body pt-4 p-2">
                            <Col >
                                <Row style={{ height: '90%' }} className="justify-content-center">
                                    <Form >
                                        <FormGroup >
                                            <FormControl className="text-center NotitieTitel border-dark mt-3 p-4" col="200" type="text" placeholder="Titel" name="titel" onChange={event => this.handleChange(event)} defaultValue={this.state.titel} />
                                        </FormGroup>
                                        <FormGroup onSubmit={this.submitHandler}>
                                            <FormControl as="textarea" col="200" className="NotitieBody border-dark p-4" type="text" placeholder="Beschrijven" name="notitie" onChange={event => this.handleChange(event)} defaultValue={this.state.notitie} />
                                        </FormGroup>
                                    </Form>
                                </Row>
                                {/* Buttons */}
                                <Row className="align-items-start " style={{ height: '10%' }}>
                                    <Col >
                                        <Link to="./Notities" onClick={this.forceUpdate} >
                                            <Button variant="success" className="m-1 border-dark" onClick={() => this.Notities_Wijzigen()}>Opslaan</Button>
                                        </Link>

                                        <Link to="./Notities" onClick={this.forceUpdate}>
                                            <Button variant="danger" className="border-dark" onClick={() => this.Notities_Verwijderen()}>Verwijderen</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Notitie_Wijzigen;
