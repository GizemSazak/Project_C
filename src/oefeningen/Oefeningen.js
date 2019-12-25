import React, { useState, useEffect, Component } from 'react';
import './Oefeningen.css'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Container, Row, Col, Card } from "react-bootstrap"

class Oefeningen extends Component {

    viewOefeningen() {
        const [posts, setPosts] = useState([])

        useEffect(() => {
            axios.get('http://localhost:3001/api/oefeningen')
                .then(res => {
                    console.log(res)
                    setPosts(res.data)
                })
                .catch()
        }, []);

        if (!localStorage.getItem('Data') || localStorage === null) {
            window.location.href = '/';
        }
        else {
            return (
                <Container className="Background text-center">
                    <Row>
                        {/* Menu */}
                        <Col xs={3} sm={1} lg={1} className="p-0"><Menu /></Col>

                        <Col xs={9} sm={11} lg={11} className="d-flex flex-column justify-content-end text-white">
                            {/* Page Header */}
                            <Row>
                                <Col className="py-5"><h4>Oefeningen</h4></Col>
                            </Row>
                            {/* Page Body */}
                            <Row className="Body pt-4 p-3 ">
                                {posts.map(function (post, id) {
                                    return (
                                        <Link to={{ pathname: "/Oefening_X", titel: post.titel, veldopstelling: post.veldopstelling, spelverloop: post.spelverloop, spelregels: post.spelregels }}>
                                            <Card className="OefCard">
                                                <Card.Img id="oefimg" variant="top" src={post.afbeelding} alt="Oefening" />
                                                <Card.Footer style={{ border: "none", backgroundColor: "white" }}>
                                                    <p className="mb-1" style={{ color: "red", textAlign: "left" }}>{post.soort}</p>
                                                    <p className="m-0 p-0" style={{ color: "black", fontWeight: "bold" }}>{post.titel}</p>
                                                </Card.Footer>
                                            </Card>
                                        </Link>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }

    render() {
        if (!localStorage.getItem('Data') || localStorage === null) {
            window.location.href = '/';
        }
        else {
            return (<this.viewOefeningen />)
        }
    }
}

export default Oefeningen;