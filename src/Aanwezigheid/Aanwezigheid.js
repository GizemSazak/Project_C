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
        this.state = { check: false }
        this.state = { cross: false }

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event) {
        this.setState({ [event.target.name]: event.target.value })

        // if (this.check= true){
        //     this.aanwezig=true
        //     checkcolor=green
        // }
        // else if(this.cross=true){
        //     this.aanwezig=false
        //     crosscolor=red
        // }
        // else{
        //     this.aanwezig=null
        //     checkcolor=black
        //     crosscolor=black
        // }
    }

    handleSubmit() {
        console.log('Your voornaam is: ' + this.state.voornaam)
        console.log('Your achternaam is: ' + this.state.achternaam)
        console.log('You re : ' + this.state.aanwezig)
        console.log('The date is : ' + this.state.datum)

        // //Send state to the server code
        // const request = new Request('http://localhost:3001/api/speler', {
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
                            <FontAwesomeIcon icon={faCheckCircle} /> {" "}
                            <FontAwesomeIcon icon={faTimesCircle} />
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
