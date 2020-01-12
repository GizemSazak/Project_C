import React, { useState, useEffect } from 'react';
// import '../Notities/Notities.css';
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Container, Row, Col } from "react-bootstrap"
// import '../Notities/Notities.css';
function Teamcode() {

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
                            <Col className="py-5"><h4>Teamcode</h4></Col>
                        </Row>
                        {/* Page Body */}
                        <Row className="Body pt-4 p-2 ">
                            <Col>
                                <Row className="h-90% flex-column align-content-center" style={{ height: '87%' }}>
                                    {posts.map(function (post, id) {
                                        return (
                                            <div className="p-2" style={{ backgroundColor: "rgb(0, 120, 0)", borderRadius: "10px" }}>{post.teamcode}</div>
                                        )
                                    })}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Teamcode;
