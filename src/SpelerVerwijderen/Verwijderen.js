import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import './Verwijderen.css'
import Menu from '../Menu/Menu'

class SpelerVerwijderen extends Component {
    constructor(props) {
        super(props);

        this.state = { voornaam: '' }
        this.state = { achternaam: '' }
        this.state = { checked: "" }
        this.state = { radio: "Right now" }

        this.Spelers = this.Spelers.bind(this);
        this.Delete = this.Delete.bind(this);
        this.Popup = this.Popup.bind(this);
    }


    Spelers() {
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
            <body className="Body">

                {posts.map(post =>
                    <div onClick={() => this.Delete(post.voornaam, post.achternaam)}>
                        <div className="CardHeader">Positie</div>

                        <div className="CardBody" style={{ fontSize: '1.5rem' }}>
                            Rugnummer:<br />
                            {post.spelernummer}
                        </div>

                        <div className="CardBottom">
                            {post.voornaam} {post.achternaam}
                        </div>
                    </div>
                )}
            </body>
        )
    }
    // onClick={() => this.Delete(voornaam, achternaam)}

    Delete(Name, LastName) {

        const request = new Request('http://localhost:3001/api/speler', {
            method: 'DELETE',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ 'voornaam': Name, 'achternaam': LastName })
        });
        fetch(request)
            .then(response => { response.json().then(data => { }); })
            .catch(err => { console.log(err); });
        window.location.reload()
    }

    render() {
        return (
            <div className="Page">
                <header className="PageHeader">
                    Speler Verwijderen<br /><br />
                    <p className="BodyHeader">Kies een speler om te verwijderen</p>
                </header>

                <this.Spelers />

                <Menu />
            </div>
        )
    }
}

export default SpelerVerwijderen;