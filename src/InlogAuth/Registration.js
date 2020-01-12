import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Button, FormGroup, FormControl, Form } from "react-bootstrap"

class Registreren extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" }
    this.state = { password: "" }
    this.state = { firstName: "" }
    this.state = { lastName: "" }
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = e => {
    console.log(this.state)
    e.preventDefault()
    axios
      .post('http://localhost:3001/api/registratie', this.state)
      .then(function (response) {
        if (response.data.redirect === '/') {
          window.location = "/login";
        } else if (response.data.redirect === '/registreren') {
          window.location = "/registreren";
          alert("Registratie is niet gelukt.");
        }
      })
      .catch(function (error) {
        window.location = "/registreren";
      })

  }
  render() {
    return (
      <Container className="HomeBackground d-flex flex-column justify-content-center">
        <Row >
          <Col >
            <Row>
              <Col className="text-center text-white mb-5">
                <Col className="py-5"><h4>Registreren</h4></Col>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex flex-column text-center" >
                <Form>
                  <FormGroup >
                    <label className="text-white" >Voornaam</label>
                    <FormControl type="text" name="firstname" className="Inputfield" onChange={this.updateInput} />
                  </FormGroup>
                  <FormGroup >
                    <label className="text-white" >Achternaam</label>
                    <FormControl type="text" name="lastname" className="Inputfield" onChange={this.updateInput} />
                  </FormGroup>
                  <FormGroup >
                    <label className="text-white" >Email</label>
                    <FormControl type="email" name="email" className="Inputfield" onChange={this.updateInput} />
                  </FormGroup>
                  <FormGroup >
                    <label className="text-white" >Wachtwoord</label>
                    <FormControl type="password" name="password" className="Inputfield" onChange={this.updateInput} />
                    <label style={{ fontStyle: "italic" }} className="text-white" >Tussen 4-100 tekens.<br></br>Kleine letter, hoofdletter,<br></br> cijfer en een speciaal teken.</label>
                  </FormGroup>
                  <Button className="btn-success" onClick={this.handleSubmit} style={{ width: "150px" }} >Registreren</Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
    );
  }
}
export default Registreren;