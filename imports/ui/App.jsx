import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './Navbar.jsx';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div>
        <img id="ribbon-left" src="images/ribbon_left.png" />
        <img id="ribbon-right" src="images/ribbon_right.png" />
        <div id="logos-container">
          <img id="logo-accomp" src="images/logo_accomp.jpeg" />
          <img id="logo-snam" src="images/logo_snam.png" />
        </div>
        <div id="img-container">
          <img id="img-benoit" src="images/benoit-cut.png" />
          <div id="slogan">
            <p>...et la montagne est à vous!</p>
          </div>
        </div>
        <footer>
          <Navbar  items={ ['Qui suis-je?', 'Mes randonnées', 'Photos', 'Réservations'] } />
        </footer>
      </div>
    );
  }
}
