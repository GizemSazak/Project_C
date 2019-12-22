import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import Menu from '../Menu/Menu'
import { Container, Row, Col, Card } from "react-bootstrap"

class SpelerVerwijderen extends Component {
    constructor(props) {
        super(props);

        this.state = { voornaam: '' }
        this.state = { achternaam: '' }
        this.state = { checked: "" }
        this.state = { radio: "Right now" }

        this.Spelers = this.Spelers.bind(this);
        this.Delete = this.Delete.bind(this);
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
            <Row className="align-content-start" style={{ height: '90%' }} >
                {posts.map(post =>
                    <Col className="m-1 " style={{ minWidth: '16vh', maxWidth: '16vh', height: '25vh' }} onClick={() => this.Delete(post.voornaam, post.achternaam)}>
                        <Card className="border-dark " style={{ minWidth: '16vh', maxWidth: '16vh', height: '25vh' }} >
                            <Card.Header style={{ backgroundColor: 'rgb(0, 140, 0,0.9)', padding: '4%' }}>{/* Positie */}</Card.Header>
                            <Card.Body style={{ backgroundColor: 'rgb(0, 110, 0,0.8)', padding: '4%' }}>
                                Rugnummer:<br />
                                {post.spelernummer}
                            </Card.Body>
                            <Card.Footer style={{ backgroundColor: 'rgb(0, 140, 0,0.9)', padding: '4%' }}>{post.voornaam} {post.achternaam}</Card.Footer>
                        </Card>
                    </Col>
                )}
            </Row >
        )
    }

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
            <Container className="Background">
                <Row>
                    <Col xs={3} sm={1} lg={1} className="p-0"><Menu /></Col>

                    <Col xs={9} sm={11} lg={11} className="d-flex flex-column justify-content-end text-white text-center">
                        {/* Page Header */}
                        <Row>
                            <Col className="py-5">
                                <h4>Spelers</h4><br />
                                Kies een speler om te verwijderen
                            </Col>
                        </Row>

                        {/* Page Body */}
                        <Row className="Body pt-4 p-2">
                            <this.Spelers />
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SpelerVerwijderen;