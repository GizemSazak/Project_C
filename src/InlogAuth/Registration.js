import React, { Component, useState, useEffect } from "react";
import "./registration.css";
import axios from "axios";
import { Container, Row, Col, Button, FormGroup, FormControl, Form } from "react-bootstrap"

class Registreren extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" }
    this.state = { password: "" }
    this.state = { firstName: "" }
    this.state = { lastName: "" }
    // this.state = { teamcode: "" };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = e => {
    console.log(this.state)
    e.preventDefault()
    const { email, password, firstName, lastName } = this.state;
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
                    <label style={{ fontStyle: "italic" }}className="text-white" >Tussen 4-100 tekens.<br></br>Kleine letter, hoofdletter,<br></br> cijfer en een speciaal teken.</label>
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
  //   render() {
  //     return (
  //       <div className="Page">
  //         <header className="wrapper">
  //           <body className="form-wrapper">
  //             <h1 className="login-header">Create Account for trainer</h1>
  //             <form className="inlogform">

  //               <div className="email">
  //                 <label htmlFor="email">Email</label>
  //                 <input classname="inputt" placeholder="Email" type="email" name="email" onChange={this.updateInput} />
  //               </div>

  //               <div className="password">
  //                 <label htmlFor="password">Password</label>
  //                 <input classname="inputt" placeholder="Password" type="password" name="password" onChange={this.updateInput} />
  //               </div>

  //               <div className="firstName">
  //                 <label htmlFor="firstName">First Name</label>
  //                 <input id="placeholderid" placeholder="First Name" type="text" name="firstname" onChange={this.updateInput} />
  //               </div>

  //               <div className="lastName">
  //                 <label htmlFor="lastName">Last Name</label>
  //                 <input classname="inputt" placeholder="Last Name" type="text" name="lastname" onChange={this.updateInput} />
  //               </div>

  //               <div className="createAccount">
  //                 <input classname="inputt" type="submit" value="Submit" onClick={this.handleSubmit} />
  //                 <a href="/login"> Already have an account?</a>
  //               </div>

  //             </form>
  //           </body>
  //         </header>


  //       </div >
  //     );
  //   }
  // }


/* <div className="wrapper2">
          <div className="form-wrapper">
            <h1>Create Account for player</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  className=""
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={this.updateInput}
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  className=""
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={this.updateInput}
                />
              </div>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  className=""
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  onChange={this.updateInput}
                />
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className=""
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  onChange={this.updateInput}
                />
              </div>
              <div className="teamcode">
                <label htmlFor="trainerCode">Trainer code</label>
                <input
                  className=""
                  placeholder="teamcode"
                  type="text"
                  name="teamcode"
                  onChange={this.updateInput}
                />
              </div>

              <div className="createAccount">
                <input
                  className=""
                  type="submit"
                  value="Submit"
                  onClick={this.handleSubmit}
                />
                <a href="/"> Already have an account?</a>
        //       </div> */
        //  </form>}
        //   </div > 
        //  </div > */