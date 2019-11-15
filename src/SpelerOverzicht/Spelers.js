import React from 'react'
import './Spelers.css'
import Menu from '../Menu/Menu'
import Speler from './SpelerLayout'
import { Link } from 'react-router-dom'
import x from '../SpelerToevoegen/Toevoegen'

function Spelers() {

    // const [spelers] = useState([
    //     { link: "openTab('b1');", title: "Agenda", icon: faCalendar },
    //     { link: "openTab('b1');", title: "Notities", icon: faStickyNote }
    // ]);

    return (
        <div>
            <div className="Page">
                <header className="Header">Spelers</header>
                <body className="Body">
                    <Speler />
                    <Speler />
                    <Speler />
                    <Speler />
                    <Speler />
                    <Speler />
                    <Speler />
                    <Speler />
                    <Speler />
                    <Speler />
                    <Speler />
                    <Speler />
                    <Speler />
                    <Speler />
                </body>

                <a href="../SpelerToevoegen/Toevoegen">
                    <button className="btnAddPlayer">+</button>
                </a>

                <a href="../SpelerVerwijderen/Verwijderen">
                    <button className="btnDeletePlayer">-</button>
                </a>

            </div>
            <Menu />
        </div>
    );
}
export default Spelers;

{/* {spelers.map(spelers => (
                            <Link to={spelers.link} className="menu">
                                <FontAwesomeIcon icon={spelers.icon} />
                                <br />{spelers.title}
                            </Link>
                            ))} */}