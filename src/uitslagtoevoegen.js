import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import './Uitslagen.css';
import Check from './components/Menu/Check';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { tsAnyKeyword } from '@babel/types';
import addbutton from './addbutton.png'

class uitslagtoevoegen extends Component {
  constructor(props) {
    super(props);
    this.state = {id: 0}
      this.state = {thuis: ''}
      this.state = {stand: ''}
      this.state = {uit: ''}
      this.state = {verslag: ''}
    
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleChange (event) {
    const values = [this.state.id, this.state.thuis, this.state.stand, this.state.uit, this.state.verslag]
  }


  

  addUitslag() {

    const request = new Request('http://localhost:3001/api/wedstrijduitslag', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ 'id': parseInt(this.state.id), 'thuis': this.state.thuis, 'stand': this.state.stand, 'uit': this.state.uit, 'verslag': this.state.verslag })
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
      <div className="App">
        <h1 className='titleOefeningen'>Wedstrijduitslagen</h1>
        <div className="uitslagBody">
          <div className="standtoevoegenBody">

            <form useRef="dataForm" className="standForm">
              <input id="formp1" name="id" type="text" placeholder="week" className="Inputfield" onChange={this.updateInput} /><br></br>
              <input id="formp1" name="thuis" type="text" placeholder="thuis" className="Inputfield" onChange={this.updateInput} /><br></br>
              <input id="formp1" name="uit" type="text" placeholder="uit" className="Inputfield" onChange={this.updateInput}/><br></br>
              <input id="formp1" name="stand" type="text" placeholder="stand" className="Inputfield" onChange={this.updateInput} /><br></br>
              <textarea cols="23" name="verslag" rows="20" id="formp2" type="text" placeholder="verslag" className="Inputfield" onChange={this.updateInput} ></textarea>
              <br></br>
              <Link to='./Uitslagen' refresh="true"><button className="SubmitBtn" onClick={()=> this.addUitslag()}>Toevoegen</button></Link>
            </form>

          </div>
        </div>
        <Check />
      </div>
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





