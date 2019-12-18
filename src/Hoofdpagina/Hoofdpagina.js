import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hoofdpagina.css';

import SplitText from 'react-pose-text';
const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 100
    }
  };
  
function Hoofdpagina() {

    return (
    <div className= "HoofdpaginaImage">
        <div className="container" id="Hoofdpagina">
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            Wij maken jouw voetbaltraining makkelijker!
        </SplitText>
        <div className="HomeButtons">
            <br></br>
            <Link to="./login"> <button className="LoginTranier" type="submit">Login Tranier</button></Link>
            <br></br>
            <button className="LoginSpeler" type="submit">Login Speler</button>
            <br></br>
            <Link to="./Registreren"> <button className="RegistrerenBtn" type="submit">Toevoegen</button></Link>
        </div>


    </div>
        </div>
    );
}
export default Hoofdpagina;
