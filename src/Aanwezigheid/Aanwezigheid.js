import React, { Component, useState, useEffect } from 'react'
import Menu from '../Menu/Menu'
import axios from 'axios'
import './Aanwezigheid.css'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Aanwezigheid extends Component {
    constructor(props) {
        super(props);

        this.state = { datum: new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear() }
        this.state = { aanwezig: null }
        this.state = { speler_id: 11 }

        this.Submit = this.Submit.bind(this);
        this.togglecheck = this.togglecheck.bind(this);
        this.togglecross = this.togglecross.bind(this);
        this.Spelers = this.Spelers.bind(this);
    }

    togglecheck() {
        this.setState({ aanwezig: true })
        // this.setState({ [event.target.name]: event.target.value })  //event is a parameter
    }
    togglecross() {
        this.setState({ aanwezig: false })
        // this.setState({ [event.target.name]: event.target.value })
    }
    // Default() {
    //     //Send state to the server code
    //     const request = new Request('http://localhost:3001/api/aanwezigheid', {
    //         method: 'POST',
    //         headers: new Headers({ 'Content-Type': 'application/json' }),
    //         body: JSON.stringify({ 'datum': this.state.datum, 'aanwezig': this.state.aanwezig, 'speler_id': this.state.speler_id })
    //     });
    //     fetch(request)
    //         .then(response => {
    //             response.json().then(data => { });
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }
    Submit(voornaam, id, aanwezig, datum) {
        console.log('Your voornaam is: ' + voornaam)
        console.log('Your id is: ' + id)
        console.log("You're : " + aanwezig)
        console.log('The date is : ' + datum)
        return <h1>test</h1>
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

                <div className='Spelerscolumn'>
                    <div className="ColumnHeader1">Naam</div>
                    {posts.map(post =>
                        <div>
                            <div className="Speler">{post.voornaam} {post.achternaam}</div>
                        </div>
                    )}
                </div>

                <div className='Spelerscolumn'>
                    <div className="ColumnHeader2">Aanwezigheid</div>
                    {posts.map(post =>
                        <div className="Aanwezigheidicons">
                            {/* <button onClick={() => this.Submit(post.voornaam, post.id, this.state.aanwezig, this.state.datum)}>test</button> */}

                            <a onClick={() => this.togglecheck()}>
                                <FontAwesomeIcon icon={faCheckCircle} className={this.state.aanwezig ? "checkTrue" : "Aanwezigheidsicons"} /> {" "}
                            </a>
                            <a onClick={() => this.togglecross()}>
                                <FontAwesomeIcon icon={faTimesCircle} className={this.state.aanwezig ? "Aanwezigheidsicons" : "crossTrue"} />
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
                    <div className="Datum">{this.state.datum}</div>
                    <this.Spelers />
                </body>

                <Menu />
            </div>
        )
    }
}

export default Aanwezigheid;
