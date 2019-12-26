import React, { Component } from 'react'
import './Notities_toevoegen.css'
import '../App.css'
import Check from '../Menu/Check'
import { Link } from 'react-router-dom';
import trash from './trash.svg' // Tell Webpack this JS file uses this image
export default class Notities_toevoegen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notitie: this.props.location.notitie,
      titel: this.props.location.titel
    }
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }
  Notities_toevoegen() {
    const request = new Request('http://localhost:3001/api/notities', {
      method: 'POST',
      body: JSON.stringify({ 'notitie': this.state.notitie, 'titel': this.state.titel}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    fetch(request)
      .then(response => {
        response.json().then(data => { });
      })
      .catch(err => {
        console.log(err);
      });
    console.log({ 'notitie': this.state.notitie, 'titel': this.state.titel })
    window.location = './Notities';
  }

  render() {
    const { titel, notitie } = this.state
    if(!localStorage.getItem('Data') || localStorage === null){
      window.location.href = '/';
    }
  else{ 
    return (
      <div className="Notitiebody">
        <h1 className='titleNotitiel'>Notities</h1>
        <div className="column1"></div>
        <div>
          <input
            type="text"
            name="titel"
            id="title"
            placeholder="Titel"
            value={this.state.titel}
            onChange={event => this.handleChange(event)}
          />
        </div>
        <form onSubmit={this.submitHandler}>
          <div>
            <textarea
              type="text"
              placeholder="Beschrijven"
              id="beschrijven"
              name="notitie"
              value={this.state.notitie}
              onChange={event => this.handleChange(event)}
            />
          </div>
          <Link to="./Notities" onClick={this.forceUpdate} > <button className="opslaan" type="submit" onClick={() => this.Notities_toevoegen()}>Toevoegen</button></Link>
          <Link to="./Notities"> <img src={trash} className="trash2" /></Link>
        </form>
        <Check />
      </div>
    )
  }
}
}

