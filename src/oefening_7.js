import React from 'react';
import './oefening_1.css'
import Check from './components/Menu/Check'



function oefening_7() {

  return (
    <div>
      <div id="space">
        <img id="oefen_img" src="//www.yoursportplanner.com/uploads/273cfde32713c8972a64ef74f6f5f64bca692cd8.png" />
        <h2>Veldopstelling</h2>
        <p5>Veld uitzetten met 4 pionnen op 10 by 10 meter.</p5>
        <h5>Met de bal naar de overkant</h5><br></br>
        <h3>Spelverloop:</h3>
        <p6> Er worden 2 groepen gemaakt. De ene groep loopt horizontaal van
          links naar rechts en de andere groep van onder naar boven.
          Als de andere kant is bereikt moet op het fluitsignaal weer worden teruggegaan.</p6>
        <h6>Spelregels:</h6>
        <ol>
          <li>Je mag geen andere speler of de bal van de speler raken.</li>
          <li>Als je iemand raakt dan krijg jezelf en de speler die je raakt 1 strafpunt.</li>
          <li>Je mag pas overlopen op het fluitsignaal van de trainer.</li>
        </ol>
      </div>
      <Check />

    </div>

  );
}


export default oefening_7;
