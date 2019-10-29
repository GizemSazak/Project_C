import React, { useState } from 'react';
import './Menu.css';
import { faCalendar, faStickyNote, faUsers, faUserCheck, faBezierCurve, faRunning, faClipboard, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Menu() {
    // Here the values of the buttons are filled in
    const [buttons] = useState([
        { title: "Agenda", icon: faCalendar },
        { title: "Notities", icon: faStickyNote },
        { title: "Spelers", icon: faUsers },
        { title: "Aanwezig", icon: faUserCheck },
        { title: "Tactiek", icon: faBezierCurve },
        { title: "Oefeningen", icon: faRunning },
        { title: "Wedstrijduitslag", icon: faClipboard },
        { title: "Instellingen", icon: faCogs }
    ]);

    return (
        <nav className="sidebar" >
            {/* We're making all the buttons and filling the values in by mapping through all buttons */}
            {buttons.map(buttons => (
                <button>
                    <FontAwesomeIcon icon={buttons.icon} />
                    <br />{buttons.title}
                </button>
            ))}
        </nav >
    )
}

export default Menu;