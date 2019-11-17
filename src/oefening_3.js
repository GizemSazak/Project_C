import React from 'react';
import './oefening_1.css'
import Check from './Menu/Check'



function oefening_3() {

  return (
    <div>
      <div id="space">
        <img id="oefen_img" src="//www.yoursportplanner.com/uploads/be2624b9df1c5904112619a2b43e07320fa4e037.png" alt="Oefening 2" />
        <h2>Veldopstelling</h2>
        <p5>2 grote doelen.</p5>
        <h5>4 tegen 4 en maximaal 2x raken</h5><br></br>
        <h3>Spelverloop:</h3>
        <p6> Dit kan in 4 tegen 4 of 3 tegen 3 of zelfs 2 tegen 2 opstelling.
             De spelregels mogen de bal maar 2 keer raken.</p6>
        <h6>Spelregels:</h6>
        <ol>
          <li>De bal mag worden aangenomen maar moet dan 1 keer worden gespeeld.</li>
          <li>Als er is gescoord wordt of over de lijn wordt geschoten moet de bal aan het andere team worden gegeven.</li>
          <li>Er mag niet van eigen helft worden gescoord.</li>
          <li>Er moet altijd 1 speler worden gepasseerd alvorens mag worden overgespeeld.
          Als dit niet wordt gedaan is het een vrije bal voor de tegenpartij. </li>
        </ol>
      </div>
      <Check />

    </div>

  );
}


export default oefening_3;
