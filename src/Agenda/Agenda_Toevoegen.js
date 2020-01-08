import React, { Component, useState, useEffect } from 'react'
import '../Notities/Notitie_Toevoegen'
import '../App.css'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom';
import axios from 'axios'
import './Agenda.js'
import event from "./event.js"
import { Container, Row, Col } from "react-bootstrap"

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
                  <Row style={{ height: '90%' }} >
                    <Col>
                      <div className="Notitiebody">
                        <h1 className='titleNotitiel'>Agenda</h1>
                        <div className="column1"></div>
                        <p id="AgednaP">
                          {this.state.selectedDay
                            ? this.state.selectedDay.toLocaleDateString()
                            : ''}
                        </p>
                        <table id="Agendatable">
                          <th id="Agenda_row1" className="titleDatum" colspan="3">{this.props.location.dag}</th>
                          <tr>
                            <th id="Agenda_row1">Starttijd</th>
                            <th id="Agenda_row1">Eindtijd</th>
                            <th id="Agenda_row1">Beschrijving</th>
                          </tr>
                          <tr>
                            <td id="Agenda_col">
                              <textarea placeholder="Starttijd" id="starttijd" name="starttijd" value={this.state.starttijd} onChange={event => this.handleChange(event)} />
                            </td>
                            <td id="Agenda_col">
                              <textarea placeholder="Eindtijd" id="eindtijd" name="eindtijd" value={this.state.eindtijd} onChange={event => this.handleChange(event)} />
                            </td>
                            <td id="Agenda_col">
                              <textarea placeholder="Beschrijving" id="beschrijving" name="beschrijving" value={this.state.beschrijving} onChange={event => this.handleChange(event)} />
                            </td>
                          </tr>
                        </table>
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
                      </div>
                    </Col>
                  </Row>

                  <Row className="h-90% flex-column align-content-center" style={{ height: '10%' }}>
                    <Col>
                      <Link to="./Notities" onClick={this.forceUpdate} >
                        <button className="AgendaOpslaan" type="submit" onClick={() => this.agenda_toevoegen()}>Opslaan</button>
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




