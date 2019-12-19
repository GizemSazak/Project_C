import React from 'react';
import './oefening_1.css'
import Menu from '../Menu/Menu'



function oefening_2() {

  return (
    <div>
      <div id="space">
        <img id="oefen_img" src="//www.yoursportplanner.com/uploads/a72e4fd30a8bde3b070b77a20d4ba6adc4e47470.png" alt="Oefening 2" />
        <h2>Veldopstelling</h2>
        <p5>Keeper met verdedigers bij de goal(1ste en 2de paal).</p5> <br></br>
        <p5> Eventueel overige verdedigens in vrije rol.</p5><br></br>
        <p5> Aanvallers gaan met name bij de 2de paal staan.</p5>
        <h5>Via corner proberen te scoren of verdedigen</h5><br></br>
        <h3>Spelverloop:</h3>
        <p6> De speler die de corner neemt zet de bal niet voor maar passt met een harde pass over de grond naar de
             medespeler die kort bij hem staat. De medespeler schiet de bal in 1 keer op de goel.
             De verdedigers proberen de bal te blokkeren.</p6>
        <h6>Spelregels:</h6>
        <ol>
          <li>Als de bal uit gaat wordt er opnieuw een corner genomen.</li>
          <li>Als de keeper de bal vangt moet er een nieuwe corner worden genomen.</li>
          <li>De verdedigens moeten de bal blokkeren.</li>
          <li>Als de keeper de bal vangt moeten de aanvallers gelijk weglopen bij de goel naar het middenveld.</li>
        </ol>
      </div>
      <Menu />

    </div>

  );
}


export default oefening_2;
