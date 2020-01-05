// Used https://www.youtube.com/watch?v=3e1GHCA3GP0
// Used SnapShot
import React from 'react';
import ReactDOM from 'react-dom'
import Uitslagen from './Uitslagen'

// Test Spelers
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Uitslagen />, div)
})