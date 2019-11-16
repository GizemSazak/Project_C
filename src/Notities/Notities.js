import React from 'react'
import './Notities.css'
import Check from '../components/Menu/Check'
import '../App.css'
import axios from 'axios';
export default class Notities extends React.Component {
  state = {
    Data: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/notities')
      .then(res => {
        const Data = res.data;
        this.setState({ Data });
      })
  }

  render() {
    return (
      <div className="App">
      <ul>
        { this.state.Data.map(table => <li>{table.titel} {table.notitie}</li>) }
      </ul>
         <h1 className='titleOefeningen'>Notities</h1>
         <a href = "./Notities_toevoegen">
          <button id="Toevoegen" type="button" onclick="alert('Hello world!')">Notities Toevoegen</button>
             </a>
          <div className = "column1"></div>
            <Check />
         </div>
      
    )
  }
}
