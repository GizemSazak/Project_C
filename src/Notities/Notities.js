// import React from 'react'
// import './Notities.css'
// import Check from '../components/Menu/Check'
// import '../App.css'
// import axios from 'axios';
// export default class Notities extends React.Component {
//   state = {
//     Data: []
//   }

//   componentDidMount() {
//     axios.get('http://localhost:3001/api/notities')
//       .then(res => {
//         const Data = res.data;
//         this.setState({ Data });
//       })
//   }

//   render() {
    
//     return (
//       <div className="App">
//          <h1 className='titleOefeningen'>Notities</h1>
//          <a href = "./Notities_toevoegen">
//           <button id="Toevoegen" type="button">Notities Toevoegen</button>
//              </a>
//              <div className = "tablerow" >
//              <a href = "./notities_beschrijven">
//             {this.state.Data.map(table => 
//             <button value={table.id} 
//             key={table.id} id="rowss">{table.titel}</button> ) }
//                   </a>
//           </div>
//           <div className = "column1"></div>
//             <Check />
//          </div>
      
//     )
//   }
// }
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Notities.css';
import Check from '../components/Menu/Check'
import { Link } from 'react-router-dom';
import axios from 'axios'
import trash from './trash.svg' // Tell Webpack this JS file uses this image


function Notities() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
      axios.get('http://localhost:3001/api/notities')
      .then(res => {
          console.log(res)
      setPosts(res.data)
      })
      .catch()
  },[]);

  return (
      <div className="App">
          <h1 className='titleOefeningen'>Notities</h1>
          <a href = "./Notities_toevoegen">
              <button id="Toevoegen" type="button">Notities Toevoegen</button>
                 </a>
          <div className = "tablerow" >
          <div className="uitslagBody">
                  {posts.map(function(post, id){
                  return(<Link  refresh="true" className="linkk" to={{pathname:"/Notities_beschrijven", id: post.id, titel: post.titel, notitie: post.notitie}}>
                          <button id="rowss" >
                              {post.titel} 
                          </button>   
                          </Link>
                      )
                      
                  })}
                  
              </div>
          </div>
          <Check />
              <div className = "column1"></div>
      </div>
  );
}
export default Notities;
      

