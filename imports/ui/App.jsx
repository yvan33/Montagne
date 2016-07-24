import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './Navbar.jsx';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar  items={ ['Qui suis-je?', 'Mes randonnées', 'Photos', 'Réservation'] } />
      </div>
    );
  }
}
