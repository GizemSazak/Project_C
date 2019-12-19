import React, { useState } from 'react';
import './App.css';
import { faCalendar, faStickyNote, faUsers, faUserCheck, faBezierCurve, faRunning, faClipboard, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from "react-bootstrap"
import logo from './logo.jpg'

function Home() {

  const [buttons] = useState([
    { link: "openTab('b1');", title: "Agenda", icon: faCalendar },
    { link: "./Notities", title: "Notities", icon: faStickyNote },
    { link: "./Spelers", title: "Spelers", icon: faUsers },
    { link: "./Aanwezigheid", title: "Aanwezig", icon: faUserCheck },
    { link: "openTab('b1');", title: "Tactiek", icon: faBezierCurve },
    { link: "./Oefeningen", title: "Oefeningen", icon: faRunning },
    { link: "./Uitslagen", title: "Wedstrijduitslag", icon: faClipboard },
    { link: "openTab('b1');", title: "Instellingen", icon: faCogs }
  ]);

  return (
    <Container className="Background d-flex flex-column justify-content-end p-0 m-0">
      <Row className="text-center  d-table" >
        <Col className="Logo d-table-cell align-middle ">
          <Image src={logo} alt="Logo" className="h-50"></Image>
        </Col>
      </Row>
      <Row >
        {buttons.map(buttons => (
          /* We're making all the buttons and filling the values in by mapping through all buttons */
          <Col className="MenuColumn  d-table">
            <Link to={buttons.link} className="d-table-cell align-middle text-white" onclick={buttons.link}>
              <FontAwesomeIcon icon={buttons.icon} style={{ fontSize: "5vh" }} />
              <br />{buttons.title}
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;