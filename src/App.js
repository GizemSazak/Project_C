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

    </div>
  );
}

export default App;
