import React, { useState } from 'react';
import './oefening_1.css'
import Check from './components/Menu/Check'



function oefening_8() {

  return (
    <div>
        <img id="oefen_img" src="//www.yoursportplanner.com/uploads/858e71a398184f0549cd36a7195ecebd7c037905.png"/>  
        <h2>Veldopstelling</h2>
        <p5>4 x 4 pionnen in een rechthoek opstelling.</p5>
        <h5>Kappen met de bal</h5><br></br>
        <h3>Spelverloop:</h3>
        <p6> Elke speler sprint vanuit het vierkant van pionnen naar het vierkant </p6> <p6>van pionnen aan de overkant. Daar wordt de </p6> <p6>bal met een kapbeweging (binnen- of buitenkant voet) in de tegenovergestelde richting gestuurd </p6> <br></br>
        <p6> Nu wordt weer naar de andere kant gesprint om ook</p6>
         <p6> in dat vierkant met een kapbeweging de bal weer de andere kant op te sturen.</p6>
              <h6>Spelregels:</h6>
        <p7>1- De bal mag niet buiten het vierkant van pionnen komen.</p7> <p7>2- Er moet 2 x heen en terug worden gesprint alvorens de volgende speler mag.</p7>  
      <Check/>
            
    </div>
    
  );
}


export default oefening_8;
