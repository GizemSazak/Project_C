import React, { useState, useEffect, Component } from 'react';
import './Oefeningen.css'
import Check from '../Menu/Check'
import { Link } from 'react-router-dom';
import axios from 'axios'

class Oefeningen extends Component {

    viewOefeningen(){

        const [posts, setPosts] = useState([])
    
        useEffect(() => {
            axios.get('http://localhost:3001/api/oefeningen')
                .then(res => {
                    console.log(res)
                    setPosts(res.data)
                })
                .catch()
        }, []);
        
            if(!localStorage.getItem('Data') || localStorage === null){
            window.location.href = '/';
          }
        else{ 
        return (
            <div className='App'>
                <h1 className='titleOefeningen'>Oefeningen</h1>
                <Check />
                <div class="roww">
                    
                    {posts.map(function (post, id) {
                        return(
                            <div class="columnn">
                        <Link className="linkk" to={{ pathname: "/oefening_x", titel: post.titel, veldopstelling: post.veldopstelling, spelverloop: post.spelverloop, spelregels: post.spelregels }}>
                            <img id="oefimg" src={post.afbeelding} alt="Oefening" />
                            <p >{post.soort}</p><h4>{post.titel}</h4>
                        </Link>
                        </div>
                        )
                        })}
                   
                  
                </div>
            </div>
        ) ;
    }
}


    render(){
        if(!localStorage.getItem('Data') || localStorage === null){
            window.location.href = '/';
          }
        else{ 
        return(
            <this.viewOefeningen />
        )
    }
}
}


export default Oefeningen;