import React from 'react';
import './App.css';
import { faCalendar, faStickyNote, faUsers, faUserCheck, faBezierCurve, faRunning, faClipboard, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <div className="row">
        <div className="column" onclick="openTab('b1');"><FontAwesomeIcon icon={faCalendar} className="App-logo" /><br />AGENDA</div>
        <div className="column" onclick="openTab('b2');"><FontAwesomeIcon icon={faStickyNote} className="App-logo" /><br />NOTITIE</div>
        <div className="column" onclick="openTab('b3');"><FontAwesomeIcon icon={faUsers} className="App-logo" /><br />SPELERS</div>
        <div className="column" onclick="openTab('b4');"><FontAwesomeIcon icon={faUserCheck} className="App-logo" /><br />AANWEZIGHEID</div>
        <div className="column" onclick="openTab('b5');"><FontAwesomeIcon icon={faBezierCurve} className="App-logo" /><br />TACTIEK</div>
        <div className="column" onclick="openTab('b6');"><FontAwesomeIcon icon={faRunning} className="App-logo" /><br />OEFENINGEN</div>
        <div className="column" onclick="openTab('b7');"><FontAwesomeIcon icon={faClipboard} className="App-logo" /><br />WEDSTRIJDUITSLAGEN</div>
        <div className="column" onclick="openTab('b8');"><FontAwesomeIcon icon={faCogs} className="App-logo" /><br />INSTELLINGEN</div>
      </div>
    </div>
  );
}

function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

export default App;
