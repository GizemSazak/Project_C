import React from 'react'
import './Spelers.css'
import Menu from '../Menu/Menu'

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
                    <div className="Speler">
                        <div className="SpelerImg" />
                        Jane Doe
                        {/* {spelers.map(spelers => (
                            <Link to={spelers.link} className="menu">
                                <FontAwesomeIcon icon={spelers.icon} />
                                <br />{spelers.title}
                            </Link>
                            ))} */}
                    </div>
                </body>
            </div>
            <Menu />
        </div>
    );
}
export default Spelers;