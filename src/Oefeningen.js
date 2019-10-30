import React, { useState } from 'react';
import './Oefeningen.css'
import Check from './components/Menu/Check'
import { faCalendar, faStickyNote, faUsers, faUserCheck, faBezierCurve, faRunning, faClipboard, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Oefeningen() {

  

  return (
    <div className='App'>
      <h1 className='titleOefeningen'>Oefeningen</h1>
      <Check/>
            <div class="roww">
                <div class="columnn">
                <img id="oefimg" src="//www.yoursportplanner.com/uploads/69b52cb3b2a2dec7e432d618a268cf2799034128.png"/>
                    <p>Aanvallen en verdedigen</p><h4>Bal afpakken</h4>
                </div>
                <div class="columnn">
                <img id="oefimg" src="//www.yoursportplanner.com/uploads/a72e4fd30a8bde3b070b77a20d4ba6adc4e47470.png"/>
                    <p>Aanvallen en verdedigen</p><h4>Via corner proberen te scoren of verdedigen</h4>
                </div>
                <div class="columnn">
                <img id="oefimg" src="//www.yoursportplanner.com/uploads/be2624b9df1c5904112619a2b43e07320fa4e037.png"/>
                    <p>Aanvallen en verdedigen</p><h4>4 tegen 4 en maximaal 2x raken</h4>
                </div>
                <div class="columnn">
                <img id="oefimg" src="//www.yoursportplanner.com/uploads/0022047447a0a1f98066f16d8d5a0b6445669b87.png"/>
                    <p>Aanvallen en verdedigen</p><h4>Aanvallers tegen verdedigers</h4>
                </div>
                <div class="columnn">
                <img id="oefimg" src="//www.yoursportplanner.com/uploads/1fcde86c6ebd4d7fb9a477fbb42ccf4b653e1f4a.png"/>
                    <p>Aanvallen</p><h4>Direct schieten op de goal</h4>
                </div>
                <div class="columnn">
                <img id="oefimg" src="//www.yoursportplanner.com/uploads/f7b44018acb9c0a54a1644d57944cccf5e2b0717.png"/>
                    <p>Dribbelen</p><h4>Dribbel en schiet pionnen omver</h4>
                </div>
                <div class="columnn">
                <img id="oefimg" src="//www.yoursportplanner.com/uploads/273cfde32713c8972a64ef74f6f5f64bca692cd8.png"/>
                    <p>Dribbelen</p><h4>Met de bal naar de overkant </h4>
                </div>
                <div class="columnn">
                <img id="oefimg" src="//www.yoursportplanner.com/uploads/858e71a398184f0549cd36a7195ecebd7c037905.png"/>
                    <p>Dribbelen</p><h4>Kappen met de bal</h4>
                </div>
                <div class="columnn">
                <img id="oefimg" src="//www.yoursportplanner.com/uploads/6380201af82f4d9c051206d382310dada5895317.png"/>
                    <p>Dribbelen</p><h4>Sneldribellen met de bal</h4>
                </div>
                <div class="columnn">
                <img id="oefimg" src="//www.yoursportplanner.com/uploads/64a1a81413613274d3918854907b92deb9487632.png"/>
                    <p>Passing</p><h4>Passen en sprinten</h4>
                </div>
                <div class="columnn">
                <img id="oefimg" src="//www.yoursportplanner.com/uploads/ccd0e4702c45b484e4d8ebf77e67f990a0eb0021.png"/>
                    <p>Passing en verdedigen</p><h4>Dieptepass met verdedigers</h4>
                </div>
                <div class="columnn">
                <img id="oefimg" src="//www.yoursportplanner.com/uploads/9d14ac433996dfe6f31bf3790da1f0c09b1a9605.png"/>
                    <p>Koppen</p><h4>Terug koppen</h4>
                </div>                
            </div>
    </div>
    
  );
}


export default Oefeningen;
