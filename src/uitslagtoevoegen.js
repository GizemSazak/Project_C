import React, { Component } from 'react';
import './Uitslagen.css';
import Menu from './Menu/Menu';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, FormGroup, FormControl } from "react-bootstrap"

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
                <Row style={{ height: '90%' }} className="justify-content-center">
                  <Col>
                    <FormGroup >
                      <label className="FormLabel" >Voornaam</label>
                      <FormControl type="text" placeholder="voornaam" className="Inputfield" onChange={this.updateInput} />
                    </FormGroup>
                    <FormGroup>
                      <label className="FormLabel" >Achternaam</label>
                      <FormControl type="text" placeholder="achternaam" className="Inputfield" onChange={this.updateInput} />
                    </FormGroup>
                    <FormGroup>
                      <label className="FormLabel">Email</label>
                      <FormControl type="email" placeholder="email" className="Inputfield" onChange={this.updateInput} />
                    </FormGroup>
                    <FormGroup>
                      <label className="FormLabel" >Spelernummer</label>
                      <FormControl type="number" placeholder="spelernummer" className="Inputfield" onChange={this.updateInput} />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup onSubmit={this.submitHandler}>
                      <FormControl as="textarea" rows="12" className="NotitieBody border-dark p-4" type="text" placeholder="Beschrijven" name="notitie" value={this.state.notitie} onChange={event => this.handleChange(event)}></FormControl>
                    </FormGroup>
                  </Col>

                </Row>
                {/* Buttons */}
                <Row className="align-items-start " style={{ height: '10%' }}>
                  <Col >
                    <Link to="./Notities" onClick={this.forceUpdate} >
                      <Button variant="success" className="m-1 border-dark" onClick={() => this.Notities_toevoegen()}>Toevoegen</Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      // <div className="App">
      //   <h1 className='titleOefeningen'>Wedstrijduitslagen</h1>
      //   <div className="uitslagBody">
      //     <div className="standtoevoegenBody">

      //       <form useRef="dataForm" ><div class="place1">
      //         <label id="titlelabel">Week</label><br />
      //         <input id="formp1" name="id" type="text" onChange={this.updateInput} /><br></br><br />
      //         <label id="titlelabel">Thuis</label><br />
      //         <input id="formp1" name="thuis" type="text" onChange={this.updateInput} /><br></br><br />
      //         <label id="titlelabel">Uit</label><br />
      //         <input id="formp1" name="uit" type="text" onChange={this.updateInput} /><br></br><br />
      //         <label id="titlelabel">Stand</label><br />
      //         <input id="formp1" name="stand" type="text" onChange={this.updateInput} /><br></br><br />
      //       </div>
      //         <div class="place2">
      //           <label id="titlelabel">Verslag</label><br />
      //           <textarea name="verslag" id="formp2" type="text" onChange={this.updateInput} ></textarea>
      //           <br></br><br />
      //         </div>
      //         <Link to='./Uitslagen' onClick={this.forceUpdate}><button id="toevoegenbutton" className="SubmitBtn" onClick={() => this.addUitslag()}>Toevoegen</button></Link>
      //       </form>

      //     </div>
      //   </div>
      //   <Menu />
      // </div>

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





