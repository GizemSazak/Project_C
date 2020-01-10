import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import { Container, Row, Col, Button, FormGroup, FormControl, Form } from "react-bootstrap"

const cookies = new Cookies();

class LoginSpeler extends Component {
  constructor(props) {
    super(props);
    this.state = { teamcode: "" }
    this.state = { cookie: "" };

    // this.state = { password: "" }
    // this.state = { teamcode: "" };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = e => {
    const { user, rememberMe } = this.state;
    localStorage.setItem('Data', 'login');
    localStorage.setItem('role', 'speler');
    localStorage.setItem('user', rememberMe ? user : '');
    console.log(this.state)
    e.preventDefault()
    const { email, password } = this.state;
    axios
      .post('http://localhost:3001/api/loginspeler', this.state)
      .then(function (response) {
        if (response.data.redirect === '/') {
          window.location = "/Home"

        } else if (response.data.redirect === '/LoginSpeler') {
          window.location = "/LoginSpeler"
        }
      })
      .catch(function (error) {
        window.location = "/LoginSpeler"
      })
  }

  render() {
    cookies.set('voetbal', 'login', { path: '/' });
    this.state.cookie = cookies.get('voetbal');
    console.log(cookies.get('voetbal'));

    return (
      <Container className="HomeBackground d-flex flex-column justify-content-center">
        <Row >
          <Col >
            <Row>
              <Col className="text-center text-white mb-5">
                <Col className="py-5"><h4>Login - Speler</h4></Col>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex flex-column text-center" >
                <Form>
                  <FormGroup >
                    <label className="text-white" >Teamcode</label>
                    <FormControl type="text" name="teamcode" className="Inputfield" onChange={this.updateInput} />
                  </FormGroup>
                  <Button className="btn-success" onClick={this.handleSubmit} style={{ width: "150px" }} >Login</Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default LoginSpeler;
