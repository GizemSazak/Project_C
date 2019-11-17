import React from 'react'
import Check from '../components/Menu/Check'
import './notities_beschrijven.css'
import axios from 'axios'
import '../App.css'
// function notities_bescrijven() {
//     return (
//         <div className="App">
// </div>

//         );

//     }
    
    

export default class notities_beschrijven extends React.Component {
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
        <h1 className='titleOefeningen'>Notities</h1>
            <div className = "tablerow" >
            <a href = "./notities_beschrijven">
           {this.state.Data.map(table => 
           <button id="rowss">{table.titel} <br></br>{table.notitie}</button> ) }
                 </a>
         </div>
         <div className = "column1"></div>
           <Check />
        </div>
      )
    }
  }