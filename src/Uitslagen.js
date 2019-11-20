import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Uitslagen.css';
import Check from './components/Menu/Check';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { tsAnyKeyword } from '@babel/types';
import addbutton from './addbutton.png'
import reportimg from './reportimg.png'



function Uitslagen() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/wedstrijduitslag')
        .then(res => {
            console.log(res)
        setPosts(res.data)
        })
        .catch()
    },[]);

    return (
        <div className="App">
            <h1 className='titleOefeningen'>Wedstrijduitslagen</h1>
            <div className="uitslagBody">
                <tbody id="tt">
                            <tr >
                                <th id="HtableL" >#</th>
                                <th id="HtableR"  >Thuis</th>
                                <th id="HtableR" >Stand</th>
                                <th id="HtableR" >Uit</th>
                            </tr>   
                            </tbody> 
                    {posts.map(function(post, id){
                    return(<Link className="linkk" to={{pathname:"/verslag", verslag: post.verslag, thuis: post.thuis, stand: post.stand, uit: post.uit }}>
                        <tbody id="tt">
                            <tr key={id} >
                            <th id="tableL" >
                                {post.id} 
                            </th>   
                            <td id="tableR" >
                                {post.thuis} 
                            </td>   
                            <td id="tableR" >
                                {post.stand} 
                            </td>   
                            <td id="tableR" >
                                {post.uit} 
                            </td>
                            </tr>
                            </tbody>
                            </Link>
                        )
                    })}
                
         <Link to="/uitslagtoevoegen"><img src={addbutton} alt="add" className="addbutton"/></Link>                  
            </div>
            <Check />
        </div>
    );
}
export default Uitslagen;
        



