import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Oefeningen from './oefeningen/Oefeningen'
import oefening_1 from './oefeningen//oefening_1'
import oefening_2 from './oefeningen//oefening_2'
import oefening_3 from './oefeningen//oefening_3'
import oefening_4 from './oefeningen//oefening_4'
import oefening_5 from './oefeningen//oefening_5'
import oefening_6 from './oefeningen//oefening_6'
import oefening_7 from './oefeningen//oefening_7'
import oefening_8 from './oefeningen//oefening_8'
import oefening_9 from './oefeningen//oefening_9'
import oefening_10 from './oefeningen//oefening_10'
import oefening_11 from './oefeningen//oefening_11'
import oefening_12 from './oefeningen//oefening_12'
import Spelers from './Spelers/Spelers'
import SpelerToevoegen from './Spelers/Toevoegen'
import SpelerVerwijderen from './Spelers/Verwijderen'
import Aanwezigheid from './Aanwezigheid/Aanwezigheid'
import uitslagtoevoegen from './uitslagtoevoegen'
import verslag from './verslag'
import Home from './Home'
import Uitslagen from './Uitslagen';
import Notities from './Notities//Notities'
import Notitie_Toevoegen from './Notities//Notitie_Toevoegen'
import Notitie_Wijzigen from './Notities//Notitie_Wijzigen'

function App() {

  return (
    <div >
      <Route exact path='/' component={Home} />
      <Route exact path='/Oefeningen' component={Oefeningen} />
      <Route exact path='/oefening_1' component={oefening_1} />
      <Route exact path='/oefening_2' component={oefening_2} />
      <Route exact path='/oefening_3' component={oefening_3} />
      <Route exact path='/oefening_4' component={oefening_4} />
      <Route exact path='/oefening_5' component={oefening_5} />
      <Route exact path='/oefening_6' component={oefening_6} />
      <Route exact path='/oefening_7' component={oefening_7} />
      <Route exact path='/oefening_8' component={oefening_8} />
      <Route exact path='/oefening_9' component={oefening_9} />
      <Route exact path='/oefening_10' component={oefening_10} />
      <Route exact path='/oefening_11' component={oefening_11} />
      <Route exact path='/oefening_12' component={oefening_12} />
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
    </div>
  );
}

export default App;
