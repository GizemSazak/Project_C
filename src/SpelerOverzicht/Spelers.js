import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import Menu from '../Menu/Menu'
import { Container, Row, Col, Button, Card, CardDeck } from "react-bootstrap"

class Spelers extends Component {

    render() {
        return (
            <Container className="Background">
                <Row >
                    {/* Menu */}
                    <Col xs={3} sm={1} lg={1} className="p-0"><Menu /></Col>

                    <Col xs={9} sm={11} lg={11} className="d-flex flex-column justify-content-end text-white text-center">
                        {/* Page Header */}
                        <Row>
                            <Col className="py-5"><h4>Spelers</h4></Col>
                        </Row>
                        {/* Page Body */}
                        <Row className="Body pt-4 p-2">
                            <Col>
                                <SpelerOverzicht />

                                <Row className="align-items-end " style={{ height: '10%' }}>
                                    <Col >
                                        <Button variant="success" className="m-1 border-dark" href="../SpelerToevoegen/Toevoegen" >Toevoegen</Button>
                                        <Button variant="danger" className="border-dark" href="../SpelerVerwijderen/Verwijderen">Verwijderen</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
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
        <Row className="align-content-start" style={{ height: '90%' }} >
            {posts.map(post =>
                <Col>
                    <CardDeck>
                        <Card className="m-1 border-dark " style={{ minWidth: '16vh', maxWidth: '16vh', height: '25vh' }}>
                            <Card.Header style={{ backgroundColor: 'rgb(0, 140, 0,0.9)', padding: '4%' }}>{/* Positie */}</Card.Header>
                            <Card.Body style={{ backgroundColor: 'rgb(0, 110, 0,0.8)', padding: '4%' }}>
                                Rugnummer:<br />
                                {post.spelernummer}
                            </Card.Body>
                            <Card.Footer style={{ backgroundColor: 'rgb(0, 140, 0,0.9)', padding: '4%' }}>{post.voornaam} {post.achternaam}</Card.Footer>
                        </Card>
                    </CardDeck>
                </Col>
            )}
        </Row >
    );
}
export default Spelers;
