import React, { useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Container, Row, Col, Button } from "react-bootstrap"
import { faUserCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Instellingen() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/registratie')
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
                            <Col className="py-5"><h4>Instellingen</h4></Col>
                        </Row>
                        {/* Page Body */}
                        <Row className="Body pt-4 p-2 ">
                            <Col>
                                {posts.map(function (post, id) {
                                    return (
                                        <Link refresh="true" className="linkk" to={{ pathname: "/Gegevens", id: post.id, firstname: post.firstname, lastname: post.lastname, password: post.password }}>
                                            <Button className="btn-success" >
                                                <FontAwesomeIcon icon={faUserCog} style={{ fontSize: "3vh" }} /> <br />
                                                Gegevens wijzigen
                                            </Button>
                                        </Link>
                                    )
                                })}
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Instellingen;