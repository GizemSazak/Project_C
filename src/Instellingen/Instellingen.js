import React, { useState, useEffect } from 'react';
import './Instellingen.css'
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Container, Row, Col } from "react-bootstrap"

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
                                <div className="uitslagBody">
                                    {posts.map(function (post, id) {
                                        return (<Link refresh="true" className="linkk" to={{ pathname: "/Gegevens", id: post.id, firstname: post.firstname, lastname: post.lastname, password: post.password }}>
                                            <button type="button" value="Gegevens wijzigen" class="Gegevens_wijzigen" >
                                                {/* {post.id} */}
                                                Gegevens wijzigen
                        </button>
                                        </Link>
                                        )

                                    })}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>


        );
    }
}
export default Instellingen;