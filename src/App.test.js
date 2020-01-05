// Used https://www.youtube.com/watch?v=3e1GHCA3GP0
// Used SnapShot
// To run test type: npm test
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
