import React, { Component,useState, useEffect } from 'react'
import '../Notities/Notities_toevoegen'
import '../App.css'
import Check from '../Menu/Check'
import { Link } from 'react-router-dom';
import axios from 'axios'
import './Agenda.js'

export default class Agenda_Toevoegen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starttijd: this.props.location.starttijd,
      eindtijd: this.props.location.eindtijd,
      beschrijving: this.props.location.beschrijving

    }
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }
  agenda(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/agenda')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch()
    }, []);
  }
  agenda_toevoegen() {
    const request = new Request('http://localhost:3001/api/agenda', {
      method: 'POST',
      body: JSON.stringify({ 'starttijd': this.state.starttijd, 'eindtijd': this.state.eindtijd,'beschrijving': this.state.beschrijving }),
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
    console.log({ 'starttijd': this.state.starttijd, 'eindtijd': this.state.eindtijd, 'beschrijving': this.state.beschrijving })
    window.location = './agenda';
  }

  render() {
    const { eindtijd, starttijd,beschrijving } = this.state
    return (
      <div className="Notitiebody">
        <h1 className='titleNotitiel'>Agenda</h1>
        <div className="column1"></div>
        <p>
            {this.state.selectedDay
              ?this.state.selectedDay.toLocaleDateString() 
              : ''}
          </p>
        <div>
          <input
            name="starttijd"
            id="title"
            placeholder="starttijd"
            value={this.state.starttijd}
            onChange={event => this.handleChange(event)}
          />
        </div>
        <form onSubmit={this.submitHandler}>
          <div>
            <textarea
              placeholder="eindtijd"
              id="beschrijven"
              name="eindtijd"
              value={this.state.eindtijd}
              onChange={event => this.handleChange(event)}
            />
          </div>
          <div>
            <textarea
              placeholder="beschrijving"
              id="beschrijvenn"
              name="beschrijving"
              value={this.state.beschrijving}
              onChange={event => this.handleChange(event)}
            />
          </div>

          <Link to="./agenda" onClick={this.forceUpdate} > <button className="opslaan" type="submit" onClick={() => this.agenda_toevoegen()}>Toevoegen</button></Link>
        </form>
        <Check />
      </div>
    )
  }
}




