import React, { useState, useEffect } from 'react';
import './Notities.css';
import Check from '../Menu/Check'
import { Link } from 'react-router-dom';
import axios from 'axios'
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
        <div className="Notitiebody">
            <h1 className='titleNotitiel'>Notities</h1>
            <div className="column1"></div>
            <a  id = "Toevoegencolor" href="./Notities_toevoegen">
                <button id="Toevoegen" type="button">Notities Toevoegen</button>
            </a>
            <div className="tablerow" >
                {posts.map(function (post, id) {
                    return (<Link refresh="true" className="linkk" to={{ pathname: "/Notities_beschrijven", id: post.id, titel: post.titel, notitie: post.notitie }}>
                        <button id="rowss" >
                            {post.titel}
                        </button>
                    </Link>
                    )

                })}

            </div>
            <Check />
        </div>
    );
}
export default Notities;


