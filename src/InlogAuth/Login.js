import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Button, FormGroup, FormControl, Form } from "react-bootstrap"

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
    const { user, rememberMe } = this.state;
    localStorage.setItem('Data', 'login');
    localStorage.setItem('user', rememberMe ? user : '');
    console.log(this.state)
    e.preventDefault()
    const { email, password } = this.state;
    axios
      .post('http://localhost:3001/api/login', this.state)
      .then(function (response) {
        if (response.data.redirect == '/') {
          window.location = "/Home"
        } else if (response.data.redirect == '/login') {
          window.location = "/login"
        }
      })
      .catch(function (error) {
        window.location = "/login"
      })

  }

  // render() {
  //   return (
  //       <div className="Page">
  //         <header className="wrapper">
  //           <body className="form-wrapper">
  //             <h1 className="login-header">Login</h1>
  //             <form className="inlogform">

  //               <div className="email">
  //                 <label htmlFor="email">Email</label>
  //                 <input classname="inputt" placeholder="Email" type="email" name="email" onChange={this.updateInput} />
  //               </div>

  //               <div className="password">
  //                 <label htmlFor="password">Password</label>
  //                 <input classname="inputt" placeholder="Password" type="password" name="password" onChange={this.updateInput} />
  //               </div>

  //               <div className="createAccount">
  //                 <input classname="inputt" type="submit" value="Submit" onClick={this.handleSubmit} />
  //                 <a href="/registreren"> Already have an account?</a>
  //               </div>
  //             </form>
  //           </body>
  //         </header>
  //       </div >
  //     );
  //   }
  // }

  render() {
    localStorage.getItem('myData');

    return (
      <Container className="HomeBackground d-flex flex-column justify-content-center">
        <Row >
          <Col >
            <Row>
              <Col className="text-center text-white mb-5">
                <Col className="py-5"><h4>Login - Trainer</h4></Col>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex flex-column text-center" >
                <Form>
                  <FormGroup >
                    <label className="text-white" >Email</label>
                    <FormControl type="email" name="email" className="Inputfield" onChange={this.updateInput} />
                  </FormGroup>
                  <FormGroup >
                    <label className="text-white" >Wachtwoord</label>
                    <FormControl type="password" name="password" className="Inputfield" onChange={this.updateInput} />
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

export default Loginpage;

// render() {
  //   return (
//       <div className="Page">
//         <header className="wrapper">
//           <body className="form-wrapper">
//             <h1 className="login-header">Login</h1>
//             <form className="inlogform">
  //       <div className="Page">
  //         <header className="wrapper">
  //           <body className="form-wrapper">
  //             <h1 className="login-header">Login</h1>
  //             <form className="inlogform">

//               <div className="email">
//                 <label htmlFor="email">Email</label>
//                 <input classname="inputt" placeholder="Email" type="email" name="email" onChange={this.updateInput} />
//               </div>
  //               <div className="email">
  //                 <label htmlFor="email">Email</label>
  //                 <input classname="inputt" placeholder="Email" type="email" name="email" onChange={this.updateInput} />
  //               </div>

//               <div className="password">
//                 <label htmlFor="password">Password</label>
//                 <input classname="inputt" placeholder="Password" type="password" name="password" onChange={this.updateInput} />
//               </div>
  //               <div className="password">
  //                 <label htmlFor="password">Password</label>
  //                 <input classname="inputt" placeholder="Password" type="password" name="password" onChange={this.updateInput} />
  //               </div>

//               <div className="createAccount">
//                 <input classname="inputt" type="submit" value="Submit" onClick={this.handleSubmit} />
//                 <a href="/registreren"> Already have an account?</a>
//               </div>
//             </form>
//           </body>
//         </header>
//       </div >
//     );
//   }
// }
  //               <div className="createAccount">
  //                 <input classname="inputt" type="submit" value="Submit" onClick={this.handleSubmit} />
  //                 <a href="/registreren"> Already have an account?</a>
  //               </div>
  //             </form>
  //           </body>
  //         </header>
  //       </div >
  //     );
  //   }
  // }