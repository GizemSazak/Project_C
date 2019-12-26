import React, { Component } from 'react'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, FormGroup, FormControl } from "react-bootstrap"

export default class Notitie_Toevoegen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notitie: this.props.location.notitie,
      titel: this.props.location.titel
    }
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }
  Notities_toevoegen() {
    const request = new Request('http://localhost:3001/api/notities', {
      method: 'POST',
      body: JSON.stringify({ 'notitie': this.state.notitie, 'titel': this.state.titel }),
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
    console.log({ 'notitie': this.state.notitie, 'titel': this.state.titel })
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
              <Col className="py-5"><h4>Notitie Toevoegen</h4></Col>
            </Row>
            {/* Page Body */}
            <Row className="Body pt-4 p-2">
              <Col >
                <Row style={{ height: '90%' }} className="justify-content-center">
                  <Form >
                    <FormGroup >
                      <FormControl className="text-center NotitieTitel border-dark mt-3 p-4" type="text" placeholder="Titel" name="titel" value={this.state.titel} onChange={event => this.handleChange(event)} />
                    </FormGroup>
                    <FormGroup onSubmit={this.submitHandler}>
                      <FormControl as="textarea" rows="12" className="NotitieBody border-dark p-4" type="text" placeholder="Beschrijven" name="notitie" value={this.state.notitie} onChange={event => this.handleChange(event)}></FormControl>
                    </FormGroup>
                  </Form>
                </Row>
                {/* Buttons */}
                <Row className="align-items-start " style={{ height: '10%' }}>
                  <Col >
                    <Link to="./Notities" onClick={this.forceUpdate} >
                      <Button variant="success" className="m-1 border-dark" onClick={() => this.Notities_toevoegen()}>Toevoegen</Button>
                    </Link>

                    <Link to="./Notities">
                      <Button variant="danger" className="border-dark">Verwijderen</Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
