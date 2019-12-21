import React, { Component } from 'react'
import './Toevoegen.css'
import Menu from '../Menu/Menu'

class Toevoegen extends Component {
    constructor(props) {
        super(props);

        this.state = { spelernummer: '' }
        this.state = { voornaam: '' }
        this.state = { achternaam: '' }
        this.state = { email: '' }
        this.state = { visible: false }

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickShowAlert = this.handleClickShowAlert(this);

    }

    updateInput(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit() {
        console.log('Your spelernummer is: ' + this.state.spelernummer)
        console.log('Your voornaam is: ' + this.state.voornaam)
        console.log('Your achternaam is: ' + this.state.achternaam)
        console.log('Your email is: ' + this.state.email)

        const values = [this.state.spelernummer, this.state.voornaam, this.state.achternaam, this.state.email];

        //Send state to the server code
        const request = new Request('http://localhost:3001/api/speler', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ 'spelernummer': this.state.spelernummer, 'voornaam': this.state.voornaam, 'achternaam': this.state.achternaam, 'email': this.state.email })
        });
        fetch(request)
            .then(response => {
                response.json().then(data => { });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleClickShowAlert() {
        this.setState({
            showingAlert: true
        });

        setTimeout(() => {
            this.setState({
                showingAlert: false
            });
        }, 2000);
    }

    render() {
        if(!localStorage.getItem('Data') || localStorage === null){
            window.location.href = '/';
          }
        else{ 
        return (
            <div className="Page">

                <header className="PageHeader">Speler Toevoegen</header>

                <body className="AddBody">

                    <form>
                        <label>Voornaam</label><br />
                        <input type="text" name="voornaam" className="Inputfield" onChange={this.updateInput} /><br />

                        <label>Achternaam</label><br />
                        <input type="text" name="achternaam" className="Inputfield" onChange={this.updateInput} /><br />
                        <label>Email</label><br />
                        <input type="email" name="email" className="Inputfield" onChange={this.updateInput} /><br />

                        <label>Spelernummer</label><br />
                        <input type="number" name="spelernummer" className="Inputfield" onChange={this.updateInput} /><br /><br />

                        <input type="submit" value="Opslaan" className="SubmitBtn" onClick={this.handleSubmit} />
                    </form>
                </body>
                <Menu />
            </div >
        )
    }
}
}

export default Toevoegen;

    // formulier() {
    //     const [forms] = useState([
    //         { label: "Voornaam", type: "text", name: "voornaam", className: "Inputfield" },
    //         { label: "Achternaam", type: "text", name: "achternaam", className: "Inputfield" },
    //         { label: "Email", type: "email", name: "email", className: "Inputfield" },
    //         { label: "Spelernummer", type: "number", name: "Spelernummer", className: "Inputfield" }
    //     ]);
    //     return (
    //         forms.map(forms => (
    //             <form>
    //                 <label>{forms.label}</label><br />
    //                 <input type={forms.type} name={forms.name} className={forms.className} onChange={this.updateInput} /> <br />
    //             </form>
    //         ))
    //     )
    // }