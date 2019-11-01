import React, { useState } from "react";
import "./App.css";
import {
  faCalendar,
  faStickyNote,
  faUsers,
  faUserCheck,
  faBezierCurve,
  faRunning,
  faClipboard,
  faCogs
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Registration from "./components/auth/Registration";
import Login from "./components/auth/Login";

export default function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <div>
            <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
            <OldSchoolMenuLink to="/about" label="About" />
            <OldSchoolMenuLink to="/dashboard" label="dashboard" />
            <hr />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <route path="/registreren">
                <Registreren />
              </route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "active" : ""}>
      {match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  const [buttons] = useState([
    { link: "openTab('b1');", title: "Agenda", icon: faCalendar },
    { link: "openTab('b1');", title: "Notities", icon: faStickyNote },
    { link: "openTab('b1');", title: "Spelers", icon: faUsers },
    { link: "openTab('b1');", title: "Aanwezig", icon: faUserCheck },
    { link: "openTab('b1');", title: "Tactiek", icon: faBezierCurve },
    { link: "openTab('b1');", title: "Oefeningen", icon: faRunning },
    { link: "openTab('b1');", title: "Wedstrijduitslag", icon: faClipboard },
    { link: "openTab('b1');", title: "Instellingen", icon: faCogs }
  ]);

  return (
    <div className="row">
      {/* We're making all the buttons and filling the values in by mapping through all buttons */}
      {buttons.map(buttons => (
        <div className="column" onclick={buttons.link}>
          <FontAwesomeIcon icon={buttons.icon} className="App-logo" />
          <br />
          {buttons.title}
        </div>
      ))}
    </div>
  );
}

function Home() {
  return (
    <div>
      <Login />
    </div>
  );
}

function Registreren() {
  return (
    <div>
      <Registration />
    </div>
  );
}

//   function openTab(tabName) {
//   var i, x;
//   x = document.getElementsByClassName("containerTab");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   document.getElementById(tabName).style.display = "block";
// }
