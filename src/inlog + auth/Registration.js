import React, { Component, useState, useEffect } from "react";
import "./login.css";
import axios from "axios";


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
    axios
      .post('http://localhost:3001/api/registratie', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    return (
      <div className="Page">
        <header className="wrapper">
          <body className="form-wrapper">
            <h1 className="login-header">Create Account for trainer</h1>
            <form className="inlogform">

              <div className="email">
                <label htmlFor="email">Email</label>
                <input classname="inputt" placeholder="Email" type="email" name="email" onChange={this.updateInput} />
              </div>

              <div className="password">
                <label htmlFor="password">Password</label>
                <input classname="inputt" placeholder="Password" type="password" name="password" onChange={this.updateInput} />
              </div>

              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input id="placeholderid" placeholder="First Name" type="text" name="firstname" onChange={this.updateInput} />
              </div>

              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input classname="inputt" placeholder="Last Name" type="text" name="lastname" onChange={this.updateInput} />
              </div>

              <div className="createAccount">
                <input classname="inputt" type="submit" value="Submit" onClick={this.handleSubmit} />
                <a href="/login"> Already have an account?</a>
              </div>

            </form>
          </body>
        </header>


      </div >
    );
  }
}

export default Registreren;


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