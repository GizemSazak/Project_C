import React, { Component } from "react";
import Draggable from "react-draggable";
import Menu from '../Menu/Menu';
import './tactieken_toevoegen.css';
import ScreenCapture from "./screenshot"
import base64Img from "base64-img"
import Axios from "axios";

class tactieken_toevoegen extends Component {
    constructor(props) {
        super(props);

        this.state = { screenCapture: '' }
        this.state = { tactieknaam: '' }

        this.updateInput = this.updateInput.bind(this);
        this.handleScreenCapture = this.handleScreenCapture.bind(this);

    }

    updateInput(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleScreenCapture = () => {
        const { tactieknaam, screenCapture } = this.state

        var data = base64Img.base64Sync(ScreenCapture);


        Axios
            .post('http://localhost:3001/api/tactieken_toevoegen', this.state)
        // request = new Request('http://localhost:3001/api/tactieken_toevoegen', {
        //     method: 'POST',
        //     headers: new Headers({ 'Content-Type': 'application/json' }),
        //     body: ({ 'tactieknaam': this.state.naam, 'tacktiekplaatje': this.state.screenCapture })
        // });
        // fetch(request)
        //     .then(response => {
        //         response().then(data => { });
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }


    objects = () => {

        const n = 15;
        return (
            [...Array(n)].map((e, i) =>
                <tbody>
                    <Draggable  ><div className="cross"></div></Draggable>
                    <Draggable ><div className="circle"></div></Draggable>
                    <Draggable ><div className="arrowleft"> </div></Draggable>
                    <Draggable ><div className="arrowup"></div></Draggable>
                    <Draggable  ><div className="arrowright"></div></Draggable>
                    <Draggable  ><div className="arrowdown"></div></Draggable>
                </tbody>
            ));
    }


    render() {
        const { screenCapture } = this.state
        return (
            <div className="app">
                <div className="body" targetKey="dropzone">
                    <div className="boardtools">
                        <this.objects />
                    </div>
                    <form>
                        <h1 className="Inputfield2">titel</h1>
                        <input type="text" name="tactieknaam" className="Inputfield" onChange={this.updateInput} />
                        <ScreenCapture onEndCapture={this.handleScreenCapture} >
                            {({ onStartCapture }) => (
                                <React.Fragment>
                                    <button className="capturebutton" onClick={onStartCapture}>Capture</button>
                                    <br />
                                    <br />
                                    <button className="savebutton" onClick={this.handleScreenCapture}>save</button>
                                    <imgage className="screenschot" src={screenCapture} />
                                </React.Fragment>
                            )}
                        </ScreenCapture>
                    </form>

                </div>
                <Menu />


            </div>

        );
    }
}

export default tactieken_toevoegen;