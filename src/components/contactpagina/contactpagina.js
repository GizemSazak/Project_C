import React from 'react'
import './contactpagina.css'

function Contact() {
    return (
      <div className='Contact_wrapper'>
        <div className='contact'>
        <h2 className='contact_gegevens'>Contact gegevens</h2>
          <div>
            <section className='team'>Mijn team</section>
              <div>
                <section>E-mail: 0953404@hr.nl</section>
                  <div>
                    <section>Mobiel: 0679534169</section>
                      <div>
                        <section>Adres: Wijnhaven 107</section>
                       </div>
                   </div>
               </div>
           </div>
        </div>
      </div>
  
      
    );
  }

  export default Contact