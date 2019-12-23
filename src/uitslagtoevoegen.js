import React, { Component } from 'react';
import './Uitslagen.css';
import Menu from './Menu/Menu';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, FormGroup, FormControl } from "react-bootstrap"

class uitslagtoevoegen extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 }
    this.state = { thuis: '' }
    this.state = { uit: '' }
    this.state = { stand: '' }
    this.state = { verslag: '' }

    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  addUitslag() {

    const request = new Request('http://localhost:3001/api/wedstrijduitslag', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ 'id': parseInt(this.state.id), 'thuis': this.state.thuis, 'uit': this.state.uit, 'stand': this.state.stand, 'verslag': this.state.verslag })
    });
    fetch(request)
      .then(response => {
        response.json().then(data => { });
      })
      .catch(err => {
        console.log(err);
      });
    window.location = './Uitslagen';
  }


  render() {
    return (
      <Container className="Background">
        <Row >
          {/* Menu */}
          <Col xs={3} sm={1} lg={1} className="p-0"><Menu /></Col>

          <Col xs={9} sm={11} lg={11} className="d-flex flex-column justify-content-end text-white text-center">
            {/* Page Header */}
            <Row>
              <Col className="py-5"><h4>Wedstrijduitslag Toevoegen</h4></Col>
            </Row>
            {/* Page Body */}
            <Row className="Body pt-4 p-2">
              <Col >
                <Row style={{ height: '85%' }} className="justify-content-center">
                  <Col>
                    <FormGroup>
                      <label className="Label">Week</label>
                      <FormControl type="number" name="id" className="Inputfield " onChange={this.updateInput} />
                    </FormGroup>
                    <FormGroup>
                      <label className="Label" >Thuis</label>
                      <FormControl type="text" name="thuis" className="Inputfield" onChange={this.updateInput} />
                    </FormGroup>
                    <FormGroup>
                      <label className="Label">Uit</label>
                      <FormControl type="text" name="uit" className="Inputfield" onChange={this.updateInput} />
                    </FormGroup>
                    <FormGroup>
                      <label className="Label" >Stand</label>
                      <FormControl type="text" name="stand" className="Inputfield" onChange={this.updateInput} />
                    </FormGroup>
                  </Col>

                  <Col>
                    <FormGroup onSubmit={this.submitHandler}>
                      <label className="Label" style={{ maxWidth: '900px' }}>Verslag</label>
                      <FormControl as="textarea" rows="10" className="NotitieBody border-dark p-4 " type="text" name="verslag" onChange={this.updateInput}></FormControl>
                    </FormGroup>
                  </Col>

                </Row>
                {/* Buttons */}
                <Row className="align-items-start" style={{ height: '15%' }}>
                  <Col >
                    <Link to="./Uitslagen" onClick={this.forceUpdate} >
                      <Button className="btn-success m-1 px-4 border-dark" onClick={() => this.addUitslag()}>Toevoegen</Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }

}

// function uitslagtoevoegen() {
//   return (
//     <div className="App">
//       <h1 className='titleOefeningen'>Wedstrijduitslagen</h1>
//       <div className="uitslagBody">
//         <div className="standtoevoegenBody">

//           <form useRef="dataForm" className="standForm">
//             <input id="formp1" type="text" placeholder="week" /><br></br>
//             <input id="formp1" type="text" placeholder="thuis" /><br></br>
//             <input id="formp1" type="text" placeholder="uit" /><br></br>
//             <input id="formp1" type="text" placeholder="stand" /><br></br>
//             <textarea cols="23" rows="20" id="formp2" type="text" placeholder="verslag"></textarea>
//             <br></br>
//             <button onClick={addUitslag()}>Toevoegen</button>
//           </form>

//         </div>
//       </div>
//       <Check />
//     </div>
//   );
// }

export default uitslagtoevoegen;





