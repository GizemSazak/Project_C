import React, { useState, useEffect } from 'react';
import './Notities.css';
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Container, Row, Col, Button } from "react-bootstrap"


function Notities() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/notities')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch()
    }, []);

    return (
        <Container className="Background">
            <Row>
                {/* Menu */}
                <Col xs={3} sm={1} lg={1} className="p-0"><Menu /></Col>

                <Col xs={9} sm={11} lg={11} className="d-flex flex-column justify-content-end text-white text-center">
                    {/* Page Header */}
                    <Row>
                        <Col className="py-5"><h4>Notities</h4></Col>
                    </Row>
                    {/* Page Body */}
                    <Row className="Body pt-4 p-2">

                    </Row>
                </Col>
            </Row>
        </Container>
        // <div >
        //     <h1 >Notities</h1>
        //     <div className="column1"></div>
        //     <a id="Toevoegencolor" href="./Notities_toevoegen">
        //         <button id="Toevoegen" type="button">Notities Toevoegen</button>
        //     </a>
        //     <div className="tablerow" >
        //         {posts.map(function (post, id) {
        //             return (<Link refresh="true" className="linkk" to={{ pathname: "/Notities_beschrijven", id: post.id, titel: post.titel, notitie: post.notitie }}>
        //                 <button id="rowss" >
        //                     {post.titel}
        //                 </button>
        //             </Link>
        //             )
        //         })}
        //     </div>
        //     <Menu />
        // </div>
    );
}
export default Notities;


