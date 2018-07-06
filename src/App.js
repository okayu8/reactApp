import React, { Component } from 'react';
import logo from './logo.svg';
import Chat from "./Chat";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">create-react-appでSPAつくってみた。</h1>
          </header>
        </div>
          <Chat/>
      </div>
    );
  }
}

export default App;