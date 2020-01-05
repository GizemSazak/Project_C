import React, { useState, useEffect } from 'react';
import './Uitslagen.css';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Container, Row, Col, Button } from "react-bootstrap"

function Uitslagen() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/wedstrijduitslag')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch()
    }, []);

    return (
        <Container className="Background text-center ">
            <Row>
                {/* Menu */}
                <Col xs={3} sm={1} lg={1} className="p-0"><Menu /></Col>

                <Col xs={9} sm={11} lg={11} className="d-flex flex-column justify-content-end text-white">
                    {/* Page Header */}
                    <Row>
                        <Col className="py-5 "><h4>Wedstrijduitslagen</h4></Col>
                    </Row>
                    {/* Page Body */}
                    <Row className="Body">
                        <Col className="p-0 ">
                            <Row style={{ height: '90%' }} >
                                <Col>
                                    <tr className="TableHeader" >
                                        <th className="py-2 px-2" style={{ width: '10vw', borderBottom: "2px solid black" }}>Week</th>
                                        <th style={{ width: '40vw', borderBottom: "2px solid black" }}>Thuis</th>
                                        <th style={{ width: '40vw', borderBottom: "2px solid black" }}>Stand</th>
                                        <th style={{ width: '10vw', borderBottom: "2px solid black" }}>Uit</th>
                                    </tr>
                                    {posts.map(function (post, id) {
                                        return (
                                            <Link to={{ pathname: "/verslag", id: post.id, verslag: post.verslag, thuis: post.thuis, stand: post.stand, uit: post.uit }}>
                                                <tr key={id} className="TableBody">
                                                    <th className="py-2 px-2" style={{ width: '10vw', borderBottom: "1px solid black" }}>{post.id}</th>
                                                    <td style={{ width: '40vw', borderBottom: "1px solid black" }}>{post.thuis}</td>
                                                    <td style={{ width: '40vw', borderBottom: "1px solid black" }}>{post.stand}</td>
                                                    <td style={{ width: '10vw', borderBottom: "1px solid black" }}>{post.uit}</td>
                                                </tr>
                                            </Link>
                                        )
                                    })}
                                </Col>
                            </Row>

                            <Row className="h-90% flex-column align-content-center" style={{ height: '10%' }}>
                                <Col>
                                    <Button href="./uitslagtoevoegen" className="btn btn-success p-2 px-4 my-2 border-dark">Toevoegen</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container >
    );
}
export default Uitslagen;
