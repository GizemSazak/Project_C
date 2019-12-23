import React, { useState } from 'react';
import './Home.css';
import { faCalendar, faStickyNote, faUsers, faUserCheck, faBezierCurve, faRunning, faClipboard, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from "react-bootstrap"
import logo from './logo.jpg'

// import App from './App';

// import { browserhistory } from 'react-router'; 
// function cheacklogin(checklogin){
// if(!localStorage.getItem('myData', 'My data') || localStorage === null){
//   window.location.href = '/';
// }
//   else{
//     Home();
//   }
// }
function Home() {
  // cheacklogin();

  const [buttons] = useState([
    { link: "./Agenda", title: "Agenda", icon: faCalendar },
    { link: "./Notities", title: "Notities", icon: faStickyNote },
    { link: "./Spelers", title: "Spelers", icon: faUsers },
    { link: "./Aanwezigheid", title: "Aanwezig", icon: faUserCheck },
    { link: "./tactieken", title: "Tactiek", icon: faBezierCurve },
    { link: "./Oefeningen", title: "Oefeningen", icon: faRunning },
    { link: "./Uitslagen", title: "Wedstrijduitslag", icon: faClipboard },
    { link: "openTab('b1');", title: "Instellingen", icon: faCogs }
  ]);
  if (!localStorage.getItem('Data') || localStorage === null) {
    window.location.href = '/';
  }
  else {
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
      //       </div >
      //       <button id="logout" name="logout" value="submit"  onClick={()=> logout()}>Uitloggen</button>
      //       <Link to="./teamcode">
      //  <button id="spelerteamcode" name="spelerteamcode" value="submit">Teamcode</button>           </Link>

      //     </div>
    );
  }
}

// function openTab(tabName) {
//   var i, x;
//   x = document.getElementsByClassName("containerTab");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   document.getElementById(tabName).style.display = "block";
// }
function logout() {
  // sessionStorage.clear();
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = '/';
  window.history.replaceState(null, null, "/");

}
export default Home;