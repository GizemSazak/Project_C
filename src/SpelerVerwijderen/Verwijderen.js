import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Verwijderen.css'
import Menu from '../Menu/Menu'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Verwijderen() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/speler')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch()
    }, [])

    return (
        <div className="Page">
            <header className="PageHeader">Speler Verwijderen</header>

            <body className="Body">

                <h2 className="BodyHeader">Kies een speler of spelers om te verwijderen</h2>

                {posts.map(post =>
                    <div className="Speler">
                        <div className="Image" />
                        <div className="Spelernaam">{post.voornaam} {post.achternaam}</div>
                    </div>
                )}

                <FontAwesomeIcon icon={faTrashAlt} className="DeletePlayer" />

            </body>
            <Menu />
        </div>
    );
}
export default Verwijderen;