import React from "react";
import calendar from "./calendar.png";
import note from "./note.png";
import players from "./players.png";
import attendance from "./attendance.png";
import tactics from "./tactics.png";
import exercise from "./exercise.png";
import competition from "./competition.png";
import settings from "./settings.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header></header>
      <div className="row">
        <div className="column" onclick="openTab('b1');">
          <br></br>
          <img src={calendar} className="App-logo" alt="icon1" />
          <br></br>AGENDA
        </div>
        <div className="column" onclick="openTab('b2');">
          <br></br>
          <img src={note} className="App-logo" alt="icon2" />
          <br></br>NOTITIE
        </div>
        <div className="column" onclick="openTab('b3');">
          <br></br>
          <img src={players} className="App-logo" alt="icon3" />
          <br></br>SPELERS
        </div>
        <div className="column" onclick="openTab('b4');">
          <br></br>
          <img src={attendance} className="App-logo" alt="icon4" />
          <br></br>AANWEZIGHEID
        </div>
        <div className="column" onclick="openTab('b5');">
          <br></br>
          <img src={tactics} className="App-logo" alt="icon5" />
          <br></br>TACTIEK
        </div>
        <div className="column" onclick="openTab('b6');">
          <br></br>
          <img src={exercise} className="App-logo" alt="icon6" />
          <br></br>OEFENINGEN
        </div>
        <div className="column" onclick="openTab('b7');">
          <br></br>
          <img src={competition} className="App-logo" alt="icon7" />
          <br></br>WEDSTRIJDUITSLAGEN
        </div>
        <div className="column" onclick="openTab('b8');">
          <br></br>
          <img src={settings} className="App-logo" alt="icon8" />
          <br></br>INSTELLINGEN
        </div>
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
