import React, { Component } from 'react';
import './Uitslagen.css';
import Check from './Menu/Check';
import { Link } from 'react-router-dom';

class uitslagtoevoegen extends Component {
  constructor(props) {
    super(props);
    this.state = {id: 0}
      this.state = {thuis: ''}
      this.state = {uit: ''}
      this.state = {stand: ''}
      this.state = {verslag: ''}
    
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleChange (event) {
    const values = [this.state.id, this.state.thuis, this.state.uit, this.state.stand, this.state.verslag]
  }




  addUitslag() {

    const request = new Request('http://localhost:3001/api/wedstrijduitslag', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ 'id': parseInt(this.state.id), 'thuis': this.state.thuis, 'uit': this.state.uit, 'stand': this.state.stand,  'verslag': this.state.verslag })
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
      <div className="App">
        <h1 className='titleOefeningen'>Wedstrijduitslagen</h1>
        <div className="uitslagBody">
          <div className="standtoevoegenBody">

            <form useRef="dataForm" ><div class="place1">
              <label id="titlelabel">Week</label><br />
              <input id="formp1" name="id" type="text" onChange={this.updateInput} /><br></br><br />
              <label id="titlelabel">Thuis</label><br />
              <input id="formp1" name="thuis" type="text" onChange={this.updateInput} /><br></br><br />
              <label id="titlelabel">Uit</label><br />
              <input id="formp1" name="uit" type="text" onChange={this.updateInput} /><br></br><br />
              <label id="titlelabel">Stand</label><br />
              <input id="formp1" name="stand" type="text" onChange={this.updateInput} /><br></br><br />
            </div>
              <div class="place2">
                <label id="titlelabel">Verslag</label><br />
                <textarea name="verslag" id="formp2" type="text" onChange={this.updateInput} ></textarea>
                <br></br><br />
              </div>
              <Link to='./Uitslagen' onClick={this.forceUpdate}><button id="toevoegenbutton" className="SubmitBtn" onClick={()=> this.addUitslag()}>Toevoegen</button></Link>
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
