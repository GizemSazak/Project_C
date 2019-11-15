import React from 'react';
import './oefening_1.css'
import Check from './Menu/Check'



function oefening_4() {

  return (
    <div>
      <div id="space">
        <img id="oefen_img" src="//www.yoursportplanner.com/uploads/0022047447a0a1f98066f16d8d5a0b6445669b87.png" />
        <h2>Veldopstelling</h2>
        <p5>1 groot doel en 2 kleine piondoeltjes langs elke lijn en 1 bal.</p5>
        <h5>Aanvallers tegen verdedigers</h5><br></br>
        <h3>Spelverloop:</h3>
        <p6> 4 spelers paars spelen partij tegen 4 spelers wit.</p6>
        <h6>Spelregels:</h6>
        <ol>
          <li>Als er is gescoord moet de bal aan het andere team worden gegeven.</li>
          <li>Er mag niet van eigen helft worden gescoord.</li>
          <li>Als de bal over de lijn is moet worden ingegooid.</li>
          <li>De aanvallers moeten scoren op het grote doel en de verdedigers op de 2 kleine plondoeltjes.</li>
        </ol>
      </div>
      <Check />

    </div>

  );
}


export default oefening_4;
