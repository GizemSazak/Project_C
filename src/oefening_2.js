import React, { useState } from 'react';
import './oefening_1.css'
import Check from './components/Menu/Check'



function oefening_2() {

  return (
    <div>
      <div id="space">
        <img id="oefen_img" src="//www.yoursportplanner.com/uploads/a72e4fd30a8bde3b070b77a20d4ba6adc4e47470.png"/>  
        <h2>Veldopstelling</h2>
        <p5>Keeper met verdedigers bij de goal(1ste en 2de paal).</p5> <br></br>
        <p5> Eventueel overige verdedigens in vrije rol.</p5><br></br>
        <p5> Aanvallers gaan met name bij de 2de paal staan.</p5>
        <h5>Via corner proberen te scoren of verdedigen</h5><br></br>
        <h3>Spelverloop:</h3>
        <p6> De speler die de corner neemt zet de bal niet voor maar </p6>
             <p6>passt met een harde pass over de grond naar de </p6> <p6>medespeler die kort bij hem staat.</p6> <p6>De medespeler schiet de bal in 1 keer op de goel.</p6>
             <p6> De verdedigers proberen de bal te blokkeren.</p6>
              <h6>Spelregels:</h6>
        <p7>1- Als de bal uit gaat wordt er opnieuw een corner genomen.</p7> <p7>2- Als de keeper de bal vangt moet er een nieuwe corner worden genomen.</p7> <p7>3- De verdedigens moeten de bal blokkeren.</p7> <p7>4- Als de keeper de bal vangt moeten de aanvallers gelijk weglopen bij de goel</p7>
         <p7>naar het middenveld.</p7>
         </div>
      <Check/>
            
    </div>
    
  );
}


export default oefening_2;
