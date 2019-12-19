// Responsive
// Speler Verwijderen hier in toevoegen
import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import './Spelers.css'
import Menu from '../Menu/Menu'
import { Container, Row, Col, Form, FormGroup, FormControl } from "react-bootstrap"

class Spelers extends Component {

    render() {
        return (
            <Container className="Background">
                <Row>
                    <Col xs={3} sm={1} lg={1} className="bg-primary p-0"><Menu /></Col>

                    <Col xs={9} sm={11} lg={11}>
                        <Row>
                            <Col className="text-center text-white my-5">
                                <h4>Spelers</h4>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <SpelerOverzicht />

                                <a href="../SpelerToevoegen/Toevoegen">
                                    <button className="btnAddPlayer">+</button>
                                </a>

                                <a href="../SpelerVerwijderen/Verwijderen">
                                    <button className="btnDeletePlayer">-</button>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            // <div className="Page">
            //     <header className="PageHeader">Spelers</header>

            //     <SpelerOverzicht />

            //     <a href="../SpelerToevoegen/Toevoegen">
            //         <button className="btnAddPlayer">+</button>
            //     </a>

            //     <a href="../SpelerVerwijderen/Verwijderen">
            //         <button className="btnDeletePlayer">-</button>
            //     </a>
            //     <Menu />
            // </div>

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
