import React from 'react'
import './Toevoegen.css'
import Menu from '../Menu/Menu'

function Toevoegen() {

    return (
        <div className="Page">
            <header className="PageHeader">Speler Toevoegen</header>
            <body className="AddBody">
                <form>
                    <label>Voornaam</label><br />
                    <input type="text" name="voornaam" className="Inputfield" /><br /><br />

                    <label>Achternaam</label><br />
                    <input type="text" name="achternaam" className="Inputfield" /><br /><br />

                    <label>Email</label><br />
                    <input type="email" name="email" className="Inputfield" /><br /><br />

                    <label>Spelernummer</label><br />
                    <input type="number" name="Spelernummer" className="Inputfield" /><br /><br /><br />

                    <input type="submit" value="Submit" className="SubmitBtn" />
                </form>
            </body>
            <Menu />
        </div >
    );
}
export default Toevoegen;