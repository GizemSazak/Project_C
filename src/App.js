import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Oefeningen from './oefeningen/Oefeningen'
import oefening_x from './oefeningen//oefening_x'
import Spelers from './SpelerOverzicht/Spelers'
import SpelerToevoegen from './SpelerToevoegen/Toevoegen'
import SpelerVerwijderen from './SpelerVerwijderen/Verwijderen'
import uitslagtoevoegen from './uitslagtoevoegen'
import verslag from './verslag'
import Home from './Home'
import Uitslagen from './Uitslagen';
import Notities from './Notities//Notities'
import Notities_toevoegen from './Notities//Notities_toevoegen'
import notities_beschrijven from './Notities//notities_beschrijven'
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
      <Route exact path='/SpelerToevoegen/Toevoegen' component={SpelerToevoegen} />
      <Route exact path='/SpelerVerwijderen/Verwijderen' component={SpelerVerwijderen} />
      <Route exact path='/Uitslagen' component={Uitslagen} />
      <Route exact path='/Notities' component={Notities} />
      <Route exact path='/Notities_toevoegen' component={Notities_toevoegen} />
      <Route exact path='/notities_beschrijven' component={notities_beschrijven} />
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
