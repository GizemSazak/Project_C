import React, { Component, useState, useEffect } from 'react'
import Menu from '../Menu/Menu'
import axios from 'axios'
import './Aanwezigheid.css'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Button } from "react-bootstrap"

class Aanwezigheid extends Component {
    constructor(props) {
        super(props);

        this.state = { datum: null }
        this.state = { aanwezig: null }
        this.state = { speler_id: 11 }

        this.Submit = this.Submit.bind(this);
        this.togglecheck = this.togglecheck.bind(this);
        this.togglecross = this.togglecross.bind(this);
        this.Spelers = this.Spelers.bind(this);
    }

    togglecheck() {
        //Send state to the server code
        const request = new Request('http://localhost:3001/api/aanwezigheid', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ 'datum': '10-12-2019', 'aanwezig': '', 'speler_id': '15' })
        });
        fetch(request)
            .then(response => {
                response.json().then(data => { });
            })
            .catch(err => {
                console.log(err);
            });
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
            <Container className="Background text-center">
                <Row>
                    {/* Menu */}
                    <Col xs={3} sm={1} lg={1} className="p-0"><Menu /></Col>

                    <Col xs={9} sm={11} lg={11} className="d-flex flex-column justify-content-end text-white">
                        {/* Page Header */}
                        <Row>
                            <Col className="py-5"><h4>Aanwezigheid</h4></Col>
                        </Row>
                        {/* Page Body */}
                        <Row className="Body pt-4 p-2 ">
                            <Col>
                                <Row style={{ height: '13%' }}>
                                    <Col>
                                        <Button className="btn btn-success p-2 my-2 border-dark">{new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear()}</Button>
                                    </Col>
                                </Row>

                                <Row className="h-90% flex-column align-content-center" style={{ height: '87%' }}>
                                    <this.Spelers />
                                </Row>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Aanwezigheid;
