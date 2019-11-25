import React, { useState } from 'react';
import './Menu.css';
import { faCalendar, faStickyNote, faUsers, faUserCheck, faBezierCurve, faRunning, faClipboard, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Menu() {
    // Here the values of the buttons are filled in
    const [buttons] = useState([
        { link: "../Agenda", title: "Agenda", icon: faCalendar },
        { link: "../Notities", title: "Notities", icon: faStickyNote },
        { link: "../Spelers", title: "Spelers", icon: faUsers },
        { link: "openTab('b1');", title: "Aanwezig", icon: faUserCheck },
        { link: "openTab('b1');", title: "Tactiek", icon: faBezierCurve },
        { link: "../Oefeningen", title: "Oefeningen", icon: faRunning },
        { link: "../Uitslagen", title: "Wedstrijduitslag", icon: faClipboard },
        { link: "openTab('b1');", title: "Instellingen", icon: faCogs }
    ]);

    return (
        <nav className="sidebar" >
            {/* We're making all the buttons and filling the values in by mapping through all buttons */}
            {buttons.map(buttons => (
                <Link to={buttons.link} className="menu">
                    <FontAwesomeIcon icon={buttons.icon} />
                    <br />{buttons.title}
                </Link>
            ))}
        </nav >
    )
}

export default Menu;