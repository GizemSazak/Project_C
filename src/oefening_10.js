import React from 'react';
import './oefening_1.css'
import Check from './Menu/Check'



function oefening_10() {

  return (
    <div>
      <div id="space">
        <img id="oefen_img" src="//www.yoursportplanner.com/uploads/64a1a81413613274d3918854907b92deb9487632.png" />
        <h2>Veldopstelling</h2>
        <p5> 2x 4x 2 pionnen naast elkaar opstellen zodat twee</p5> <br></br> <p5> straten ontstaan van pionnen.</p5>
        <h5>Passen en sprinten</h5><br></br>
        <h3>Spelverloop:</h3>
        <p6> De spelers moeten proberen exact door de pionnenstraat te passen
          en er daarna doorheen te sprinten achter de bal aan.
          Een ander speler (wit) ontvangt de bal en dribbelt naar de andere straat.
          Daar doet deze speler exact hetzelfde richting speler 3.
          Speler 3 begint weer op dezelde plek als sport 1.</p6>
        <h6>Spelregels:</h6>
        <ol>
          <li>De bal moet door de pionnenstraat heen.</li>
          <li>Als je een pion raakt moet je sprinten om de pion recht op te zetten en het opnieuw proberen.</li>
          <li>De bal moet langs alle pionnen gaan alvorens de ontvangende speler de bal mag aannemen.</li>
        </ol>
      </div>
      <Check />

    </div>

  );
}


export default oefening_10;
