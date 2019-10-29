import React, { Component } from 'react'
import Menu from './Menu'

export default class Toggle extends Component {
    // We're making a variable in the state called on
    // the value starts with false
    state = { on: false }

    // when using this function the value of on switches
    toggle = () => {
        this.setState({ on: !this.state.on })
    }

    render() {
        return (
            <div>
                {/* if on == True the Menu is shown */}
                {this.state.on && (<Menu onClick={this.toggle} />)}
                {/* When you click on the Menu the toggle function is called */}
                <button onClick={this.toggle} className="ToggleButton">
                    Menu
                </button>
            </div >
        )
    }
}
