import React, { Component, useState, useEffect } from "react";
import "./login.css";
import Menu from "../Menu/Menu";

class Registreren extends Component {
  constructor(props) {
    super(props);

    this.state = { firstName: "" }
    this.state = { lastName: "" }
    this.state = { email: "" }
    this.state = { password: "" }
    // this.state = { teamcode: "" };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    console.log('Your firstname is: ' + this.state.firstname)
    console.log('Your lastname is: ' + this.state.lastname)
    console.log('Your email is: ' + this.state.email)
    console.log('Your password is: ' + this.state.password)
    console.log('submitted')

    const request = new Request('http://localhost:3001/api/registratie', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ 'email': this.state.email, 'password': this.state.password, 'firstname': this.state.firstName, 'lastname': this.state.lastName })
    });
    fetch(request)
      .then(response => {
        response.json().then(data => { });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Page">
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account for trainer</h1>
            <form onSubmit={this.handleSubmit}>

              <div className="email">
                <label htmlFor="email">Email</label>
                <input className="" placeholder="Email" type="email" name="email" noValidate onChange={this.updateInput} />
              </div>

              <div className="password">
                <label htmlFor="password">Password</label>
                <input className="" placeholder="Password" type="password" name="password" noValidate onChange={this.updateInput} />
              </div>

              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input className="" placeholder="First Name" type="text" name="firstname" noValidate onChange={this.updateInput} />
              </div>

              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input className="" placeholder="Last Name" type="text" name="lastname" noValidate onChange={this.updateInput} />
              </div>

              <div className="createAccount">
                <input className="" type="submit" value="Submit" onClick={this.handleSubmit} />
                <a href="/"> Already have an account?</a>
              </div>

            </form>
          </div>
        </div>

        {/* <div className="wrapper2">
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
                  noValidate
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
                  noValidate
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
                  noValidate
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
                  noValidate
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
                  noValidate
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
              </div> */}
        {/* </form>
          </div > */}
        {/* </div > */}
      </div >
    );
  }
}

export default Registreren;
