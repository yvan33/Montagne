import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './Navbar.jsx';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div>
        <div id="logos-container">
          <ul>
            <li><img id="logo-accomp" src="images/logo-accompagnateurs.png" /></li>
            <li><img id="logo-snam" src="images/logo_snam.png" /></li>
          </ul>
        </div>
        <video className="background-video" autoPlay loop>
          <source src="videos/cirque-marchets-compressed.mp4" type="video/mp4" />
        </video>
        <header>
          <Navbar  items={ ['Qui suis-je?', 'Mes randonnées', 'Galerie', 'Réservations'] } />
        </header>
      </div>
    );
  }
}
