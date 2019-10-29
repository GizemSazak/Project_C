import React, { Component } from 'react'
import Menu from './Menu'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Toggle extends Component {
    state = { on: false }

    toggle = () => { this.setState({ on: !this.state.on }) }

    render() {
        return (
            <div>
                {this.state.on && (<Menu onClick={this.toggle} />)}
                <button onClick={this.toggle} className="ToggleButton">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        )
    }
}
