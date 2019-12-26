import React, { useState, useEffect } from 'react';
import './Home.css';
import { faCalendar, faStickyNote, faUsers, faUserCheck, faBezierCurve, faRunning, faClipboard, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import axios from 'axios'
import App from './App';
import { Container, Row, Col, Image } from "react-bootstrap"
import logo from './logo.png'
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


  const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/registratie')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch()
    }, []);

    posts.map(function (post, id) {
      axios.post('http://localhost:3001/api/teamcode', {'teamcode': post.teamcode})
    }
    )

    

  const [buttons] = useState([
    { link: "./Agenda", title: "Agenda", icon: faCalendar },
    { link: "./Notities", title: "Notities", icon: faStickyNote },
    { link: "./Spelers", title: "Spelers", icon: faUsers },
    { link: "./Aanwezigheid", title: "Aanwezig", icon: faUserCheck },
    { link: "./tactieken", title: "Tactiek", icon: faBezierCurve },
    { link: "./Oefeningen", title: "Oefeningen", icon: faRunning },
    { link: "./Uitslagen", title: "Wedstrijduitslag", icon: faClipboard },
    { link: "./Instellingen", title: "Instellingen", icon: faCogs }
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
            posts.map(function (post, id) {
              return(
            <Col className="MenuColumn  d-table">
              <Link to={{pathname: buttons.link, teamcode: post.teamcode }} className="d-table-cell align-middle text-white" onclick={buttons.link}>
                <FontAwesomeIcon icon={buttons.icon} style={{ fontSize: "5vh" }} />
                <br />{buttons.title}
              </Link> 
            </Col>)})
          ))}
        </Row>
        <button id="logout" name="logout" value="submit"  onClick={()=> logout()}>Uitloggen</button>
            {posts.map(function (post, id) {
              return(
             <Link to={{pathname:"./teamcode",teamcode: post.teamcode}}>
            <button id="spelerteamcode" name="spelerteamcode" value="submit">Teamcode</button>           </Link>)})}

      </Container>
             
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