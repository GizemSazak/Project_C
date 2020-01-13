import React, { Component, useState, useEffect } from 'react'
import '../Notities/Notitie_Toevoegen'
import '../App.css'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom';
import axios from 'axios'
import './Agenda.js'
import event from "./event.js"
import { Container, Row, Col, Button, FormControl } from "react-bootstrap"

export default class Agenda_Toevoegen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starttijd: this.props.location.starttijd,
      eindtijd: this.props.location.eindtijd,
      beschrijving: this.props.location.beschrijving,
      dag: this.props.location.dag,
      trainer: this.props.location.trainer
    }
    console.log(this.props.location.dag)
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }
  agenda() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      axios.get('http://localhost:3001/api/agenda')
        .then(res => {
          console.log(res)
          setPosts(res.data)
        })
        .catch()
    }, []);
  }
  agenda_toevoegen() {
    const request = new Request('http://localhost:3001/api/agenda', {
      method: 'POST',
      body: JSON.stringify({ 'starttijd': this.state.starttijd, 'eindtijd': this.state.eindtijd, 'beschrijving': this.state.beschrijving, 'dag': this.props.location.dag }),
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
    console.log({ 'starttijd': this.state.starttijd, 'eindtijd': this.state.eindtijd, 'beschrijving': this.state.beschrijving })
    window.location = '../Agenda';
  }

  render() {
    const { eindtijd, starttijd, beschrijving } = this.state
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
                  <Row className="align-items-center" style={{ height: '90%' }} >
                    <Col className="d-flex flex-column align-items-center">

                      <div className="Notitiebody">
                        <p id="AgednaP">
                          {this.state.selectedDay
                            ? this.state.selectedDay.toLocaleDateString()
                            : ''}
                        </p>

                        <th id="Agenda_row1" colspan="3">{this.props.location.dag}</th>

                        <tr>
                          <th id="Agenda_row2">Starttijd</th>
                          <th id="Agenda_row2">Eindtijd</th>
                        </tr>

                        <tr style={{ height: "38px" }}>
                          <td style={{ height: "30px", maxWidth: "300px", width: "40vw" }}>
                            <FormControl className="Agenda_row3" id="starttijd" type="text" placeholder="Starttijd" name="starttijd" value={this.state.starttijd} onChange={event => this.handleChange(event)} />
                          </td>
                          <td style={{ height: "30px", maxWidth: "300px", width: "40vw" }}>
                            <FormControl className="Agenda_row3" id="eindtijd" type="text" placeholder="Eindtijd" name="eindtijd" value={this.state.eindtijd} onChange={event => this.handleChange(event)} />
                          </td>
                        </tr>

                        <tr><th id="Agenda_row2" colspan="3" style={{ maxWidth: "600px", width: "80vw" }}>Beschrijving</th></tr>
                        <tr>
                          <td colspan="2" >
                            <FormControl
                              rows="10"
                              as="textarea"
                              id="beschrijving"
                              className="Agenda_row3"
                              type="text"
                              placeholder="Beschrijven"
                              name="beschrijving"
                              value={this.state.beschrijving}
                              onChange={event => this.handleChange(event)}>
                            </FormControl>
                          </td>
                        </tr>
                      </div>
                    </Col>
                  </Row>

                  <Row className="h-90% flex-column align-content-center" style={{ height: '10%' }}>
                    <Col>
                      <Link to="./Notities" onClick={this.forceUpdate} >
                        <Button onClick={() => this.agenda_toevoegen()} className="btn-success">Opslaan</Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container >
      )
    }
  }
}


{/* <tr>
    <td id = "Agenda_col">Eve</td>
    <td id = "Agenda_col">Jackson</td>
    <td id = "Agenda_col">94</td>
  </tr>
  <tr>
    <td id = "Agenda_col">John</td>
    <td id = "Agenda_col">Doe</td>
    <td id = "Agenda_col">80</td>
  </tr> */}