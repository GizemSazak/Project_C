import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Oefeningen from './oefeningen/Oefeningen'
import oefening_x from './oefeningen//oefening_x'
import Spelers from './Spelers/Spelers'
import SpelerToevoegen from './Spelers/Toevoegen'
import SpelerVerwijderen from './Spelers/Verwijderen'
import Aanwezigheid from './Aanwezigheid/Aanwezigheid'
import uitslagtoevoegen from './Uitslagen/UToevoegen'
import verslag from './Uitslagen/UWijzigen'
import Home from './Home'
import Uitslagen from './Uitslagen/Uitslagen';
import Notities from './Notities//Notities'
import Notitie_Toevoegen from './Notities//Notitie_Toevoegen'
import Notitie_Wijzigen from './Notities//Notitie_Wijzigen'
import registreren from "./inlog + auth/Registration";
import Loginpage from "./inlog + auth/Login";
import tacktics from "./tactieken/tactieken";
import Hoofdpagina from "./Hoofdpagina/Hoofdpagina";
import Agenda from "./Agenda/Agenda"
import Agenda_Toevoegen from "./Agenda/Agenda_Toevoegen"
import Agenda_Bewerken from "./Agenda/Agenda_Bewerken"
import LoginSpeler from "./inlog + auth/LoginSpeler"
import teamcode from "./inlog + auth/teamcode"

// function cheacklogin(checklogin){
//   if(!localStorage.getItem('myData', 'My data') || localStorage === null){
//     window.location.href = '/';
//   }
//   else{
//   }
// }

function App() {

  return (
    <div >
      <Route exact path='/Home' component={Home} />
      <Route exact path='/Oefeningen' component={Oefeningen} />
      <Route exact path='/oefening_x' component={oefening_x} />
      <Route exact path='/Spelers' component={Spelers} />
      <Route exact path='/Spelers/Toevoegen' component={SpelerToevoegen} />
      <Route exact path='/Spelers/Verwijderen' component={SpelerVerwijderen} />
      <Route exact path='/Aanwezigheid' component={Aanwezigheid} />
      <Route exact path='/Uitslagen' component={Uitslagen} />
      <Route exact path='/Notities' component={Notities} />
      <Route exact path='/Notitie_Toevoegen' component={Notitie_Toevoegen} />
      <Route exact path='/Notitie_Wijzigen' component={Notitie_Wijzigen} />
      <Route exact path='/uitslagtoevoegen' component={uitslagtoevoegen} />
      <Route exact path='/verslag' component={verslag} />
      <Route exact path="/registreren" component={registreren} />
      <Route exact path="/login" component={Loginpage} />
      <Route exact path="/tactieken" component={tacktics} />
      <Route exact path="/" component={Hoofdpagina} />
      <Route exact path="/Agenda" component={Agenda} />
      <Route exact path="/Agenda/Agenda_Toevoegen" component={Agenda_Toevoegen} />
      <Route exact path="/Agenda/Agenda_Bewerken" component={Agenda_Bewerken} />
      <Route exact path="/LoginSpeler" component={LoginSpeler} />
      <Route exact path="/teamcode" component={teamcode} />


    </div>
  );
}

export default App;
