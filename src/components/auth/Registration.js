import React, { Component } from "react";
import "./login.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("handeld change", event);
  }

  handleSubmit(event) {
    console.log("from submidded")

    var pg = require('pg');

    var conString = "postgres://cligxofj:MMdvlDXsE73zeBxtbKvigi5ALP6_pRVo@salt.db.elephantsql.com:5432/cligxofj" //Can be found in the Details page
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      client.query('SELECT NOW() AS "theTime"', function(err, result) {
        if(err) {
          return console.error('error running query', err);
        }
        console.log(result.rows[0].theTime);
        client.end();
      });
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account for trainer</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  className=""
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  className=""
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
              </div>
              <div className="createAccount">
                <button type="submit">Create Account</button>
                <a href="/"> Already have an account?</a>
              </div>
            </form>
          </div>
        </div>

        <div className="wrapper2">
          <div className="form-wrapper">
            <h1>Create Account for player</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  className=""
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  className=""
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
              </div>
              <div className="trainercode">
                <label htmlFor="trainerCode">Trainer code</label>
                <input
                  className=""
                  placeholder="TrainerCode"
                  type="text"
                  name="trainercode"
                  noValidate
                  onChange={this.handleChange}
                />
              </div>

              <div className="createAccount">
                <button type="submit">Create Account</button>
                <a href="/"> Already have an account?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// export default class Login extends Component {
//    constructor(props) {
//      super(props);

//      this.state = {
//        email: "",
//        password: ""
//      };

//      this.handleSubmit = this.handleSubmit.bind(this);
//      this.handleChange = this.handleChange.bind(this);
//    }

//    handleChange(event) {
//      console.log("handeld change", event);
//    }

//    handleSubmit(event) {
//      console.log("from submidded");
//      event.preventDefault();
//    }

//    render() {
//      return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={this.state.email}
//             onChange={this.handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={this.state.password}
//             onChange={this.handleChange}
//             required
//           />
//           <button type="submit">Login</button>
//           <a href="/Registreren"> Registreren?</a>
//         </form>
//       </div>
//     );
//   }
// }
