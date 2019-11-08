import React, { useState } from 'react';
import './oefening_1.css'
import Check from './components/Menu/Check'



function oefening_1() {

  return (
    <div>
      
    <div id="space">
        <img id="oefen_img" src="//www.yoursportplanner.com/uploads/69b52cb3b2a2dec7e432d618a268cf2799034128.png"/>  
        <h2>Veldopstelling</h2>
        <p5>Veld afzetten met 4 pionnen op 20 bij meter.</p5>
        <h5>Bal afpakken</h5><br></br>
        <h3>Spelverloop:</h3>
        <p6> Elke 2 spelers krijgen een bal. </p6>
             <p6>De paarse speler moet proberen de bal af te schermen voor de blauwe</p6> <p6>speler. De blauwe speler moet de bal proberen de bal te pakken</p6>
              <p6> te krijgen zonder een overtreding te maken.</p6>
              <h6>Spelregels:</h6>
        <p7>1- Als een speler de bal afpakt dan mag deze speler de bal</p7>
        <p7>afschermen en moet de andere speler de bal afpakken.</p7> <p7>2- Op het fluit signaal van de trainer moet je van spelersgroepje wisselen.</p7> <p7>3- Je mag niet wisselen naar een andere speler waar je al een keer tegen hebt gespeeld.</p7> <p7>4- Gebruik bij het afschermen van de bal je lichaam goed.</p7>
      
            
    </div>
    <Check/>
    </div>
  );
}


export default oefening_1;
