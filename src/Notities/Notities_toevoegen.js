import React, { Component } from 'react'
import './Notities_toevoegen.css'
import '../App.css'
import trash from './trash.svg' // Tell Webpack this JS file uses this image
import Check from '../components/Menu/Check'
import axios from 'axios'
export default  class Notities_toevoegen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titel: '',
      notitie: ''
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('http://localhost:3001/api/notities', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { titel, notitie } = this.state
    return (
        <div className="App">
     <h1 className='titleOefeningen'>Notities</h1>
        <div>
           <input
              type="text"
              name="titel"
              id = "title" 
              placeholder="Titel"
              value={titel}
              onChange={this.changeHandler}
            />
          </div>
          <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              placeholder="Beschrijven"
              id = "beschrijven"
              name="notitie"
              value={notitie}
              onChange={this.changeHandler}
            />
          </div>
          <button id="opslaan"  type="submit" onChange={event => this.handleChange(event)}>Submit</button>
        </form>
     <div className = "column1"> </div> 
     <Check/>
    </div>
        )
      }
    }
    // CODE FOR UPDATE
    // export default  class Notities_toevoegen extends Component {
    //   constructor(props) {
    //     super(props)
    //     this.state = {
    //       id: '7',
    //       titel: '',
    //       notitie: ''
    //     }
    //   }
    
    //   changeHandler = e => {
    //     this.setState({ [e.target.name]: e.target.value })
    //   }
    
    //   submitHandler = e => {
    //     e.preventDefault()
    //     console.log(this.state)
    //     axios
    //       .put('http://localhost:3001/api/notities', this.state)
    //       .then(response => {
    //         console.log(response)
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
    //   }
    
    //   render() {
    //     const { id,titel, notitie } = this.state
    //     return (
    //         <div className="App">
    //      <h1 className='titleOefeningen'>Notities</h1>
    //         <div>
    //            <input
    //               type="text"
    //               name="titel"
    //               id = "title" 
    //               placeholder="Titel"
    //               value={titel}
    //               onChange={this.changeHandler}
    //             />
    //           </div>
    //           <form onSubmit={this.submitHandler}>
    //           <div>
    //             <input
    //               type="text"
    //               placeholder="Beschrijven"
    //               id = "beschrijven"
    //               name="notitie"
    //               value={notitie}
    //               onChange={this.changeHandler}
    //             />
    //           </div>
    //           <button id="opslaan"  type="submit">Submit</button>
    //         </form>
    //      <div className = "column1"> </div> 
    //       return <img  id = "trash" src={trash} alt="Logo" />;
    //      <Check/>
    //     </div>
    //         )
    //       }
    //     }
        
      // <div>
      //   <form onSubmit={this.submitHandler}>
     
      //     <div>
      //       <input
      //         type="text"
      //         name="titel"
      //         value={titel}
      //         onChange={this.changeHandler}
      //       />
      //     </div>
      //     <div>
      //       <input
      //         type="text"
      //         name="notitie"
      //         value={notitie}
      //         onChange={this.changeHandler}
      //       />
      //     </div>
      //     <button type="submit">Submit</button>
      //   </form>
      // </div>



