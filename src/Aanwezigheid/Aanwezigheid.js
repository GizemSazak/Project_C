import React, { Component, useState, useEffect } from 'react'
import Menu from '../Menu/Menu'
import axios from 'axios'
import './Aanwezigheid.css'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Aanwezigheid extends Component {
    constructor(props) {
        super(props);

        this.state = { datum: '' }
        this.state = { aanwezig: null }

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.togglecheck = this.togglecheck.bind(this);
        this.togglecross = this.togglecross.bind(this);
        this.Spelers = this.Spelers.bind(this);
    }

    togglecheck() {
        this.setState({ aanwezig: true })
        console.log('aanwezigheid: ' + this.state.aanwezig)
        // checkcolor='green'
        // crosscolor='black'
    }
    togglecross() {
        this.setState({ aanwezig: false })
        console.log('aanwezigheid: ' + this.state.aanwezig)
        //     crosscolor=red
        //     checkcolor=black
    }

    updateInput(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit() {
        console.log('Your voornaam is: ' + this.state.voornaam)
        console.log('Your achternaam is: ' + this.state.achternaam)
        console.log('You re : ' + this.state.aanwezig)
        console.log('The date is : ' + this.state.datum)

        // //Send state to the server code
        // const request = new Request('http://localhost:3001/api/aanwezigheid', {
        //     method: 'POST',
        //     headers: new Headers({ 'Content-Type': 'application/json' }),
        //     body: JSON.stringify({ 'spelernummer': this.state.spelernummer, 'voornaam': this.state.voornaam, 'achternaam': this.state.achternaam, 'email': this.state.email })
        // });
        // fetch(request)
        //     .then(response => {
        //         response.json().then(data => { });
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }

    Spelers(check) {
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
            <div className="Spelersrow">

                <div class='Spelerscolumn'>
                    <div className="ColumnHeader1">Naam</div>
                    {posts.map(post =>
                        <div className="Speler">{post.voornaam} {post.achternaam}</div>
                    )}
                </div>

                <div class='Spelerscolumn'>
                    <div className="ColumnHeader2">Aanwezigheid</div>
                    {posts.map(post =>
                        <div className="Aanwezigheidicons">

                            <a onClick={() => this.togglecheck()}>
                                <FontAwesomeIcon icon={faCheckCircle} /> {" "}
                            </a>
                            <a onClick={() => this.togglecross()}>
                                <FontAwesomeIcon icon={faTimesCircle} />
                            </a>

                        </div>
                    )}
                </div>
            </div>
        )
    }
    render() {
        return (

            <div className="Page">

                <header className="PageHeader">Aanwezigheid</header>

                <body className="Body_Aanwezigheid">
                    <div className="Datum">25-11-2019</div>
                    <this.Spelers />
                </body>

                <Menu />
            </div>
        )
    }
}

export default Aanwezigheid;
