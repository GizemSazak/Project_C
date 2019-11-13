import React from 'react';
import './oefening_1.css'
import '../components/Menu/Menu.css';

import Check from '../components/Menu/Check'

function oefening_1() {
  return (
    <div >

      <div id="space">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <img id="oefen_img" src="//www.yoursportplanner.com/uploads/69b52cb3b2a2dec7e432d618a268cf2799034128.png" />
         <h2 >Veldopstelling</h2>
          <p5>Veld afzetten met 4 pionnen op 20 bij meter.</p5>
          <h5>Bal afpakken</h5>
          <h3>Spelverloop:</h3>
          <br></br>
          <br></br>
          <p6>
            Elke 2 spelers krijgen een bal. De paarse speler moet proberen de bal af te schermen voor de blauwe speler.
             De blauwe speler moet de bal proberen de bal te pakken
             te krijgen zonder een overtreding te maken.</p6>
          <h6>Spelregels:</h6>
          <ol>
            <li>Als een speler de bal afpakt dan mag deze speler de bal afschermen en moet de andere speler de bal afpakken.</li>
            <li>Op het fluit signaal van de trainer moet je van spelersgroepje wisselen.</li>
            <li>Je mag niet wisselen naar een andere speler waar je al een keer tegen hebt gespeeld.</li>
            <li>Gebruik bij het afschermen van de bal je lichaam goed.</li>
          </ol>
        </div>
      <Check />
    </div>
  );

}


export default oefening_1;
