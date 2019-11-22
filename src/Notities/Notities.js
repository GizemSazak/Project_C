import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Notities.css';
import Check from '../Menu/Check'
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
    }, []);

    return (
        <div className="App">
            <h1 className='titleOefeningen'>Notities</h1>
            <a href="./Notities_toevoegen">
                <button id="Toevoegen" type="button">Notities Toevoegen</button>
            </a>
            <div className="tablerow" >
                <div className="uitslagBody">
                    {posts.map(function (post, id) {
                        return (<Link refresh="true" className="linkk" to={{ pathname: "/Notities_beschrijven", id: post.id, titel: post.titel, notitie: post.notitie }}>
                            <button id="rowss" >
                                {post.titel}
                            </button>
                        </Link>
                        )

                    })}

                </div>
            </div>
            <Check />
            <div className="column1"></div>
        </div>
    );
}
export default Notities;


