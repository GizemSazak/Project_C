import React, { useState, useEffect } from 'react';
import './Instellingen.css'
import Check from '../Menu/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios'


function Instellingen() { 
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/registratie')
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
        <div className="App">
            <h1 className='titleOefeningen'>Instellingen</h1>
            <div className="uitslagBody">
            {posts.map(function (post, id) {
                    return (<Link refresh="true" className="linkk" to={{ pathname: "/Gegevens", id: post.id, firstname: post.firstname, lastname: post.lastname,password: post.password }}>
                        <button type="button" value="Gegevens wijzigen" class="Gegevens_wijzigen" >
                            {/* {post.id} */}
                            Gegevens wijzigen
                        </button>
                    </Link>
                    )

                })}
            </div>
            <Check />
        </div>
    );
    }
}
export default Instellingen;