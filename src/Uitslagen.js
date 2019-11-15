import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Uitslagen.css';
import Check from './components/Menu/Check';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { tsAnyKeyword } from '@babel/types';

function Uitslagen() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/wedstrijduitslag')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch()
    })

    return (
        <div className="App">
            <h1 className='titleOefeningen'>Wedstrijduistslagen</h1>
            <div className="uitslagBody">
                <tbody id="tt" >
                            <tr >
                                <th id="tableL" >#</th>
                                <th id="tableR"  >Thuis</th>
                                <th id="tableR" >Stand</th>
                                <th id="tableR" >Uit</th>
                            </tr>    
                    {posts.map(function(post){
                    return(
                            <tr>
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
                        )
                    })}
                </tbody>
                 
            </div>
            <Check />
        </div>
    );
}
export default Uitslagen;
        



