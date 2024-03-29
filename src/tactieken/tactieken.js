import React, { Component } from "react";
import Draggable from "react-draggable";
import Menu from '../Menu/Menu';
import './tactieken.css';
import { Container, Row, Col } from "react-bootstrap"

class tactieken extends Component {

    objects = () => {
        const n = 15;
        return (
            [...Array(n)].map((e, i) =>
                <tbody>
                    <Draggable><div className="cross"></div></Draggable>
                    <Draggable><div className="circle"></div></Draggable>
                    <Draggable><div className="arrowleft"> </div></Draggable>
                    <Draggable><div className="arrowup"></div></Draggable>
                    <Draggable><div className="arrowright"></div></Draggable>
                    <Draggable><div className="arrowdown"></div></Draggable>
                </tbody>
            ));
    }


    render() {
        if (!localStorage.getItem('Data') || localStorage === null) {
            window.location.href = '/';
        }
        else {
            return (
                <Container className="Background text-center ">
                    <Row>
                        {/* Menu */}
                        <Col xs={3} sm={1} lg={1} className="p-0"><Menu /></Col>

                        <Col xs={9} sm={11} lg={11} className="d-flex flex-column justify-content-end text-white">
                            {/* Page Header */}
                            <Row>
                            </Row>
                            {/* Page Body */}
                            <Row >
                                <Col style={{ width: "100vw" }}>
                                    {/* I CHANGED MIN-HEIGHT IN CLASSNAME "BODY" BECAUSE IT DIDNT FIT */}
                                    <div className="body" targetKey="dropzone">
                                        <div className="boardtools">
                                            <this.objects />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container >

                // <div className="app">
                //     <div className="body" targetKey="dropzone">
                //         <div className="boardtools">
                //             <this.objects />
                //         </div>

                //     </div>
                //     <Menu />
                // </div> 
            );
        }
    }
}


export default tactieken;

{/* <div className="container">
    <Draggable disabled={disabled} bounds="parent">
        <div
            style={{ width: 200 }}
            className={!disabled ? "draggable" : null}
        >
            <h4 style={{ height: 20 }}>{!disabled && "Drag Me"}</h4>
            <textarea disabled={!disabled} className="uk-textarea" />
            <input disabled={!disabled} className="uk-input" />
            <input
                className="uk-checkbox	"
                type="checkbox"
                disabled={!disabled}
            />
            <br />
            <button
                className="uk-button uk-button-primary"
                onClick={this.toggleDraggable}
            >
                {disabled ? "Enable" : "Disable"} Drag
</button>
        </div>
    </Draggable> */}







//     <main className="flexbox">

//     <Field id="field-1" className="field" >
//         <Symbol id="symbol-1" className="symbol" Draggable="true">
//             <p>arrow up</p>
//         </Symbol>
//     </Field>


//     <Field id="field-2" className="field" >
//         <Symbol id="symbol-2" className="symbol" Draggable="true">
//             <p>arrow down</p>
//         </Symbol>
//     </Field>

// </main>





  // var tasks = {
        //     wip: [],
        //     complete: []
        // }

        // this.state.tasks.forEach((t) => {
        //     tasks[t.category].push(
        //         <div
        //             key={t.name}
        //             onDragStart={(e) => this.onDragStart(e, t.name)}
        //             draggable
        //             className="draggable"
        //             style={{ backgroundColor: t.bgcolor }}
        //         >
        //             {t.name}
        //         </div>
        //     );
        // });


          // <div className="app">
            // <div className="container-drag">
            //     <h2 className="header">DRAG and DROP DEMO</h2>
            //     <div className="wip" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => { this.onDrop(e, "wip") }}>
            //         <span className="task-header">wip</span>
            //         {tasks.wip}
            //     </div>

            //     <div clasname="complete" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => { this.onDrop(e, "complete") }}>
            //         <span className="task-header">COMPLETE</span>
            //         {tasks.complete}

            //     </div>



                // state = {
    //     tasks: [
    //         { name: "angular", category: "wip", bgcolor: "yellow" },
    //         { name: "react", category: "wip", bgcolor: "pink" },
    //         { name: "vue", category: "complete", bgcolor: "blue" }]
    // }


    // onDragStart = (e, id) => {
    //     console.log('dragstart', id);
    //     e.dataTransfer.setData('id', id)

    // }

    // onDragOver = e => {
    //     e.preventDefault();
    // }

    // onDrop = (e, cat) => {
    //     let id = e.dataTransfer.getData('id')

    //     let tasks = this.state.tasks.filter((task) => {
    //         if (task.name === id) {
    //             task.category = cat
    //         }
    //         return task
    //     })

    //     this.setState({
    //         ...this.state,
    //         tasks
    //     })

    // }