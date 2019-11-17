import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Spelers.css'
import Menu from '../Menu/Menu'

function Spelers() {

    // const [spelers] = useState([
    //     { link: "openTab('b1');", title: "Agenda", icon: faCalendar },
    //     { link: "openTab('b1');", title: "Notities", icon: faStickyNote }
    // ]);

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/speler')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch()
    }, []);

    return (
        <div className="Page">
            <header className="PageHeader">Spelers</header>

            <body className="Body">

                {posts.map(post =>
                    <div className="Speler">
                        <div className="Image" />
                        <div className="Spelernaam">{post.voornaam} {post.achternaam}</div>
                    </div>
                )}

            </body>

            <a href="../SpelerToevoegen/Toevoegen">
                <button className="btnAddPlayer">+</button>
            </a>

            <a href="../SpelerVerwijderen/Verwijderen">
                <button className="btnDeletePlayer">-</button>
            </a>
            <Menu />
        </div>
    );
}
export default Spelers;
