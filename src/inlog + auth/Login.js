import React, { Component, useState, useEffect } from "react";
import "./login.css";
import axios from "axios";


class Loginpage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { email: "" }
  //   this.state = { password: "" }
  //   // this.state = { teamcode: "" };

  //   this.updateInput = this.updateInput.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // updateInput(event) {
  //   this.setState({ [event.target.name]: event.target.value });
  // }

  // handleSubmit = e => {
  //   console.log(this.state)
  //   axios
  //     .post('http://localhost:3001/api/registratie', this.state)
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }


  render() {
    return (
      <div className="Page">
        <header className="wrapper">
          <body className="form-wrapper">
            <h1>Login</h1>
            <form>

              <div className="email">
                <label htmlFor="email">Email</label>
                <input classname="" placeholder="Email" type="email" name="email" onChange={this.updateInput} />
              </div>

              <div className="password">
                <label htmlFor="password">Password</label>
                <input classname="" placeholder="Password" type="password" name="password" onChange={this.updateInput} />
              </div>

              <div className="createAccount">
                <input classname="" type="submit" value="Submit" onClick={this.handleSubmit} />
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
