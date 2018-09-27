import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">COFFEE geNEROus</h1>
        </header>
        <div class="main-content-container">
        </div>
        <div class="toolbar">
            <div class="option-container">
                <input type="radio" id="ny-location" name="location" value="NY" checked/>
                <label for="ny-location">New York</label>
            </div>
            <div class="option-container">
                <input type="radio" id="dub-location" name="location" value="DUB"/>
                <label for="dub-location">Dublin</label>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
