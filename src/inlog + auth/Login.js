import React, { Component, useState, useEffect } from "react";
import "./login.css";
import axios from "axios";


class Loginpage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" }
    this.state = { password: "" }
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
    const {email, password} = this.state;
    axios
      .post('http://localhost:3001/api/login', this.state)
      .then(function (response) {
        if (response.data.redirect == '/') {
            window.location = "./Home"
        } else if (response.data.redirect == '/login'){
            window.location = "/login"
        }
    })
    .catch(function(error) {
      window.location = "/login"
    })
      
  }


  render() {
    return (
      <div className="Page">
        <header className="wrapper">
          <body className="form-wrapper">
            <h1 className="login-header">Login</h1>
            <form className="inlogform">

              <div className="email">
                <label htmlFor="email">Email</label>
                <input classname="inputt" placeholder="Email" type="email" name="email" onChange={this.updateInput} />
              </div>

              <div className="password">
                <label htmlFor="password">Password</label>
                <input classname="" placeholder="Password" type="password" name="password" onChange={this.updateInput} />
              </div>

              <div className="createAccount">
                <input classname="inputt" type="submit" value="Submit" onClick={this.handleSubmit} />
                <a href="/registreren"> Already have an account?</a>
              </div>
            </form>
          </body>
        </header>
      </div >
    );
  }
}

export default Loginpage;
