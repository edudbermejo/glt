import React, { Component } from 'react';
import './App.css';
import PartnerCard from './partner-card';

class App extends Component {
  constructor() {
    super();
    this.couples = this.getCouples();
  }

  getCouples() {
    return [
      {
        'name': 'Edu',
        'match': {
          'name': 'Jose'
        }
      },
      {
        'name': 'Jose',
        'match': {
          'name': 'Ruben'
        }
      },
      {
        'name': 'Ruben',
        'match': {
          'name': 'Edu'
        }
      }
    ]
  }

  getCouplesHTML() {
    return this.couples.map((couple, index) => {
      return <PartnerCard key={couple.name.concat(index.toString)} employee={couple} />;
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CAFFE geNEROus</h1>
        </header>
        <div className="main-content-container">
          {this.getCouplesHTML()}
        </div>
        <div className="toolbar">
          <div className="option-container">
            <input type="radio" id="ny-location" name="location" value="NY" checked/>
            <label for="ny-location">New York</label>
          </div>
          <div className="option-container">
            <input type="radio" id="dub-location" name="location" value="DUB"/>
            <label for="dub-location">Dublin</label>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
