import React, { Component, useState, useEffect } from "react";
import "./login.css";
import axios from "axios";


class LoginSpeler extends Component {
  constructor(props) {
    super(props);
    this.state = { teamcode: "" }
    // this.state = { password: "" }
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
      .post('http://localhost:3001/api/loginspeler', this.state)
      .then(function (response) {
        if (response.data.redirect === '/') {
            window.location = "/Home"
        } else if (response.data.redirect === '/LoginSpeler'){
            window.location = "/LoginSpeler"
        }
    })
    .catch(function(error) {
      window.location = "/LoginSpeler"
    })
      
  }

render() {
  return (
    <div className= "HoofdpaginaImage">
     <h1 className="login-header">Login - Speler</h1>
     <input
            type="txt"
            name="teamcode"
            id="email"
            placeholder="Teamcode"
            onChange={this.updateInput}
      />
       <input 
       id="loginbutton"
        type="submit" 
        value="Login" 
        onClick={this.handleSubmit} 
      />
  </div>  
    );
  }
}

export default LoginSpeler;
