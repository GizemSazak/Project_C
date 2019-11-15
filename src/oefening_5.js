import React, { useState } from 'react';
import './oefening_1.css'
import Check from './Menu/Check'



function oefening_5() {

  return (
    <div>
      <div id="space">
        <img id="oefen_img" src="//www.yoursportplanner.com/uploads/1fcde86c6ebd4d7fb9a477fbb42ccf4b653e1f4a.png" />
        <h2>Veldopstelling</h2>
        <p5>Vertrekpion op 30 meter afstand van de goal</p5><br></br><p5> Eén speler om de bal aan te geven en de rest  <br></br></p5> <p5> van de spelers achter vertrekpion.</p5>
        <h5>Direct schieten op de goal</h5><br></br>
        <h3>Spelverloop:</h3>
        <p6> Vanaf de eerste linkerpion wordt de bal breed gepasst op
          de opkomende speler. Deze speler schiet de bal in één keer op de goal.</p6>
        <h6>Spelregels:</h6>
        <ol>
          <li>Zorg dat je je lichaam voorover duwt wanneer je schiet anders gaat de bal vaak te hoog.</li>
          <li>Zorg dat je een hoek kiest als de keeper in het midden staat.</li>
          <li>Zorg dat je laag schiet als de keeper iets uit zijn goal staat.</li>
          <li>Als de keeper op de lijn staat te keepen dan kun je ook hoog inschieten.</li>
        </ol>
      </div>
      <Check />

    </div>

  );
}


export default oefening_5;
