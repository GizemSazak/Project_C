import React, { useState, useEffect, Component } from 'react';
import './oefening_1.css'
import Menu from '../Menu/Menu'

class oefening_x extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titel: this.props.location.titel,
      veldopstelling: this.props.location.veldopstelling,
      spelverloop: this.props.location.spelverloop,
      spelregels: this.props.location.spelregels
    }
  }
  render() {
    if (!localStorage.getItem('Data') || localStorage === null) {
      window.location.href = '/';
    }
    else {
      return (
        <div >

          <div id="space">
            {/* <div div class="rowww"> */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <img id="oefen_img" src="//www.yoursportplanner.com/uploads/69b52cb3b2a2dec7e432d618a268cf2799034128.png" />
            <h2 >Veldopstelling</h2>
            <p5>{this.state.veldopstelling}</p5>
            <h5>{this.state.titel}</h5>
            <h3>Spelverloop:</h3>
            <br></br>
            <br></br>
            <p6>
              {this.state.spelverloop}</p6>
            <h6>Spelregels:</h6>
            <ol>
              <li>{this.state.spelregels}</li>
            </ol>
          </div>
          <Menu />
        </div>
      );
    }
  }
}


export default oefening_x;
