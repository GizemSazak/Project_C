import React, { useState } from 'react'
import './Toevoegen.css'
import Menu from '../Menu/Menu'
// import Add from '../Database/Database'

function Toevoegen() {
    const [forms] = useState([
        { label: "Voornaam", type: "text", name: "voornaam", className: "Inputfield", value: null },
        { label: "Achternaam", type: "text", name: "achternaam", className: "Inputfield", value: null },
        { label: "Email", type: "email", name: "email", className: "Inputfield", value: null },
        { label: "Spelernummer", type: "number", name: "Spelernummer", className: "Inputfield", value: null },
        { label: null, type: "submit", name: "Opslaan", className: "SubmitBtn", value: "Opslaan" }
    ]);

    return (
        <div className="Page">
            <header className="PageHeader">Speler Toevoegen</header>
            <body className="AddBody">

                {forms.map(forms => (
                    <form>
                        <label>{forms.label}</label><br />
                        <input type={forms.type} name={forms.name} className={forms.className} value={forms.value} /> <br />
                    </form>
                ))}

            </body>
            <Menu />
        </div >
    );
}

// function Query(props) {
//     return(
//     )
// }

export default Toevoegen;
