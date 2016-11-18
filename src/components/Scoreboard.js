import React, { Component } from 'react';
import logo from '../logo.svg';
import './Scoreboard.css';

class Scoreboard extends Component {
  render() {
    return (
      <div className="Scoreboard">
        <div className="Scoreboard-header">
          <img src={logo} className="Scoreboard-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Scoreboard-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Scoreboard;
