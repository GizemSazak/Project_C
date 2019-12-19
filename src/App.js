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
import Agenda from './Agenda/Agenda'
import Agenda_Toevoegen from './Agenda/Agenda_Toevoegen'
import Agenda_Bewerken from './Agenda/Agenda_Bewerken'

// import Oefeningen from './Oefeningen'
// import oefening_1 from './oefening_1'
// import oefening_2 from './oefening_2'
// import oefening_3 from './oefening_3'
// import oefening_4 from './oefening_4'
// import oefening_5 from './oefening_5'
// import oefening_6 from './oefening_6'
// import oefening_7 from './oefening_7'
// import oefening_8 from './oefening_8'
// import oefening_9 from './oefening_9'
// import oefening_10 from './oefening_10'
// import oefening_11 from './oefening_11'
// import oefening_12 from './oefening_12'
// import Spelers from './SpelerOverzicht/Spelers'
import Home from './Home'
import Uitslagen from './Uitslagen';
import Notities from './Notities//Notities'
import Notities_toevoegen from './Notities//Notities_toevoegen'
import notities_beschrijven from './Notities//notities_beschrijven'
import registreren from "./inlog + auth/Registration";
import Loginpage from "./inlog + auth/Login";
import tacktics from "./tactieken/tactieken";
import Hoofdpagina from "./Hoofdpagina/Hoofdpagina";


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
      <Route exact path='/Agenda' component={Agenda} />
      <Route exact path='/Agenda_Toevoegen' component={Agenda_Toevoegen} />
      <Route exact path='/Agenda_Bewerken' component={Agenda_Bewerken} />


    </div>
  );
}

export default App;
