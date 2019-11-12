import React from 'react';
import './oefening_1.css'
import Check from './components/Menu/Check'



function oefening_9() {

  return (
    <div>
      <div id="space">
        <img id="oefen_img" src="//www.yoursportplanner.com/uploads/6380201af82f4d9c051206d382310dada5895317.png" />
        <h2>Veldopstelling</h2>
        <p5>4 x 4 pionnen in een rechthoek opstelling.</p5>
        <h5>Sneldribellen met de bal</h5><br></br>
        <h3>Spelverloop:</h3>
        <p6> Bij het 1 x fluitsignaal wordt met de bal door alle spelers naar vierkant
          1 gelopen bij 2 x fluitsignaal naar vierkant 2, etc.</p6>
        <h6>Spelregels:</h6>
        <ol>
          <li>De speler die het eerst met de bal in het vierkant is krijgt 1 punt.</li>
          <li>De speler die het laatste in het vierkant is moet een rondje om het totale speelveld sprinten.</li>
        </ol>
      </div>
      <Check />

    </div>

  );
}


export default oefening_9;
