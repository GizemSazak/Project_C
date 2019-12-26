  
import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import './Spelers.css'
import Menu from '../Menu/Menu'


class Spelers extends Component {

    render() {
        if(!localStorage.getItem('Data') || localStorage === null){
            window.location.href = '/';
          }
        else{ 
        return (
            <div className="Page">
                <header className="PageHeader">Spelers</header>

                <SpelerOverzicht />

                <a href="../SpelerToevoegen/Toevoegen">
                    <button className="btnAddPlayer">+</button>
                </a>

                <a href="../SpelerVerwijderen/Verwijderen">
                    <button className="btnDeletePlayer">-</button>
                </a>
                <Menu />
            </div>

        )
    }
}
}

function SpelerOverzicht() {

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
        <body className="Body">

            {posts.map(post =>
                <div >
                    <div className="CardHeader">{/* Positie */}</div>

                    <div className="CardBody" style={{ fontSize: '1.5rem' }}>
                        Rugnummer:<br />
                        {post.spelernummer}
                    </div>

                    <div className="CardBottom">
                        {post.voornaam} {post.achternaam}
                    </div>
                </div>
            )}
        </body >
    );
}
export default Spelers;