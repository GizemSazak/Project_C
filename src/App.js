import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Oefeningen from "./Oefeningen";
import oefening_1 from "./oefening_1";
import oefening_2 from "./oefening_2";
import oefening_3 from "./oefening_3";
import oefening_4 from "./oefening_4";
import oefening_5 from "./oefening_5";
import oefening_6 from "./oefening_6";
import oefening_7 from "./oefening_7";
import oefening_8 from "./oefening_8";
import oefening_9 from "./oefening_9";
import oefening_10 from "./oefening_10";
import oefening_11 from "./oefening_11";
import oefening_12 from "./oefening_12";
import Spelers from "./SpelerOverzicht/Spelers";
import SpelerToevoegen from "./SpelerToevoegen/Toevoegen";
import SpelerVerwijderen from "./SpelerVerwijderen/Verwijderen";
import uitslagtoevoegen from "./uitslagtoevoegen";
import verslag from "./verslag";
import Home from "./Home";
import Uitslagen from "./Uitslagen";
import registreren from "./inlog + auth/Registration";
import Loginpage from "./inlog + auth/Login";
// import tactics from "./tactieken/tactieken";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/Oefeningen" component={Oefeningen} />
      <Route exact path="/oefening_1" component={oefening_1} />
      <Route exact path="/oefening_2" component={oefening_2} />
      <Route exact path="/oefening_3" component={oefening_3} />
      <Route exact path="/oefening_4" component={oefening_4} />
      <Route exact path="/oefening_5" component={oefening_5} />
      <Route exact path="/oefening_6" component={oefening_6} />
      <Route exact path="/oefening_7" component={oefening_7} />
      <Route exact path="/oefening_8" component={oefening_8} />
      <Route exact path="/oefening_9" component={oefening_9} />
      <Route exact path="/oefening_10" component={oefening_10} />
      <Route exact path="/oefening_11" component={oefening_11} />
      <Route exact path="/oefening_12" component={oefening_12} />
      <Route exact path="/SpelerOverzicht/Spelers" component={Spelers} />
      <Route exact
        path="/SpelerToevoegen/Toevoegen"
        component={SpelerToevoegen}
      />
      <Route
        exact
        path="/SpelerVerwijderen/Verwijderen"
        component={SpelerVerwijderen}
      />
      <Route exact path="/Uitslagen" component={Uitslagen} />
      <Route exact path="/uitslagtoevoegen" component={uitslagtoevoegen} />
      <Route exact path="/verslag" component={verslag} />
      <Route exact path="/registreren" component={registreren} />
      <Route exact path="/login" component={Loginpage} />
    </div>
  );
}
export default App;
