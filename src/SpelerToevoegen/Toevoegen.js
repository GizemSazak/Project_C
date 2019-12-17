import React, { Component } from 'react'
import './Toevoegen.css'
import Menu from '../Menu/Menu'
import { Container, Row, Col, Form, FormGroup, FormControl } from "react-bootstrap"

class Toevoegen extends Component {
    constructor(props) {
        super(props);

        this.state = { spelernummer: '' }
        this.state = { voornaam: '' }
        this.state = { achternaam: '' }
        this.state = { email: '' }

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event) {
        this.setState({ [event.target.placeholder]: event.target.value })
        console.log('Your voornaam is: ' + this.state.voornaam)
    }

    handleSubmit() {
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

    render() {
        return (
            <div className="Page">
                <Container>
                    <Row>
                        {/* <Col>
                            <Menu />
                        </Col> */}
                        <Col>
                            <header className="PageHeader">Speler Toevoegen</header>
                        </Col>
                        <Col>
                            <Form className="AddBody">
                                <FormGroup>
                                    <label>Voornaam</label>
                                    <FormControl type="text" placeholder="voornaam" className="Inputfield" onChange={this.updateInput} />
                                </FormGroup>
                                <FormGroup>
                                    <label>Achternaam</label>
                                    <FormControl type="text" placeholder="achternaam" className="Inputfield" onChange={this.updateInput} />
                                </FormGroup>
                                <FormGroup>
                                    <label>Email</label>
                                    <FormControl type="email" placeholder="email" className="Inputfield" onChange={this.updateInput} />
                                </FormGroup>
                                <FormGroup>
                                    <label>Spelernummer</label>
                                    <FormControl type="number" placeholder="spelernummer" className="Inputfield" onChange={this.updateInput} />
                                </FormGroup>
                                <input type="submit" value="Opslaan" className="SubmitBtn" onClick={this.handleSubmit} />
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div >
        )
    }
}

export default Toevoegen;

{/* <FormGroup>
                            <FormControl type="submit" className="SubmitBtn" onChange={this.handleSubmit} />
                        </FormGroup> */}
{/* <Button className="SubmitBtn" onChange={this.handleSubmit}>Opslaan</Button> */ }

{/* <form>
                        <label>Voornaam</label><br />
                        <input type="text" name="voornaam" className="Inputfield" onChange={this.updateInput} /><br />

                        <label>Achternaam</label><br />
                        <input type="text" name="achternaam" className="Inputfield" onChange={this.updateInput} /><br />

                        <label>Email</label><br />
                        <input type="email" name="email" className="Inputfield" onChange={this.updateInput} /><br />

                        <label>Spelernummer</label><br />
                        <input type="number" name="spelernummer" className="Inputfield" onChange={this.updateInput} /><br /><br />

                        <input type="submit" value="Opslaan" className="SubmitBtn" onClick={this.handleSubmit} />
                    </form> */}

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
