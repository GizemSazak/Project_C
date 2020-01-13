import React, { useState, useEffect } from 'react';
import './Notities.css';
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Container, Row, Col, Button } from "react-bootstrap"

function Notities() {
    const [posts, setPosts] = useState([])
    //Getting all the notities information from the server 
    useEffect(() => {
        axios.get('http://localhost:3001/api/notities')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch()
    }, []);
    /*Check the local storage if it has not have the same local storage value when the user logged in.
    It will not allowed the user to go to the Notities page if he is not logged in. 
    Else it will allowed to the user to see the the Notities page if he is logged in.
    */
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
                            <Col className="py-5"><h4>Notities</h4></Col>
                        </Row>
                        {/* Page Body */}
                        <Row className="Body pt-4 p-2 ">
                            <Col>
                                <Row style={{ height: '13%' }}>
                                    <Col>
                                        <Button className="btn-success p-2 my-2 border-dark" href="./Notitie_Toevoegen">Notities Toevoegen</Button>
                                    </Col>
                                </Row>

                                <Row className="h-90% flex-column align-content-center" style={{ height: '87%' }}>
                                    {posts.map(function (post, id) {
                                        //Sending the id, title and note to Notitie_Wijzigen page
                                        return (
                                            <Col className="my-1 Notes">
                                                <Link refresh="true" to={{ pathname: "/Notitie_Wijzigen", id: post.id, titel: post.titel, notitie: post.notitie }}>
                                                    <Button className="Note text-white p-2 border-dark"> {post.titel} </Button> {/** Show the title / */}
                                                </Link>
                                            </Col>
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
export default Notities;
