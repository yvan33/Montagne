import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './Navbar.jsx';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div>
        <div id="logos-container">
          <img id="logo-accomp" src="images/logo_accomp.jpeg" />
          <img id="logo-snam" src="images/logo_snam.png" />
        </div>
        <video className="background-video" autoPlay loop>
          <source src="videos/background.mp4" type="video/mp4" />
        </video>
        <header>
          <Navbar  items={ ['Qui suis-je?', 'Mes randonnées', 'Galerie', 'Réservations'] } />
        </header>
      </div>
    );
  }
}
