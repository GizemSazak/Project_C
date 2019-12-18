import React, { Component } from "react";
import Draggable from "react-draggable";
import Menu from '../Menu/Menu';
import './tactieken.css';
import { faCross, faClone } from "@fortawesome/free-solid-svg-icons";
import { copyFile } from "fs";


class tactieken extends Component {

    objects=()=>{
        return (<tbody>
        <Draggable   ><div className="cross"></div></Draggable>
        <Draggable ><div className="circle"></div></Draggable>
        <Draggable ><div className="arrowleft"> </div></Draggable>
        <Draggable ><div className="arrowup"></div></Draggable>
        <Draggable  ><div className="arrowright"></div></Draggable>
        <Draggable  ><div className="arrowdown"></div></Draggable>
        </tbody>)
        
    }

    render() {
        return (
            <div className="app">
                <div className="body" targetKey="dropzone">
                    <div className="boardtools">
                    <this.objects />
                    <this.objects />
                    <this.objects />
                    <this.objects />
                    <this.objects />
                    <this.objects />
                    <this.objects />
                    <this.objects />
                    <this.objects />
                    <this.objects />
                    
                    </div>

                </div>
                <Menu />
            </div>


        );
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