// Used https://www.youtube.com/watch?v=3e1GHCA3GP0
// Used SnapShot
// To run test type: npm test
import React from 'react';
import ReactDOM from 'react-dom'
import Spelers from './Spelers'

// Test Spelers
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Spelers />, div)
})