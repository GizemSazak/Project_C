import React from 'react'
import './Spelers.css'
import Menu from '../Menu/Menu'
import Speler from './SpelerLayout'

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
                </body>
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