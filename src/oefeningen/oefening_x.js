import React, { Component } from 'react';
import Menu from '../Menu/Menu'
import { Container, Row, Col } from "react-bootstrap"

class Oefening_X extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titel: this.props.location.titel,
      veldopstelling: this.props.location.veldopstelling,
      spelverloop: this.props.location.spelverloop,
      spelregels: this.props.location.spelregels
    }
  }
  render() {
    if (!localStorage.getItem('Data') || localStorage === null) {
      window.location.href = '/';
    }
    else {
      return (
        <Container className="Background">
          <Row>
            {/* Menu */}
            <Col xs={3} sm={1} lg={1} className="p-0"><Menu /></Col>

            <Col xs={9} sm={11} lg={11} className="flex-column text-white">
              {/* Page Body */}
              <Row style={{ height: "100vh", overflow: "auto" }} className="pt-4 pl-0">
                <Col>
                  <img style={{ height: "50%", maxWidth: "65vw" }} src="//www.yoursportplanner.com/uploads/69b52cb3b2a2dec7e432d618a268cf2799034128.png" />
                  <div className="h-50 p-4 mt-4 OefBody1">
                    <h4 >Veldopstelling</h4>
                    <p5>{this.state.veldopstelling}</p5>
                  </div>

                </Col>
                <Col className="m-3 pb-3 OefBody2">
                  <br /><h5 style={{ color: "black", textAlign: "center" }}>{this.state.titel}</h5><br />
                  <h3>Spelverloop:</h3>
                  {this.state.spelverloop}<br /><br />
                  <h5>Spelregels:</h5>
                  {this.state.spelregels}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default Oefening_X;
