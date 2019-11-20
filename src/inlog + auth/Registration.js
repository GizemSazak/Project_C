import React, { Component, useState, useEffect } from "react";
import "./login.css";
import Menu from "../Menu/Menu";
import axios from "axios";




class Registreren extends Component {
  constructor(props) {


    super(props);

    this.state = { firstName: "" };
    this.state = { lastName: "" };
    this.state = { email: "" };
    this.state = { password: "" };
    this.state = { teamcode: "" };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  updateInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    console.log('submitted')
    const [posts, setPosts] = useState([])

    useEffect(() => {
      axios.get('http://localhost:3001/api/registreren')
        .then(res => {
          console.log(res)
          setPosts(res.data)
        })
        .catch()
    }, []);


    const request = new Request("http://localhost:3001/api/registreren", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        'email': this.state.email, 'password': this.state.password, 'firstname': this.state.firstName, 'lastname': this.state.lastName, 'teamcode': this.state.teamcode
      })
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
              <div className="createAccount">
                <input
                  className=""
                  type="submit"
                  value="Submit"
                  onClick={this.handleSubmit}
                />
                <a href="/"> Already have an account?</a>
              </div>
            </form>
          </div>
        </div>

        <div className="wrapper2">
          <div className="form-wrapper">
            <h1>Create Account for player</h1>
            <form onSubmit={this.handleSubmit} noValidate>
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
              <div className="teamcode">
                <label htmlFor="trainerCode">Trainer code</label>
                <input
                  className=""
                  placeholder="teamcode"
                  type="text"
                  name="teamcode"
                  noValidate
                  onChange={this.handleChange}
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
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Registreren;

// export default class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: ""
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     console.log("handeld change", event);
//   }

//   handleSubmit(event) {
//     console.log("from submidded");
//     event.preventDefault();
//   }

//   render() {
//     return (
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
