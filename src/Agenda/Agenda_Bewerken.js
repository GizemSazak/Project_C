import React, { Component } from 'react';
import './Agenda';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import trashimg from '../trash.png'
import { Container, Row, Col } from "react-bootstrap"

class Agenda_Bewerken extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.id,
            datum: this.props.location.datum,
            starttijd: this.props.location.starttijd,
            eindtijd: this.props.location.eindtijd,
            beschrijving: this.props.location.beschrijving
        }
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    Verwijderen() {
        const request = new Request('http://localhost:3001/api/Agenda', {
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
        window.location = './Agenda';
    }


    Opslaan() {
        const request = new Request('http://localhost:3001/api/Agenda', {
            method: 'PUT',
            body: JSON.stringify({ 'id': parseInt(this.props.location.id), 'dag': this.state.datum, 'starttijd': this.state.starttijd, 'eindtijd': this.state.eindtijd, 'beschrijving': this.state.beschrijving }),
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
        window.location = './Agenda';
    }

    render() {
        if (!localStorage.getItem('Data') || localStorage === null) {
            window.location.href = '/';
        }
        else {
            return (
                <Container className="Background text-center ">
                    <Row>
                        {/* Menu */}
                        <Col xs={3} sm={1} lg={1} className="p-0"><Menu /></Col>

                        <Col xs={9} sm={11} lg={11} className="d-flex flex-column justify-content-end text-white">
                            {/* Page Header */}
                            <Row>
                                <Col className="py-5 "><h4>Agenda</h4></Col>
                            </Row>
                            {/* Page Body */}
                            <Row className="Body">
                                <Col className="p-0 ">
                                    <Row style={{ height: '90%' }} >
                                        <Col>
                                            <div className="uitslagBody">
                                                <table id="AgendaBewerkTable">
                                                    <th id="Agenda_row1" className="titleDatum" colspan="3">{this.props.location.datum}</th>
                                                    <tr>
                                                        <th id="Agenda_row1">Starttijd</th>
                                                        <th id="Agenda_row1">Eindtijd</th>
                                                        <th id="Agenda_row1">Beschrijving</th>
                                                    </tr>
                                                    <tr>
                                                        <td id="Agenda_col">
                                                            <textarea
                                                                placeholder="Starttijd"
                                                                id="starttijd"
                                                                name="starttijd"
                                                                value={this.state.starttijd}
                                                                onChange={event => this.handleChange(event)}
                                                            />
                                                        </td>
                                                        <td id="Agenda_col">
                                                            <textarea
                                                                placeholder="Eindtijd"
                                                                id="eindtijd"
                                                                name="eindtijd"
                                                                value={this.state.eindtijd}
                                                                onChange={event => this.handleChange(event)}
                                                            /></td>
                                                        <td id="Agenda_col">
                                                            <textarea
                                                                placeholder="Beschrijving"
                                                                id="beschrijving"
                                                                name="beschrijving"
                                                                value={this.state.beschrijving}
                                                                onChange={event => this.handleChange(event)}
                                                            />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className="h-90% flex-column align-content-center" style={{ height: '10%' }}>
                                        <Col>
                                            <Link to="./Agenda" >
                                                <button onClick={() => this.Opslaan()} className="opslaanbutton">Opslaan</button>
                                                <img src={trashimg} style={{ height: "2rem" }} onClick={() => this.Verwijderen()} className="trashbutton" />
                                            </Link>

                                            <Link to="./Agenda" onClick={this.forceUpdate}>
                                                <button onClick={() => this.Opslaan()} className="opslaanbutton">Opslaan</button>
                                                <img src={trashimg} style={{ height: "2rem" }} onClick={() => this.Verwijderen()} className="trashbutton" />
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
}


export default Agenda_Bewerken;