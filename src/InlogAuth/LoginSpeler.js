import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Button, FormGroup, FormControl, Form } from "react-bootstrap"
class LoginSpeler extends Component {
  constructor(props) {
    super(props);
    this.state = { teamcode: "" }
    this.state = { cookie: "" };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //Setting value of the inputs to the state
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
   //Sending data to the server
    axios
      .post('http://localhost:3001/api/loginspeler', this.state)
      .then(function (response) {
        //When the log in true in the server. It will redirect the user to the home page
        if (response.data.redirect === '/') {
          window.location = "/Home"
        //When the log in false in the server. It will redirect the user to the LoginSpeler page
        } else if (response.data.redirect === '/LoginSpeler') {
          window.location = "/LoginSpeler"
        }
      })
      .catch(function (error) {
        window.location = "/LoginSpeler"
      })
  }

  render() {
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
