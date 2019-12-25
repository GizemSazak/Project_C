import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import { Container, Row, Col, Button } from "react-bootstrap"

import SplitText from 'react-pose-text';
const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 100
    }
};

function Hoofdpagina() {
    return (
        <Container className="HomeBackground d-flex flex-column justify-content-center">
            <Row >
                <Col >
                    <Row>
                        <Col className="text-center text-white mb-5">
                            <h2>
                                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                    Wij maken jouw voetbaltraining makkelijker!
                                </SplitText>
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex flex-column text-center" >
                            <Link to="./login">
                                <Button className="btn-success m-2" style={{ width: "200px" }}>Login Trainer</Button>
                            </Link>
                            <Link to="./LoginSpeler">
                                <Button className="btn-success m-2" style={{ width: "200px" }}>Login Speler</Button>
                            </Link>
                            <Link to="./Registreren">
                                <Button className="btn-success m-2" style={{ width: "200px" }}>Registreren</Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default Hoofdpagina;