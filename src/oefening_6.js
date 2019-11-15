import React from 'react';
import './oefening_1.css'
import Check from './Menu/Check'



function oefening_6() {

  return (
    <div>
      <div id="space">
        <img id="oefen_img" src="//www.yoursportplanner.com/uploads/f7b44018acb9c0a54a1644d57944cccf5e2b0717.png" />
        <h2>Veldopstelling</h2>
        <p5>4 tot 6 pionnen waarlangs gedribbeld moet worden </p5><br></br><p5>2 x een pion in het doel.</p5>
        <h5>Dribbel en schiet pionnen omver</h5><br></br>
        <h3>Spelverloop:</h3>
        <p6> Speler dribbelt langs/door de pionnen en probeert in één beweging middels een hard schot (dus bovenkant voet) een van de
          pionnen omver te schieten.</p6>
        <h6>Spelregels:</h6>
        <ol>
          <li>De speler moet zelf zijn bal uit het net halen.</li>
          <li>De speler moet zelf de pion rechtop zetten.</li>
          <li>De speler moet zelf de bal ophalen die hij heeft misgeschoten.</li>
          <li>Een andere speler mag pas beginnen als de eerste speler zijn bal heeft weggepakt.</li>
        </ol>
      </div>
      <Check />

    </div>

  );
}


export default oefening_6;
