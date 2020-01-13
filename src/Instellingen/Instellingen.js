import React, { useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Container, Row, Col, Button } from "react-bootstrap"
import { faUserCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Instellingen() {
    const [posts, setPosts] = useState([])
    //Getting all the registratie information from the server. I use this to get the old password, id, first and lastname
    useEffect(() => {
        axios.get('http://localhost:3001/api/registratie')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch()
    }, []);

    /*Check the local storage if it has not have the same local storage value when the user logged in.
    It will not allowed the user to go to the Instellingen page if he is not logged in. 
    Else it will allowed to the user to see the the Instellingen page if he is logged in.
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
                            <Col className="py-5"><h4>Instellingen</h4></Col>
                        </Row>
                        {/* Page Body */}
                        <Row className="Body pt-4 p-2 ">
                            <Col>
                                {posts.map(function (post, id) {
                                //Sending the id, firstname, lastname and password to gegevens page
                                    return (
                                        <Link refresh="true" className="linkk" to={{ pathname: "/Gegevens", id: post.id, firstname: post.firstname, lastname: post.lastname, password: post.password }}>
                                            <Button className="btn-success" value="linkk" >
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