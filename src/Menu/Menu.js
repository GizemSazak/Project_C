import React, { useState } from 'react';
import './Menu.css';
import { faCalendar, faStickyNote, faUsers, faUserCheck, faBezierCurve, faRunning, faClipboard, faCogs, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap"

function Menu() {
  // Here the values of the buttons are filled in
  var [buttons] = '';
  const [trainerbuttons] =
    useState(
      [
        { link: "../Home", title: "Home", icon: faHome },
        { link: "../Agenda", title: "Agenda", icon: faCalendar },
        { link: "../Notities", title: "Notities", icon: faStickyNote },
        { link: "../Spelers", title: "Spelers", icon: faUsers },
        { link: "../Aanwezigheid", title: "Aanwezig", icon: faUserCheck },
        { link: "../tactieken", title: "Tactiek", icon: faBezierCurve },
        { link: "../Oefeningen", title: "Oefeningen", icon: faRunning },
        { link: "../Uitslagen", title: "Wedstrijduitslag", icon: faClipboard },
        { link: "../Instellingen", title: "Instellingen", icon: faCogs }
      ])

  const [spelerbuttons] =
    useState(
      [
        { link: "../Home", title: "Home", icon: faHome },
        { link: "./Agenda", title: "Agenda", icon: faCalendar },
        { link: "./Oefeningen", title: "Oefeningen", icon: faRunning },
        { link: "./Uitslagen", title: "Wedstrijduitslag", icon: faClipboard }
      ])


  if (localStorage.getItem('role') == 'speler') {
    [buttons] = [spelerbuttons]
    console.log('speler')
  }
  else {
    [buttons] = [trainerbuttons]
  }
  console.log(localStorage.getItem('role'))

  if (!localStorage.getItem('Data') || localStorage === null) {
    window.location.href = '/';
  }
  else {
    return (
      <Container className="sidebar d-flex flex-column text-center"  >
        {/* We're making all the buttons and filling the values in by mapping through all buttons */}
        {buttons.map(buttons => (
          <Row >
            <Col className="menu d-table">
              <Link to={{ pathname: buttons.link }} className="d-table-cell align-middle text-white">
                <FontAwesomeIcon icon={buttons.icon} style={{ fontSize: "3vh" }} />
                <br />{buttons.title}
              </Link>
            </Col>
          </Row>
        ))}
      </Container>
    )
  }
}

export default Menu;