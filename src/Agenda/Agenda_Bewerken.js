import React, { Component } from 'react';
import './Agenda';
import Check from '../Menu/Check';
import { Link } from 'react-router-dom';
import addbutton from '../addbutton.png'
import trashimg from '../trash.png'

class Agenda_Bewerken extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.id,
            datum: this.props.location.datum,
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

    Verwijderen() {
        const request = new Request('http://localhost:3001/api/Agenda', {
            method: 'DELETE',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ 'id': parseInt(this.props.location.id), })
        });
        fetch(request)
            .then(response => {
                response.json().then(data => { });
            })
            .catch(err => {
                console.log(err);
            });
            window.location = './Agenda';
                }


    Opslaan() {
        const request = new Request('http://localhost:3001/api/Agenda', {
            method: 'PUT',
            body: JSON.stringify({ 'id': parseInt(this.props.location.id), 'dag': this.state.datum, 'starttijd' : this.state.starttijd, 'eindtijd' : this.state.eindtijd, 'beschrijving' : this.state.beschrijving }),
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
          window.location = './Agenda';
              }

    render() {
        return (
            <div className="App">
                <h1 className='titleOefeningen'>Agenda</h1>
                <div className="uitslagBody">
                <table id="AgendaBewerkTable">
                <th id="Agenda_row1" className="titleDatum" colspan="3">{this.props.location.datum}</th>
                    <tr>
                        <th id="Agenda_row1">Starttijd</th>
                        <th id="Agenda_row1">Eindtijd</th> 
                        <th id="Agenda_row1">Beschrijving</th>
                    </tr>
                    <tr>
                        <td id = "Agenda_col">
                        <textarea
                                placeholder="Starttijd"
                                id="starttijd"
                                name="starttijd"
                                value={this.state.starttijd}
                                onChange={event => this.handleChange(event)}
                                />
                        </td>
                        <td id = "Agenda_col">  
                        <textarea
                                placeholder="Eindtijd"
                                id="eindtijd"
                                name="eindtijd"
                                value={this.state.eindtijd}
                                onChange={event => this.handleChange(event)}
                                /></td>
                        <td id = "Agenda_col">
                        <textarea
                                placeholder="Beschrijving"
                                id="beschrijving"
                                name="beschrijving"
                                value={this.state.beschrijving}
                                onChange={event => this.handleChange(event)}
                                />
                        </td>
                    </tr>
                    </table>
                    <Link to="./Agenda" >
                        <button onClick={() => this.Opslaan()} className="opslaanbutton">Opslaan</button>
                        <img src={trashimg} onClick={() => this.Verwijderen()} className="trashbutton" />
                    </Link>
                </div>
                <Link to="./Agenda" onClick={this.forceUpdate}><button onClick={() => this.Opslaan()} className="opslaanbutton">Opslaan</button><img src={trashimg} onClick= {() => this.Verwijderen()} className="trashbutton"/></Link>
           <Check />
            </div>
        );
    }
}


export default Agenda_Bewerken;