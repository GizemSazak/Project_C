import React, { Component } from 'react';
import './Uitslagen.css';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, FormGroup, FormControl, Table } from "react-bootstrap"

class verslagen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.id,
            verslag: this.props.location.verslag
        }
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    Verwijderen() {
        const request = new Request('http://localhost:3001/api/wedstrijduitslag', {
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
        window.location = './Uitslagen';
    }

    Opslaan() {
        const request = new Request('http://localhost:3001/api/wedstrijduitslag', {
            method: 'PUT',
            body: JSON.stringify({ 'id': parseInt(this.props.location.id), 'verslag': this.state.verslag }),
            headers: { 'Content-Type': 'application/json' }
        });
        fetch(request)
            .then(response => {
                response.json().then(data => { });
            })
            .catch(err => {
                console.log(err);
            });
        console.log({ 'id': parseInt(this.props.location.id), 'verslag': this.state.verslag })
        window.location = './Uitslagen';
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
                            <Col className="py-5"><h4>Wedstrijduitslag Wijzigen</h4></Col>
                        </Row>
                        {/* Page Body */}
                        <Row className="Body pt-4 p-2">
                            <Col >
                                <Row style={{ height: '90%' }} className="justify-content-center" >
                                    <Table style={{ maxWidth: '1000px' }}>
                                        <tr className="TableHeader">
                                            <th style={{ width: '33%', border: "1px solid black" }} >{this.props.location.thuis}</th>
                                            <th style={{ width: '33%', border: "1px solid black" }}>{this.props.location.stand}</th>
                                            <th style={{ width: '33%', border: "1px solid black" }}>{this.props.location.uit}</th>
                                        </tr>
                                        <tr className="TableSubHeader" >
                                            <td colSpan="4" style={{ border: "1px solid black" }}>Verslag</td>
                                        </tr>
                                        <tr >
                                            <td colSpan="4" className="p-0" >
                                                <FormGroup >
                                                    <FormControl as="textarea" col="200" style={{ height: '100%' }} className="NotitieBody border-dark p-4" type="text" name="verslag" onChange={event => this.handleChange(event)} defaultValue={this.state.verslag} />
                                                </FormGroup>
                                            </td>
                                        </tr>
                                    </Table>
                                </Row>
                                {/* Buttons */}
                                <Row className="align-items-start " style={{ height: '10%' }}>
                                    <Col >
                                        <Link to="./Uitslagen" onClick={this.forceUpdate} >
                                            <Button variant="success" className="m-1 border-dark" onClick={() => this.Opslaan()}>Opslaan</Button>
                                            <Button variant="danger" className="border-dark" onClick={() => this.Verwijderen()}>Verwijderen</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default verslagen;
